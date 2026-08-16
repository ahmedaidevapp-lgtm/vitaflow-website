import { useT } from "@/i18n/context";

const ValueProps = () => {
  const items = useT().ios.valueProps;

  return (
    <div className="border-t border-b border-border py-[22px]">
      <div className="container flex flex-wrap gap-x-6 gap-y-3 items-center justify-between text-[13.5px] font-semibold text-slate1">
        {items.map((item) => (
          <span key={item}>
            <span className="text-primary me-1">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ValueProps;
