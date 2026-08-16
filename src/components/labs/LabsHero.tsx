import { ArrowRight } from "lucide-react";
import WebAppSlideshow from "@/components/labs/WebAppSlideshow";
import { useT } from "@/i18n/context";
import { PILOT_MAILTO } from "@/lib/constants";

const LabsHero = () => {
  const t = useT();
  const { hero } = t.labs;

  return (
    <section
      className="relative overflow-hidden pt-28 pb-[68px] md:pt-[148px] md:pb-[68px]"
      style={{
        background:
          "radial-gradient(900px 500px at 78% 0%, hsl(152 45% 93%), rgba(231,246,239,0) 60%), linear-gradient(180deg, hsl(150 44% 96%), #ffffff)",
      }}
    >
      <div className="container">
        {/* Landscape screenshots need real width, so the visual column is the wider one. */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-8 items-center">
          {/* ── Copy ── */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-greenBorder px-[13px] py-[6px] rounded-full text-[13px] font-semibold text-primary mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-mint shrink-0" />
              {hero.badge}
            </div>

            <h1 className="font-display font-bold text-[40px] sm:text-[52px] leading-[1.04] tracking-[-0.03em] text-navy mb-[22px]">
              {hero.titleLead}
              <br />
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>

            <p className="text-[18px] leading-[1.55] text-slate1 max-w-[520px] mb-[34px]">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PILOT_MAILTO}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-[15px] font-semibold px-[24px] py-[13px] rounded-[12px] shadow-[0_10px_26px_-8px_hsl(160_82%_29%/0.55)] hover:-translate-y-0.5 transition-smooth"
              >
                {hero.ctaPrimary}
                <ArrowRight className="w-[18px] h-[18px] shrink-0 rtl:rotate-180" strokeWidth={2.25} aria-hidden />
              </a>

              <a
                href="#how"
                className="inline-flex items-center bg-white border border-border hover:border-greenBorder text-navy text-[15px] font-semibold px-[22px] py-[13px] rounded-[12px] shadow-soft transition-smooth"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-[18px] text-[13px] text-slate2 font-medium">{hero.note}</p>
          </div>

          {/* ── Patient web-app showcase ── */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "120ms" }}>
            <WebAppSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsHero;
