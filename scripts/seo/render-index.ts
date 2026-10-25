/**
 * Generates public/biomarkers/index.html — the listing page for all
 * published biomarker pages. Run this whenever you approve a new marker.
 *
 * Usage:
 *   npx tsx scripts/seo/render-index.ts
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { MarkerEntry } from './types.js';
import { BASE_CSS, FONT_LINKS, SITE_DOMAIN, SITE_NAME, siteFooter, siteNav } from './theme.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..', '..');
const PUBLIC_BIOMARKERS = join(PROJECT_ROOT, 'public', 'biomarkers');
const DATA_DIR = join(__dirname, 'data');

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getPublishedSlugs(): string[] {
  if (!existsSync(PUBLIC_BIOMARKERS)) return [];
  return readdirSync(PUBLIC_BIOMARKERS, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(PUBLIC_BIOMARKERS, d.name, 'index.html')))
    .map((d) => d.name)
    .sort();
}

function groupByCategory(markers: MarkerEntry[]): Map<string, MarkerEntry[]> {
  const map = new Map<string, MarkerEntry[]>();
  for (const m of markers) {
    const group = map.get(m.category) ?? [];
    group.push(m);
    map.set(m.category, group);
  }
  return map;
}

function renderCategorySection(category: string, markers: MarkerEntry[]): string {
  const cards = markers.map((m) => `
        <a href="/biomarkers/${esc(m.slug)}/" class="marker-card">
          <span class="marker-name">${esc(m.name)}</span>
          <span class="marker-arrow">→</span>
        </a>`).join('');

  return `
    <div class="category-group">
      <h2 class="eyebrow category-heading">${esc(category)}</h2>
      <div class="markers-grid">${cards}
      </div>
    </div>`;
}

function buildIndexHtml(published: MarkerEntry[]): string {
  const grouped = groupByCategory(published);
  const categorySections = [...grouped.entries()]
    .map(([cat, markers]) => renderCategorySection(cat, markers))
    .join('\n');

  const pageTitle = `Lab Test Reference Guide — Normal Ranges & What Results Mean | ${SITE_NAME}`;
  const metaDesc = `Plain-language explanations of common blood test results. Look up normal ranges, causes of high or low levels, and symptoms for ${published.length}+ biomarkers. Reviewed against authoritative medical references.`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: metaDesc,
    url: `${SITE_DOMAIN}/biomarkers/`,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_DOMAIN, logo: { '@type': 'ImageObject', url: `${SITE_DOMAIN}/AppStore-1024.png`, width: 1024, height: 1024 } },
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(pageTitle)}</title>
  <meta name="description" content="${esc(metaDesc)}">
  <link rel="canonical" href="${SITE_DOMAIN}/biomarkers/">
  <meta property="og:title" content="${esc(pageTitle)}">
  <meta property="og:description" content="${esc(metaDesc)}">
  <meta property="og:url" content="${SITE_DOMAIN}/biomarkers/">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${SITE_DOMAIN}/AppStore-1024.png">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="1024">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:image" content="${SITE_DOMAIN}/AppStore-1024.png">
  <meta name="robots" content="index, follow">
  <link rel="icon" type="image/png" href="/AppStore-1024.png">
  <link rel="apple-touch-icon" href="/AppStore-1024.png">
  ${FONT_LINKS}
  <script type="application/ld+json">${schema}</script>
  <style>${BASE_CSS}
    .content { max-width: 1240px; margin: 0 auto; padding: 44px 32px 24px; }
    .category-group { margin-bottom: 48px; }
    .category-heading { margin-bottom: 18px; }
    .markers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr)); gap: 10px; }
    .marker-card {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      padding: 18px 22px; border-radius: 18px; background: #fff;
      font-size: 15px; text-decoration: none;
      transition: transform .25s, box-shadow .25s;
    }
    .marker-card:hover { transform: translateY(-2px); box-shadow: 0 24px 48px -24px rgba(20,20,20,.22); }
    .marker-arrow { color: var(--ink-faint); }

    @media (max-width: 640px) { .content { padding: 28px 16px 16px; } }
  </style>
</head>
<body>

  <div class="top">
    <div class="top-card">
      ${siteNav('labTests')}

      <header class="page-header">
        <div class="eyebrow">${published.length} marker${published.length !== 1 ? 's' : ''} available</div>
        <h1>Lab Test Reference Guide</h1>
        <p class="lead">Plain-language explanations of common blood test results — normal ranges, what high or low levels mean, and symptoms to watch for.</p>
      </header>
    </div>
  </div>

  <main class="content">
    ${categorySections}
  </main>

  ${siteFooter('For informational purposes only. Not medical advice.')}

</body>
</html>`;
}

function renderIndex(): void {
  const allMarkers: MarkerEntry[] = JSON.parse(readFileSync(join(DATA_DIR, 'markers.json'), 'utf-8'));
  const publishedSlugs = getPublishedSlugs();

  if (publishedSlugs.length === 0) {
    console.log('[render-index] No published markers found in public/biomarkers/. Approve at least one page first.');
    process.exit(0);
  }

  const published = publishedSlugs
    .map((slug) => allMarkers.find((m) => m.slug === slug))
    .filter((m): m is MarkerEntry => m !== undefined);

  const html = buildIndexHtml(published);
  const outPath = join(PUBLIC_BIOMARKERS, 'index.html');
  writeFileSync(outPath, html);

  console.log(`[render-index] Index page written: ${outPath}`);
  console.log(`[render-index] Listed ${published.length} marker(s): ${published.map((m) => m.slug).join(', ')}`);
}

renderIndex();
