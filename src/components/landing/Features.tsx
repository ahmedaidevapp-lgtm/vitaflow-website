import { Brain, Activity, GitCompare, ListChecks, Layers, Globe2 } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-powered summaries", desc: "Educational, plain-language summaries for every report you upload." },
  { icon: Activity, title: "Marker-level trends", desc: "Track each biomarker across reports to see how it's evolving." },
  { icon: GitCompare, title: "Progress stories", desc: "Compare your latest labs with previous results in one glance." },
  { icon: ListChecks, title: "Health logs & reminders", desc: "Stay consistent with checklists and gentle reminders." },
  { icon: Layers, title: "Multi-marker patterns", desc: "Discover broader patterns across markers for a fuller picture." },
  { icon: Globe2, title: "English, French & Arabic", desc: "Built for a global audience with full multilingual support." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-dark">Features</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Everything you need to read your labs with confidence.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-7 hover:bg-muted transition-smooth">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-light grid place-items-center">
                  <f.icon className="w-5 h-5 text-primary-dark" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-[17px] tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-slate3 text-sm leading-relaxed font-normal">{f.desc}</p>
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
