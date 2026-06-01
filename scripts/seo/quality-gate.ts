/**
 * Stage 4: Quality gate.
 *
 * Runs a suite of checks on a pending page and writes a .review.json file
 * next to the pending page. Pages that pass all checks are marked
 * readyForHumanReview: true — but they still require manual medical-accuracy
 * sign-off before they can be approved for publication.
 *
 * Usage:
 *   npx tsx scripts/seo/quality-gate.ts ferritin
 *   npx tsx scripts/seo/quality-gate.ts --all          (check every pending page)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { PendingPage, QualityResult } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PENDING_DIR = join(__dirname, 'output', 'pending');

const WORD_COUNT_MINIMUM = 800;
const UNIQUENESS_MAX_OVERLAP = 0.30; // flag if >30% n-gram overlap with any other page

// Phrases that suggest AI-generated filler or AI identity disclosure
const AI_TELL_PHRASES = [
  "it's worth noting",
  "it is worth noting",
  "it is important to note",
  "it is important to",
  "certainly!",
  "as an ai",
  "as a language model",
  "delve into",
  "in the realm of",
  "moreover,",
  "furthermore,",
  "in conclusion,",
  "to summarize,",
  "in this article",
  "in this guide",
  "in this post",
  "feel free to",
  "i hope this",
  "i would like to",
  "shed light on",
  "tapestry of",
  "a holistic approach",
  "it goes without saying",
  "needless to say",
  "rest assured",
];

// Fields that must be present in verifiedData
const REQUIRED_VERIFIED_FIELDS = [
  'markerSlug',
  'markerName',
  'whatItMeasures',
  'referenceRanges',
  'causesOfHigh',
  'causesOfLow',
  'symptoms',
  'citations',
];

// Fields that must be present in generatedContent
const REQUIRED_GENERATED_FIELDS = [
  'intro',
  'plainLanguageExplanation',
  'faqs',
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function extractAllProse(page: PendingPage): string {
  const { generatedContent } = page;
  const parts = [
    generatedContent.intro,
    generatedContent.plainLanguageExplanation,
    ...generatedContent.faqs.map((f) => `${f.question} ${f.answer}`),
  ];
  return parts.join(' ');
}

function checkWordCount(page: PendingPage): { count: number; pass: boolean } {
  const prose = extractAllProse(page);
  const count = countWords(prose);
  return { count, pass: count >= WORD_COUNT_MINIMUM };
}

function checkRequiredFields(page: PendingPage): { pass: boolean; missing: string[] } {
  const missing: string[] = [];

  for (const field of REQUIRED_VERIFIED_FIELDS) {
    const val = (page.verifiedData as Record<string, unknown>)[field];
    if (val === undefined || val === null || val === '') {
      missing.push(`verifiedData.${field}`);
    } else if (Array.isArray(val) && val.length === 0) {
      missing.push(`verifiedData.${field} (empty array)`);
    }
  }

  for (const field of REQUIRED_GENERATED_FIELDS) {
    const val = (page.generatedContent as Record<string, unknown>)[field];
    if (!val || (Array.isArray(val) && val.length === 0)) {
      missing.push(`generatedContent.${field}`);
    }
  }

  if (page.generatedContent.faqs.length < 4) {
    missing.push(`generatedContent.faqs (only ${page.generatedContent.faqs.length}, need ≥4)`);
  }

  return { pass: missing.length === 0, missing };
}

function buildNgrams(text: string, n: number): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const ngrams = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(' '));
  }
  return ngrams;
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) intersection++;
  }
  return intersection / (a.size + b.size - intersection);
}

function checkUniqueness(
  slug: string,
  prose: string,
  allPendingFiles: string[]
): { score: number; pass: boolean; mostSimilarSlug: string | null } {
  const subjectNgrams = buildNgrams(prose, 4);
  let maxSimilarity = 0;
  let mostSimilarSlug: string | null = null;

  for (const file of allPendingFiles) {
    if (!file.endsWith('.json') || file.includes('.review')) continue;
    const otherSlug = file.replace('.json', '');
    if (otherSlug === slug) continue;

    const otherPath = join(PENDING_DIR, file);
    try {
      const otherPage: PendingPage = JSON.parse(readFileSync(otherPath, 'utf-8'));
      const otherProse = extractAllProse(otherPage);
      const otherNgrams = buildNgrams(otherProse, 4);
      const similarity = jaccardSimilarity(subjectNgrams, otherNgrams);
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        mostSimilarSlug = otherSlug;
      }
    } catch {
      // skip unreadable files
    }
  }

  const uniquenessScore = Math.round((1 - maxSimilarity) * 100);
  return {
    score: uniquenessScore,
    pass: maxSimilarity <= UNIQUENESS_MAX_OVERLAP,
    mostSimilarSlug,
  };
}

function checkAiTellPhrases(prose: string): string[] {
  const lower = prose.toLowerCase();
  return AI_TELL_PHRASES.filter((phrase) => lower.includes(phrase));
}

function runQualityGate(slug: string): QualityResult {
  const pendingPath = join(PENDING_DIR, `${slug}.json`);
  if (!existsSync(pendingPath)) {
    throw new Error(`Pending page not found: ${pendingPath}\nRun generate.ts first.`);
  }

  const page: PendingPage = JSON.parse(readFileSync(pendingPath, 'utf-8'));
  const prose = extractAllProse(page);
  const allFiles = readdirSync(PENDING_DIR);
  const notes: string[] = [];

  const wordCountResult = checkWordCount(page);
  const fieldsResult = checkRequiredFields(page);
  const uniquenessResult = checkUniqueness(slug, prose, allFiles);
  const aiTellPhrases = checkAiTellPhrases(prose);

  if (!wordCountResult.pass) {
    notes.push(`Word count ${wordCountResult.count} is below minimum ${WORD_COUNT_MINIMUM}.`);
  }
  if (!fieldsResult.pass) {
    notes.push(`Missing required fields: ${fieldsResult.missing.join(', ')}`);
  }
  if (!uniquenessResult.pass && uniquenessResult.mostSimilarSlug) {
    notes.push(`High similarity (>${Math.round(UNIQUENESS_MAX_OVERLAP * 100)}%) with "${uniquenessResult.mostSimilarSlug}".`);
  }
  if (aiTellPhrases.length > 0) {
    notes.push(`AI-tell phrases detected: ${aiTellPhrases.map((p) => `"${p}"`).join(', ')}`);
  }

  const allChecksPass =
    wordCountResult.pass &&
    fieldsResult.pass &&
    uniquenessResult.pass &&
    aiTellPhrases.length === 0;

  const result: QualityResult = {
    markerSlug: slug,
    checkedAt: new Date().toISOString(),
    wordCount: wordCountResult.count,
    wordCountPass: wordCountResult.pass,
    wordCountMinimum: WORD_COUNT_MINIMUM,
    requiredFieldsPass: fieldsResult.pass,
    missingFields: fieldsResult.missing,
    uniquenessScore: uniquenessResult.score,
    uniquenessPass: uniquenessResult.pass,
    aiTellPhrases,
    aiTellPass: aiTellPhrases.length === 0,
    allChecksPass,
    // Manual review is ALWAYS required regardless of automated checks.
    // This flag means "automated checks passed; ready to queue for human review."
    readyForHumanReview: allChecksPass,
    notes,
  };

  // Write review file
  const reviewPath = join(PENDING_DIR, `${slug}.review.json`);
  writeFileSync(reviewPath, JSON.stringify(result, null, 2));

  return result;
}

function printResult(result: QualityResult): void {
  const pass = (v: boolean) => (v ? '✓ PASS' : '✗ FAIL');
  console.log(`\n══════════════════════════════════════`);
  console.log(` Quality Gate Report: ${result.markerSlug}`);
  console.log(`══════════════════════════════════════`);
  console.log(` Word count:      ${result.wordCount} words    ${pass(result.wordCountPass)} (min ${result.wordCountMinimum})`);
  console.log(` Required fields: ${pass(result.requiredFieldsPass)}`);
  if (result.missingFields.length > 0) {
    result.missingFields.forEach((f) => console.log(`   Missing: ${f}`));
  }
  console.log(` Uniqueness:      ${result.uniquenessScore}%             ${pass(result.uniquenessPass)}`);
  console.log(` AI-tell phrases: ${result.aiTellPhrases.length === 0 ? 'none' : result.aiTellPhrases.join(', ')}  ${pass(result.aiTellPass)}`);
  console.log(`──────────────────────────────────────`);
  console.log(` Overall:         ${result.allChecksPass ? '✓ ALL CHECKS PASS' : '✗ CHECKS FAILED'}`);
  if (result.readyForHumanReview) {
    console.log(` Status:          Ready for human medical-accuracy review`);
    console.log(`\n Next step: npx tsx scripts/seo/render.ts ${result.markerSlug}`);
    console.log(` Then review the HTML in scripts/seo/output/pending/${result.markerSlug}.html`);
    console.log(` Then run: npx tsx scripts/seo/approve.ts ${result.markerSlug}`);
  } else {
    console.log(` Status:          NOT ready — fix the issues above and regenerate.`);
  }
  console.log(`══════════════════════════════════════\n`);
}

// CLI entry point
const args = process.argv.slice(2);

if (args[0] === '--all') {
  if (!existsSync(PENDING_DIR)) {
    console.error('No pending directory found. Run generate.ts first.');
    process.exit(1);
  }
  const files = readdirSync(PENDING_DIR)
    .filter((f) => f.endsWith('.json') && !f.includes('.review'));

  if (files.length === 0) {
    console.log('No pending pages to check.');
    process.exit(0);
  }

  let passed = 0;
  let failed = 0;
  for (const file of files) {
    const slug = file.replace('.json', '');
    try {
      const result = runQualityGate(slug);
      printResult(result);
      result.allChecksPass ? passed++ : failed++;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[quality-gate] ERROR for "${slug}": ${msg}`);
      failed++;
    }
  }
  console.log(`Summary: ${passed} passed, ${failed} failed.`);
} else {
  const slug = args[0];
  if (!slug) {
    console.error('Usage: npx tsx scripts/seo/quality-gate.ts <marker-slug>');
    console.error('       npx tsx scripts/seo/quality-gate.ts --all');
    process.exit(1);
  }
  try {
    const result = runQualityGate(slug);
    printResult(result);
    process.exit(result.allChecksPass ? 0 : 1);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[quality-gate] ERROR: ${msg}`);
    process.exit(1);
  }
}
