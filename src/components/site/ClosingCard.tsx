import type { ReactNode } from "react";

type Props = {
  id?: string;
  label: string;
  title: string;
  subtitle: string;
  /** The action row: a primary button and an optional note beside it. */
  children: ReactNode;
};

/** Full-width white card that closes a page with one large call to action. */
const ClosingCard = ({ id, label, title, subtitle, children }: Props) => (
  <section id={id} className="scroll-mt-4 px-4 pb-4">
    <div className="rounded-[28px] bg-white px-[clamp(24px,7vw,100px)] py-[clamp(64px,9vw,110px)]">
      <div className="mb-[30px] text-[11px] font-medium uppercase tracking-[0.42em]">{label}</div>
      <h2 className="mb-7 max-w-[960px] text-balance text-[clamp(40px,6vw,84px)] font-light leading-[1.02] tracking-[-0.05em]">
        {title}
      </h2>
      <p className="mb-11 max-w-[560px] text-[15px] leading-[1.7] text-ink-muted">{subtitle}</p>
      <div className="flex flex-wrap items-center gap-[18px]">{children}</div>
    </div>
  </section>
);

export default ClosingCard;
