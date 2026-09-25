import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import DemoRequestDialog from "@/components/demo/DemoRequestDialog";
import DiscoveryCallPopup from "@/components/demo/DiscoveryCallPopup";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

type DemoDialogValue = {
  /** Opens the shared demo form. */
  openDemoDialog: () => void;
  /**
   * False when no Web3Forms key is configured — callers then render the plain mailto
   * link instead of a button that would submit into a void.
   */
  formEnabled: boolean;
  /** True once the visitor has opened the form, so we stop inviting them to. */
  demoRequested: boolean;
};

const DemoDialogContext = createContext<DemoDialogValue>({
  openDemoDialog: () => undefined,
  formEnabled: false,
  demoRequested: false,
});

/** One dialog instance for every "request a demo" CTA on the site. */
export const DemoDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [demoRequested, setDemoRequested] = useState(false);

  const openDemoDialog = useCallback(() => {
    setDemoRequested(true);
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({ openDemoDialog, formEnabled: WEB3FORMS_ACCESS_KEY !== "", demoRequested }),
    [openDemoDialog, demoRequested],
  );

  return (
    <DemoDialogContext.Provider value={value}>
      {children}
      <DiscoveryCallPopup />
      {value.formEnabled && <DemoRequestDialog open={open} onOpenChange={setOpen} />}
    </DemoDialogContext.Provider>
  );
};

export function useDemoDialog(): DemoDialogValue {
  return useContext(DemoDialogContext);
}
