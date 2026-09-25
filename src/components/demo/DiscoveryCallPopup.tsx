import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalendarClock, X } from "lucide-react";
import DemoCta from "@/components/demo/DemoCta";
import { useDemoDialog } from "@/components/demo/DemoDialogProvider";
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
 * A corner invitation offering a discovery call, shown once the visitor has spent
 * DELAY_MS actually looking at the page. Dismissing it is remembered across visits, and
 * anyone who already opened the demo form never sees it — they are past the ask.
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
    <div
      role="dialog"
      aria-labelledby="discovery-popup-title"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:end-6 sm:bottom-6 z-40 sm:max-w-[368px] animate-fade-up"
    >
      <div className="relative rounded-[16px] border border-border bg-white p-5 pe-11 shadow-[0_24px_60px_-18px_hsl(214_47%_12%/0.35)]">
        <button
          type="button"
          onClick={dismiss}
          aria-label={copy.dismiss}
          className="absolute top-3 end-3 inline-flex items-center justify-center w-8 h-8 rounded-[9px] text-slate3 hover:text-navy hover:bg-muted transition-smooth"
        >
          <X className="w-[18px] h-[18px] shrink-0" strokeWidth={2.25} aria-hidden />
        </button>

        <div className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-[11px] bg-primary-light text-primary">
            <CalendarClock className="w-[21px] h-[21px]" strokeWidth={2} aria-hidden />
          </span>

          <div>
            <h2
              id="discovery-popup-title"
              className="font-display font-bold text-[17px] leading-[1.25] tracking-[-0.01em] text-navy"
            >
              {copy.title}
            </h2>
            <p className="mt-[7px] text-[13.5px] leading-[1.5] text-slate1">{copy.body}</p>

            <DemoCta
              onActivate={dismiss}
              className="mt-[14px] inline-flex bg-primary hover:bg-primary-dark text-white text-[14px] font-semibold px-[18px] py-[9px] rounded-[10px] shadow-[0_4px_14px_-4px_hsl(160_82%_29%/0.5)] transition-smooth"
            >
              {copy.cta}
            </DemoCta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCallPopup;
