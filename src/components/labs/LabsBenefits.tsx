import { Boxes, Clock, HeartHandshake, MessageCircle, PlugZap, ShieldCheck } from "lucide-react";
import { useT } from "@/i18n/context";

const ICONS = [PlugZap, Boxes, ShieldCheck, MessageCircle, HeartHandshake, Clock];

const LabsBenefits = () => {
  const { benefits } = useT().labs;

  return (
    <section id="benefits" className="py-[74px] md:py-[90px] bg-white">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-[13px] font-bold tracking-[.08em] text-primary uppercase">
            {benefits.eyebrow}
          </span>
          <h2 className="font-display font-bold text-[34px] sm:text-[42px] tracking-[-0.02em] leading-[1.06] text-navy mt-3">
            {benefits.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[18px] overflow-hidden border border-border">
          {benefits.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="bg-white p-7 hover:bg-primary-light transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-light group-hover:bg-white border border-greenBorder flex items-center justify-center transition-smooth">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={2.25} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy text-[17px] tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-slate1 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabsBenefits;
