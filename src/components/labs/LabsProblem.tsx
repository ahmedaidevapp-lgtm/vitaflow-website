import { NumberedCards, Section, SectionHeader } from "@/components/site/layout";
import { useT } from "@/i18n/context";

const LabsProblem = () => {
  const { problem } = useT().labs;

  return (
    <Section id="problem" className="pb-[60px] pt-[120px]">
      <SectionHeader label={problem.eyebrow} title={problem.title} intro={problem.intro} />
      <NumberedCards items={problem.cards} minWidth={260} large />
    </Section>
  );
};

export default LabsProblem;
