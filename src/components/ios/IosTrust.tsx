import { Section } from "@/components/site/layout";
import TrustPanel from "@/components/site/TrustPanel";
import { useT } from "@/i18n/context";

const IosTrust = () => {
  const { trust } = useT().ios;

  return (
    <Section id="privacy" className="pb-[120px]">
      <TrustPanel
        label={trust.eyebrow}
        cardTitle={trust.cardTitle}
        cardDesc={trust.cardDesc}
        title={trust.title}
        lead={trust.body}
        notice={{ title: trust.disclaimerTitle, body: trust.disclaimerBody }}
      />
    </Section>
  );
};

export default IosTrust;
