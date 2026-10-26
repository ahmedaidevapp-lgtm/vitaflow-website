import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteNav from "@/components/site/SiteNav";
import { eyebrow, lead, ordinal, sectionTitle } from "@/components/site/styles";
import { cn } from "@/lib/utils";

/** Page frame: everything sits on the canvas, with the footer at the bottom. */
export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-canvas">
    <main>{children}</main>
    <SiteFooter />
  </div>
);

/** The white card at the top of every page, carrying the nav. */
export const HeroCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <section id="top" className="p-4">
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-white shadow-[0_1px_2px_rgba(0,0,0,.04)]",
        className,
      )}
    >
      <SiteNav />
      {children}
    </div>
  </section>
);

/** Content column for a section on the canvas. */
export const Section = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section id={id} className={cn("mx-auto max-w-[1240px] scroll-mt-4 px-4 py-[60px] sm:px-8", className)}>
    {children}
  </section>
);

/** Eyebrow, title and optional intro that open a section. */
export const SectionHeader = ({
  label,
  title,
  intro,
  className,
}: {
  label: string;
  title: string;
  intro?: string;
  className?: string;
}) => (
  <div className={cn("mb-14", className)}>
    <div className={cn(eyebrow, "mb-6")}>{label}</div>
    <h2 className={cn(sectionTitle, "max-w-[820px]")}>{title}</h2>
    {intro && <p className={cn(lead, "mt-5 max-w-[600px]")}>{intro}</p>}
  </div>
);

/** Grid of white cards, each led by its ordinal. */
export const NumberedCards = ({
  items,
  minWidth = 280,
  hover = false,
  large = false,
  rows = false,
}: {
  items: { title: string; desc: string }[];
  minWidth?: number;
  hover?: boolean;
  /** Roomier cards with a larger title, for a short list that opens a page. */
  large?: boolean;
  /** Wide, short cards in two columns, the ordinal leading each row. */
  rows?: boolean;
}) => (
  <div
    className={cn("grid gap-3.5", rows && "md:grid-cols-2")}
    style={rows ? undefined : { gridTemplateColumns: `repeat(auto-fit, minmax(min(${minWidth}px, 100%), 1fr))` }}
  >
    {items.map((item, i) => (
      <div
        key={item.title}
        className={cn(
          "rounded-[24px] bg-white",
          rows ? "flex items-baseline gap-6 px-7 py-6" : large ? "px-6 pb-7 pt-6 md:px-[30px] md:pb-9 md:pt-8" : "px-7 pb-8 pt-7",
          hover &&
            "transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_24px_48px_-24px_rgba(20,20,20,.22)]",
        )}
      >
        <div className={cn("flex-none text-[12px] text-ink-faint", rows ? "w-6" : large ? "mb-5 md:mb-14" : "mb-9")}>
          {ordinal(i)}
        </div>
        <div>
          <h3 className={cn("mb-2 font-medium tracking-[-0.02em]", large ? "text-[19px]" : "text-[17px]")}>
            {item.title}
          </h3>
          <p className="text-[14px] leading-[1.65] text-ink-muted">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
