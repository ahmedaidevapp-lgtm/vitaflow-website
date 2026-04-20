const APP_STORE_HREF = "https://apps.apple.com/";

type AppStoreBadgeProps = {
  className?: string;
};

/** Official Apple "Download on the App Store" badge (see public/app-store-badge.svg). */
const AppStoreBadge = ({ className }: AppStoreBadgeProps) => {
  return (
    <a
      href={APP_STORE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Download on the App Store"
    >
      <img
        src="/app-store-badge.svg"
        alt=""
        width={140}
        height={47}
        className="h-11 w-auto sm:h-12"
        decoding="async"
      />
    </a>
  );
};

export default AppStoreBadge;
