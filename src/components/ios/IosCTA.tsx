import AppStoreButton from "@/components/ios/AppStoreButton";
import ClosingCard from "@/components/site/ClosingCard";
import { useT } from "@/i18n/context";

const IosCTA = () => {
  const { hero, cta } = useT().ios;

  return (
    <ClosingCard id="download" label={hero.badge} title={cta.title} subtitle={cta.subtitle}>
      <AppStoreButton />
      <span className="text-[13px] text-ink-subtle">{cta.note}</span>
    </ClosingCard>
  );
};

export default IosCTA;
