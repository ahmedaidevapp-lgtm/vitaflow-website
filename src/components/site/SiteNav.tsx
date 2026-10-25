import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import DemoCta from "@/components/demo/DemoCta";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { pillOutline, pillPrimary } from "@/components/site/styles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useT } from "@/i18n/context";
import { LAB_SIGN_IN_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** The wordmark, shared by the nav and the footer. */
export const Wordmark = ({ size = 26 }: { size?: number }) => (
  <span className="flex items-center gap-2.5">
    <img
      src="/AppStore-1024.png"
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-[7px]"
      style={{ width: size, height: size }}
    />
    <span className="text-[16px] font-medium tracking-[-0.02em]">Serumo</span>
  </span>
);

/** A page link inside the black pill; the current page is a white pill of its own. */
const pageLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "whitespace-nowrap rounded-full px-4 py-2 text-[13px] no-underline transition-colors",
    isActive ? "bg-white text-ink" : "text-white/70 hover:text-white",
  );

/** The black pill that holds the page links — kept neutral so the green demo CTA is the
 * only coloured action in the bar. */
const pagesPill = "flex gap-1 rounded-full bg-ink p-1";

type MenuItem = { to: string; label: string; current?: boolean };

/** A pill entry that opens a short menu of pages or sections. */
const PillMenu = ({ label, active, items }: { label: string; active: boolean; items: MenuItem[] }) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger className={cn(pageLinkClass({ isActive: active }), "inline-flex items-center gap-1 outline-none")}>
      {label}
      <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="center"
      sideOffset={10}
      className="min-w-[200px] rounded-[18px] p-1.5"
      // Closing would return focus to the trigger at the top of the page, which cancels the
      // scroll to the section just chosen.
      onCloseAutoFocus={(event) => event.preventDefault()}
    >
      {items.map((item) => (
        <DropdownMenuItem
          key={item.to}
          asChild
          className={cn("cursor-pointer rounded-full px-3.5 py-2 text-[13px]", item.current && "bg-mist font-medium")}
        >
          <Link to={item.to} aria-current={item.current ? "page" : undefined}>
            {item.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

/**
 * Top bar, rendered inside the white card at the top of every page. The page links only
 * fit, centred, beside the actions from `wide`; below that they move into the disclosure
 * panel, and below `sm` the sign-in link and demo CTA join them there.
 */
const SiteNav = () => {
  const t = useT();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname } = useLocation();

  const { labs } = t;

  // The labs home page and its sections share one "Laboratoires" entry in the pill.
  const labsItems: MenuItem[] = [
    { to: "/", label: t.nav.labsOverview, current: pathname === "/" },
    { to: "/#problem", label: labs.problem.eyebrow },
    { to: "/#how", label: labs.how.eyebrow },
    { to: "/#benefits", label: labs.benefits.eyebrow },
    { to: "/#portal", label: labs.portal.eyebrow },
    { to: "/#trust", label: labs.trust.eyebrow },
    { to: "/#contact", label: labs.cta.eyebrow },
  ];

  // The consumer app and its pricing share one "iOS" entry.
  const iosItems: MenuItem[] = [
    { to: "/ios", label: t.nav.ios, current: pathname === "/ios" },
    { to: "/pricing", label: t.nav.pricing, current: pathname === "/pricing" },
  ];

  // Static pages generated outside the React app, so a plain link.
  const labTestsLink = (onClick?: () => void) => (
    <a href="/biomarkers" onClick={onClick} className={pageLinkClass({ isActive: false })}>
      {t.nav.labTests}
    </a>
  );

  /** The pill's contents on desktop: two dropdown groups and a plain link. */
  const pillLinks = (
    <>
      <PillMenu label={t.nav.labs} active={pathname === "/"} items={labsItems} />
      <PillMenu label={t.nav.iosGroup} active={iosItems.some((item) => item.current)} items={iosItems} />
      {labTestsLink()}
    </>
  );

  /**
   * The disclosure panel, in three groups split by hairlines: the labs page with its
   * sections hanging off a thin rule beneath it, the iOS pages under a small label, and
   * the lab tests guide.
   */
  const panelLinks = (
    <>
      <div className="flex flex-col">
        <NavLink to="/" end onClick={close} className={pageLinkClass}>
          {t.nav.labs}
        </NavLink>
        <div className="mb-2 ms-6 mt-1 flex flex-col border-s border-white/15 ps-3">
          {labsItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className="py-1.5 text-[12.5px] text-white/50 no-underline transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col border-t border-white/10 pt-2">
        <div className="px-4 pb-1 pt-1 text-[10.5px] uppercase tracking-[0.2em] text-white/40">
          {t.nav.iosGroup}
        </div>
        {iosItems.map((item) => (
          <NavLink key={item.to} to={item.to} end onClick={close} className={pageLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col border-t border-white/10 pt-2">{labTestsLink(close)}</div>
    </>
  );

  return (
    <div className="relative z-20 bg-white">
      {/* From `wide` the bar is a three-column grid with the page pill in the middle. The
          language switch moves beside the logo there, so both outer columns are about as
          wide and the pill lands on the true centre. Below `wide` the pill is hidden and
          the page links live in the disclosure panel. */}
      <nav className="flex items-center gap-3 px-5 py-5 sm:px-11 sm:py-7 wide:grid wide:grid-cols-[1fr_auto_1fr] wide:gap-6">
        <div className="me-auto flex items-center gap-6 wide:me-0 wide:justify-self-start">
          <Link to="/" className="no-underline">
            <Wordmark />
          </Link>
          <LanguageSwitcher className="hidden wide:flex" />
        </div>

        <div role="group" aria-label={t.nav.pagesLabel} className={cn(pagesPill, "hidden items-center wide:flex")}>
          {pillLinks}
        </div>

        <div className="flex items-center gap-3 sm:gap-6 wide:gap-3 wide:justify-self-end">
          <LanguageSwitcher className="wide:hidden" />

          <a href={LAB_SIGN_IN_HREF} className={cn(pillOutline, "hidden sm:inline-flex")}>
            {t.nav.signIn}
          </a>
          <DemoCta className={cn(pillPrimary, "hidden px-5 py-2.5 sm:inline-flex")}>{t.nav.cta}</DemoCta>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line-strong wide:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="site-nav-panel"
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="site-nav-panel" className="px-5 pb-6 sm:px-11 wide:hidden">
          <div
            role="group"
            aria-label={t.nav.pagesLabel}
            className="flex flex-col gap-2 rounded-[22px] bg-ink p-1 pb-2"
          >
            {panelLinks}
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:hidden">
            <DemoCta onActivate={close} className={pillPrimary}>
              {t.nav.cta}
            </DemoCta>
            <a href={LAB_SIGN_IN_HREF} className={cn(pillOutline, "py-3")}>
              {t.nav.signIn}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteNav;
