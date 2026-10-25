import { Section } from "@/components/site/layout";
import { eyebrow, lead, sectionTitle } from "@/components/site/styles";
import { useT } from "@/i18n/context";
import { cn } from "@/lib/utils";

const LabsPortal = () => {
  const { portal } = useT().labs;

  return (
    <Section id="portal">
      <div className="mb-10 flex flex-wrap items-end gap-10">
        <div className="flex-[1_1_420px]">
          <div className={cn(eyebrow, "mb-6")}>{portal.eyebrow}</div>
          <h2 className={sectionTitle}>{portal.title}</h2>
        </div>
        <p className={cn(lead, "max-w-[440px] flex-[1_1_320px]")}>{portal.intro}</p>
      </div>

      <figure className="mb-12 overflow-hidden rounded-[24px] bg-white shadow-[0_40px_80px_-40px_rgba(20,20,20,.3)]">
        <img
          src="/webapp-home.png"
          alt={portal.imgAlt}
          width={2368}
          height={1234}
          className="block w-full"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <ul className="grid gap-x-10 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
        {portal.items.map((item) => (
          <li key={item.title} className="flex gap-3.5 border-t border-line-strong py-5">
            <div className="mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-ink">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} aria-hidden>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 text-[15px] font-medium">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-muted">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default LabsPortal;
