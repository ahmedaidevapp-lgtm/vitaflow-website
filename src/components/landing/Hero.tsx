import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/context";
import { APP_STORE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Screenshot assets — captions and alt text come from the dictionary, index-aligned. */
const SLIDES = [
  { src: "/ios-home.png", width: 876, height: 1716 },
  { src: "/ios-insights.png", width: 872, height: 1722 },
  { src: "/ios-plans.png", width: 878, height: 1722 },
  { src: "/ios-summary.png", width: 878, height: 1726 },
  { src: "/ios-trends.png", width: 878, height: 1730 },
] as const;

const StarRating = () => (
  <svg viewBox="0 0 110 20" className="w-24 h-[17px]" aria-hidden>
    <g fill="#F5A623">
      {[0, 22, 44, 66, 88].map((x) => (
        <path key={x} d={`M${x + 10} 1l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`} />
      ))}
    </g>
  </svg>
);

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const Hero = () => {
  const { t, isRtl } = useLanguage();
  const { hero } = t.ios;
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  const slide = SLIDES[index];
  const slideCopy = hero.slides[index];

  return (
    <section
      className="relative overflow-hidden pt-28 pb-[68px] md:pt-[148px] md:pb-[68px]"
      style={{
        background:
          "radial-gradient(900px 500px at 78% 0%, hsl(152 45% 93%), rgba(231,246,239,0) 60%), linear-gradient(180deg, hsl(150 44% 96%), #ffffff)",
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 items-center">
          {/* ── Left: copy ── */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-greenBorder px-[13px] py-[6px] rounded-full text-[13px] font-semibold text-primary mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-mint shrink-0" />
              {hero.badge}
            </div>

            <h1 className="font-display font-bold text-[42px] sm:text-[60px] leading-[1.02] tracking-[-0.03em] text-navy mb-[22px]">
              {hero.titleLead}
              <br />
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>

            <p className="text-[19px] leading-[1.55] text-slate1 max-w-[470px] mb-[34px]">
              {hero.subtitle}
            </p>

            {/* App Store badge */}
            <div className="flex flex-wrap items-center gap-[18px]">
              <a
                href={APP_STORE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy text-white px-[26px] py-[14px] rounded-[14px] shadow-[0_12px_30px_-8px_hsl(214_47%_12%/0.45),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-8px_hsl(214_47%_12%/0.55)] transition-smooth"
                aria-label={t.ios.cta.ariaDownload}
              >
                <AppleLogo className="w-[26px] h-[26px] shrink-0" />
                <div className="leading-[1.12] text-start">
                  <div className="text-[11px] font-medium text-slate3">{hero.downloadOn}</div>
                  <div className="font-display text-[20px] font-bold tracking-[-0.01em]">
                    {hero.appStore}
                  </div>
                </div>
              </a>

              {/* Social proof */}
              <div className="leading-[1.5]">
                <div className="flex items-center gap-1.5">
                  <StarRating />
                  <span className="text-[13.5px] font-bold text-navy">{hero.rating}</span>
                </div>
                <div className="text-[12.5px] text-slate2">{hero.socialProof}</div>
              </div>
            </div>
          </div>

          {/* ── Right: phone frame + carousel ── */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="animate-float w-[290px]">
              <div className="w-full rounded-[44px] bg-navy p-[11px] shadow-phone">
                {/* Inner screen — aspect ratio matches actual screenshot dimensions (~876:1722) */}
                <div
                  className="relative rounded-[34px] overflow-hidden"
                  style={{ aspectRatio: "876 / 1722" }}
                  role="region"
                  aria-roledescription="carousel"
                  aria-label={hero.carouselLabel}
                  dir="ltr"
                >
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slideCopy.alt}
                    width={slide.width}
                    height={slide.height}
                    className="absolute inset-0 w-full h-full object-cover object-top select-none"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />

                  {/* Prev / Next */}
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={isRtl ? goNext : goPrev}
                    className="absolute left-1.5 top-1/2 z-20 h-8 w-8 -translate-y-1/2 rounded-full border-white/60 bg-white/85 shadow-md backdrop-blur-sm hover:bg-white"
                    aria-label={isRtl ? hero.nextSlide : hero.prevSlide}
                  >
                    <ChevronLeft className="h-4 w-4 text-navy" strokeWidth={2} />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={isRtl ? goPrev : goNext}
                    className="absolute right-1.5 top-1/2 z-20 h-8 w-8 -translate-y-1/2 rounded-full border-white/60 bg-white/85 shadow-md backdrop-blur-sm hover:bg-white"
                    aria-label={isRtl ? hero.prevSlide : hero.nextSlide}
                  >
                    <ChevronRight className="h-4 w-4 text-navy" strokeWidth={2} />
                  </Button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
                    {SLIDES.map((s, i) => (
                      <button
                        key={s.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          i === index ? "w-6 bg-primary" : "w-1.5 bg-white/50 hover:bg-white/80",
                        )}
                        aria-label={`${hero.showSlide} — ${hero.slides[i].caption}`}
                        aria-current={i === index ? "true" : undefined}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
