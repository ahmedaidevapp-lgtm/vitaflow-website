import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SUPPORT_EMAIL = "ahmed.aidev.app@gmail.com";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-navy">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-brand">
            <Activity className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          VitaFlow
        </div>
        <p className="text-sm text-slate3 font-medium">
          © {new Date().getFullYear()} VitaFlow. Educational insights for personal wellness.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate3">
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
                <DialogTitle className="text-navy">Contact</DialogTitle>
              </DialogHeader>
              <p className="text-slate2 text-base leading-relaxed pt-1">
                Support:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-dark font-medium underline underline-offset-2 hover:text-primary"
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
