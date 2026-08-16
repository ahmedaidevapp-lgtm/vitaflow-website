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
    <div
      dir="rtl"
      lang="ar"
      className="mt-8 flex items-start gap-3 rounded-xl border border-[#F0E6D0] bg-[#FBF8F3] p-5"
    >
      <Languages className="mt-0.5 h-5 w-5 shrink-0 text-[#C77A18]" strokeWidth={2.25} aria-hidden />
      <p className="text-[14px] leading-relaxed text-slate1">
        هذه الوثيقة القانونية غير متوفرة بعد باللغة العربية. النسخة المعروضة هنا هي النسخة{" "}
        {shown}، وهي النسخة المرجعية المعتمدة. للاستفسار، راسلونا على{" "}
        <a
          href="mailto:ahmed@amandevtech.com"
          className="font-medium text-primary-dark underline underline-offset-2 hover:text-primary"
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
