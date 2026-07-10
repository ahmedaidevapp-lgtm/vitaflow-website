const TrustBlock = () => {
  return (
    <section id="privacy" className="py-[74px] md:py-[90px] bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">

          {/* Left: green card */}
          <div className="bg-primary-light border border-greenBorder rounded-[20px] p-9">
            <div className="w-[46px] h-[46px] rounded-xl bg-primary flex items-center justify-center mb-5 shadow-[0_4px_14px_-4px_hsl(160_82%_29%/0.5)]">
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-white fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="font-display text-[30px] font-bold text-navy">100% private</div>
            <p className="text-[15px] leading-[1.55] text-slate1 mt-2">
              Private by design. We never sell or share your health data — no ads, no exceptions.
            </p>
          </div>

          {/* Right: text */}
          <div>
            <div className="text-[13px] font-bold tracking-[.08em] text-primary mb-3 uppercase">
              Privacy first
            </div>
            <h2 className="font-display font-bold text-[38px] leading-[1.08] tracking-[-0.02em] text-navy mb-4">
              A story only you can read.
            </h2>
            <p className="text-[16px] leading-[1.6] text-slate1 mb-6">
              Your bloodwork is some of the most personal data you have. Serumo keeps it encrypted
              and under your control, always.
            </p>

            {/* Disclaimer */}
            <div className="flex items-start gap-4 bg-[#FBF8F3] border border-[#F0E6D0] rounded-xl p-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C77A18] stroke-current fill-none shrink-0 mt-0.5" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <p className="text-[14px] font-semibold text-navy mb-0.5">Educational insights, not medical advice</p>
                <p className="text-[13.5px] text-slate1 leading-relaxed">
                  Serumo helps you understand your lab data for personal wellness and education.
                  It does not provide diagnosis or treatment. Always consult a qualified healthcare professional for medical decisions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
