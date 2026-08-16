import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { detectLang, dirFor, LANG_STORAGE_KEY, RTL_LANGS, type Lang } from "./config";
import { DICTIONARIES, LanguageContext, type LanguageContextValue } from "./context";

/**
 * Holds the active language, persists the choice, and keeps `<html lang>` / `<html dir>`
 * in sync so RTL and screen readers behave correctly.
 */
const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dirFor(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Persisting the choice is best-effort; the session still works without it.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      dir: dirFor(lang),
      isRtl: RTL_LANGS.includes(lang),
      t: DICTIONARIES[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
