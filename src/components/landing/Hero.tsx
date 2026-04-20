import AppStoreBadge from "@/components/landing/AppStoreBadge";
import { ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

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
              Understand your health better, and set your improvement plan in one place.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate3 max-w-2xl leading-relaxed font-normal">
              VitaFlow transforms complex lab reports into clear, educational insights so you can
              track trends, understand what changed, and take smarter next steps for your wellness.
            </p>
            <div className="mt-9">
              <AppStoreBadge />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate2">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Encrypted, private by default</span>
              <span className="inline-flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Trends across visits</span>
            </div>
          </div>

          {/* App screenshot */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" aria-hidden />
              <div className="relative animate-float">
                <img
                  src="/hero-dashboard.png"
                  alt="VitaFlow dashboard: welcome summary, report stats, and latest lab report with out-of-range markers."
                  width={908}
                  height={1004}
                  className="w-full h-auto rounded-[1.75rem] shadow-elevated ring-1 ring-border/50 bg-background select-none"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
