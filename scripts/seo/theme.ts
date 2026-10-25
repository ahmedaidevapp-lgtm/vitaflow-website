/**
 * Shared look for the static biomarker pages, matching the React site: a warm neutral
 * canvas, white rounded cards, Geist, a black page-link pill and green primary actions.
 * Colour values mirror the tokens in src/index.css — change them together.
 */

export const SITE_DOMAIN = 'https://getserumo.com';
export const APP_STORE_URL = 'https://apps.apple.com/us/app/vitaflow-health/id6762191392#information';
export const SITE_NAME = 'Serumo';
export const LEGAL_LINE = 'Amandev Technologies SARL AU · Casablanca, Morocco';

/** Fonts, loaded the same way as the React app's index.html. */
export const FONT_LINKS = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
  <meta name="theme-color" content="#efefee">`;

/** Tokens, base styles, the top card with its nav, and the footer. */
export const BASE_CSS = `
    :root {
      --canvas: #efefee;
      --ink: #141414;
      --ink-muted: #5f5f5c;
      --ink-subtle: #8a8a87;
      --ink-faint: #a5a5a2;
      --mist: #f5f5f4;
      --line: #ececea;
      --line-strong: #dededc;
      --brand: #0b8a5a;
      --brand-strong: #0a7f53;
      --brand-stronger: #086c47;
      --brand-soft: #e6f5ee;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body {
      font-family: Geist, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      background: var(--canvas);
      color: var(--ink);
      line-height: 1.7;
    }
    a { color: var(--ink); }
    :focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

    .eyebrow {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.36em;
      text-transform: uppercase;
      color: var(--ink-subtle);
    }

    /* Top card: nav and page header share one white card, as on the React site. */
    .top { padding: 16px; }
    .top-card {
      background: #fff;
      border-radius: 28px;
      box-shadow: 0 1px 2px rgba(0,0,0,.04);
      overflow: hidden;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 28px 44px;
    }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-inline-end: auto;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.02em;
      text-decoration: none;
    }
    .nav-logo img { width: 26px; height: 26px; border-radius: 7px; }
    .nav-pill {
      display: flex;
      gap: 4px;
      padding: 4px;
      border-radius: 999px;
      background: var(--ink);
      margin-inline-end: auto;
    }
    .nav-pill a {
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 13px;
      color: rgba(255,255,255,.7);
      text-decoration: none;
      white-space: nowrap;
      transition: color .15s;
    }
    .nav-pill a:hover { color: #fff; }
    .nav-pill a[aria-current="page"] { background: #fff; color: var(--ink); }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      padding: 10px 20px;
      border-radius: 999px;
      background: var(--brand-strong);
      color: #fff;
      font-size: 13px;
      text-decoration: none;
      transition: background .15s;
    }
    .btn-primary:hover { background: var(--brand-stronger); }

    .page-header { padding: 40px 44px 64px clamp(32px, 7vw, 100px); }
    .page-header h1 {
      font-size: clamp(34px, 4.6vw, 58px);
      font-weight: 300;
      line-height: 1.06;
      letter-spacing: -0.045em;
      margin: 24px 0 22px;
      max-width: 900px;
      text-wrap: balance;
    }
    .page-header .lead {
      max-width: 680px;
      font-size: 15px;
      line-height: 1.75;
      color: var(--ink-muted);
    }

    /* Footer, as on the React site. */
    .footer {
      max-width: 1240px;
      margin: 0 auto;
      padding: 40px 32px 56px;
      display: flex;
      flex-wrap: wrap;
      gap: 24px 40px;
      justify-content: space-between;
      align-items: flex-start;
    }
    .footer-brand { max-width: 400px; }
    .footer-brand .nav-logo { margin-bottom: 10px; }
    .footer-brand .nav-logo img { width: 22px; height: 22px; border-radius: 6px; }
    .footer-brand p { font-size: 13px; line-height: 1.6; color: var(--ink-subtle); }
    .footer-links { display: flex; flex-wrap: wrap; gap: 12px 24px; font-size: 13px; }
    .footer-links a { text-decoration: none; }
    .footer-links a:hover { color: var(--ink-muted); }
    .footer-legal { flex-basis: 100%; font-size: 12px; line-height: 1.6; color: var(--ink-faint); }

    /* Narrow screens: the pill gives way to a menu button opening the same grouped
       menu as the React site's. */
    .nav-toggle {
      display: none;
      flex: none;
      width: 36px;
      height: 36px;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid var(--line-strong);
      background: #fff;
      color: var(--ink);
      cursor: pointer;
    }
    .nav-toggle .icon-close { display: none; }
    .nav-toggle[aria-expanded="true"] .icon-open { display: none; }
    .nav-toggle[aria-expanded="true"] .icon-close { display: block; }
    .menu { padding: 0 44px 24px; }
    .menu-card { display: flex; flex-direction: column; gap: 8px; padding: 4px 4px 8px; border-radius: 22px; background: var(--ink); }
    .menu-group { display: flex; flex-direction: column; }
    .menu-group + .menu-group { border-top: 1px solid rgba(255,255,255,.1); padding-top: 8px; }
    .menu-link { padding: 8px 16px; border-radius: 999px; font-size: 13px; color: rgba(255,255,255,.7); text-decoration: none; }
    .menu-link:hover { color: #fff; }
    .menu-link[aria-current="page"] { background: #fff; color: var(--ink); }
    .menu-sections { display: flex; flex-direction: column; margin: 4px 0 8px 24px; padding-left: 12px; border-left: 1px solid rgba(255,255,255,.15); }
    .menu-sections a { padding: 6px 0; font-size: 12.5px; color: rgba(255,255,255,.5); text-decoration: none; }
    .menu-sections a:hover { color: #fff; }
    .menu-label { padding: 4px 16px; font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,.4); }
    @media (max-width: 900px) {
      .nav-pill { display: none; }
      .nav-toggle { display: inline-flex; }
    }
    @media (min-width: 901px) {
      .menu { display: none; }
    }
    @media (max-width: 640px) {
      .top { padding: 16px; }
      .nav { padding: 20px; gap: 12px; }
      .menu { padding: 0 20px 20px; }
      .page-header { padding: 24px 20px 40px; }
      .footer { padding: 32px 16px 48px; }
    }
`;

type NavPage = 'labs' | 'ios' | 'labTests';

/**
 * The nav row; `active` marks the current entry in the pill. Links are root-relative so
 * they work on any host; canonical URLs elsewhere stay absolute.
 */
export function siteNav(active: NavPage): string {
  const link = (page: NavPage, href: string, label: string, cls = '') =>
    `<a href="${href}"${cls ? ` class="${cls}"` : ''}${page === active ? ' aria-current="page"' : ''}>${label}</a>`;
  // The labs home page's sections, as in the React site's menu.
  const sections = [
    ['problem', 'The problem'],
    ['how', 'The flow'],
    ['benefits', 'Benefits'],
    ['portal', 'The lab portal'],
    ['trust', 'Trust and compliance'],
    ['contact', 'Pilot'],
  ]
    .map(([id, label]) => `<a href="/#${id}">${label}</a>`)
    .join('\n            ');
  // Toggles the menu below the bar; kept inline because these pages ship no script.
  const toggle =
    "var open=this.getAttribute('aria-expanded')==='true';" +
    "this.setAttribute('aria-expanded',String(!open));" +
    "document.getElementById('site-menu').hidden=open;";
  return `<nav class="nav">
      <a href="/" class="nav-logo"><img src="/AppStore-1024.png" alt="" width="26" height="26">Serumo</a>
      <div class="nav-pill">
        ${link('labs', '/', 'For labs')}
        ${link('ios', '/ios', 'iOS app')}
        ${link('labTests', '/biomarkers/', 'Lab Tests')}
      </div>
      <a href="${APP_STORE_URL}" class="btn-primary" target="_blank" rel="noopener">Download the app</a>
      <button type="button" class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="site-menu" onclick="${toggle}">
        <svg class="icon-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg class="icon-close" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </nav>
    <div id="site-menu" class="menu" hidden>
      <div class="menu-card">
        <div class="menu-group">
          ${link('labs', '/', 'Laboratories', 'menu-link')}
          <div class="menu-sections">
            ${sections}
          </div>
        </div>
        <div class="menu-group">
          <div class="menu-label">iOS</div>
          ${link('ios', '/ios', 'iOS app', 'menu-link')}
          <a href="/pricing" class="menu-link">iOS pricing</a>
        </div>
        <div class="menu-group">
          ${link('labTests', '/biomarkers/', 'Lab Tests', 'menu-link')}
        </div>
      </div>
    </div>`;
}

/** The footer; `note` is a page-specific line printed under the legal line. */
export function siteFooter(note: string): string {
  return `<footer class="footer">
    <div class="footer-brand">
      <a href="/" class="nav-logo"><img src="/AppStore-1024.png" alt="" width="22" height="22">Serumo</a>
      <p>The patient-owned health record. Labs deposit reports; patients keep control of them.</p>
    </div>
    <div class="footer-links">
      <a href="/">For laboratories</a>
      <a href="/ios">iOS app</a>
      <a href="/pricing">iOS pricing</a>
      <a href="/biomarkers/">Lab Tests</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
    <div class="footer-legal">
      &copy; ${new Date().getFullYear()} ${LEGAL_LINE}<br>
      ${note}
    </div>
  </footer>`;
}
