import { Brain, Activity, GitCompare, ListChecks, Layers, Globe2 } from "lucide-react";

const features = [
  { icon: Brain,      title: "AI-powered summaries",     desc: "Educational, plain-language summaries for every report you upload." },
  { icon: Activity,   title: "Marker-level trends",       desc: "Track each biomarker across reports to see how it's evolving." },
  { icon: GitCompare, title: "Progress stories",          desc: "Compare your latest labs with previous results in one glance." },
  { icon: ListChecks, title: "Health logs & reminders",   desc: "Stay consistent with checklists and gentle reminders." },
  { icon: Layers,     title: "Multi-marker patterns",     desc: "Discover broader patterns across markers for a fuller picture." },
  { icon: Globe2,     title: "12+ languages supported",   desc: "Built for a global audience with full multilingual support." },
];

const Features = () => {
  return (
    <section id="features" className="py-[74px] md:py-[90px] bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[13px] font-bold tracking-[.08em] text-primary uppercase">
            Features
          </span>
          <h2 className="font-display font-bold text-[42px] tracking-[-0.02em] leading-[1.06] text-navy mt-3">
            Everything you need to read your labs with confidence.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[18px] overflow-hidden border border-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-7 hover:bg-primary-light transition-smooth group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-light group-hover:bg-white border border-greenBorder flex items-center justify-center transition-smooth">
                  <f.icon className="w-5 h-5 text-primary" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-[17px] tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-slate1 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
