import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useT } from "@/i18n/context";
import { SUPPORT_EMAIL } from "@/lib/constants";

const Footer = () => {
  const t = useT();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-[30px] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <img
              src="/AppStore-1024.png"
              alt={t.nav.logoAlt}
              className="w-[22px] h-[22px] rounded-md shadow-soft shrink-0"
            />
            <span className="font-display font-bold text-navy text-[15px] tracking-[-0.01em]">Serumo</span>
          </div>
          <p className="text-[12px] text-slate2 max-w-[240px] leading-relaxed">{t.footer.tagline}</p>
          <p className="text-[11.5px] text-slate3 mt-1">{t.footer.legalLine}</p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate2 font-medium text-center">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate1">
          <Link to="/" className="hover:text-navy transition-smooth">
            {t.footer.forLabs}
          </Link>
          <Link to="/ios" className="hover:text-navy transition-smooth">
            {t.footer.ios}
          </Link>
          <a href="/biomarkers" className="hover:text-navy transition-smooth">
            {t.footer.labTests}
          </a>
          <Link to="/pricing" className="hover:text-navy transition-smooth">
            {t.footer.pricing}
          </Link>
          <Link to="/privacy" className="hover:text-navy transition-smooth">
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className="hover:text-navy transition-smooth">
            {t.footer.terms}
          </Link>
          <Link to="/refund" className="hover:text-navy transition-smooth">
            {t.footer.refunds}
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="hover:text-navy transition-smooth bg-transparent p-0 border-0 font-medium text-inherit cursor-pointer"
              >
                {t.footer.contact}
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-navy font-display">{t.footer.contactTitle}</DialogTitle>
              </DialogHeader>
              <p className="text-slate1 text-base leading-relaxed pt-1">
                {t.footer.contactSupport}{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark"
                  dir="ltr"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
