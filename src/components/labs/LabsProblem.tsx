import { FileX2, MailWarning, Unplug } from "lucide-react";
import { useT } from "@/i18n/context";

const ICONS = [FileX2, MailWarning, Unplug];

const LabsProblem = () => {
  const { problem } = useT().labs;

  return (
    <section id="problem" className="py-[74px] md:py-[90px] bg-white border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
            {problem.eyebrow}
          </div>
          <h2 className="font-display font-bold text-[34px] sm:text-[42px] leading-[1.06] tracking-[-0.02em] text-navy">
            {problem.title}
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.6] text-slate1">{problem.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problem.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={card.title}
                className="rounded-[18px] border border-border bg-[#FAFBFC] p-7 shadow-soft"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-slate1" strokeWidth={2.25} aria-hidden />
                </div>
                <h3 className="font-display font-bold text-navy text-[18px] tracking-[-0.01em]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-slate1">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabsProblem;
