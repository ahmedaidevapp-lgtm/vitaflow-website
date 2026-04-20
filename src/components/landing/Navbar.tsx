import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight text-navy">
          <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-brand shadow-soft">
            <Activity className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          VitaFlow
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate2">
          <a href="#features" className="hover:text-navy transition-smooth">Features</a>
          <a href="#how" className="hover:text-navy transition-smooth">How it works</a>
          <a href="#trust" className="hover:text-navy transition-smooth">Privacy</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
