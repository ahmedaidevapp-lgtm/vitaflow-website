/**
 * Stage 5: HTML renderer.
 *
 * Takes a pending page JSON and outputs a standalone HTML file that can be
 * served directly by GitHub Pages at /biomarkers/<slug>/index.html.
 *
 * The file is written to scripts/seo/output/pending/<slug>.html for
 * human review. The approve.ts script moves it to public/biomarkers/<slug>/
 * after sign-off.
 *
 * Usage:
 *   npx tsx scripts/seo/render.ts ferritin
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { PendingPage, VerifiedData, GeneratedContent, MarkerEntry, ReferenceRange, Citation, FAQ } from './types.js';
import { APP_STORE_URL, BASE_CSS, FONT_LINKS, SITE_DOMAIN, SITE_NAME, siteFooter, siteNav } from './theme.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PENDING_DIR = join(__dirname, 'output', 'pending');
const DATA_DIR = join(__dirname, 'data');

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildPageTitle(marker: MarkerEntry, verified: VerifiedData): string {
  return `${verified.markerName}: Normal Range, High & Low Levels Explained | ${SITE_NAME}`;
}

function buildMetaDescription(verified: VerifiedData): string {
  const firstRange = verified.referenceRanges[0];
  const rangeStr = firstRange
    ? `Normal range: ${firstRange.min}–${firstRange.max} ${firstRange.unit} for ${firstRange.population.toLowerCase()}.`
    : '';
  return `Learn what ${verified.markerName} measures, what normal levels look like, and what high or low results mean for your health. ${rangeStr} Reviewed against authoritative medical references.`;
}

function buildMedicalWebPageSchema(
  marker: MarkerEntry,
  verified: VerifiedData,
  pageTitle: string,
  metaDesc: string,
  dateModified: string,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: pageTitle,
    description: metaDesc,
    url: `${SITE_DOMAIN}/biomarkers/${marker.slug}/`,
    about: {
      '@type': 'MedicalTest',
      name: verified.markerName,
      alternateName: verified.alternateNames,
      usesDevice: {
        '@type': 'MedicalDevice',
        name: 'Blood laboratory analyzer',
      },
    },
    audience: {
      '@type': 'Patient',
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_DOMAIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_DOMAIN}/AppStore-1024.png`,
        width: 1024,
        height: 1024,
      },
    },
    dateModified,
    inLanguage: 'en-US',
  };
}

function buildFaqPageSchema(faqs: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function renderReferenceRangesTable(ranges: ReferenceRange[]): string {
  const rows = ranges.map((r) => `
      <tr>
        <td>${esc(r.population)}</td>
        <td class="range-cell">${r.min !== null ? r.min : '—'} – ${r.max !== null ? r.max : '—'}</td>
        <td>${esc(r.unit)}</td>
      </tr>`).join('');

  return `
    <div class="table-wrapper">
      <table class="ranges-table">
        <thead>
          <tr>
            <th>Population</th>
            <th>Reference Range</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>${rows}
        </tbody>
      </table>
      <p class="table-source">Source: ${esc(ranges[0]?.source ?? 'See citations')}</p>
    </div>`;
}

function renderSymptomsList(symptoms: string[], heading: string, colorClass: string): string {
  const items = symptoms.map((s) => `<li>${esc(s)}</li>`).join('\n          ');
  return `
      <div class="symptoms-card ${colorClass}">
        <h3>${esc(heading)}</h3>
        <ul>${items}</ul>
      </div>`;
}

function renderCausesList(causes: string[]): string {
  return causes.map((c) => `<li>${esc(c)}</li>`).join('\n          ');
}

function renderFaqs(faqs: FAQ[]): string {
  return faqs.map((faq, i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary class="faq-question">${esc(faq.question)}</summary>
      <div class="faq-answer">
        <p>${esc(faq.answer)}</p>
      </div>
    </details>`).join('\n');
}

function renderRelatedMarkers(slugs: string[]): string {
  const allMarkers: MarkerEntry[] = JSON.parse(readFileSync(join(DATA_DIR, 'markers.json'), 'utf-8'));
  const related = slugs
    .map((s) => allMarkers.find((m) => m.slug === s))
    .filter((m): m is MarkerEntry => m !== undefined);

  if (related.length === 0) return '';

  const links = related.map((m) => `
      <a href="/biomarkers/${esc(m.slug)}/" class="related-link">
        <span class="related-category">${esc(m.category)}</span>
        <span class="related-name">${esc(m.name)}</span>
      </a>`).join('');

  return `
  <section class="section related-section">
    <h2>Related Lab Tests</h2>
    <div class="related-grid">${links}
    </div>
  </section>`;
}

function renderCitations(citations: Citation[]): string {
  const items = citations.map((c) => `
      <li id="cite-${c.id}">
        <span class="cite-num">[${c.id}]</span>
        <span class="cite-body">
          ${esc(c.title)}.
          <em>${esc(c.source)}</em>, ${c.year}.
          ${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer nofollow">${esc(c.url)}</a>` : ''}
        </span>
      </li>`).join('');

  return `
  <section class="section citations-section">
    <h2>Sources &amp; References</h2>
    <ol class="citations-list">${items}
    </ol>
  </section>`;
}

function buildHtml(
  marker: MarkerEntry,
  verified: VerifiedData,
  generated: GeneratedContent,
  dateModified: string,
): string {
  const pageTitle = buildPageTitle(marker, verified);
  const metaDesc = buildMetaDescription(verified);
  const canonicalUrl = `${SITE_DOMAIN}/biomarkers/${marker.slug}/`;
  const medicalSchema = buildMedicalWebPageSchema(marker, verified, pageTitle, metaDesc, dateModified);
  const faqSchema = buildFaqPageSchema(generated.faqs);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(pageTitle)}</title>
  <meta name="description" content="${esc(metaDesc)}">
  <link rel="canonical" href="${esc(canonicalUrl)}">
  <meta property="og:title" content="${esc(pageTitle)}">
  <meta property="og:description" content="${esc(metaDesc)}">
  <meta property="og:url" content="${esc(canonicalUrl)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="${esc(SITE_NAME)}">
  <meta property="og:image" content="${SITE_DOMAIN}/AppStore-1024.png">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="1024">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:image" content="${SITE_DOMAIN}/AppStore-1024.png">
  <meta name="robots" content="index, follow">
  <link rel="icon" type="image/png" href="/AppStore-1024.png">
  <link rel="apple-touch-icon" href="/AppStore-1024.png">
  ${FONT_LINKS}
  <script type="application/ld+json">${JSON.stringify(medicalSchema, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema, null, 2)}</script>
  <style>${BASE_CSS}
    /* Quick-glance reference ranges */
    .stats-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 36px; }
    .stat-card { background: var(--mist); border-radius: 18px; padding: 16px 22px; min-width: 170px; }
    .stat-label { font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-subtle); margin-bottom: 6px; }
    .stat-value { font-size: 28px; font-weight: 300; letter-spacing: -0.03em; line-height: 1.2; }
    .stat-unit { font-size: 12px; color: var(--ink-faint); }

    /* Content */
    .content-wrapper { max-width: 900px; margin: 0 auto; padding: 44px 16px 0; }
    .section { background: #fff; border-radius: 24px; padding: 32px; margin-bottom: 14px; }
    .section h2 { font-size: 22px; font-weight: 500; letter-spacing: -0.025em; line-height: 1.3; margin-bottom: 16px; }
    .section p { margin-bottom: 14px; font-size: 15px; line-height: 1.75; color: var(--ink-muted); }
    .section p:last-child { margin-bottom: 0; }
    .section ul, .section ol { padding-inline-start: 1.25rem; }
    .section li { margin-bottom: 6px; font-size: 14.5px; color: var(--ink-muted); }
    .note { margin-top: 16px; font-size: 13px; color: var(--ink-subtle); }

    /* Reference range table */
    .table-wrapper { overflow-x: auto; }
    .ranges-table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
    .ranges-table th { text-align: start; font-size: 12px; font-weight: 400; color: var(--ink-subtle); padding: 10px 16px 10px 0; border-bottom: 1px solid var(--line); }
    .ranges-table td { padding: 12px 16px 12px 0; border-bottom: 1px solid var(--line); color: var(--ink-muted); }
    .ranges-table tr:last-child td { border-bottom: none; }
    .range-cell { font-weight: 500; color: var(--ink) !important; white-space: nowrap; }
    /* Sources often end in a long URL, which must wrap rather than widen the card. */
    .section p.table-source, .table-source { font-size: 12.5px; color: var(--ink-faint); margin-top: 12px; overflow-wrap: anywhere; }

    /* High / low cards: a soft panel each, told apart by a coloured dot. */
    .causes-grid, .symptoms-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; }
    @media (max-width: 640px) { .causes-grid, .symptoms-grid { grid-template-columns: minmax(0, 1fr); } }
    .causes-card, .symptoms-card { background: var(--mist); border-radius: 18px; padding: 20px 22px; }
    .causes-card h3, .symptoms-card h3 { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 500; margin-bottom: 10px; }
    .causes-card h3::before, .symptoms-card h3::before { content: ''; width: 8px; height: 8px; border-radius: 50%; flex: none; }
    .causes-card.high h3::before, .symptoms-card.high h3::before { background: #d97706; }
    .causes-card.low h3::before, .symptoms-card.low h3::before { background: #2563eb; }
    .causes-card li, .symptoms-card li { font-size: 14px; }

    /* FAQ */
    .faq-item { background: var(--mist); border-radius: 18px; margin-bottom: 8px; overflow: hidden; }
    .faq-question {
      display: flex; justify-content: space-between; align-items: center; gap: 16px;
      padding: 16px 22px; font-size: 15px; font-weight: 500; cursor: pointer; list-style: none;
    }
    .faq-question::-webkit-details-marker { display: none; }
    .faq-question::after { content: '+'; font-size: 20px; font-weight: 300; color: var(--ink-subtle); flex-shrink: 0; }
    details[open] .faq-question::after { content: '−'; }
    .faq-answer { padding: 0 22px 18px; }
    .faq-answer p { font-size: 14.5px; }

    /* CTA — the site's closing card */
    .cta-section { padding: clamp(40px, 6vw, 64px) clamp(24px, 5vw, 56px); }
    .cta-section .eyebrow { margin-bottom: 20px; }
    .cta-section h2 { font-size: clamp(30px, 4vw, 46px); font-weight: 300; letter-spacing: -0.045em; line-height: 1.05; margin-bottom: 18px; text-wrap: balance; }
    .cta-section p { max-width: 560px; margin-bottom: 28px; }
    .cta-btn { display: inline-block; transition: transform .15s; }
    .cta-btn:hover { transform: translateY(-2px); }
    .cta-btn img { height: 48px; width: auto; display: block; }
    .cta-sub { display: block; margin-top: 14px; font-size: 12.5px; color: var(--ink-faint); }

    /* Related */
    .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; }
    .related-link {
      display: flex; flex-direction: column; padding: 14px 18px; border-radius: 18px;
      background: var(--mist); text-decoration: none; transition: background .15s;
    }
    .related-link:hover { background: var(--line); }
    .related-category { font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 4px; }
    .related-name { font-size: 14.5px; font-weight: 500; }

    /* Citations */
    .citations-list { padding-inline-start: 0 !important; list-style: none; }
    .citations-list li { margin-bottom: 12px; font-size: 13.5px; line-height: 1.6; }
    .cite-num { color: var(--ink-faint); margin-inline-end: 8px; }
    .cite-body a { font-size: 12.5px; color: var(--ink-subtle); word-break: break-all; }

    /* Disclaimer — a plain notice, as on the React site */
    .disclaimer { background: #fff; border-radius: 24px; padding: 22px 28px; font-size: 13px; line-height: 1.65; color: var(--ink-muted); }
    .disclaimer strong { display: block; margin-bottom: 4px; font-weight: 500; color: var(--ink); }

    @media (max-width: 640px) {
      .content-wrapper { padding-top: 28px; }
      .section { padding: 24px 20px; }
    }
  </style>
</head>
<body>

  <div class="top">
    <div class="top-card">
      ${siteNav('labTests')}

      <header class="page-header">
        <div class="eyebrow">${esc(marker.category)}</div>
        <h1>${esc(verified.markerName)}: Normal Range, What High &amp; Low Levels Mean</h1>
        <p class="lead">${esc(generated.intro)}</p>

        <!-- Quick-glance reference range stats -->
        <div class="stats-row">
          ${verified.referenceRanges.slice(0, 3).map((r) => `
          <div class="stat-card">
            <div class="stat-label">${esc(r.population)}</div>
            <div class="stat-value">${r.min !== null ? r.min : '—'}–${r.max !== null ? r.max : '—'}</div>
            <div class="stat-unit">${esc(r.unit)}</div>
          </div>`).join('')}
        </div>
      </header>
    </div>
  </div>

  <main class="content-wrapper">

    <!-- What it measures -->
    <section class="section">
      <h2>What Is ${esc(verified.markerName)}?</h2>
      <p>${esc(verified.whatItMeasures)}</p>
      <p>${esc(generated.plainLanguageExplanation)}</p>
      <p class="table-source">Definition source: ${esc(verified.whatItMeasuresSource)}</p>
    </section>

    <!-- Reference ranges -->
    <section class="section">
      <h2>Normal Reference Ranges for ${esc(verified.markerName)}</h2>
      ${renderReferenceRangesTable(verified.referenceRanges)}
      <p class="note">
        Reference ranges vary slightly between laboratories. Always compare your result against the ranges
        printed on your specific lab report, and discuss interpretation with your healthcare provider.
      </p>
    </section>

    <!-- Causes high/low -->
    <section class="section">
      <h2>What Causes Abnormal ${esc(verified.markerName)} Levels?</h2>
      <div class="causes-grid">
        <div class="causes-card high">
          <h3>Common Causes of High ${esc(verified.markerName)}</h3>
          <ul>${renderCausesList(verified.causesOfHigh)}</ul>
          <p class="table-source" style="margin-top:0.75rem;">Source: ${esc(verified.causesOfHighSource)}</p>
        </div>
        <div class="causes-card low">
          <h3>Common Causes of Low ${esc(verified.markerName)}</h3>
          <ul>${renderCausesList(verified.causesOfLow)}</ul>
          <p class="table-source" style="margin-top:0.75rem;">Source: ${esc(verified.causesOfLowSource)}</p>
        </div>
      </div>
    </section>

    <!-- Symptoms -->
    <section class="section">
      <h2>Symptoms Associated with ${esc(verified.markerName)} Imbalance</h2>
      <div class="symptoms-grid">
        ${renderSymptomsList(verified.symptoms.high, `Symptoms of High ${verified.markerName}`, 'high')}
        ${renderSymptomsList(verified.symptoms.low, `Symptoms of Low ${verified.markerName}`, 'low')}
      </div>
      <p class="table-source" style="margin-top:1rem;">Source: ${esc(verified.symptomsSource)}</p>
    </section>

    <!-- FAQ -->
    <section class="section">
      <h2>Frequently Asked Questions About ${esc(verified.markerName)}</h2>
      ${renderFaqs(generated.faqs)}
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="eyebrow">Serumo for iOS</div>
      <h2>Track Your ${esc(verified.markerName)} Over Time</h2>
      <p>
        A single lab result is a snapshot. Serumo lets you log every result, visualize trends,
        and understand what changes in your ${esc(verified.markerName).toLowerCase()} level mean for your health over months and years.
      </p>
      <a href="${esc(APP_STORE_URL)}" class="cta-btn" target="_blank" rel="noopener" aria-label="Download Serumo on the App Store">
        <img src="/app-store-badge.svg" alt="Download on the App Store">
      </a>
      <span class="cta-sub">Free download &bull; iOS &bull; No subscription required</span>
    </section>

    <!-- Related markers -->
    ${renderRelatedMarkers(marker.relatedMarkers)}

    <!-- Citations -->
    ${renderCitations(verified.citations)}

    <!-- Disclaimer -->
    <div class="disclaimer">
      <strong>Medical Disclaimer</strong>
      This page is for informational and educational purposes only and does not constitute medical advice,
      diagnosis, or treatment. Reference ranges and clinical information are sourced from the authoritative
      references listed above and are reviewed for accuracy, but individual results may differ based on the
      laboratory, testing method, and your personal health history. Always consult a qualified healthcare
      provider to interpret your lab results in the context of your full medical history.
    </div>

  </main>

  ${siteFooter('Content reviewed against Mayo Clinic Laboratories, NIH MedlinePlus, WHO, and NHS references. For informational purposes only — not medical advice.')}

</body>
</html>`;
}

function render(slug: string): void {
  const pendingPath = join(PENDING_DIR, `${slug}.json`);
  if (!existsSync(pendingPath)) {
    throw new Error(`Pending page not found: ${pendingPath}\nRun generate.ts then quality-gate.ts first.`);
  }

  const reviewPath = join(PENDING_DIR, `${slug}.review.json`);
  if (!existsSync(reviewPath)) {
    console.warn(`[render] WARNING: No quality gate review found. Run quality-gate.ts ${slug} first.`);
  }

  const page: PendingPage = JSON.parse(readFileSync(pendingPath, 'utf-8'));

  // dateModified tells search engines when the medical content last changed. Re-rendering
  // an approved page (e.g. after a style change) keeps its approval date; only a new page
  // gets today's.
  const approvedPath = join(PENDING_DIR, `${slug}.approved.json`);
  const approvedAt: string | undefined = existsSync(approvedPath)
    ? JSON.parse(readFileSync(approvedPath, 'utf-8')).approvedAt
    : undefined;
  const dateModified = (approvedAt ?? new Date().toISOString()).split('T')[0];

  const html = buildHtml(page.marker, page.verifiedData, page.generatedContent, dateModified);

  const outPath = join(PENDING_DIR, `${slug}.html`);
  writeFileSync(outPath, html);

  console.log(`\n[render] HTML written to: ${outPath}`);
  console.log(`[render] Open in a browser to review visually before approving.`);
  console.log(`\nNext step: review the HTML, then run:`);
  console.log(`  npx tsx scripts/seo/approve.ts ${slug}`);
}

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: npx tsx scripts/seo/render.ts <marker-slug>');
  process.exit(1);
}

try {
  render(slug);
} catch (err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`[render] ERROR: ${msg}`);
  process.exit(1);
}
