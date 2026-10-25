import { cn } from "@/lib/utils";

type Option<T extends string> = { value: T; label: string; ariaLabel?: string; lang?: string };

type Props<T extends string> = {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  className?: string;
};

/** Pill-shaped toggle group; the selected option sits on a raised white chip. */
const Segmented = <T extends string>({ label, value, options, onChange, className }: Props<T>) => (
  <div role="group" aria-label={label} className={cn("flex gap-1 rounded-full bg-[#f2f2f1] p-[3px] text-[12px]", className)}>
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        lang={option.lang}
        onClick={() => onChange(option.value)}
        aria-pressed={option.value === value}
        aria-label={option.ariaLabel}
        className={cn(
          "min-w-[34px] whitespace-nowrap rounded-full px-3 py-1.5 text-ink transition-colors",
          option.value === value ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,.12)]" : "hover:bg-white/60",
        )}
      >
        {option.label}
      </button>
    ))}
  </div>
);

export default Segmented;
