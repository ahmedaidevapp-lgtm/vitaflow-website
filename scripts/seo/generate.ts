/**
 * Stage 3: Prose generation via Claude API.
 *
 * Reads the marker + verified data for a given slug, calls Claude to write
 * ONLY the prose sections (intro, explanation, FAQs), and writes the result
 * to scripts/seo/output/pending/<slug>.json.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... npx tsx scripts/seo/generate.ts ferritin
 *
 * The Claude system prompt is deliberately restrictive: the model may not
 * invent, alter, or paraphrase any numeric value or clinical fact that
 * appears in VERIFIED_DATA.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { MarkerEntry, VerifiedData, GeneratedContent, PendingPage, FAQ } from './types.js';

// Load .env from project root if present (no hard dependency on dotenv)
function loadDotEnv(): void {
  const candidates = [
    join(process.cwd(), '.env'),
    join(dirname(fileURLToPath(import.meta.url)), '..', '..', '.env'),
  ];
  for (const envPath of candidates) {
    if (!existsSync(envPath)) continue;
    const lines = readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx < 0) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key]) process.env[key] = val;
    }
    break;
  }
}
loadDotEnv();

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');
const PENDING_DIR = join(__dirname, 'output', 'pending');

const GENERATION_MODEL = 'claude-opus-4-8';
const MIN_INTRO_WORDS = 80;
const MIN_EXPLANATION_WORDS = 200;
const MIN_FAQ_WORDS = 60;
const FAQ_COUNT = 6;

function loadMarker(slug: string): MarkerEntry {
  const markers: MarkerEntry[] = JSON.parse(
    readFileSync(join(DATA_DIR, 'markers.json'), 'utf-8')
  );
  const marker = markers.find((m) => m.slug === slug);
  if (!marker) throw new Error(`Marker "${slug}" not found in markers.json`);
  return marker;
}

function loadVerifiedData(slug: string): VerifiedData {
  const path = join(DATA_DIR, 'verified', `${slug}.json`);
  if (!existsSync(path)) {
    throw new Error(`Verified data file not found: ${path}\nCreate it before generating content.`);
  }
  return JSON.parse(readFileSync(path, 'utf-8')) as VerifiedData;
}

function buildSystemPrompt(verified: VerifiedData): string {
  return `You are a medical content writer producing patient-facing educational content for VitaFlow, a lab results tracking app. This content is classified as YMYL (Your Money or Your Life) health content and must meet Google's E-E-A-T standards.

ABSOLUTE CONSTRAINTS — FOLLOW EVERY ONE WITHOUT EXCEPTION:

1. You will receive a VERIFIED_DATA block. This block contains locked medical facts sourced from authoritative references (Mayo Clinic, NIH, WHO, NHS). NEVER alter, approximate, contradict, or invent any numeric value, reference range, unit, or clinical fact. Use the values exactly as given, or do not mention them.

2. You are hired to write PROSE ONLY in three sections:
   (a) intro — 100–140 words: an engaging opening paragraph introducing the marker to a general audience.
   (b) plainLanguageExplanation — 250–320 words: what this marker is, why doctors order it, and what the number means in everyday terms. Do not restate ranges as tables; describe them in prose.
   (c) faqs — exactly ${FAQ_COUNT} FAQ objects. Each answer must be 80–130 words. One FAQ per intent type: meaning, normal-range, high, low, symptoms, and one open-ended follow-up question. Each answer must end with a sentence directing the reader to discuss their specific result with their healthcare provider.

3. Do NOT add any medical facts, ranges, or clinical details that are absent from VERIFIED_DATA, even if you believe them to be accurate.

4. Do NOT make treatment recommendations, diagnostic suggestions, or specific medical advice.

5. Write in a warm, plain second-person ("you") tone. Avoid passive voice where possible. No medical jargon without immediate plain-language definition.

6. Do NOT use any of these AI-tell phrases: "It's worth noting", "It is important to note", "It is important to", "Certainly!", "As an AI", "delve into", "in the realm of", "Moreover", "Furthermore", "In conclusion", "To summarize", "In this article", "In this guide", "feel free to".

OUTPUT: Return valid JSON only. No markdown fences, no preamble, no explanation outside the JSON.
Schema:
{
  "intro": "string",
  "plainLanguageExplanation": "string",
  "faqs": [
    { "question": "string", "answer": "string", "intentType": "meaning|normal-range|high|low|symptoms|general" }
  ]
}

VERIFIED_DATA (READ-ONLY — every value is locked):
${JSON.stringify(verified, null, 2)}`;
}

function buildUserPrompt(marker: MarkerEntry): string {
  const queryList = marker.targetQueries.map((q) => `  - ${q.searchQuery}`).join('\n');
  return `Write the three prose sections for the ${marker.name} biomarker page.

The page targets these search queries:
${queryList}

Return only the JSON object described in the system prompt.`;
}

interface RawGenerated {
  intro: string;
  plainLanguageExplanation: string;
  faqs: FAQ[];
}

function parseResponse(text: string, slug: string): RawGenerated {
  // Strip markdown code fences if the model returned them despite instructions
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  let parsed: RawGenerated;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error(`Model returned invalid JSON for "${slug}".\n\nRaw output:\n${text}`);
  }
  if (!parsed.intro || !parsed.plainLanguageExplanation || !Array.isArray(parsed.faqs)) {
    throw new Error(`Model response is missing required fields for "${slug}".`);
  }
  return parsed;
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateGeneratedContent(generated: RawGenerated, slug: string): void {
  const introWords = countWords(generated.intro);
  const explanationWords = countWords(generated.plainLanguageExplanation);

  if (introWords < MIN_INTRO_WORDS) {
    console.warn(`  [WARN] Intro is only ${introWords} words (min ${MIN_INTRO_WORDS}). Quality gate will flag this.`);
  }
  if (explanationWords < MIN_EXPLANATION_WORDS) {
    console.warn(`  [WARN] Explanation is only ${explanationWords} words (min ${MIN_EXPLANATION_WORDS}). Quality gate will flag this.`);
  }
  if (generated.faqs.length < FAQ_COUNT) {
    console.warn(`  [WARN] Only ${generated.faqs.length} FAQs generated (expected ${FAQ_COUNT}).`);
  }
  for (const faq of generated.faqs) {
    const words = countWords(faq.answer);
    if (words < MIN_FAQ_WORDS) {
      console.warn(`  [WARN] FAQ "${faq.question}" answer is only ${words} words.`);
    }
  }
}

async function generate(slug: string): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set.\nExport it or add it to a .env file.');
  }

  console.log(`\n[generate] Loading data for "${slug}"...`);
  const marker = loadMarker(slug);
  const verified = loadVerifiedData(slug);

  console.log(`[generate] Calling ${GENERATION_MODEL}...`);
  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: GENERATION_MODEL,
    max_tokens: 4096,
    system: buildSystemPrompt(verified),
    messages: [{ role: 'user', content: buildUserPrompt(marker) }],
  });

  const rawText = response.content[0].type === 'text' ? response.content[0].text : '';
  if (!rawText) throw new Error('Model returned an empty response.');

  console.log(`[generate] Parsing response...`);
  const rawGenerated = parseResponse(rawText, slug);
  validateGeneratedContent(rawGenerated, slug);

  const generatedContent: GeneratedContent = {
    markerSlug: slug,
    generatedAt: new Date().toISOString(),
    model: GENERATION_MODEL,
    intro: rawGenerated.intro,
    plainLanguageExplanation: rawGenerated.plainLanguageExplanation,
    faqs: rawGenerated.faqs,
  };

  const pending: PendingPage = { marker, verifiedData: verified, generatedContent };

  mkdirSync(PENDING_DIR, { recursive: true });
  const outPath = join(PENDING_DIR, `${slug}.json`);
  writeFileSync(outPath, JSON.stringify(pending, null, 2));

  const totalWords =
    countWords(generatedContent.intro) +
    countWords(generatedContent.plainLanguageExplanation) +
    generatedContent.faqs.reduce((sum, f) => sum + countWords(f.answer), 0);

  console.log(`\n[generate] Done.`);
  console.log(`  Output:      ${outPath}`);
  console.log(`  Total words: ~${totalWords}`);
  console.log(`  FAQs:        ${generatedContent.faqs.length}`);
  console.log(`\nNext step: npx tsx scripts/seo/quality-gate.ts ${slug}`);
}

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npx tsx scripts/seo/generate.ts <marker-slug>');
  console.error('Example: npx tsx scripts/seo/generate.ts ferritin');
  process.exit(1);
}

generate(slug).catch((err) => {
  console.error(`\n[generate] ERROR: ${err.message}`);
  process.exit(1);
});
