import { useLanguage } from "@/i18n/context";
import TermsEn from "./legal/TermsEn";
import TermsFr from "./legal/TermsFr";

/**
 * `/terms` follows the active UI language. Arabic has no translated legal text yet,
 * so it falls back to the French version with an in-page notice.
 */
const Terms = () => {
  const { lang } = useLanguage();
  return lang === "en" ? <TermsEn /> : <TermsFr />;
};

export default Terms;
