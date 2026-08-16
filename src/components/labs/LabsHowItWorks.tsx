import { useT } from "@/i18n/context";

type StepCopy = ReturnType<typeof useT>["labs"]["how"]["steps"][number];

/** Each step gets a distinct visual; index-aligned with the `how.steps` copy. */
const renderVisual = (step: StepCopy, index: number) => {
  switch (index) {
    // 1 — the lab deposits a PDF
    case 0:
      return (
        <div className="bg-navy border border-dashed border-[#33566E] rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-[10px] bg-[#1D3A52] flex items-center justify-center text-tealLight text-lg font-bold shrink-0">
            ＋
          </div>
          <div className="text-[12.5px] leading-[1.45] text-slate3 min-w-0">
            <div className="font-mono truncate" dir="ltr">
              {step.visualPrimary}
            </div>
            <div className="text-mint mt-0.5">{step.visualSecondary}</div>
          </div>
        </div>
      );

    // 2 — Serumo matches on the CIN
    case 1:
      return (
        <div
          className="rounded-xl p-4 text-white"
          style={{ background: "linear-gradient(135deg, hsl(160 82% 29%), hsl(195 82% 31%))" }}
        >
          <div className="flex items-center gap-2 text-[13px] font-bold">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-[11px] shrink-0">
              ✓
            </span>
            {step.visualPrimary}
          </div>
          <div className="mt-1.5 text-[12.5px] leading-[1.5] text-white/85">
            {step.visualSecondary}
          </div>
        </div>
      );

    // 3 — the patient is notified
    case 2:
      return (
        <div className="bg-navy border border-darkBorder rounded-xl p-4">
          <div className="rounded-[10px] bg-[#1D3A52] px-3 py-2.5 text-[12.5px] leading-[1.45] text-white">
            {step.visualPrimary}
          </div>
          <div className="mt-2 text-[11.5px] text-slate3">{step.visualSecondary}</div>
        </div>
      );

    // 4 — verified claim with a one-time code
    default:
      return (
        <div className="bg-[rgba(15,27,45,0.55)] border border-[#1F5A42] rounded-xl p-4 text-center">
          <div
            className="font-mono text-[22px] font-bold tracking-[0.12em] text-mint"
            dir="ltr"
          >
            {step.visualPrimary}
          </div>
          <div className="mt-2 text-[11.5px] leading-[1.45] text-slate3">
            {step.visualSecondary}
          </div>
        </div>
      );
  }
};

const LabsHowItWorks = () => {
  const { how } = useT().labs;

  return (
    <section id="how" className="py-[74px] md:py-[90px] bg-navy">
      <div className="container">
        <div className="max-w-2xl mb-[52px]">
          <div className="text-[13px] font-bold tracking-[.08em] text-mint mb-3 uppercase">
            {how.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[34px] sm:text-[42px] leading-[1.06] tracking-[-0.02em] text-white">
            {how.title}
          </h2>
        </div>

        <div className="relative ps-[52px] md:ps-[84px]">
          {/* Vertical rail */}
          <div
            className="absolute start-[11px] md:start-[27px] top-0 bottom-0 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(153 61% 47%), hsl(195 82% 31%) 60%, rgba(51,166,196,0.15))",
            }}
            aria-hidden
          />

          <ol className="flex flex-col gap-4">
            {how.steps.map((step, i) => {
              const isLast = i === how.steps.length - 1;
              return (
                <li key={step.tag} className="relative">
                  {/* Rail dot */}
                  <div
                    className="absolute -start-[47px] md:-start-[63px] top-[28px] w-3 h-3 rounded-full bg-mint border-2 border-navy shrink-0"
                    aria-hidden
                  />

                  <div
                    className={[
                      "grid lg:grid-cols-[1fr_280px] gap-6 rounded-2xl border p-[26px] items-center",
                      isLast
                        ? "border-[#1F5A42] bg-[linear-gradient(135deg,hsl(158_49%_14%),hsl(214_46%_16%))]"
                        : "border-darkBorder bg-darkCard",
                    ].join(" ")}
                  >
                    <div>
                      <div className="font-display text-[12.5px] font-bold text-mint mb-2 tracking-[.04em]">
                        {step.tag}
                      </div>
                      <h3 className="font-display text-[20px] font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[14.5px] leading-[1.55] text-slate3">{step.desc}</p>
                    </div>
                    <div>{renderVisual(step, i)}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default LabsHowItWorks;
