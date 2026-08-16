import { createContext, useContext } from "react";
import { DEFAULT_LANG, dirFor, type Lang } from "./config";
import { fr } from "./dictionaries/fr";
import { en } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import type { Dict } from "./types";

export const DICTIONARIES: Record<Lang, Dict> = { fr, en, ar };

export type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  t: Dict;
};

export const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => undefined,
  dir: dirFor(DEFAULT_LANG),
  isRtl: false,
  t: DICTIONARIES[DEFAULT_LANG],
});

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

/** Shorthand for components that only need the strings. */
export function useT(): Dict {
  return useContext(LanguageContext).t;
}
