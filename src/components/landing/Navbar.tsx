import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/context";
import { PILOT_MAILTO } from "@/lib/constants";

const Navbar = () => {
  const { t, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);

  // Section anchors live on the labs home page, so they are always prefixed with "/".
  const links = [
    { href: "/#how", label: t.nav.how },
    { href: "/#benefits", label: t.nav.benefits },
    { href: "/#portal", label: t.nav.portal },
    { href: "/#trust", label: t.nav.security },
  ];

  // The consumer app and its pricing are grouped under one "iOS" menu, keeping the
  // top level focused on the B2B offering.
  const iosRoutes = [
    { to: "/ios", label: t.nav.iosApp },
    { to: "/pricing", label: t.nav.pricing },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 select-none shrink-0">
          <img
            src="/AppStore-1024.png"
            alt={t.nav.logoAlt}
            className="w-[30px] h-[30px] rounded-lg shadow-soft shrink-0"
          />
          <span className="font-display font-bold text-[21px] tracking-[-0.02em] text-navy leading-none">
            Serumo
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 text-[14.5px] font-medium text-slate1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-navy transition-smooth">
              {link.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 hover:text-navy transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-[6px] data-[state=open]:text-navy">
              {t.nav.ios}
              <ChevronDown
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-200"
                strokeWidth={2.5}
                aria-hidden
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRtl ? "end" : "start"} className="min-w-[180px]">
              {iosRoutes.map((route) => (
                <DropdownMenuItem key={route.to} asChild className="cursor-pointer text-[14px] font-medium">
                  <Link to={route.to}>{route.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />

          <a
            href={PILOT_MAILTO}
            className="hidden sm:inline-flex bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-[18px] py-[9px] rounded-[9px] shadow-[0_4px_14px_-4px_hsl(160_82%_29%/0.5)] transition-smooth"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-[9px] border border-border text-slate1 hover:text-navy transition-smooth"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" strokeWidth={2.25} /> : <Menu className="w-5 h-5" strokeWidth={2.25} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container flex flex-col py-4 gap-1 text-[15px] font-medium text-slate1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-navy transition-smooth"
              >
                {link.label}
              </a>
            ))}
            {/* iOS group */}
            <div className="mt-2 pt-2 border-t border-border">
              <div className="text-[12px] font-bold uppercase tracking-[.08em] text-slate3 py-1">
                {t.nav.ios}
              </div>
              {iosRoutes.map((route) => (
                <Link
                  key={route.to}
                  to={route.to}
                  onClick={() => setOpen(false)}
                  className="block ps-3 py-2 hover:text-navy transition-smooth"
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <a
              href={PILOT_MAILTO}
              onClick={() => setOpen(false)}
              className="sm:hidden mt-3 inline-flex justify-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-[18px] py-[11px] rounded-[9px] transition-smooth"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
