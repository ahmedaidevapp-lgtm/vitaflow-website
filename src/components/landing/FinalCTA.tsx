const APP_STORE_HREF = "https://apps.apple.com/us/app/vitaflow-health/id6762191392#information";

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" className="w-[26px] h-[26px] fill-navy shrink-0" aria-hidden>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden py-[84px] text-center"
      style={{ background: "linear-gradient(135deg, hsl(214 47% 12%) 30%, hsl(158 49% 14%) 100%)" }}
    >
      {/* Radial glow from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 110%, hsl(153 61% 47% / 0.28), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <h2 className="font-display font-bold text-[48px] leading-[1.06] tracking-[-0.02em] text-white mb-4">
          Start your health story today.
        </h2>
        <p className="text-[18px] leading-[1.5] text-slate3 max-w-[460px] mx-auto mb-[34px]">
          Free to download. Serumo turns any lab report into plain-language insights, tracks your
          biomarker trends, and builds your personal health story over time.
        </p>

        {/* Light badge */}
        <a
          href={APP_STORE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-navy px-7 py-[15px] rounded-[14px] shadow-[0_16px_40px_-10px_hsl(153_61%_47%/0.4)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-10px_hsl(153_61%_47%/0.5)] transition-smooth"
          aria-label="Download Serumo on the App Store"
        >
          <AppleLogo />
          <div className="leading-[1.12] text-left">
            <div className="text-[11px] font-medium text-slate1">Download on the</div>
            <div className="font-display text-[20px] font-bold tracking-[-0.01em]">App Store</div>
          </div>
        </a>

        <div className="mt-[18px] text-[13px] text-slate3">
          ★★★★★ 5.0 · Free to start · iPhone
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
