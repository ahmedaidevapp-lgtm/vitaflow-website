import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLanguage } from "@/i18n/context";
import { ordinal } from "@/components/site/styles";
import { cn } from "@/lib/utils";
import type { Step } from "@/components/site/StepRows";

/** Resting tilt of a card, in degrees — the same loose stacking as the hero screenshots. */
const REST_TILT = 2;

/**
 * Steps as floating cards that zig-zag down a dashed path. Each card swings into place as
 * it scrolls into view, then bobs gently; reduced-motion visitors get them settled.
 */
const FloatingSteps = ({ steps }: { steps: Step[] }) => {
  const { isRtl } = useLanguage();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  // The parent rebuilds `steps` every render, so the effect keys off the count instead.
  const count = steps.length;
  const [shown, setShown] = useState<boolean[]>(() => steps.map(() => false));

  useEffect(() => {
    // With reduced motion, show everything.
    if (reducedMotion) {
      setShown(Array.from({ length: count }, () => true));
      return;
    }
    // Reveal every card whose top has crossed the line near the bottom of the viewport —
    // including any already scrolled past. Measuring on each scroll, rather than waiting
    // for an IntersectionObserver entry, means a missed event (scroll restoration on
    // reload, a fast jump, remounted cards) can never leave a card invisible.
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.9;
      const reached = refs.current.map((el) => !!el && el.getBoundingClientRect().top < line);
      // Once in place a card stays put; scrolling back up must not replay it.
      setShown((prev) => (prev.some((v, i) => !v && reached[i]) ? prev.map((v, i) => v || reached[i]) : prev));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reducedMotion, count]);

  const dir = isRtl ? -1 : 1;

  return (
    <ol className="relative flex flex-col gap-5 md:gap-0">
      {/* The path the cards hang off, down the middle on wide screens. */}
      <div
        className="pointer-events-none absolute inset-y-10 start-1/2 hidden border-s-2 border-dashed border-line-strong md:block"
        aria-hidden
      />

      {steps.map((step, i) => {
        // Cards alternate sides; `side` is -1 for the start column, 1 for the end column.
        const side = i % 2 === 0 ? -1 : 1;
        const tilt = dir * side * REST_TILT;
        const visible = shown[i];

        return (
          <li
            key={step.tag}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={cn(
              "relative z-[1] w-full md:w-[min(500px,47%)]",
              side < 0 ? "md:self-start" : "md:self-end",
              // Overlap vertically so the cards read as one cascading stack, as in the hero.
              i > 0 && "md:-mt-28",
            )}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? `rotate(${tilt}deg)`
                : `translate(${dir * side * 60}px, 90px) rotate(${tilt * 4}deg)`,
              transition: reducedMotion
                ? "none"
                : "transform 1100ms cubic-bezier(.2,.8,.2,1), opacity 700ms ease-out",
            }}
          >
            <div
              className="rounded-[24px] bg-white p-7 shadow-[0_50px_90px_-40px_rgba(20,20,20,.35),0_12px_30px_-12px_rgba(20,20,20,.12)] motion-safe:animate-float"
              // Out of phase, so the cards drift independently rather than in lockstep.
              style={{ animationDelay: `${i * -1.7}s`, animationDuration: `${6 + (i % 3)}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mist text-[12px] font-medium">
                  {ordinal(i)}
                </div>
                <div className="text-[10.5px] tracking-[0.2em] text-ink-subtle">{step.tag}</div>
              </div>
              <h3 className="mb-2 mt-5 text-[22px] font-medium tracking-[-0.025em]">{step.title}</h3>
              <p className="text-[14px] leading-[1.65] text-ink-muted">{step.desc}</p>
              <div className="mt-6 flex items-center gap-3 rounded-[20px] bg-mist px-4 py-3">
                <span className="h-2 w-2 flex-none rounded-full bg-brand" aria-hidden />
                <div className="min-w-0">
                  <div
                    className={cn(
                      "break-words text-[13px] font-medium",
                      step.visual.code && "font-mono tracking-[0.12em]",
                    )}
                    dir={step.visual.code ? "ltr" : undefined}
                  >
                    {step.visual.primary}
                  </div>
                  {step.visual.secondary && (
                    <div className="text-[11px] text-ink-subtle">{step.visual.secondary}</div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default FloatingSteps;
