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

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..', '..');
const PUBLIC_BIOMARKERS = join(PROJECT_ROOT, 'public', 'biomarkers');
const DATA_DIR = join(__dirname, 'data');

const SITE_DOMAIN = 'https://getserumo.com';
const APP_STORE_URL = 'https://apps.apple.com/us/app/vitaflow-health/id6762191392#information';
const SITE_NAME = 'Serumo';

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
        <a href="/biomarkers/${esc(m.slug)}" class="marker-card">
          <span class="marker-name">${esc(m.name)}</span>
          <span class="marker-arrow">→</span>
        </a>`).join('');

  return `
    <div class="category-group">
      <h2 class="category-heading">${esc(category)}</h2>
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
  <script type="application/ld+json">${schema}</script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif; background: ${COLORS.bg}; color: ${COLORS.slate1}; line-height: 1.7; }
    a { color: ${COLORS.primary}; text-decoration: none; }
    a:hover { text-decoration: underline; }

    .nav { background: ${COLORS.navy}; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 60px; position: sticky; top: 0; z-index: 100; }
    .nav-logo { color: ${COLORS.white}; font-weight: 700; font-size: 1.2rem; letter-spacing: -0.02em; display: flex; align-items: center; gap: 0.6rem; }
    .nav-logo img { width: 30px; height: 30px; border-radius: 7px; }
    .nav-wordmark { display: inline; }
    .nav-wordmark span { color: ${COLORS.primary}; }
    .nav-links { display: flex; gap: 1.5rem; align-items: center; }
    .nav-links a { color: #94A3B8; font-size: 0.9rem; }
    .nav-links a:hover { color: ${COLORS.white}; text-decoration: none; }
    .nav-cta { background: ${COLORS.primary}; color: ${COLORS.white} !important; padding: 0.4rem 1rem; border-radius: 6px; font-weight: 600; font-size: 0.85rem; }
    .nav-cta:hover { background: ${COLORS.primaryDark}; text-decoration: none !important; }

    .hero { background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.slate1} 100%); color: ${COLORS.white}; padding: 3.5rem 1.5rem 3rem; text-align: center; }
    .hero h1 { font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 800; line-height: 1.2; margin-bottom: 1rem; letter-spacing: -0.02em; }
    .hero p { max-width: 600px; margin: 0 auto; font-size: 1.05rem; color: #CBD5E1; }
    .hero-count { display: inline-block; background: rgba(16,185,129,0.2); color: ${COLORS.primaryLight}; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.3rem 0.85rem; border-radius: 999px; margin-bottom: 1.25rem; }

    .content { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem 3rem; }

    .category-group { margin-bottom: 2.5rem; }
    .category-heading { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: ${COLORS.slate3}; margin-bottom: 0.85rem; padding-bottom: 0.5rem; border-bottom: 1px solid ${COLORS.border}; }

    .markers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.65rem; }
    .marker-card { display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1.1rem; background: ${COLORS.white}; border: 1px solid ${COLORS.border}; border-radius: 9px; color: ${COLORS.navy}; font-weight: 500; font-size: 0.95rem; transition: border-color 0.15s, background 0.15s, transform 0.1s; }
    .marker-card:hover { border-color: ${COLORS.primary}; background: ${COLORS.primaryLight}; transform: translateY(-1px); text-decoration: none; }
    .marker-arrow { color: ${COLORS.primary}; font-size: 1rem; margin-left: 0.5rem; }

    .footer { background: ${COLORS.navy}; color: #64748B; text-align: center; padding: 2rem 1.5rem; font-size: 0.85rem; }
    .footer a { color: #94A3B8; }
    .footer-links { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 1rem; flex-wrap: wrap; }

    @media (max-width: 640px) { .nav-links { display: none; } .hero { padding: 2.5rem 1rem 2rem; } }
  </style>
</head>
<body>

  <nav class="nav">
    <a href="${SITE_DOMAIN}" class="nav-logo">
      <img src="/AppStore-1024.png" alt="Serumo logo"><span class="nav-wordmark">Serum<span>o</span></span>
    </a>
    <div class="nav-links">
      <a href="${SITE_DOMAIN}">Home</a>
      <a href="${APP_STORE_URL}" class="nav-cta" target="_blank" rel="noopener">Download App</a>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-count">${published.length} marker${published.length !== 1 ? 's' : ''} available</div>
    <h1>Lab Test Reference Guide</h1>
    <p>Plain-language explanations of common blood test results — normal ranges, what high or low levels mean, and symptoms to watch for.</p>
  </header>

  <main class="content">
    ${categorySections}
  </main>

  <footer class="footer">
    <div class="footer-links">
      <a href="${SITE_DOMAIN}">Home</a>
      <a href="${SITE_DOMAIN}/privacy">Privacy Policy</a>
      <a href="${SITE_DOMAIN}/terms">Terms of Use</a>
      <a href="${APP_STORE_URL}" target="_blank" rel="noopener">Download App</a>
    </div>
    <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. For informational purposes only. Not medical advice.</p>
  </footer>

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
