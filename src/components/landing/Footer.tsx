import { Activity } from "lucide-react";

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
        <div className="flex items-center gap-5 text-sm font-medium text-slate3">
          <a href="#" className="hover:text-navy transition-smooth">Privacy</a>
          <a href="#" className="hover:text-navy transition-smooth">Terms</a>
          <a href="#" className="hover:text-navy transition-smooth">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
