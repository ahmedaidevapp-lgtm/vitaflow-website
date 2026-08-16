import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGS, LANG_LABELS, LANG_SHORT } from "@/i18n/config";
import { useLanguage } from "@/i18n/context";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { lang, setLang, t, isRtl } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex items-center gap-1.5 rounded-[9px] border border-border bg-white px-2.5 py-[7px] text-[13.5px] font-semibold text-slate1 transition-smooth hover:text-navy hover:border-greenBorder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        aria-label={t.nav.languageLabel}
      >
        <Globe className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
        <span>{LANG_SHORT[lang]}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={isRtl ? "start" : "end"} className="min-w-[160px]">
        {LANGS.map((code) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => setLang(code)}
            className="cursor-pointer justify-between gap-3 text-[14px] font-medium"
            lang={code}
          >
            <span>{LANG_LABELS[code]}</span>
            {code === lang && <Check className="h-4 w-4 text-primary" strokeWidth={2.5} aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
