import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SUPPORT_EMAIL = "ahmed@amantechdev.com";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-[30px] flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <img src="/AppStore-1024.png" alt="Serumo logo" className="w-[22px] h-[22px] rounded-md shadow-soft shrink-0" />
            <span className="font-display font-bold text-navy text-[15px] tracking-[-0.01em]">Serumo</span>
          </div>
          <p className="text-[12px] text-slate2 max-w-[220px] leading-relaxed">
            A blood test tracking app that turns lab reports into plain-language insights and tracks biomarker trends over time.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate2 font-medium">
          © {new Date().getFullYear()} Serumo. Educational insights for personal wellness.
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate1">
          <a href="/biomarkers" className="hover:text-navy transition-smooth">Lab Tests</a>
          <Link to="/privacy" className="hover:text-navy transition-smooth">Privacy</Link>
          <Link to="/privacy/fr" className="hover:text-navy transition-smooth">Confidentialité</Link>
          <Link to="/terms" className="hover:text-navy transition-smooth">Terms</Link>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="hover:text-navy transition-smooth bg-transparent p-0 border-0 font-medium text-inherit cursor-pointer"
              >
                Contact
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-navy font-display">Contact</DialogTitle>
              </DialogHeader>
              <p className="text-slate1 text-base leading-relaxed pt-1">
                Support:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark"
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
