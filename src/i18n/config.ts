/** Supported site languages. French is the default — Serumo's primary market is Morocco. */
export const LANGS = ["fr", "en", "ar"] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "fr";

/** Languages that render right-to-left. */
export const RTL_LANGS: readonly Lang[] = ["ar"];

/** Native-name labels for the language switcher. */
export const LANG_LABELS: Record<Lang, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

/** Short labels for the compact (mobile) switcher. */
export const LANG_SHORT: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "ع",
};

export const LANG_STORAGE_KEY = "serumo.lang";

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
  return RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}

/**
 * Resolve the initial language. Only an explicit, previously saved choice overrides the
 * default — we deliberately do NOT sniff `navigator.language`, because the audience is
 * Moroccan and most browsers report English, which would bury the French default.
 */
export function detectLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;

  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage can throw in private modes — fall back to the default.
  }

  return DEFAULT_LANG;
}
