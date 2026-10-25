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
import { pillPrimary } from "@/components/site/styles";
import { useT } from "@/i18n/context";

/** Time actually spent looking at the site before the invitation appears. */
const DELAY_MS = 20_000;

const STORAGE_KEY = "serumo.discoveryPopup.dismissed";

/** How long a dismissal holds before the invitation may come back. */
const DISMISSAL_TTL_MS = 2 * 24 * 60 * 60 * 1000;

/**
 * Sales invitations have no business interrupting someone who came to read the privacy
 * policy or the refund terms, so the popup is limited to the marketing pages.
 */
const MARKETING_ROUTES = ["/", "/ios", "/pricing"];

const wasDismissed = (): boolean => {
  try {
    // Holds the time of the dismissal. The old "1" flag reads as 1970, so it has expired.
    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY));
    return dismissedAt > 0 && Date.now() - dismissedAt < DISMISSAL_TTL_MS;
  } catch {
    // localStorage throws in private modes — treat that as "not dismissed yet".
    return false;
  }
};

const rememberDismissal = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Not being able to remember is survivable; the popup simply returns next visit.
  }
};

/**
 * A centred invitation offering a discovery call, shown over a dimmed page once the
 * visitor has spent DELAY_MS actually looking at it. Dismissing it is remembered across
 * visits for DISMISSAL_TTL_MS, and anyone who already opened the demo form never sees
 * it — they are past the ask. Its CTA hands over to that same form.
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
      <DialogContent className="max-w-[460px] rounded-[24px] p-8 text-center [&>button]:hidden">
        <button
          type="button"
          onClick={dismiss}
          aria-label={copy.dismiss}
          className="absolute end-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-mist hover:text-ink"
        >
          <X className="w-5 h-5 shrink-0" strokeWidth={2.25} aria-hidden />
        </button>

        <span className="mx-auto inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
          <CalendarClock className="w-[26px] h-[26px]" strokeWidth={1.9} aria-hidden />
        </span>

        <DialogTitle className="text-[26px] font-light leading-[1.15] tracking-[-0.035em]">
          {copy.title}
        </DialogTitle>

        <DialogDescription className="mx-auto max-w-[360px] text-[14px] leading-[1.65] text-ink-muted">
          {copy.body}
        </DialogDescription>

        <div className="mt-1 flex flex-col items-center gap-3">
          <DemoCta
            onActivate={dismiss}
            className={pillPrimary}
          >
            {copy.cta}
          </DemoCta>

          <button
            type="button"
            onClick={dismiss}
            className="text-[13px] text-ink-subtle transition-colors hover:text-ink"
          >
            {copy.later}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscoveryCallPopup;
