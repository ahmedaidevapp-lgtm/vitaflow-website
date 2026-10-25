import DemoCta from "@/components/demo/DemoCta";
import ClosingCard from "@/components/site/ClosingCard";
import { pillPrimary } from "@/components/site/styles";
import { useT } from "@/i18n/context";
import { cn } from "@/lib/utils";

const LabsCTA = () => {
  const { cta } = useT().labs;

  return (
    <ClosingCard id="contact" label={cta.eyebrow} title={cta.title} subtitle={cta.subtitle}>
      <DemoCta className={cn(pillPrimary, "px-[26px] py-3.5 text-[14px]")}>{cta.button}</DemoCta>
      <span className="text-[13px] text-ink-subtle">{cta.secondary}</span>
    </ClosingCard>
  );
};

export default LabsCTA;
