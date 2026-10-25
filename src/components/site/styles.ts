/** Shared class strings, so every pill button and heading on the site stays identical. */

const pillBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] transition-colors";

/** Green pill — the one primary action in any group. */
export const pillPrimary = `${pillBase} bg-brand-strong text-white hover:bg-brand-stronger px-[22px] py-3`;

/** Grey pill — the secondary action beside a primary one. */
export const pillSecondary = `${pillBase} bg-canvas text-ink hover:bg-line-strong px-[22px] py-3`;

/** White pill with a hairline border — quiet actions such as sign-in. */
export const pillOutline = `${pillBase} border border-line-strong bg-white text-ink hover:bg-mist px-[18px] py-[9px]`;

/** Small uppercase label above a section title. */
export const eyebrow =
  "text-[11px] font-medium uppercase tracking-[0.36em] text-ink-subtle";

/** Section title: large, light, tightly tracked. */
export const sectionTitle =
  "text-[clamp(32px,4vw,52px)] font-light leading-[1.08] tracking-[-0.04em] text-ink text-balance";

/** Body copy beside or below a section title. */
export const lead = "text-[15px] leading-[1.7] text-ink-muted";

/** "01", "02", … — the ordinals the design uses in place of icons. */
export const ordinal = (i: number) => String(i + 1).padStart(2, "0");
