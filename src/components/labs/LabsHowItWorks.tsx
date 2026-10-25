import { Section, SectionHeader } from "@/components/site/layout";
import FloatingSteps from "@/components/site/FloatingSteps";
import { useT } from "@/i18n/context";

const LabsHowItWorks = () => {
  const { how } = useT().labs;

  const steps = how.steps.map((step, i) => ({
    ...step,
    // The last step's visual is the one-time claim code.
    visual: { primary: step.visualPrimary, secondary: step.visualSecondary, code: i === 3 },
  }));

  return (
    <Section id="how" className="overflow-x-clip">
      <SectionHeader label={how.eyebrow} title={how.title} />
      <FloatingSteps steps={steps} />
    </Section>
  );
};

export default LabsHowItWorks;
