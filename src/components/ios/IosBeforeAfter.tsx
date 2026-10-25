import { Section } from "@/components/site/layout";
import { eyebrow, sectionTitle } from "@/components/site/styles";
import { useT } from "@/i18n/context";
import { cn } from "@/lib/utils";

/** Raw lab values are the same in every language — only the framing copy is translated. */
const RAW_ROWS = [
  { name: "FERRITIN", value: "28 ng/mL", flag: "L" },
  { name: "25-OH VIT D", value: "52 ng/mL", flag: "—" },
  { name: "TSH 3RD GEN", value: "2.1 mIU/L", flag: "—" },
  { name: "HGB A1C", value: "5.4 %", flag: "—" },
  { name: "ALT (SGPT)", value: "31 U/L", flag: "—" },
];

const Label = ({ children, accent }: { children: string; accent?: boolean }) => (
  <div
    className={cn(
      "mb-8 inline-flex rounded-full px-3 py-1 text-[10.5px] tracking-[0.2em]",
      accent ? "bg-brand-soft text-brand" : "bg-mist text-ink-subtle",
    )}
  >
    {children}
  </div>
);

const IosBeforeAfter = () => {
  const b = useT().ios.beforeAfter;

  return (
    <Section id="transformation" className="pt-[120px]">
      <div className="mb-14">
        <div className={cn(eyebrow, "mb-6")}>{b.eyebrow}</div>
        <h2 className={cn(sectionTitle, "max-w-[820px]")}>
          {b.titleLine1}
          <br />
          <span className="text-ink-subtle">{b.titleLine2}</span>
        </h2>
      </div>

      <div className="grid gap-3.5 md:grid-cols-2">
        <div className="rounded-[24px] bg-white px-7 pb-8 pt-7">
          <Label>{b.beforeLabel}</Label>
          <div className="font-mono text-[12px] leading-[2.2] text-ink-subtle" dir="ltr">
            {RAW_ROWS.map((row) => (
              <div key={row.name} className="flex justify-between border-b border-line last:border-0">
                <span>{row.name}</span>
                <span>{row.value}</span>
                <span className="w-4 text-end">{row.flag}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] italic leading-[1.65] text-ink-muted">{b.beforeQuote}</p>
        </div>

        <div className="rounded-[24px] bg-white px-7 pb-8 pt-7">
          <Label accent>{b.afterLabel}</Label>
          <div className="flex flex-col gap-2.5">
            <div className="rounded-[18px] bg-mist px-5 py-4">
              <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[14px] font-medium">{b.markerTitle}</span>
                <span className="rounded-full bg-white px-2.5 py-[3px] text-[11px] text-[#a05e0c]">{b.markerBadge}</span>
              </div>
              <p className="text-[13.5px] leading-[1.55] text-ink-muted">{b.markerDesc}</p>
            </div>
            <div className="rounded-[18px] bg-mist px-5 py-4">
              <div className="mb-1.5 text-[10.5px] tracking-[0.2em] text-brand">{b.planTitle}</div>
              <p className="text-[13.5px] leading-[1.6] text-ink-muted">{b.planDesc}</p>
            </div>
            <div className="rounded-[18px] bg-mist px-5 py-4">
              <div className="mb-1.5 text-[10.5px] tracking-[0.2em] text-ink-subtle">{b.askTitle}</div>
              <p className="text-[13.5px] leading-[1.6] text-ink-muted">{b.askDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IosBeforeAfter;
