const RAW_ROWS = [
  { name: "FERRITIN",    value: "28 ng/mL",  flag: "L" },
  { name: "25-OH VIT D", value: "52 ng/mL",  flag: "—" },
  { name: "TSH 3RD GEN", value: "2.1 mIU/L", flag: "—" },
  { name: "HGB A1C",     value: "5.4 %",     flag: "—" },
  { name: "ALT (SGPT)",  value: "31 U/L",    flag: "—" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BeforeAfter = () => {
  return (
    <section className="py-[74px]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
            The transformation
          </div>
          <h2 className="font-display font-bold text-[42px] leading-[1.06] tracking-[-0.02em] text-navy">
            What your lab gives you.<br />What Serumo gives you.
          </h2>
        </div>

        {/* Before / arrow / after */}
        <div className="grid lg:grid-cols-[1fr_72px_1fr] items-stretch gap-0">

          {/* ── BEFORE ── */}
          <div className="relative bg-[#F5F6F8] border border-[#E4E8EC] rounded-[18px] p-7">
            <div className="absolute -top-[13px] left-6 bg-slate1 text-white text-[11.5px] font-bold tracking-[.06em] px-3 py-[5px] rounded-full">
              BEFORE
            </div>
            <div className="font-mono text-[12px] leading-loose text-slate2">
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
            <p className="mt-5 text-[14.5px] leading-[1.55] text-slate1 italic">
              "Is L bad? Should I worry? What do I even do with this?"
            </p>
          </div>

          {/* ── Arrow ── */}
          <div className="flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-[0_8px_20px_-6px_hsl(160_82%_29%/0.5)]">
              <ArrowIcon />
            </div>
          </div>

          {/* ── WITH SERUMO ── */}
          <div className="relative bg-primary-light border border-greenBorder rounded-[18px] p-7">
            <div className="absolute -top-[13px] left-6 bg-primary text-white text-[11.5px] font-bold tracking-[.06em] px-3 py-[5px] rounded-full">
              WITH SERUMO
            </div>
            <div className="flex flex-col gap-2.5">
              {/* Marker explanation card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-bold text-[14.5px] text-navy">Ferritin — your iron reserves</span>
                  <span className="text-[11px] font-bold text-[#C77A18] bg-[#FBF0DC] px-2.5 py-[3px] rounded-full">
                    Slightly low
                  </span>
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.5]">
                  Low iron stores often explain tiredness. Very common, very fixable.
                </p>
              </div>

              {/* Action plan card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="text-[13px] font-bold text-primary mb-1.5 tracking-[.04em]">
                  YOUR 3-STEP PLAN
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.6]">
                  Iron-rich meals 4×/week · pair with vitamin C · retest in 12 weeks
                </p>
              </div>

              {/* Ask your doctor card */}
              <div className="bg-white border border-greenBorder rounded-xl p-[14px] px-4">
                <div className="text-[13px] font-bold text-teal mb-1.5 tracking-[.04em]">
                  ASK YOUR DOCTOR
                </div>
                <p className="text-[13.5px] text-slate1 leading-[1.6]">
                  "Could low ferritin explain my fatigue? Should we test iron saturation too?"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default BeforeAfter;
