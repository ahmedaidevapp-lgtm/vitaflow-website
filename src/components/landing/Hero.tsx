import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const APP_STORE_HREF = "https://apps.apple.com/us/app/vitaflow-health/id6762191392#information";

const SLIDES = [
  {
    src: "/home_page.png",
    alt: "Serumo home screen: report overview, progress story, and latest markers.",
    width: 390,
    height: 844,
    caption: "Home",
  },
  {
    src: "/insights.png",
    alt: "Insights screen: markers needing attention with suggested actions.",
    width: 390,
    height: 844,
    caption: "Insights",
  },
  {
    src: "/plans.png",
    alt: "Plans screen: daily health plan and active improvement steps.",
    width: 390,
    height: 844,
    caption: "Plans",
  },
  {
    src: "/summary.png",
    alt: "Summary screen: AI-generated plain-language overview of your lab results.",
    width: 390,
    height: 844,
    caption: "Summary",
  },
  {
    src: "/trends.png",
    alt: "Trends screen: biomarker charts across multiple lab visits.",
    width: 390,
    height: 844,
    caption: "Trends",
  },
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
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  const slide = SLIDES[index];

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
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light border border-greenBorder px-[13px] py-[6px] rounded-full text-[13px] font-semibold text-primary mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-mint shrink-0" />
              Available now on iOS
            </div>

            <h1 className="font-display font-bold text-[52px] sm:text-[60px] leading-[1.02] tracking-[-0.03em] text-navy mb-[22px]">
              Your blood test has a story.<br />
              <span className="text-primary">Serumo tells it.</span>
            </h1>

            <p className="text-[19px] leading-[1.55] text-slate1 max-w-[470px] mb-[34px]">
              Upload any lab report and watch a wall of numbers become plain-language explanations,
              a personal improvement plan, and a health story that grows with every visit. Available in English, French &amp; Arabic.
            </p>

            {/* App Store badge */}
            <div className="flex items-center gap-[18px]">
              <a
                href={APP_STORE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy text-white px-[26px] py-[14px] rounded-[14px] shadow-[0_12px_30px_-8px_hsl(214_47%_12%/0.45),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-8px_hsl(214_47%_12%/0.55)] transition-smooth"
                aria-label="Download on the App Store"
              >
                <AppleLogo className="w-[26px] h-[26px] shrink-0" />
                <div className="leading-[1.12]">
                  <div className="text-[11px] font-medium text-slate3">Download on the</div>
                  <div className="font-display text-[20px] font-bold tracking-[-0.01em]">App Store</div>
                </div>
              </a>

              {/* Social proof */}
              <div className="leading-[1.5]">
                <div className="flex items-center gap-1.5">
                  <StarRating />
                  <span className="text-[13.5px] font-bold text-navy">5.0</span>
                </div>
                <div className="text-[12.5px] text-slate2">Free to start · iPhone &amp; iPad</div>
              </div>
            </div>
          </div>

          {/* ── Right: phone frame + carousel ── */}
          <div
            className="flex justify-center animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {/* Phone outer shell */}
            <div
              className="relative animate-float"
              style={{ width: 290 }}
            >
              <div
                className="w-full rounded-[44px] bg-navy p-[11px] shadow-phone"
              >
                {/* Phone inner screen */}
                <div className="bg-[#F6FBF8] rounded-[34px] overflow-hidden">
                  {/* Status bar spacer */}
                  <div className="h-8" />

                  {/* Carousel area */}
                  <div
                    className="relative overflow-hidden"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="App screenshots"
                    style={{ minHeight: 460 }}
                  >
                    <div className="relative flex items-center justify-center" style={{ minHeight: 460 }}>
                      <img
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        width={slide.width}
                        height={slide.height}
                        className="w-full object-contain object-top select-none"
                        style={{ maxHeight: 460 }}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                      />

                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={goPrev}
                        className="absolute left-1.5 top-1/2 z-20 h-8 w-8 -translate-y-1/2 rounded-full border-white/60 bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="h-4 w-4 text-navy" strokeWidth={2} />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={goNext}
                        className="absolute right-1.5 top-1/2 z-20 h-8 w-8 -translate-y-1/2 rounded-full border-white/60 bg-white/90 shadow-md backdrop-blur-sm hover:bg-white"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="h-4 w-4 text-navy" strokeWidth={2} />
                      </Button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-1.5 py-3">
                      {SLIDES.map((s, i) => (
                        <button
                          key={s.src}
                          type="button"
                          onClick={() => setIndex(i)}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            i === index ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400",
                          )}
                          aria-label={`Show ${s.caption} screenshot`}
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
      </div>
    </section>
  );
};

export default Hero;
