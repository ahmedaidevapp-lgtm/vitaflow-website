import AppStoreButton from "@/components/ios/AppStoreButton";
import { HeroCard } from "@/components/site/layout";
import ScreenFan from "@/components/site/ScreenFan";
import { useT } from "@/i18n/context";

/** Current app screens, from screenshots/ resized for the web; alt text is index-aligned. */
const SHOTS = ["01-home", "03-report-detail", "06-trends", "09-plans"].map((name) => ({
  src: `/app-screens/${name}.png`,
  width: 690,
  height: 1493,
}));

const StarRating = () => (
  <svg viewBox="0 0 110 20" className="h-[17px] w-24" aria-hidden>
    <g fill="#F5A623">
      {[0, 22, 44, 66, 88].map((x) => (
        <path key={x} d={`M${x + 10} 1l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`} />
      ))}
    </g>
  </svg>
);

const IosHero = () => {
  const { hero } = useT().ios;

  return (
    <HeroCard className="lg:min-h-[780px]">
      <div className="relative z-10 max-w-[600px] px-5 pb-10 pt-10 sm:px-11 lg:pb-[110px] lg:pe-11 lg:ps-[clamp(32px,7vw,100px)] lg:pt-[72px]">
        <div className="mb-7 text-[11px] font-medium uppercase tracking-[0.42em]">{hero.badge}</div>
        <h1 className="mb-[30px] text-[clamp(40px,5vw,64px)] font-light leading-[1.04] tracking-[-0.045em]">
          {hero.titleLead} <span className="font-semibold text-brand">{hero.titleAccent}</span>
        </h1>
        <p className="mb-10 max-w-[470px] text-pretty text-[14px] leading-[1.7] text-ink-muted lg:mb-14">
          {hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-[18px]">
          <AppStoreButton />
          <div className="leading-[1.5]">
            <div className="flex items-center gap-1.5">
              <StarRating />
              <span className="text-[13.5px] font-medium">{hero.rating}</span>
            </div>
            <div className="text-[12px] text-ink-faint">{hero.socialProof}</div>
          </div>
        </div>
      </div>

      <ScreenFan
        variant="phone"
        shots={SHOTS.map((shot, i) => ({ ...shot, alt: hero.shots[i] }))}
      />
    </HeroCard>
  );
};

export default IosHero;
