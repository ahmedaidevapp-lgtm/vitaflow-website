import { Link } from "react-router-dom";

const APP_STORE_HREF = "https://apps.apple.com/us/app/vitaflow-health/id6762191392#information";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 select-none">
          <img src="/AppStore-1024.png" alt="Serumo logo" className="w-[30px] h-[30px] rounded-lg shadow-soft shrink-0" />
          <span className="font-display font-bold text-[21px] tracking-[-0.02em] text-navy leading-none">
            Serumo
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-slate1">
          <a href="/#how" className="hover:text-navy transition-smooth">The journey</a>
          <a href="/#features" className="hover:text-navy transition-smooth">Features</a>
          <a href="/biomarkers" className="hover:text-navy transition-smooth">Lab Tests</a>
          <Link to="/privacy" className="hover:text-navy transition-smooth">Privacy</Link>
        </div>

        {/* CTA */}
        <a
          href={APP_STORE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-[18px] py-[9px] rounded-[9px] shadow-[0_4px_14px_-4px_hsl(160_82%_29%/0.5)] transition-smooth"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
