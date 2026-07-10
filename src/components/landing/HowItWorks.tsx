const steps = [
  {
    tag: "STEP 1 · TODAY",
    title: "Drop in everything you have",
    desc: "PDFs, photos of paper results, locked reports, or multiple files at once — from any lab, in English, French, or Arabic. Serumo reads them all.",
    visual: (
      <div className="bg-navy border border-dashed border-[#33566E] rounded-xl p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-[10px] bg-[#1D3A52] flex items-center justify-center text-tealLight text-lg font-bold shrink-0">
          ＋
        </div>
        <div className="text-[12.5px] leading-[1.45] text-slate3">
          lab_results_march.pdf<br />
          bloodwork_photo.jpg <span className="text-mint">· 2 more</span>
        </div>
      </div>
    ),
  },
  {
    tag: "STEP 2 · 30 SECONDS LATER",
    title: "Get the headline, instantly",
    desc: "An AI summary tells you what's healthy, what needs attention, and how urgent it is — before you read a single number.",
    visual: (
      <div
        className="rounded-xl p-4 text-[12.5px] leading-[1.5] text-white"
        style={{ background: "linear-gradient(135deg, hsl(160 82% 29%), hsl(195 82% 31%))" }}
      >
        13 of 14 markers look healthy. Ferritin is slightly low — nothing alarming, and very fixable.
      </div>
    ),
  },
  {
    tag: "STEP 3 · WHEN YOU'RE CURIOUS",
    title: "Understand every marker",
    desc: "Tap any biomarker for a plain-language explanation of what it is, what your number means, and why it matters for you.",
    visual: (
      <div className="bg-navy border border-darkBorder rounded-xl p-4">
        <div className="text-[13px] font-bold text-white mb-1.5">What is ferritin?</div>
        <div className="text-[12px] leading-[1.5] text-slate3">
          Think of it as your body's iron savings account. Yours is running a little low…
        </div>
      </div>
    ),
  },
  {
    tag: "STEP 4 · THIS WEEK",
    title: "Follow your improvement plan",
    desc: "Practical, personalised steps for each marker that needs work — food, habits, health logs, and when to retest.",
    visual: (
      <div className="bg-navy border border-darkBorder rounded-xl p-4 text-[12.5px] leading-[1.7] text-slate3">
        <span className="text-mint">✓</span> Iron-rich meals 4×/week<br />
        <span className="text-mint">✓</span> Pair with vitamin C<br />
        <span className="text-[#33566E]">○</span> Retest in 12 weeks
      </div>
    ),
  },
  {
    tag: "EVERY VISIT AFTER · YOUR STORY",
    title: "Watch your progress story grow",
    desc: "Each new test adds a chapter. Trends across every marker, every visit — proof that what you're doing is working.",
    visual: (
      <div className="bg-[rgba(15,27,45,0.55)] border border-[#1F5A42] rounded-xl p-4">
        <svg viewBox="0 0 240 60" className="w-full h-12 block" aria-hidden>
          <polyline
            points="0,50 40,46 80,40 120,34 160,24 200,16 240,8"
            fill="none"
            stroke="hsl(153 61% 47%)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={240} cy={8} r={4.5} fill="hsl(153 61% 47%)" />
        </svg>
        <div className="text-[11.5px] text-slate3 mt-2">
          Ferritin · Mar → Jun ·{" "}
          <span className="text-mint font-bold">+41%</span>
        </div>
      </div>
    ),
    highlight: true,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-[74px] md:py-[90px] bg-navy">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-[52px]">
          <div className="text-[13px] font-bold tracking-[.08em] text-mint mb-3 uppercase">
            Your Journey
          </div>
          <h2 className="font-display font-bold text-[42px] leading-[1.06] tracking-[-0.02em] text-white">
            From one upload to a lifetime of understanding
          </h2>
        </div>

        {/* Rail + steps */}
        <div className="relative pl-[84px]">
          {/* Vertical rail */}
          <div
            className="absolute left-[27px] top-0 bottom-0 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(153 61% 47%), hsl(195 82% 31%) 60%, rgba(51,166,196,0.15))",
            }}
          />

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div
                key={step.tag}
                className="relative"
              >
                {/* Rail dot */}
                <div className="absolute -left-[57px] top-[28px] w-3 h-3 rounded-full bg-mint border-2 border-navy shrink-0" />

                <div
                  className={[
                    "grid lg:grid-cols-[1fr_300px] gap-6 rounded-2xl border p-[26px] items-center",
                    step.highlight
                      ? "border-[#1F5A42] bg-[linear-gradient(135deg,hsl(158_49%_14%),hsl(214_46%_16%))]"
                      : "border-darkBorder bg-darkCard",
                  ].join(" ")}
                >
                  <div>
                    <div className="font-display text-[13px] font-bold text-mint mb-2 tracking-[.04em]">
                      {step.tag}
                    </div>
                    <h3 className="font-display text-[20px] font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.55] text-slate3">{step.desc}</p>
                  </div>
                  <div>{step.visual}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
