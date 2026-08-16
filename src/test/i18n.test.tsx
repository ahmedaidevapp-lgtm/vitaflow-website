import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LanguageProvider from "@/i18n/LanguageProvider";
import Labs from "@/pages/Labs";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LANGS, LANG_STORAGE_KEY } from "@/i18n/config";
import { DICTIONARIES } from "@/i18n/context";

const renderWithLang = (ui: React.ReactNode) =>
  render(
    <LanguageProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </LanguageProvider>,
  );

describe("language defaults", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
    document.documentElement.dir = "";
  });

  it("renders the labs home page in French by default", () => {
    renderWithLang(<Labs />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Remettez à vos patients leurs résultats",
    );
    expect(document.documentElement.lang).toBe("fr");
    expect(document.documentElement.dir).toBe("ltr");
  });

  it("honours a saved language choice and sets RTL for Arabic", () => {
    window.localStorage.setItem(LANG_STORAGE_KEY, "ar");
    renderWithLang(<LanguageSwitcher />);
    expect(document.documentElement.lang).toBe("ar");
    expect(document.documentElement.dir).toBe("rtl");
  });
});

describe("dictionary completeness", () => {
  /** Walks both objects in parallel so a missing or extra key in any language fails loudly. */
  const compareShape = (reference: unknown, candidate: unknown, path: string): string[] => {
    if (Array.isArray(reference)) {
      if (!Array.isArray(candidate)) return [`${path}: expected an array`];
      if (reference.length !== candidate.length) {
        return [`${path}: expected ${reference.length} items, got ${candidate.length}`];
      }
      return reference.flatMap((item, i) => compareShape(item, candidate[i], `${path}[${i}]`));
    }

    if (typeof reference === "object" && reference !== null) {
      if (typeof candidate !== "object" || candidate === null) {
        return [`${path}: expected an object`];
      }
      const refKeys = Object.keys(reference as Record<string, unknown>);
      const candKeys = Object.keys(candidate as Record<string, unknown>);
      const missing = refKeys.filter((k) => !candKeys.includes(k));
      const extra = candKeys.filter((k) => !refKeys.includes(k));
      return [
        ...missing.map((k) => `${path}.${k}: missing`),
        ...extra.map((k) => `${path}.${k}: unexpected`),
        ...refKeys.flatMap((k) =>
          candKeys.includes(k)
            ? compareShape(
                (reference as Record<string, unknown>)[k],
                (candidate as Record<string, unknown>)[k],
                `${path}.${k}`,
              )
            : [],
        ),
      ];
    }

    if (typeof candidate !== "string" || candidate.trim() === "") {
      return [`${path}: expected a non-empty string`];
    }
    return [];
  };

  it.each(LANGS.filter((l) => l !== "fr"))(
    "%s matches the French dictionary shape with no empty strings",
    (lang) => {
      // A handful of decorative slots are intentionally blank in every language.
      const problems = compareShape(DICTIONARIES.fr, DICTIONARIES[lang], lang).filter(
        (p) => !p.includes("visualSecondary") && !p.includes("visualExtra"),
      );
      expect(problems).toEqual([]);
    },
  );
});
