import { Check } from "lucide-react";
import { useT } from "@/i18n/context";

const LabsPortal = () => {
  const { portal } = useT().labs;

  return (
    <section id="portal" className="py-[74px] md:py-[90px] bg-gradient-soft border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          {/* Left: section header */}
          <div className="lg:sticky lg:top-24">
            <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
              {portal.eyebrow}
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[38px] leading-[1.08] tracking-[-0.02em] text-navy mb-4">
              {portal.title}
            </h2>
            <p className="text-[16px] leading-[1.6] text-slate1">{portal.intro}</p>
          </div>

          {/* Right: capability list */}
          <ul className="grid sm:grid-cols-2 gap-4">
            {portal.items.map((item) => (
              <li
                key={item.title}
                className="rounded-[16px] border border-border bg-white p-6 shadow-soft"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-full bg-primary-light border border-greenBorder flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} aria-hidden />
                  </span>
                  <h3 className="font-display font-bold text-navy text-[16px] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.6] text-slate1">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LabsPortal;
