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
