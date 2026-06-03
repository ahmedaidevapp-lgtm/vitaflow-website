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

const __dirname = dirname(fileURLToPath(import.meta.url));
const PENDING_DIR = join(__dirname, 'output', 'pending');
const DATA_DIR = join(__dirname, 'data');

// Brand constants
const SITE_DOMAIN = 'https://getserumo.com';
const APP_STORE_URL = 'https://apps.apple.com/us/app/vitaflow-health/id6762191392#information';
const SITE_NAME = 'Serumo';

// Colors from index.css
const COLORS = {
  navy: '#0F172A',
  primary: '#10B981',
  primaryDark: '#059669',
  primaryLight: '#D1FAE5',
  slate1: '#334155',
  slate2: '#475569',
  slate3: '#64748B',
  border: '#E2E8F0',
  bg: '#F8FAFC',
  white: '#FFFFFF',
};

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

function buildMedicalWebPageSchema(marker: MarkerEntry, verified: VerifiedData, pageTitle: string, metaDesc: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: pageTitle,
    description: metaDesc,
    url: `${SITE_DOMAIN}/biomarkers/${marker.slug}`,
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
    dateModified: new Date().toISOString().split('T')[0],
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
      <a href="${SITE_DOMAIN}/biomarkers/${esc(m.slug)}" class="related-link">
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
): string {
  const pageTitle = buildPageTitle(marker, verified);
  const metaDesc = buildMetaDescription(verified);
  const canonicalUrl = `${SITE_DOMAIN}/biomarkers/${marker.slug}`;
  const medicalSchema = buildMedicalWebPageSchema(marker, verified, pageTitle, metaDesc);
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
  <script type="application/ld+json">${JSON.stringify(medicalSchema, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema, null, 2)}</script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
      background: ${COLORS.bg};
      color: ${COLORS.slate1};
      line-height: 1.7;
    }
    a { color: ${COLORS.primary}; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Nav */
    .nav {
      background: ${COLORS.navy};
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .nav-logo {
      color: ${COLORS.white};
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
    }
    .nav-logo img { width: 30px; height: 30px; border-radius: 7px; }
    .nav-wordmark { display: inline; }
    .nav-wordmark span { color: ${COLORS.primary}; }
    .nav-links { display: flex; gap: 1.5rem; align-items: center; }
    .nav-links a { color: #94A3B8; font-size: 0.9rem; }
    .nav-links a:hover { color: ${COLORS.white}; text-decoration: none; }
    .nav-cta {
      background: ${COLORS.primary};
      color: ${COLORS.white} !important;
      padding: 0.4rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.85rem;
    }
    .nav-cta:hover { background: ${COLORS.primaryDark}; text-decoration: none !important; }

    /* Hero */
    .hero {
      background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.slate1} 100%);
      color: ${COLORS.white};
      padding: 3.5rem 1.5rem 3rem;
      text-align: center;
    }
    .hero-category {
      display: inline-block;
      background: rgba(16,185,129,0.2);
      color: ${COLORS.primaryLight};
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 1rem;
    }
    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1.25rem;
      letter-spacing: -0.02em;
    }
    .hero-intro {
      max-width: 680px;
      margin: 0 auto;
      font-size: 1.05rem;
      color: #CBD5E1;
      line-height: 1.75;
    }

    /* Quick stat cards */
    .stats-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 860px;
      margin: 2.5rem auto 0;
      justify-content: center;
    }
    .stat-card {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      padding: 1rem 1.5rem;
      text-align: center;
      min-width: 160px;
    }
    .stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: #94A3B8; margin-bottom: 0.3rem; }
    .stat-value { font-size: 1.4rem; font-weight: 700; color: ${COLORS.white}; }
    .stat-unit { font-size: 0.8rem; color: #94A3B8; margin-top: 0.2rem; }

    /* Content */
    .content-wrapper {
      max-width: 860px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    .section {
      background: ${COLORS.white};
      border: 1px solid ${COLORS.border};
      border-radius: 12px;
      padding: 2rem;
      margin: 1.5rem 0;
    }
    .section h2 {
      font-size: 1.35rem;
      font-weight: 700;
      color: ${COLORS.navy};
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid ${COLORS.primaryLight};
    }
    .section p { margin-bottom: 1rem; line-height: 1.75; }
    .section p:last-child { margin-bottom: 0; }
    .section ul, .section ol { padding-left: 1.5rem; }
    .section li { margin-bottom: 0.5rem; }

    /* Reference range table */
    .table-wrapper { overflow-x: auto; }
    .ranges-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .ranges-table th {
      background: ${COLORS.navy};
      color: ${COLORS.white};
      padding: 0.65rem 1rem;
      text-align: left;
      font-weight: 600;
    }
    .ranges-table td {
      padding: 0.65rem 1rem;
      border-bottom: 1px solid ${COLORS.border};
    }
    .ranges-table tr:last-child td { border-bottom: none; }
    .ranges-table tr:nth-child(even) td { background: ${COLORS.bg}; }
    .range-cell { font-weight: 600; color: ${COLORS.navy}; }
    .table-source { font-size: 0.8rem; color: ${COLORS.slate3}; margin-top: 0.75rem; }

    /* Causes */
    .causes-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 600px) { .causes-grid { grid-template-columns: 1fr; } }
    .causes-card {
      border-radius: 8px;
      padding: 1.25rem;
    }
    .causes-card.high {
      background: #FFF7ED;
      border: 1px solid #FED7AA;
    }
    .causes-card.low {
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
    }
    .causes-card h3 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
    .causes-card.high h3 { color: #C2410C; }
    .causes-card.low h3 { color: #1D4ED8; }
    .causes-card ul { padding-left: 1.25rem; }
    .causes-card li { margin-bottom: 0.4rem; font-size: 0.95rem; }

    /* Symptoms */
    .symptoms-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 600px) { .symptoms-grid { grid-template-columns: 1fr; } }
    .symptoms-card {
      border-radius: 8px;
      padding: 1.25rem;
    }
    .symptoms-card.high {
      background: #FFF7ED;
      border: 1px solid #FED7AA;
    }
    .symptoms-card.low {
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
    }
    .symptoms-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; }
    .symptoms-card.high h3 { color: #C2410C; }
    .symptoms-card.low h3 { color: #15803D; }
    .symptoms-card ul { padding-left: 1.25rem; }
    .symptoms-card li { margin-bottom: 0.4rem; font-size: 0.95rem; }

    /* FAQ */
    .faq-item {
      border: 1px solid ${COLORS.border};
      border-radius: 8px;
      margin-bottom: 0.75rem;
      overflow: hidden;
    }
    .faq-question {
      padding: 1rem 1.25rem;
      font-weight: 600;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${COLORS.bg};
      font-size: 0.97rem;
    }
    .faq-question::-webkit-details-marker { display: none; }
    .faq-question::after {
      content: '+';
      font-size: 1.3rem;
      color: ${COLORS.primary};
      font-weight: 700;
      flex-shrink: 0;
      margin-left: 1rem;
    }
    details[open] .faq-question::after { content: '−'; }
    .faq-answer {
      padding: 1rem 1.25rem;
      background: ${COLORS.white};
      border-top: 1px solid ${COLORS.border};
      font-size: 0.95rem;
      line-height: 1.75;
    }

    /* CTA */
    .cta-section {
      background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.slate1} 100%);
      color: ${COLORS.white};
      border-radius: 12px;
      padding: 2.5rem 2rem;
      text-align: center;
      margin: 1.5rem 0;
      border: none;
    }
    .cta-section h2 {
      color: ${COLORS.white};
      border-bottom-color: rgba(16,185,129,0.4);
      font-size: 1.5rem;
    }
    .cta-section p { color: #CBD5E1; max-width: 560px; margin: 0 auto 1.5rem; }
    .cta-btn {
      display: inline-block;
      transition: opacity 0.2s, transform 0.15s;
    }
    .cta-btn:hover { opacity: 0.88; transform: scale(1.03); text-decoration: none; }
    .cta-btn img { height: 52px; width: auto; display: block; }
    .cta-sub {
      display: block;
      margin-top: 0.75rem;
      font-size: 0.82rem;
      color: #64748B;
    }

    /* Related */
    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 0.75rem;
    }
    .related-link {
      display: flex;
      flex-direction: column;
      padding: 0.85rem 1rem;
      background: ${COLORS.bg};
      border: 1px solid ${COLORS.border};
      border-radius: 8px;
      transition: border-color 0.15s, background 0.15s;
      color: inherit;
    }
    .related-link:hover { border-color: ${COLORS.primary}; background: ${COLORS.primaryLight}; text-decoration: none; }
    .related-category { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: ${COLORS.slate3}; margin-bottom: 0.25rem; }
    .related-name { font-weight: 600; font-size: 0.93rem; color: ${COLORS.navy}; }

    /* Citations */
    .citations-list { padding-left: 1.5rem; }
    .citations-list li { margin-bottom: 0.75rem; font-size: 0.88rem; line-height: 1.6; }
    .cite-num { font-weight: 700; color: ${COLORS.navy}; margin-right: 0.5rem; }
    .cite-body a { font-size: 0.82rem; color: ${COLORS.slate3}; word-break: break-all; }

    /* Disclaimer */
    .disclaimer {
      background: #FFFBEB;
      border: 1px solid #FDE68A;
      border-radius: 8px;
      padding: 1rem 1.25rem;
      font-size: 0.84rem;
      color: #92400E;
      line-height: 1.6;
      margin: 1.5rem 0;
    }
    .disclaimer strong { display: block; margin-bottom: 0.25rem; }

    /* Footer */
    .footer {
      background: ${COLORS.navy};
      color: #64748B;
      text-align: center;
      padding: 2rem 1.5rem;
      font-size: 0.85rem;
      margin-top: 3rem;
    }
    .footer a { color: #94A3B8; }
    .footer-links { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 1rem; }

    @media (max-width: 640px) {
      .nav-links { display: none; }
      .hero { padding: 2.5rem 1rem 2rem; }
      .section { padding: 1.5rem 1rem; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <a href="${esc(SITE_DOMAIN)}" class="nav-logo">
      <img src="/AppStore-1024.png" alt="Serumo logo"><span class="nav-wordmark">Serum<span>o</span></span>
    </a>
    <div class="nav-links">
      <a href="${esc(SITE_DOMAIN)}/biomarkers">Lab Tests</a>
      <a href="${esc(APP_STORE_URL)}" class="nav-cta" target="_blank" rel="noopener">Download App</a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="hero-category">${esc(marker.category)}</div>
    <h1>${esc(verified.markerName)}: Normal Range, What High &amp; Low Levels Mean</h1>
    <p class="hero-intro">${esc(generated.intro)}</p>

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
      <p style="margin-top:1rem; font-size:0.88rem; color:${COLORS.slate3};">
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

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-links">
      <a href="${esc(SITE_DOMAIN)}">Home</a>
      <a href="${esc(SITE_DOMAIN)}/biomarkers">Lab Tests</a>
      <a href="${esc(SITE_DOMAIN)}/privacy">Privacy Policy</a>
      <a href="${esc(SITE_DOMAIN)}/terms">Terms of Use</a>
    </div>
    <p>&copy; ${new Date().getFullYear()} ${esc(SITE_NAME)}. All rights reserved.</p>
    <p style="margin-top:0.4rem; font-size:0.78rem;">
      Content reviewed against Mayo Clinic Laboratories, NIH MedlinePlus, WHO, and NHS references.
    </p>
  </footer>

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
  const html = buildHtml(page.marker, page.verifiedData, page.generatedContent);

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
