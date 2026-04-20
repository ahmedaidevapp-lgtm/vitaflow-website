import AppStoreBadge from "@/components/landing/AppStoreBadge";

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
            <div className="mt-9 flex justify-center">
              <AppStoreBadge className="inline-flex rounded-lg bg-background/95 p-1.5 shadow-soft ring-1 ring-primary-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
