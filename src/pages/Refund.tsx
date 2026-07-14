import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const SUPPORT_EMAIL = "ahmed@amandevtech.com";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container max-w-3xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">Serumo — Refund Policy</h1>
        <p className="mt-4 text-sm text-slate3">
          Effective date: 14 July 2026
          <br />
          Last updated: 14 July 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
          <p>
            This Refund Policy applies to Serumo subscriptions offered by{" "}
            <strong>Amandev Technologies SARL AU</strong>. How refunds work depends on where you purchased your
            subscription.
          </p>

          <section>
            <h2>1. Purchases made on our website</h2>
            <p>
              Web purchases are processed by our merchant of record, <strong>Paddle</strong> (
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer">
                paddle.com
              </a>
              ), which appears on your bank or card statement.
            </p>

            <h3>1.1 14-day money-back guarantee</h3>
            <p>
              If you are not satisfied with your purchase, you may request a full refund within{" "}
              <strong>14 days</strong> of your initial subscription purchase — no questions asked.
            </p>

            <h3>1.2 Renewals</h3>
            <p>
              If a subscription renews and you did not intend to continue, contact us within <strong>14 days</strong>{" "}
              of the renewal charge and we will refund the renewal. To avoid unwanted renewals, cancel at any time
              before your billing date — you keep access until the end of the period you paid for.
            </p>

            <h3>1.3 Free trials</h3>
            <p>
              If your plan includes a free trial, you will not be charged if you cancel before the trial ends. Charges
              that occur because a trial converted to a paid subscription are treated as an initial purchase under
              section 1.1.
            </p>

            <h3>1.4 How to request a refund</h3>
            <p>To request a refund for a web purchase, either:</p>
            <ul>
              <li>
                Email us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>
                  <strong>{SUPPORT_EMAIL}</strong>
                </a>{" "}
                from the email address on your account, including your order number (found in your receipt email); or
              </li>
              <li>Reply to your Paddle receipt email or contact Paddle&apos;s buyer support directly.</li>
            </ul>
            <p className="mt-4">
              Approved refunds are issued to your original payment method. Depending on your bank, it may take{" "}
              <strong>5–10 business days</strong> for the refund to appear.
            </p>

            <h3>1.5 Statutory rights</h3>
            <p>
              Nothing in this policy limits any rights you have under applicable consumer protection law, including
              withdrawal rights available to consumers in the EU, UK, and other jurisdictions. Where such laws grant
              you greater rights, those rights prevail.
            </p>
          </section>

          <section>
            <h2>2. Purchases made through the App Store or Google Play</h2>
            <p>
              Subscriptions purchased in the iOS app are billed by Apple, and subscriptions purchased in the Android
              app are billed by Google. We cannot issue refunds for those purchases directly; they are handled by the
              platform under its own policy:
            </p>
            <ul>
              <li>
                <strong>Apple App Store:</strong> request a refund at{" "}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
                  reportaproblem.apple.com
                </a>
                .
              </li>
              <li>
                <strong>Google Play:</strong> request a refund from your{" "}
                <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">
                  Google Play order history
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              If you are unsure where you purchased your subscription, check your receipt email or contact us and we
              will help you find out.
            </p>
          </section>

          <section>
            <h2>3. Abuse</h2>
            <p>
              We reserve the right to decline refund requests that show a pattern of abuse (for example, repeatedly
              purchasing and refunding to obtain paid features for free), except where a refund is required by law.
            </p>
          </section>

          <section>
            <h2>4. Contact</h2>
            <p>
              Questions about this Refund Policy:{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <strong>{SUPPORT_EMAIL}</strong>
              </a>
            </p>
            <p className="mt-4">
              See also our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Refund;
