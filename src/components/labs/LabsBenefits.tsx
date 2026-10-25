import { NumberedCards, Section, SectionHeader } from "@/components/site/layout";
import { useT } from "@/i18n/context";

const LabsBenefits = () => {
  const { benefits } = useT().labs;

  return (
    <Section id="benefits">
      <SectionHeader label={benefits.eyebrow} title={benefits.title} />
      <NumberedCards items={benefits.items} rows hover />
    </Section>
  );
};

export default LabsBenefits;
