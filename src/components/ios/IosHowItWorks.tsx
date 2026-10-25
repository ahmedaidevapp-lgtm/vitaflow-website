import { Section, SectionHeader } from "@/components/site/layout";
import StepRows, { type Step } from "@/components/site/StepRows";
import { useT } from "@/i18n/context";

type StepCopy = ReturnType<typeof useT>["ios"]["how"]["steps"][number];

/** Each step's pill; index-aligned with the `ios.how.steps` copy. */
const visualFor = (step: StepCopy, index: number): Step["visual"] => {
  switch (index) {
    // 1 — the files dropped in ("photo.jpg · 2 more")
    case 0:
      return { primary: step.visualPrimary, secondary: `${step.visualSecondary} ${step.visualExtra}` };
    // 2 — the AI headline, a full sentence on its own
    case 1:
      return { primary: step.visualPrimary };
    // 4 — two plan items, one beneath the other
    case 3:
      return { primary: step.visualPrimary, secondary: `${step.visualSecondary} · ${step.visualExtra}` };
    // 5 — the progress figure reads as one line ("Ferritin · Mar → Jun · +41%")
    case 4:
      return { primary: `${step.visualPrimary} ${step.visualSecondary}` };
    default:
      return { primary: step.visualPrimary, secondary: step.visualSecondary };
  }
};

const IosHowItWorks = () => {
  const { how } = useT().ios;
  const steps = how.steps.map((step, i) => ({ ...step, visual: visualFor(step, i) }));

  return (
    <Section id="how">
      <div className="rounded-[28px] bg-white px-[clamp(20px,5vw,64px)] py-16">
        <SectionHeader label={how.eyebrow} title={how.title} className="mb-12" />
        <StepRows steps={steps} />
      </div>
    </Section>
  );
};

export default IosHowItWorks;
