import AppStoreBadge from "@/components/landing/AppStoreBadge";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-navy">
          <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-brand shadow-soft">
            <Activity className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          VitaFlow
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate2">
          <a href="/#features" className="hover:text-navy transition-smooth">Features</a>
          <a href="/#how" className="hover:text-navy transition-smooth">How it works</a>
          <Link to="/privacy" className="hover:text-navy transition-smooth">Privacy</Link>
        </div>
        <div className="flex items-center">
          <AppStoreBadge className="inline-flex [&_img]:h-9 sm:[&_img]:h-10" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
