import { Link } from "react-router-dom";
import { Wordmark } from "@/components/site/SiteNav";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useT } from "@/i18n/context";
import { SUPPORT_EMAIL } from "@/lib/constants";

const linkClass = "text-ink no-underline transition-colors hover:text-ink-muted";

const SiteFooter = () => {
  const { footer } = useT();

  const routes = [
    { to: "/", label: footer.forLabs },
    { to: "/ios", label: footer.ios },
    { to: "/pricing", label: footer.pricing },
    { to: "/privacy", label: footer.privacy },
    { to: "/terms", label: footer.terms },
    { to: "/refund", label: footer.refunds },
  ];

  return (
    <footer className="mx-auto flex max-w-[1240px] flex-wrap items-start justify-between gap-x-10 gap-y-6 px-4 pb-14 pt-10 sm:px-8">
      <div className="max-w-[400px]">
        <div className="mb-2.5">
          <Wordmark size={22} />
        </div>
        <p className="text-[13px] leading-[1.6] text-ink-subtle">{footer.tagline}</p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px]">
        {routes.map((route) => (
          <Link key={route.to} to={route.to} className={linkClass}>
            {route.label}
          </Link>
        ))}
        {/* Static pages generated outside the React app, so a plain link. */}
        <a href="/biomarkers" className={linkClass}>
          {footer.labTests}
        </a>
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className={linkClass}>
              {footer.contact}
            </button>
          </DialogTrigger>
          <DialogContent className="rounded-[24px] sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[22px] font-normal tracking-[-0.03em]">
                {footer.contactTitle}
              </DialogTitle>
            </DialogHeader>
            <p className="pt-1 text-[15px] leading-relaxed text-ink-muted">
              {footer.contactSupport}{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-ink underline underline-offset-2"
                dir="ltr"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </DialogContent>
        </Dialog>
      </div>

      <div className="basis-full text-[12px] text-ink-faint">
        © {new Date().getFullYear()} {footer.legalLine}
      </div>
    </footer>
  );
};

export default SiteFooter;
