import { AlertTriangle, FileCheck2, Lock, ScrollText, Split } from "lucide-react";
import { useT } from "@/i18n/context";

const POINT_ICONS = [Lock, Split, FileCheck2, ScrollText];

const LabsTrust = () => {
  const { trust } = useT().labs;

  return (
    <section id="trust" className="py-[74px] md:py-[90px] bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Left: ownership card */}
          <div className="bg-primary-light border border-greenBorder rounded-[20px] p-9 lg:sticky lg:top-24">
            <div className="w-[46px] h-[46px] rounded-xl bg-primary flex items-center justify-center mb-5 shadow-[0_4px_14px_-4px_hsl(160_82%_29%/0.5)]">
              <svg
                viewBox="0 0 24 24"
                className="w-[22px] h-[22px] stroke-white fill-none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="font-display text-[24px] font-bold text-navy leading-tight">
              {trust.cardTitle}
            </div>
            <p className="text-[15px] leading-[1.55] text-slate1 mt-2">{trust.cardDesc}</p>
          </div>

          {/* Right: text + points + notice */}
          <div>
            <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
              {trust.eyebrow}
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[38px] leading-[1.08] tracking-[-0.02em] text-navy mb-4">
              {trust.title}
            </h2>
            <p className="text-[16px] leading-[1.6] text-slate1 mb-8">{trust.lead}</p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {trust.points.map((point, i) => {
                const Icon = POINT_ICONS[i];
                return (
                  <div key={point.title}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2.25} aria-hidden />
                      <h3 className="font-display font-bold text-navy text-[15.5px] tracking-[-0.01em]">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[1.6] text-slate1">{point.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Compliance notice — deliberately worded as "designed for", not "approved". */}
            <div className="flex items-start gap-4 bg-[#FBF8F3] border border-[#F0E6D0] rounded-xl p-5">
              <AlertTriangle
                className="w-5 h-5 text-[#C77A18] shrink-0 mt-0.5"
                strokeWidth={2.25}
                aria-hidden
              />
              <div>
                <p className="text-[14px] font-semibold text-navy mb-0.5">{trust.noticeTitle}</p>
                <p className="text-[13.5px] text-slate1 leading-relaxed">{trust.noticeBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsTrust;
