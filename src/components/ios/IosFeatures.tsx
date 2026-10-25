import { NumberedCards, Section, SectionHeader } from "@/components/site/layout";
import { useT } from "@/i18n/context";

const IosFeatures = () => {
  const { features } = useT().ios;

  return (
    <Section id="features">
      <SectionHeader label={features.eyebrow} title={features.title} />
      <NumberedCards items={features.items} rows hover />
    </Section>
  );
};

export default IosFeatures;
