import { Upload, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload your report", desc: "Add your blood test PDF or image in seconds." },
  { icon: Sparkles, title: "Get clear insights", desc: "VitaFlow explains every marker in plain language." },
  { icon: TrendingUp, title: "See your trends", desc: "Track how your markers change between visits." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-dark">How it works</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy tracking-tight">
            From lab report to clarity in three steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative p-8 rounded-3xl bg-gradient-soft border border-border">
              <div className="absolute top-6 right-6 text-6xl font-extrabold text-primary/10 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center mb-5 shadow-soft">
                <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-slate3 font-normal leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
