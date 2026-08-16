import { Mail } from "lucide-react";
import { useT } from "@/i18n/context";
import { PILOT_MAILTO, SUPPORT_EMAIL } from "@/lib/constants";

const LabsCTA = () => {
  const { cta } = useT().labs;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[84px] text-center"
      style={{ background: "linear-gradient(135deg, hsl(214 47% 12%) 30%, hsl(158 49% 14%) 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 110%, hsl(153 61% 47% / 0.28), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <h2 className="font-display font-bold text-[36px] sm:text-[46px] leading-[1.06] tracking-[-0.02em] text-white mb-4">
          {cta.title}
        </h2>
        <p className="text-[17px] leading-[1.55] text-slate3 max-w-[560px] mx-auto mb-[34px]">
          {cta.subtitle}
        </p>

        <a
          href={PILOT_MAILTO}
          className="inline-flex items-center gap-3 bg-white text-navy px-7 py-[15px] rounded-[14px] font-semibold shadow-[0_16px_40px_-10px_hsl(153_61%_47%/0.4)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-10px_hsl(153_61%_47%/0.5)] transition-smooth"
        >
          <Mail className="w-[20px] h-[20px] shrink-0" strokeWidth={2.25} aria-hidden />
          {cta.button}
        </a>

        <p className="mt-5 font-mono text-[14px] text-white" dir="ltr">
          {SUPPORT_EMAIL}
        </p>

        <p className="mt-2 text-[13px] text-slate3">{cta.secondary}</p>
        <p className="mt-6 text-[12.5px] text-slate3/80">{cta.legal}</p>
      </div>
    </section>
  );
};

export default LabsCTA;
