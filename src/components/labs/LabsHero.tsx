import DemoCta from "@/components/demo/DemoCta";
import { HeroCard } from "@/components/site/layout";
import ScreenFan from "@/components/site/ScreenFan";
import { pillPrimary, pillSecondary } from "@/components/site/styles";
import { useT } from "@/i18n/context";

/** The patient web app; alt text comes from the dictionary, index-aligned. */
const SHOTS = [
  { src: "/webapp-home.png", width: 2368, height: 1234 },
  { src: "/webapp-trends.png", width: 2356, height: 1390 },
  { src: "/webapp-health-log.png", width: 2372, height: 1382 },
];

const LabsHero = () => {
  const t = useT();
  const { hero, how } = t.labs;
  // The badge previews step 3 of the flow: the notification the patient receives.
  const notification = how.steps[2];

  return (
    <HeroCard className="lg:min-h-[780px]">
      <div className="relative z-10 max-w-[600px] px-5 pb-10 pt-10 sm:px-11 lg:pb-[110px] lg:pe-11 lg:ps-[clamp(32px,7vw,100px)] lg:pt-[72px]">
        <h1 className="mb-[30px] font-normal">
          <span className="mb-7 block text-[11px] font-medium uppercase tracking-[0.42em] text-ink">
            Serumo{hero.product}
          </span>
          <span className="block text-[clamp(40px,5.2vw,70px)] font-light leading-[1.04] tracking-[-0.045em]">
            {hero.titleLead}
            <span className="font-semibold text-brand">{hero.titleAccent}</span>
            {hero.titleTail}
          </span>
        </h1>
        <p className="mb-10 max-w-[470px] text-pretty text-[14px] leading-[1.7] text-ink-muted lg:mb-14">
          {hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          <DemoCta className={pillPrimary}>{hero.ctaPrimary}</DemoCta>
          <a href="#how" className={pillSecondary}>
            {hero.ctaSecondary}
          </a>
        </div>
        <div className="mt-[22px] text-[12px] text-ink-faint">{hero.note}</div>
      </div>

      <ScreenFan
        variant="browser"
        shots={SHOTS.map((shot, i) => ({ ...shot, alt: hero.shots[i] }))}
        badge={
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3 rounded-full bg-white py-2.5 pe-[22px] ps-2.5 shadow-[0_20px_40px_-16px_rgba(20,20,20,.25)]">
              <div className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-brand-soft">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-brand" strokeWidth={2.2} aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-medium">{notification.visualPrimary}</div>
                <div className="text-[11px] text-ink-subtle">{notification.visualSecondary}</div>
              </div>
            </div>
            {/* Backed in white: it sits over the screenshots and must stay legible. */}
            <div className="rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] text-ink-subtle">
              {hero.demoNote}
            </div>
          </div>
        }
      />
    </HeroCard>
  );
};

export default LabsHero;
