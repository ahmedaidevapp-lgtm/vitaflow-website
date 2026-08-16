import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { cn } from "@/lib/utils";

/** Screenshot assets — captions and alt text come from the dictionary, index-aligned. */
const SHOTS = [
  { src: "/webapp-home.png", width: 2368, height: 1234 },
  { src: "/webapp-trends.png", width: 2356, height: 1390 },
  { src: "/webapp-health-log.png", width: 2372, height: 1382 },
] as const;

const ADVANCE_MS = 5000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Auto-advancing showcase of the patient web app, shown in the labs hero. */
const WebAppSlideshow = () => {
  const { t, isRtl } = useLanguage();
  const { showcase } = t.labs.hero;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SHOTS.length;

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  // Autoplay, paused on hover/focus and disabled entirely for reduced-motion users.
  const nextRef = useRef(goNext);
  nextRef.current = goNext;

  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const id = window.setInterval(() => nextRef.current(), ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const shot = SHOTS[index];
  const copy = showcase.slides[index];

  return (
    <div
      className="w-full max-w-[560px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="rounded-[18px] border border-border bg-white shadow-elevated overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={showcase.label}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-[#FAFBFC] px-4 py-2.5">
          <div className="flex gap-1.5 shrink-0" aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E8EC]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E8EC]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E4E8EC]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span
              className="rounded-full bg-white border border-border px-3 py-[3px] font-mono text-[11px] text-slate2"
              dir="ltr"
            >
              app.getserumo.com
            </span>
          </div>
          <div className="w-[38px] shrink-0" aria-hidden />
        </div>

        {/* Screenshot — object-contain so no part of the UI is ever cropped */}
        <div
          className="relative bg-white"
          style={{ aspectRatio: "16 / 9" }}
          aria-live="polite"
        >
          <img
            key={shot.src}
            src={shot.src}
            alt={copy.alt}
            width={shot.width}
            height={shot.height}
            className="absolute inset-0 w-full h-full object-contain object-top select-none animate-fade-up"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />

          {/* Prev / next — arrows follow reading direction */}
          <button
            type="button"
            onClick={isRtl ? goNext : goPrev}
            className="absolute start-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 shadow-md backdrop-blur-sm transition-smooth hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={isRtl ? showcase.next : showcase.prev}
          >
            <ChevronLeft className="h-4 w-4 text-navy" strokeWidth={2.25} aria-hidden />
          </button>
          <button
            type="button"
            onClick={isRtl ? goPrev : goNext}
            className="absolute end-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 shadow-md backdrop-blur-sm transition-smooth hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={isRtl ? showcase.prev : showcase.next}
          >
            <ChevronRight className="h-4 w-4 text-navy" strokeWidth={2.25} aria-hidden />
          </button>
        </div>

        {/* Caption + dots */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <span className="text-[13px] font-semibold text-navy">{copy.caption}</span>
          <div className="flex items-center gap-1.5">
            {SHOTS.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-[#D8DFE5] hover:bg-slate3",
                )}
                aria-label={`${showcase.show} — ${showcase.slides[i].caption}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[12.5px] font-medium text-slate2">{showcase.label}</p>
      <p className="mt-1 flex items-center justify-center gap-1.5 text-center text-[11.5px] text-slate3">
        <Info className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
        {showcase.demoNote}
      </p>
    </div>
  );
};

export default WebAppSlideshow;
