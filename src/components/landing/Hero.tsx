import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Droplet } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-info/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-powered lab insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy leading-[1.05] tracking-tight">
              Understand your health better,{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                one blood test at a time.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate3 max-w-2xl leading-relaxed font-normal">
              VitaFlow transforms complex lab reports into clear, educational insights so you can
              track trends, understand what changed, and take smarter next steps for your wellness.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                I already have an account
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate2">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Encrypted, private by default</span>
              <span className="inline-flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Trends across visits</span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" aria-hidden />
              <div className="relative animate-float">
                <div className="rounded-[2.5rem] bg-navy p-3 shadow-elevated">
                  <div className="rounded-[2rem] bg-background overflow-hidden border border-border">
                    {/* Phone status bar */}
                    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] font-semibold text-navy">
                      <span>9:41</span>
                      <span>•••</span>
                    </div>
                    {/* App content */}
                    <div className="px-5 pb-6 pt-2">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-xs font-medium text-slate3">Latest report</p>
                          <h3 className="text-lg font-bold text-navy">Hello, Sarah</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary-light grid place-items-center">
                          <Droplet className="w-4 h-4 text-primary-dark" />
                        </div>
                      </div>

                      {/* Score card */}
                      <div className="rounded-2xl bg-gradient-brand p-5 text-primary-foreground mb-4">
                        <p className="text-xs font-semibold opacity-90">Wellness Score</p>
                        <p className="text-4xl font-extrabold mt-1">87<span className="text-xl opacity-80">/100</span></p>
                        <p className="text-xs mt-2 opacity-90 font-medium">↑ 6 points since last visit</p>
                      </div>

                      {/* Markers */}
                      <div className="space-y-2.5">
                        {[
                          { name: "Vitamin D", val: "42 ng/mL", status: "Optimal", color: "primary" },
                          { name: "Cholesterol", val: "188 mg/dL", status: "Good", color: "info" },
                          { name: "Iron", val: "Low", status: "Watch", color: "warning" },
                        ].map((m) => (
                          <div key={m.name} className="flex items-center justify-between p-3 rounded-xl bg-muted">
                            <div>
                              <p className="text-sm font-semibold text-navy">{m.name}</p>
                              <p className="text-xs text-slate3 font-medium">{m.val}</p>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                              m.color === "primary" ? "bg-primary-light text-primary-dark" :
                              m.color === "info" ? "bg-info/15 text-info" :
                              "bg-warning/15 text-warning"
                            }`}>
                              {m.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
