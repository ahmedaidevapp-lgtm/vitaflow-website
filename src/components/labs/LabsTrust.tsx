import { Section } from "@/components/site/layout";
import TrustPanel from "@/components/site/TrustPanel";
import { useT } from "@/i18n/context";

const LabsTrust = () => {
  const { trust } = useT().labs;

  return (
    <Section id="trust" className="pb-[120px]">
      <TrustPanel
        label={trust.eyebrow}
        cardTitle={trust.cardTitle}
        cardDesc={trust.cardDesc}
        title={trust.title}
        lead={trust.lead}
        points={trust.points}
        notice={{ title: trust.noticeTitle, body: trust.noticeBody }}
      />
    </Section>
  );
};

export default LabsTrust;
