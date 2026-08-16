import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { useT } from "@/i18n/context";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-4xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            {p.backHome}
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">{p.title}</h1>
        <p className="mt-4 text-slate2 max-w-2xl leading-relaxed">{p.intro}</p>

        {/* Currency + billing period selectors */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-[10px] border border-border bg-white p-1">
            {CURRENCIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-3.5 py-1.5 rounded-[7px] text-sm font-semibold transition-smooth ${
                  currency === c ? "bg-primary text-white" : "text-slate1 hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="inline-flex rounded-[10px] border border-border bg-white p-1">
            {(["monthly", "yearly"] as const).map((per) => (
              <button
                key={per}
                type="button"
                onClick={() => setPeriod(per)}
                className={`px-3.5 py-1.5 rounded-[7px] text-sm font-semibold transition-smooth ${
                  period === per ? "bg-primary text-white" : "text-slate1 hover:text-navy"
                }`}
              >
                {per === "monthly" ? p.monthly : p.yearly}
              </button>
            ))}
          </div>
        </div>

        {/* Free vs Premium */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-navy">{p.free}</h2>
            <p className="mt-2 text-3xl font-extrabold text-navy">
              <span dir="ltr">{formatPrice(0, currency)}</span>
              <span className="text-sm font-medium text-slate3"> {p.forever}</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-[15px] text-slate2">
              {p.freeFeatures.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-white p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-navy">{p.premium}</h2>
            <p className="mt-2 text-3xl font-extrabold text-navy">
              <span dir="ltr">{formatPrice(tierPrices[0], currency)}</span>
              <span className="text-sm font-medium text-slate3">
                {" "}
                / {period === "monthly" ? p.perMonth : p.perYear} · {p.oneProfile}
              </span>
            </p>
            <ul className="mt-5 space-y-2.5 text-[15px] text-slate2">
              {p.premiumFeatures.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Household bundles */}
        <h2 className="mt-12 font-display text-xl font-bold text-navy">{p.bundlesTitle}</h2>
        <p className="mt-2 text-slate2 text-[15px]">{p.bundlesIntro}</p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="w-full text-start text-[15px]">
            <thead>
              <tr className="border-b border-border text-navy">
                <th className="px-5 py-3.5 font-semibold text-start">{p.tableProfiles}</th>
                <th className="px-5 py-3.5 font-semibold text-start">
                  {period === "monthly" ? p.tablePerMonth : p.tablePerYear}
                </th>
                {period === "yearly" && (
                  <th className="px-5 py-3.5 font-semibold text-start">{p.tableApproxMonth}</th>
                )}
              </tr>
            </thead>
            <tbody className="text-slate2">
              {tierPrices.map((price, i) => (
                <tr key={i} className={i < tierPrices.length - 1 ? "border-b border-border" : ""}>
                  <td className="px-5 py-3.5 font-medium text-navy">
                    {i + 1} {i === 0 ? p.profileSingular : p.profilePlural}
                  </td>
                  <td className="px-5 py-3.5" dir="ltr">
                    {formatPrice(price, currency)}
                  </td>
                  {period === "yearly" && (
                    <td className="px-5 py-3.5" dir="ltr">
                      {formatPrice(Math.round((price / 12) * 100) / 100, currency)}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-slate3 leading-relaxed max-w-2xl">
          {p.disclaimerLead}{" "}
          <Link to="/terms" className="underline underline-offset-2 text-primary-dark hover:text-primary">
            {p.termsLink}
          </Link>{" "}
          {p.and}{" "}
          <Link to="/refund" className="underline underline-offset-2 text-primary-dark hover:text-primary">
            {p.refundLink}
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
