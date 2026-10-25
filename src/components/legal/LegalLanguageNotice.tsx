import { Languages } from "lucide-react";
import { useLanguage } from "@/i18n/context";

/**
 * Shown on a legal document when the active UI language has no professionally
 * translated version of that document yet. The displayed version stays authoritative.
 */
const LegalLanguageNotice = ({ shownLanguage }: { shownLanguage: "fr" | "en" }) => {
  const { lang } = useLanguage();

  if (lang !== "ar") return null;

  const shown = shownLanguage === "fr" ? "الفرنسية" : "الإنجليزية";

  return (
    <div dir="rtl" lang="ar" className="mt-8 flex items-start gap-3 rounded-[18px] bg-mist px-[22px] py-[18px]">
      <Languages className="mt-0.5 h-5 w-5 shrink-0 text-ink-subtle" strokeWidth={2} aria-hidden />
      <p className="text-[14px] leading-relaxed text-ink-muted">
        هذه الوثيقة القانونية غير متوفرة بعد باللغة العربية. النسخة المعروضة هنا هي النسخة{" "}
        {shown}، وهي النسخة المرجعية المعتمدة. للاستفسار، راسلونا على{" "}
        <a
          href="mailto:ahmed@amandevtech.com"
          className="font-medium text-ink underline underline-offset-2 hover:text-ink-muted"
          dir="ltr"
        >
          ahmed@amandevtech.com
        </a>
        .
      </p>
    </div>
  );
};

export default LegalLanguageNotice;
