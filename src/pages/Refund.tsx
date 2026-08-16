import { useLanguage } from "@/i18n/context";
import RefundEn from "./legal/RefundEn";
import RefundFr from "./legal/RefundFr";

/**
 * `/refund` follows the active UI language. Arabic has no translated legal text yet,
 * so it falls back to the French version with an in-page notice.
 */
const Refund = () => {
  const { lang } = useLanguage();
  return lang === "en" ? <RefundEn /> : <RefundFr />;
};

export default Refund;
