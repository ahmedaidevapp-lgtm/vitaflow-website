import type { ReactNode } from "react";
import { useDemoDialog } from "@/components/demo/DemoDialogProvider";
import { PILOT_MAILTO } from "@/lib/constants";

type Props = {
  className?: string;
  children: ReactNode;
  /** Runs before the dialog opens — the mobile menu uses it to close itself. */
  onActivate?: () => void;
};

/**
 * Every "request a demo" CTA. Opens the shared form dialog, and degrades to the
 * pre-filled mailto link when no Web3Forms key is configured for the build.
 */
const DemoCta = ({ className, children, onActivate }: Props) => {
  const { openDemoDialog, formEnabled } = useDemoDialog();

  if (!formEnabled) {
    return (
      <a href={PILOT_MAILTO} className={className} onClick={onActivate}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onActivate?.();
        openDemoDialog();
      }}
    >
      {children}
    </button>
  );
};

export default DemoCta;
