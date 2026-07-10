const ITEMS = [
  "Every lab supported",
  "Multi-file upload",
  "Locked PDFs",
  "Photo results",
  "12+ languages",
  "100% private",
];

const ValueProps = () => {
  return (
    <div className="border-t border-b border-border py-[22px]">
      <div className="container flex flex-wrap gap-y-3 items-center justify-between text-[13.5px] font-semibold text-slate1">
        {ITEMS.map((item) => (
          <span key={item}>
            <span className="text-primary mr-1">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ValueProps;
