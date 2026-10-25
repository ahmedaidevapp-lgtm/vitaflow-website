import { Section } from "@/components/site/layout";
import { useT } from "@/i18n/context";

const IosValueProps = () => {
  const items = useT().ios.valueProps;

  return (
    <Section className="pb-0 pt-10">
      <ul className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 rounded-full bg-white py-2 pe-4 ps-2 text-[13px]">
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink" aria-hidden>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default IosValueProps;
