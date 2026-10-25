import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroCard, Section, SiteLayout } from "@/components/site/layout";
import Segmented from "@/components/site/Segmented";
import { lead, sectionTitle } from "@/components/site/styles";
import { useT } from "@/i18n/context";
import { cn } from "@/lib/utils";

type Currency = "USD" | "EUR" | "GBP" | "MAD";
type Period = "monthly" | "yearly";

/** Seat tiers: 1–4 Premium profiles. Keep in sync with app paywall list prices. */
const PRICES: Record<Currency, Record<Period, [number, number, number, number]>> = {
  USD: { monthly: [7.99, 9.99, 11.99, 13.99], yearly: [59.99, 79.99, 99.99, 119.99] },
  EUR: { monthly: [7.99, 9.99, 11.99, 13.99], yearly: [59.99, 79.99, 99.99, 119.99] },
  GBP: { monthly: [6.99, 8.99, 10.99, 12.99], yearly: [49.99, 69.99, 84.99, 99.99] },
  MAD: { monthly: [79, 99, 119, 139], yearly: [599, 799, 999, 1199] },
};

const CURRENCIES: Currency[] = ["MAD", "EUR", "USD", "GBP"];

function formatPrice(amount: number, currency: Currency): string {
  switch (currency) {
    case "USD":
      return `$${amount.toFixed(2)}`;
    case "EUR":
      return `€${amount.toFixed(2)}`;
    case "GBP":
      return `£${amount.toFixed(2)}`;
    case "MAD":
      return `${amount} MAD`;
  }
}

const Pricing = () => {
  const t = useT();
  const p = t.pricing;
  const [currency, setCurrency] = useState<Currency>("MAD");
  const [period, setPeriod] = useState<Period>("yearly");

  const tierPrices = PRICES[currency][period];

  const check = <span className="text-brand">✓</span>;

  return (
    <SiteLayout>
      <HeroCard>
        <div className="mx-auto max-w-[calc(56rem+5.5rem)] px-5 pb-14 pt-8 sm:px-11 md:pt-12">
          <p className="mb-6 text-[13px]">
            <Link to="/" className="text-ink-subtle no-underline transition-colors hover:text-ink">
              {p.backHome}
            </Link>
          </p>
          <h1 className={sectionTitle}>{p.title}</h1>
          <p className={cn(lead, "mt-5 max-w-2xl")}>{p.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Segmented<Currency>
              label={p.currencyLabel}
              value={currency}
              onChange={setCurrency}
              options={CURRENCIES.map((c) => ({ value: c, label: c }))}
            />
            <Segmented<Period>
              label={p.periodLabel}
              value={period}
              onChange={setPeriod}
              options={[
                { value: "monthly", label: p.monthly },
                { value: "yearly", label: p.yearly },
              ]}
            />
          </div>
        </div>
      </HeroCard>

      <Section className="max-w-[calc(56rem+4rem)] pt-10">
        {/* Free vs Premium */}
        <div className="grid gap-3.5 md:grid-cols-2">
          <div className="rounded-[24px] bg-white p-8">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink-subtle">{p.free}</h2>
            <p className="mt-4 text-[40px] font-light tracking-[-0.04em]">
              <span dir="ltr">{formatPrice(0, currency)}</span>
              <span className="text-[13px] tracking-normal text-ink-faint"> {p.forever}</span>
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-ink-muted">
              {p.freeFeatures.map((f) => (
                <li key={f} className="flex gap-2.5">
                  {check}
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] bg-ink p-8 text-white">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink-faint">{p.premium}</h2>
            <p className="mt-4 text-[40px] font-light tracking-[-0.04em]">
              <span dir="ltr">{formatPrice(tierPrices[0], currency)}</span>
              <span className="text-[13px] tracking-normal text-ink-faint">
                {" "}
                / {period === "monthly" ? p.perMonth : p.perYear} · {p.oneProfile}
              </span>
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-[#bdbdba]">
              {p.premiumFeatures.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className="text-white">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Household bundles */}
        <div className="mt-3.5 rounded-[24px] bg-white p-8">
          <h2 className="text-[22px] font-medium tracking-[-0.025em]">{p.bundlesTitle}</h2>
          <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{p.bundlesIntro}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-start text-[14px]">
              <thead>
                <tr className="border-b border-line text-[12px] text-ink-subtle">
                  <th className="py-3 pe-5 text-start font-normal">{p.tableProfiles}</th>
                  <th className="py-3 pe-5 text-start font-normal">
                    {period === "monthly" ? p.tablePerMonth : p.tablePerYear}
                  </th>
                  {period === "yearly" && <th className="py-3 text-start font-normal">{p.tableApproxMonth}</th>}
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                {tierPrices.map((price, i) => (
                  <tr key={i} className={i < tierPrices.length - 1 ? "border-b border-line" : ""}>
                    <td className="py-3.5 pe-5 font-medium text-ink">
                      {i + 1} {i === 0 ? p.profileSingular : p.profilePlural}
                    </td>
                    <td className="py-3.5 pe-5" dir="ltr">
                      {formatPrice(price, currency)}
                    </td>
                    {period === "yearly" && (
                      <td className="py-3.5" dir="ltr">
                        {formatPrice(Math.round((price / 12) * 100) / 100, currency)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-[12.5px] leading-[1.65] text-ink-subtle">
          {p.disclaimerLead}{" "}
          <Link to="/terms" className="text-ink underline underline-offset-2 hover:text-ink-muted">
            {p.termsLink}
          </Link>{" "}
          {p.and}{" "}
          <Link to="/refund" className="text-ink underline underline-offset-2 hover:text-ink-muted">
            {p.refundLink}
          </Link>
          .
        </p>
      </Section>
    </SiteLayout>
  );
};

export default Pricing;
