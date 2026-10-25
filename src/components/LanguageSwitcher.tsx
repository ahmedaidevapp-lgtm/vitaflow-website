import Segmented from "@/components/site/Segmented";
import { LANGS, LANG_LABELS, LANG_SHORT } from "@/i18n/config";
import { useLanguage } from "@/i18n/context";

/** FR / EN / ع toggle in the site nav. */
const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <Segmented
      label={t.nav.languageLabel}
      value={lang}
      onChange={setLang}
      className={className}
      options={LANGS.map((code) => ({
        value: code,
        label: LANG_SHORT[code],
        ariaLabel: LANG_LABELS[code],
        lang: code,
      }))}
    />
  );
};

export default LanguageSwitcher;
