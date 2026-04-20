import { FileText, LineChart, Lock } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Turn results into clarity",
    desc: "Upload your blood test reports and see your markers organized in plain language.",
  },
  {
    icon: LineChart,
    title: "Track progress over time",
    desc: "Compare reports across visits to spot what's improving, stable, or needs attention.",
  },
  {
    icon: Lock,
    title: "Private and secure by default",
    desc: "Your data is encrypted and accessible only to you.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-light grid place-items-center mb-5 group-hover:bg-gradient-brand transition-smooth">
                <it.icon className="w-5 h-5 text-primary-dark group-hover:text-primary-foreground transition-smooth" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold text-navy tracking-tight">{it.title}</h3>
              <p className="mt-2.5 text-slate3 leading-relaxed font-normal">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
