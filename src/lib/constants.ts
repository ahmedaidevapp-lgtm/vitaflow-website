/** Values that are identical in every language — never put these in a dictionary. */

export const APP_STORE_HREF =
  "https://apps.apple.com/us/app/vitaflow-health/id6762191392#information";

export const SUPPORT_EMAIL = "ahmed@amandevtech.com";

export const LEGAL_ENTITY = "Amandev Technologies SARL AU";

export const LEGAL_CITY = "Casablanca, Maroc";

/** Pre-filled mailto used by every "request a pilot / book a demo" CTA on the labs page. */
export const PILOT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  "Serumo — demande de pilote laboratoire",
)}`;

/**
 * Web3Forms endpoint + access key for the "request a demo" form. The site is a static
 * build on GitHub Pages, so there is no server of our own to send mail from; Web3Forms
 * forwards each submission to SUPPORT_EMAIL. The key is public by design — it only ever
 * delivers to the address it was issued for, so it cannot be abused to mail anyone else.
 */
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";
