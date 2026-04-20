import { ShieldAlert } from "lucide-react";

const TrustBlock = () => {
  return (
    <section id="trust" className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto rounded-3xl bg-background border border-border p-8 md:p-10 shadow-card">
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-warning/15 grid place-items-center">
              <ShieldAlert className="w-5 h-5 text-warning" strokeWidth={2.25} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy tracking-tight">
                Educational insights, not medical advice
              </h3>
              <p className="mt-3 text-slate2 leading-relaxed font-normal">
                VitaFlow helps you understand your lab data for personal wellness and education.
                It does not provide diagnosis or treatment. Always consult a qualified healthcare
                professional for medical decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
