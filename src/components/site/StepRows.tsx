import { ordinal } from "@/components/site/styles";
import { cn } from "@/lib/utils";

export type Step = {
  tag: string;
  title: string;
  desc: string;
  /** Text shown in the pill beside the step; `code` sets it as a spaced-out code. */
  visual: { primary: string; secondary?: string; code?: boolean };
};

/** Numbered rows, each pairing a step's copy with a pill that previews what happens. */
const StepRows = ({ steps }: { steps: Step[] }) => (
  <ol className="flex flex-col">
    {steps.map((step, i) => (
      <li
        key={step.tag}
        className="flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-line py-8"
      >
        <div className="flex-[0_0_56px] text-[13px] text-ink-faint">{ordinal(i)}</div>
        <div className="min-w-0 flex-[2_1_340px]">
          <div className="mb-2.5 text-[10.5px] tracking-[0.2em] text-ink-subtle">{step.tag}</div>
          <h3 className="mb-2 text-[22px] font-medium tracking-[-0.025em]">{step.title}</h3>
          <p className="max-w-[520px] text-[14px] leading-[1.65] text-ink-muted">{step.desc}</p>
        </div>
        <div className="flex min-w-0 flex-[1_1_240px] items-center gap-3 rounded-[29px] bg-mist py-3 pe-5 ps-3">
          <div className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-white text-[12px] font-medium">
            {ordinal(i)}
          </div>
          <div className="min-w-0">
            <div
              className={cn(
                "break-words text-[13px] font-medium",
                step.visual.code && "font-mono tracking-[0.12em]",
              )}
              dir={step.visual.code ? "ltr" : undefined}
            >
              {step.visual.primary}
            </div>
            {step.visual.secondary && (
              <div className="text-[11px] text-ink-subtle">{step.visual.secondary}</div>
            )}
          </div>
        </div>
      </li>
    ))}
  </ol>
);

export default StepRows;
