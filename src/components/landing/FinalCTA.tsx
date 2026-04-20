import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-brand px-8 py-16 md:px-16 md:py-24 text-center shadow-elevated">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground tracking-tight leading-tight">
              Ready to understand your labs with confidence?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/90 font-normal">
              Start tracking with VitaFlow today.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button size="xl" className="bg-background text-primary-dark hover:bg-background/90 font-bold group">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                I already have an account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
