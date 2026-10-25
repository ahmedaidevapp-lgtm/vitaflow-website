import { useT } from "@/i18n/context";
import { APP_STORE_HREF } from "@/lib/constants";

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" className="h-[22px] w-[22px] shrink-0" fill="currentColor" aria-hidden>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

/** Black pill linking to the App Store listing, in the site's button style. */
const AppStoreButton = () => {
  const { cta } = useT().ios;

  return (
    <a
      href={APP_STORE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={cta.ariaDownload}
      className="inline-flex items-center gap-3 rounded-full bg-ink py-2.5 pe-6 ps-5 text-white no-underline transition-colors hover:bg-[#333]"
    >
      <AppleLogo />
      <span className="text-start leading-[1.15]">
        <span className="block text-[10.5px] text-ink-faint">{cta.downloadOn}</span>
        <span className="block text-[16px] font-medium tracking-[-0.01em]">{cta.appStore}</span>
      </span>
    </a>
  );
};

export default AppStoreButton;
