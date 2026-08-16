import { useLanguage } from "@/i18n/context";
import PrivacyEn from "./legal/PrivacyEn";
import PrivacyFrDoc from "./legal/PrivacyFrDoc";

/**
 * `/privacy` follows the active UI language. Arabic has no translated legal text yet,
 * so it falls back to the French version with an in-page notice.
 */
const Privacy = () => {
  const { lang } = useLanguage();
  return lang === "en" ? <PrivacyEn /> : <PrivacyFrDoc />;
};

export default Privacy;
