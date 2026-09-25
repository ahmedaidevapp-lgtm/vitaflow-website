import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalendarClock, X } from "lucide-react";
import DemoCta from "@/components/demo/DemoCta";
import { useDemoDialog } from "@/components/demo/DemoDialogProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useT } from "@/i18n/context";

/** Time actually spent looking at the site before the invitation appears. */
const DELAY_MS = 20_000;

const STORAGE_KEY = "serumo.discoveryPopup.dismissed";

/**
 * Sales invitations have no business interrupting someone who came to read the privacy
 * policy or the refund terms, so the popup is limited to the marketing pages.
 */
const MARKETING_ROUTES = ["/", "/ios", "/pricing"];

const wasDismissed = (): boolean => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    // localStorage throws in private modes — treat that as "not dismissed yet".
    return false;
  }
};

const rememberDismissal = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Not being able to remember is survivable; the popup simply returns next visit.
  }
};

/**
 * A centred invitation offering a discovery call, shown over a dimmed page once the
 * visitor has spent DELAY_MS actually looking at it. Dismissing it is remembered across
 * visits, and anyone who already opened the demo form never sees it — they are past the
 * ask. Its CTA hands over to that same form.
 */
const DiscoveryCallPopup = () => {
  const copy = useT().labs.discoveryPopup;
  const { pathname } = useLocation();
  const { demoRequested } = useDemoDialog();
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(wasDismissed);

  const eligible = MARKETING_ROUTES.includes(pathname) && !dismissed && !demoRequested;

  useEffect(() => {
    if (!eligible || shown) return;

    // Count only the time the tab is actually in front of the visitor, so a page left
    // open in a background tab does not greet them with a popup on their return.
    let visibleMs = 0;
    const id = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      visibleMs += 1000;
      if (visibleMs >= DELAY_MS) setShown(true);
    }, 1000);

    return () => window.clearInterval(id);
  }, [eligible, shown]);

  const dismiss = () => {
    setDismissed(true);
    rememberDismissal();
  };

  if (!eligible || !shown) return null;

  return (
    <Dialog open onOpenChange={dismiss}>
      {/* The stock close button is a 16px icon labelled in English; this popup needs an
          obvious, translated way out, so it is hidden in favour of the one below. */}
      <DialogContent className="max-w-[460px] rounded-[18px] p-7 text-center [&>button]:hidden">
        <button
          type="button"
          onClick={dismiss}
          aria-label={copy.dismiss}
          className="absolute top-3 end-3 inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-slate3 hover:text-navy hover:bg-muted transition-smooth"
        >
          <X className="w-5 h-5 shrink-0" strokeWidth={2.25} aria-hidden />
        </button>

        <span className="mx-auto inline-flex items-center justify-center w-[52px] h-[52px] shrink-0 rounded-[15px] bg-primary-light text-primary">
          <CalendarClock className="w-[26px] h-[26px]" strokeWidth={1.9} aria-hidden />
        </span>

        <DialogTitle className="font-display font-bold text-[23px] leading-[1.2] tracking-[-0.02em] text-navy">
          {copy.title}
        </DialogTitle>

        <DialogDescription className="text-[15px] leading-[1.55] text-slate1 max-w-[360px] mx-auto">
          {copy.body}
        </DialogDescription>

        <div className="mt-1 flex flex-col items-center gap-3">
          <DemoCta
            onActivate={dismiss}
            className="inline-flex justify-center bg-primary hover:bg-primary-dark text-white text-[15px] font-semibold px-7 py-[12px] rounded-[11px] shadow-[0_10px_26px_-8px_hsl(160_82%_29%/0.55)] hover:-translate-y-0.5 transition-smooth"
          >
            {copy.cta}
          </DemoCta>

          <button
            type="button"
            onClick={dismiss}
            className="text-[13.5px] font-medium text-slate2 hover:text-navy transition-smooth"
          >
            {copy.later}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscoveryCallPopup;
