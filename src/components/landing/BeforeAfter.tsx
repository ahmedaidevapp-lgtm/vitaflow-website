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

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 stroke-white fill-none rtl:rotate-180"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BeforeAfter = () => {
  const b = useT().ios.beforeAfter;

  return (
    <section className="py-[74px]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
            {b.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[34px] sm:text-[42px] leading-[1.06] tracking-[-0.02em] text-navy">
            {b.titleLine1}
            <br />
            {b.titleLine2}
          </h2>
        </div>

        {/* Before / arrow / after */}
        <div className="grid lg:grid-cols-[1fr_72px_1fr] items-stretch gap-4 lg:gap-0">
          {/* ── BEFORE ── */}
          <div className="relative bg-[#F5F6F8] border border-[#E4E8EC] rounded-[18px] p-7">
            <div className="absolute -top-[13px] start-6 bg-slate1 text-white text-[11.5px] font-bold tracking-[.06em] px-3 py-[5px] rounded-full">
              {b.beforeLabel}
            </div>
            <div className="font-mono text-[12px] leading-loose text-slate2" dir="ltr">
              {RAW_ROWS.map((row, i) => (
                <div
                  key={row.name}
                  className={cn(
                    "flex justify-between",
                    i < RAW_ROWS.length - 1 && "border-b border-[#E4E8EC]",
                  )}
                >
                  <span>{row.name}</span>
                  <span>{row.value}</span>
                  <span>{row.flag}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14.5px] leading-[1.55] text-slate1 italic">{b.beforeQuote}</p>
          </div>

          {/* ── Arrow ── */}
          <div className="flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_20px_-6px_hsl(160_82%_29%/0.5)]">
              <ArrowIcon />
            </div>
          </div>

          {/* ── WITH SERUMO ── */}
          <div className="relative bg-primary-light border border-greenBorder rounded-[18px] p-7">
            <div className="absolute -top-[13px] start-6 bg-primary text-white text-[11.5px] font-bold tracking-[.06em] px-3 py-[5px] rounded-full">
              {b.afterLabel}
            </div>
            <div className="flex flex-col gap-2.5">
              {/* Marker explanation card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-1.5">
                  <span className="font-bold text-[14.5px] text-navy">{b.markerTitle}</span>
                  <span className="text-[11px] font-bold text-[#C77A18] bg-[#FBF0DC] px-2.5 py-[3px] rounded-full">
                    {b.markerBadge}
                  </span>
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.5]">{b.markerDesc}</p>
              </div>

              {/* Action plan card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="text-[13px] font-bold text-primary mb-1.5 tracking-[.04em]">
                  {b.planTitle}
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.6]">{b.planDesc}</p>
              </div>

              {/* Ask your doctor card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="text-[13px] font-bold text-teal mb-1.5 tracking-[.04em]">
                  {b.askTitle}
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.6]">{b.askDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
