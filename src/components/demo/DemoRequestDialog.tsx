import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/context";
import {
  PILOT_MAILTO,
  SUPPORT_EMAIL,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY = { name: "", lab: "", email: "", phone: "", city: "", volume: "", message: "" };

const fieldClass =
  "w-full rounded-[10px] border border-border bg-white px-3 py-[10px] text-[14.5px] text-navy placeholder:text-slate3 shadow-soft transition-smooth focus:border-greenBorder focus:outline-none focus:ring-2 focus:ring-primary/25";

const labelClass = "block text-[13px] font-semibold text-navy mb-[6px]";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * "Request a demo" form. The site is a static GitHub Pages build, so the submission goes
 * to Web3Forms, which forwards it to SUPPORT_EMAIL. Without a configured access key the
 * form would silently fail, so in that case we fall back to the plain mailto link.
 */
const DemoRequestDialog = ({ open, onOpenChange }: Props) => {
  const { t, lang } = useLanguage();
  const copy = t.labs.demoForm;
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  // Reopening after a send should present a blank form, not the previous outcome.
  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setValues(EMPTY);
  }, [open]);

  const set = (key: keyof typeof EMPTY) => (event: { target: { value: string } }) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    // Honeypot: a real visitor never sees this input, so anything in it is a bot.
    const botcheck = new FormData(event.currentTarget).get("botcheck");
    if (botcheck) return;

    setStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Serumo — demande de démo : ${values.lab || values.name}`,
          from_name: "Serumo — getserumo.com",
          // Web3Forms sets the Reply-To header from this field, so replying in the mail
          // client goes straight back to the laboratory.
          replyto: values.email,
          Nom: values.name,
          Laboratoire: values.lab,
          "E-mail": values.email,
          Téléphone: values.phone || "—",
          Ville: values.city,
          "Comptes rendus par jour": values.volume,
          Besoin: values.message || "—",
          Langue: lang,
        }),
      });

      const body = (await response.json()) as { success?: boolean };
      setStatus(response.ok && body.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] max-h-[88vh] overflow-y-auto rounded-[16px]">
        {status === "success" ? (
          <div className="py-4 text-center">
            <CheckCircle2
              className="w-12 h-12 mx-auto text-primary mb-4"
              strokeWidth={1.75}
              aria-hidden
            />
            <DialogHeader>
              <DialogTitle className="font-display text-[24px] tracking-[-0.02em] text-navy text-center">
                {copy.successTitle}
              </DialogTitle>
              <DialogDescription className="text-[15px] leading-[1.55] text-slate1 text-center">
                {copy.successBody}
              </DialogDescription>
            </DialogHeader>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-6 inline-flex bg-primary hover:bg-primary-dark text-white text-[15px] font-semibold px-6 py-[11px] rounded-[10px] transition-smooth"
            >
              {copy.successClose}
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-[24px] tracking-[-0.02em] text-navy">
                {copy.title}
              </DialogTitle>
              <DialogDescription className="text-[14.5px] leading-[1.55] text-slate1">
                {copy.subtitle}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-1 space-y-[14px]">
              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-[14px]">
                <div>
                  <label className={labelClass} htmlFor="demo-name">
                    {copy.name}
                  </label>
                  <input
                    id="demo-name"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                    placeholder={copy.namePlaceholder}
                    value={values.name}
                    onChange={set("name")}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-lab">
                    {copy.lab}
                  </label>
                  <input
                    id="demo-lab"
                    name="lab"
                    required
                    autoComplete="organization"
                    className={fieldClass}
                    placeholder={copy.labPlaceholder}
                    value={values.lab}
                    onChange={set("lab")}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-email">
                    {copy.email}
                  </label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    dir="ltr"
                    className={fieldClass}
                    placeholder={copy.emailPlaceholder}
                    value={values.email}
                    onChange={set("email")}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-phone">
                    {copy.phone}{" "}
                    <span className="font-normal text-slate3">({copy.phoneOptional})</span>
                  </label>
                  <input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    dir="ltr"
                    className={fieldClass}
                    placeholder={copy.phonePlaceholder}
                    value={values.phone}
                    onChange={set("phone")}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-city">
                    {copy.city}
                  </label>
                  <input
                    id="demo-city"
                    name="city"
                    required
                    autoComplete="address-level2"
                    className={fieldClass}
                    placeholder={copy.cityPlaceholder}
                    value={values.city}
                    onChange={set("city")}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-volume">
                    {copy.volume}
                  </label>
                  <select
                    id="demo-volume"
                    name="volume"
                    required
                    className={fieldClass}
                    value={values.volume}
                    onChange={set("volume")}
                  >
                    <option value="" disabled>
                      {copy.volumePlaceholder}
                    </option>
                    {copy.volumeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="demo-message">
                  {copy.message}{" "}
                  <span className="font-normal text-slate3">({copy.messageOptional})</span>
                </label>
                <textarea
                  id="demo-message"
                  name="message"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  placeholder={copy.messagePlaceholder}
                  value={values.message}
                  onChange={set("message")}
                />
              </div>

              <p className="text-[12.5px] leading-[1.5] text-slate2">{copy.privacy}</p>

              {status === "error" && (
                <div
                  role="alert"
                  className="flex gap-2.5 rounded-[10px] border border-destructive/25 bg-destructive/5 p-3 text-[13px] leading-[1.5] text-navy"
                >
                  <AlertTriangle
                    className="w-4 h-4 shrink-0 mt-[2px] text-destructive"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  <span>
                    <strong className="font-semibold">{copy.errorTitle}.</strong> {copy.errorBody}{" "}
                    <a
                      href={PILOT_MAILTO}
                      className="font-mono text-primary underline underline-offset-2"
                      dir="ltr"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:hover:bg-primary text-white text-[15px] font-semibold px-6 py-[11px] rounded-[10px] shadow-[0_10px_26px_-8px_hsl(160_82%_29%/0.55)] transition-smooth"
                >
                  {status === "sending" && (
                    <Loader2 className="w-4 h-4 shrink-0 animate-spin" strokeWidth={2.5} aria-hidden />
                  )}
                  {status === "sending" ? copy.submitting : copy.submit}
                </button>

                <span className="text-[13px] text-slate2">
                  {copy.fallback}{" "}
                  <a href={PILOT_MAILTO} className="font-medium text-primary underline underline-offset-2">
                    {copy.fallbackLink}
                  </a>
                </span>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
