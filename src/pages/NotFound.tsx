import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeroCard, SiteLayout } from "@/components/site/layout";
import { pillPrimary } from "@/components/site/styles";
import { useT } from "@/i18n/context";

const NotFound = () => {
  const location = useLocation();
  const t = useT();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <HeroCard>
        <div className="px-5 pb-[110px] pt-16 sm:px-11 lg:ps-[clamp(32px,7vw,100px)]">
          <div className="mb-7 text-[11px] font-medium uppercase tracking-[0.42em] text-ink-subtle">
            {t.notFound.title}
          </div>
          <h1 className="mb-10 max-w-[720px] text-balance text-[clamp(40px,5.2vw,70px)] font-light leading-[1.04] tracking-[-0.045em]">
            {t.notFound.message}
          </h1>
          <Link to="/" className={pillPrimary}>
            {t.notFound.back}
          </Link>
        </div>
      </HeroCard>
    </SiteLayout>
  );
};

export default NotFound;
