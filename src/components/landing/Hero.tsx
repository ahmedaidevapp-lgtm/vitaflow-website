import { useCallback, useState } from "react";
import AppStoreBadge from "@/components/landing/AppStoreBadge";
import { ChevronLeft, ChevronRight, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/hero-dashboard.png",
    alt: "VitaFlow+ home: welcome back, report summaries, and latest lab report.",
    width: 1198,
    height: 1531,
    caption: "Home",
  },
  {
    src: "/hero-insights.png",
    alt: "Insights view: markers that need attention and educational detail for each test.",
    width: 1202,
    height: 1386,
    caption: "Insights",
  },
  {
    src: "/hero-progress-story.png",
    alt: "Progress story journal comparing reports and summarizing changes over time.",
    width: 1193,
    height: 1367,
    caption: "Progress",
  },
  {
    src: "/hero-trends.png",
    alt: "Trends view: marker values and charts across lab reports by category.",
    width: 1191,
    height: 1776,
    caption: "Trends",
  },
] as const;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const slide = SLIDES[index];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-info/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-powered lab insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy leading-[1.05] tracking-tight">
              Understand your health better, and set your improvement plan in one place.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate3 max-w-2xl leading-relaxed font-normal">
              VitaFlow transforms complex lab reports into clear, educational insights so you can
              track trends, understand what changed, and take smarter next steps for your wellness.
            </p>
            <div className="mt-9">
              <AppStoreBadge />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate2">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Encrypted, private by default</span>
              <span className="inline-flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Trends across visits</span>
            </div>
          </div>

          {/* App screenshots carousel */}
          <div
            className="lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "120ms" }}
            role="region"
            aria-roledescription="carousel"
            aria-label="App screenshots"
          >
            <div className="relative mx-auto max-w-sm">
              <div
                className="pointer-events-none absolute -inset-[12%] rounded-[2.75rem] bg-[radial-gradient(ellipse_at_50%_40%,hsl(160_84%_39%/0.14),transparent_62%)] blur-2xl"
                aria-hidden
              />

              <div className="relative animate-float">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-300/90 via-slate-100/95 to-slate-200/90 p-px shadow-[0_36px_72px_-24px_rgba(15,23,42,0.22),0_12px_28px_-12px_rgba(15,23,42,0.1),0_0_0_1px_rgba(15,23,42,0.04)]">
                  <div className="rounded-[1.9375rem] bg-gradient-to-b from-white via-white to-slate-50/90 p-2.5 sm:p-3 ring-1 ring-inset ring-white/80">
                    <div className="overflow-hidden rounded-[1.375rem] border border-slate-200/95 bg-slate-50/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(15,23,42,0.03)]">
                      <div className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-slate-900/[0.05]">
                        <div className="relative flex min-h-[22rem] items-center justify-center bg-white sm:min-h-[26rem] md:min-h-[28rem]">
                          <img
                            key={slide.src}
                            src={slide.src}
                            alt={slide.alt}
                            width={slide.width}
                            height={slide.height}
                            className="max-h-[22rem] w-full object-contain object-center select-none sm:max-h-[26rem] md:max-h-[28rem]"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            draggable={false}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 z-20 h-9 w-9 -translate-y-1/2 rounded-full border-slate-200/95 bg-white/95 shadow-md backdrop-blur-sm transition-smooth hover:bg-white hover:shadow-lg sm:left-2.5 sm:h-10 sm:w-10"
                            aria-label="Previous screenshot"
                          >
                            <ChevronLeft className="h-4 w-4 text-navy sm:h-5 sm:w-5" strokeWidth={2} />
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 z-20 h-9 w-9 -translate-y-1/2 rounded-full border-slate-200/95 bg-white/95 shadow-md backdrop-blur-sm transition-smooth hover:bg-white hover:shadow-lg sm:right-2.5 sm:h-10 sm:w-10"
                            aria-label="Next screenshot"
                          >
                            <ChevronRight className="h-4 w-4 text-navy sm:h-5 sm:w-5" strokeWidth={2} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col items-center gap-2">
                  <p className="text-xs font-medium text-slate3" aria-live="polite">
                    {slide.caption}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {SLIDES.map((s, i) => (
                      <button
                        key={s.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          i === index
                            ? "w-7 bg-primary"
                            : "w-2 bg-slate-300 hover:bg-slate-400",
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
    </section>
  );
};

export default Hero;
