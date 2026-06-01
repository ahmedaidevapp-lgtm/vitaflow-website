/**
 * Approval CLI — the human publish gate.
 *
 * Moves a reviewed and human-approved HTML page from
 * scripts/seo/output/pending/<slug>.html
 * to
 * public/biomarkers/<slug>/index.html
 *
 * This is the ONLY way a page enters the public/ directory.
 * Running `npm run build` afterwards will copy it to dist/ and
 * GitHub Pages will serve it at /biomarkers/<slug>/.
 *
 * Usage:
 *   npx tsx scripts/seo/approve.ts ferritin
 *   npx tsx scripts/seo/approve.ts --list        (show pending pages and their status)
 *
 * The script refuses to approve if:
 *   - The quality gate review file is missing or marks allChecksPass: false
 *   - The HTML file is missing (run render.ts first)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { QualityResult } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PENDING_DIR = join(__dirname, 'output', 'pending');
const PROJECT_ROOT = join(__dirname, '..', '..');
const PUBLIC_BIOMARKERS_DIR = join(PROJECT_ROOT, 'public', 'biomarkers');

function approve(slug: string): void {
  console.log(`\n[approve] Processing "${slug}"...`);

  // 1. Check HTML exists
  const htmlSrc = join(PENDING_DIR, `${slug}.html`);
  if (!existsSync(htmlSrc)) {
    throw new Error(
      `HTML file not found: ${htmlSrc}\nRun: npx tsx scripts/seo/render.ts ${slug}`
    );
  }

  // 2. Check quality gate passed
  const reviewPath = join(PENDING_DIR, `${slug}.review.json`);
  if (!existsSync(reviewPath)) {
    throw new Error(
      `Quality gate review not found: ${reviewPath}\nRun: npx tsx scripts/seo/quality-gate.ts ${slug}`
    );
  }

  const review: QualityResult = JSON.parse(readFileSync(reviewPath, 'utf-8'));
  if (!review.allChecksPass) {
    const issues = review.notes.join('\n  ');
    throw new Error(
      `Quality gate has unresolved failures for "${slug}":\n  ${issues}\n\nFix the issues and regenerate before approving.`
    );
  }

  // 3. Copy HTML to public/biomarkers/<slug>/index.html
  const destDir = join(PUBLIC_BIOMARKERS_DIR, slug);
  mkdirSync(destDir, { recursive: true });
  const destPath = join(destDir, 'index.html');
  copyFileSync(htmlSrc, destPath);

  // 4. Write an approval record alongside the pending JSON for audit trail
  const approvalRecord = {
    slug,
    approvedAt: new Date().toISOString(),
    publishedTo: destPath,
    qualityReview: review,
  };
  writeFileSync(
    join(PENDING_DIR, `${slug}.approved.json`),
    JSON.stringify(approvalRecord, null, 2)
  );

  console.log(`[approve] ✓ Published to: ${destPath}`);
  console.log(`[approve] Approval record saved.`);
  console.log(`\nNext steps:`);
  console.log(`  1. git add public/biomarkers/${slug}/`);
  console.log(`  2. git commit -m "publish biomarker page: ${slug}"`);
  console.log(`  3. git push  →  GitHub Pages deploys it to /biomarkers/${slug}/`);

  // Remind about sitemap update
  console.log(`\n[approve] Remember to update/regenerate public/sitemap.xml to include this URL.`);
}

function listPending(): void {
  if (!existsSync(PENDING_DIR)) {
    console.log('No pending directory found. Run generate.ts to create pages.');
    return;
  }

  const slugs = readdirSync(PENDING_DIR)
    .filter((f) => f.endsWith('.json') && !f.includes('.review') && !f.includes('.approved'))
    .map((f) => f.replace('.json', ''));

  if (slugs.length === 0) {
    console.log('No pending pages found.');
    return;
  }

  console.log('\nPending pages:\n');
  for (const slug of slugs) {
    const reviewPath = join(PENDING_DIR, `${slug}.review.json`);
    const htmlPath = join(PENDING_DIR, `${slug}.html`);
    const approvedPath = join(PENDING_DIR, `${slug}.approved.json`);

    const hasReview = existsSync(reviewPath);
    const hasHtml = existsSync(htmlPath);
    const isApproved = existsSync(approvedPath);

    let reviewStatus = 'no review';
    if (hasReview) {
      const r: QualityResult = JSON.parse(readFileSync(reviewPath, 'utf-8'));
      reviewStatus = r.allChecksPass ? 'gate PASSED' : `gate FAILED (${r.notes.length} issue${r.notes.length !== 1 ? 's' : ''})`;
    }

    const status = isApproved
      ? 'APPROVED & PUBLISHED'
      : hasHtml
        ? `HTML ready — ${reviewStatus}`
        : `no HTML — ${reviewStatus}`;

    console.log(`  ${slug.padEnd(30)} ${status}`);
  }
  console.log('');
}

// CLI
const args = process.argv.slice(2);

if (args[0] === '--list') {
  listPending();
} else {
  const slug = args[0];
  if (!slug) {
    console.error('Usage:');
    console.error('  npx tsx scripts/seo/approve.ts <marker-slug>   Approve and publish a page');
    console.error('  npx tsx scripts/seo/approve.ts --list          List all pending pages and status');
    process.exit(1);
  }
  try {
    approve(slug);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\n[approve] ERROR: ${msg}`);
    process.exit(1);
  }
}
