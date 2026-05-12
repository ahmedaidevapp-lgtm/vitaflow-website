import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container max-w-3xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">VitaFlow — Terms of Service</h1>
        <p className="mt-4 text-sm text-slate3">
          Effective date: 20 April 2026
          <br />
          Last updated: 20 April 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the VitaFlow mobile application and related
            services (collectively, the &quot;Service&quot;) offered by Amandev Technologies (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By creating an account or using the Service, you agree to these
            Terms.
          </p>

          <section>
            <h2>1. The Service</h2>
            <p>
              VitaFlow helps you organize, visualize, and understand laboratory test results over time for{" "}
              <strong>personal wellness and educational purposes only</strong>. The Service does{" "}
              <strong>not</strong> provide medical advice, diagnosis, or treatment. Nothing in the app replaces the
              judgment of a qualified healthcare professional.
            </p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>
              You must be able to form a binding contract in your jurisdiction and meet any minimum age required by
              Apple, Google, or applicable law (typically at least <strong>16</strong> years old, or older where
              required). Do not use the Service if you do not meet these requirements.
            </p>
          </section>

          <section>
            <h2>3. Accounts and security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your credentials and for activity under your
              account. Notify us promptly at the contact below if you suspect unauthorized access.
            </p>
            <p className="mt-4">
              You may sign in with email and password and/or supported identity providers (such as Google or Sign in
              with Apple), subject to those providers&apos; terms.
            </p>
          </section>

          <section>
            <h2>4. Acceptable use</h2>
            <p>
              You agree not to misuse the Service, including by: attempting to access others&apos; data; probing or
              disrupting our systems; uploading malicious content; or using the Service in violation of law. We may
              suspend or terminate access if we reasonably believe you have violated these Terms or pose a risk to the
              Service or other users.
            </p>
          </section>

          <section>
            <h2>5. Your content</h2>
            <p>
              You retain rights to the lab reports and information you upload. To operate the Service, you grant us a
              limited license to process, store, encrypt, and display your content as described in our{" "}
              <a href="https://vitaflow-app.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2>6. Subscriptions and payments</h2>
            <p>
              Certain features require a paid auto-renewable subscription.
            </p>

            <h3>6.1 Subscription plans</h3>
            <p>
              Available plans, durations, and prices are shown in-app at checkout and in the applicable store listing.
              Prices may vary by country/region and applicable taxes.
            </p>

            <h3>6.2 Billing and auto-renewal</h3>
            <p>If you subscribe through Apple&apos;s App Store:</p>
            <ul>
              <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
              <li>
                The subscription renews automatically unless auto-renew is turned off at least 24 hours before the end
                of the current billing period.
              </li>
              <li>
                Your account is charged for renewal within 24 hours before the end of the current billing period.
              </li>
              <li>
                You can manage or turn off auto-renewal in your Apple ID account settings after purchase.
              </li>
            </ul>
            <p className="mt-4">
              If you subscribe through Google Play, billing and renewal are handled under Google Play&apos;s
              subscription terms and your Google account settings.
            </p>

            <h3>6.3 Free trials and promotional offers</h3>
            <p>
              If a free trial or promotional price is offered, eligibility, duration, and conversion terms are presented
              at signup. Unless canceled before the trial ends, your subscription will begin and the applicable
              recurring fee will be charged.
            </p>

            <h3>6.4 Cancellation and refunds</h3>
            <p>
              You can cancel at any time through the account settings of the platform used for purchase (App Store or
              Google Play). Cancellation prevents future renewals, and access remains active until the end of the
              current paid period. Refund requests are handled by the platform provider according to its refund
              policies.
            </p>

            <h3>6.5 Price changes</h3>
            <p>
              We may change subscription prices from time to time where permitted by law. Any changes are communicated
              and applied by the platform provider under its rules.
            </p>
          </section>

          <section>
            <h2>7. Disclaimers</h2>
            <p>
              The Service is provided <strong>&quot;as is&quot;</strong> without warranties of any kind, to the fullest
              extent permitted by law. We do not warrant that results will be accurate, complete, or suitable for any
              particular purpose. <strong>Always consult a qualified professional</strong> for medical decisions.
            </p>
          </section>

          <section>
            <h2>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any indirect, incidental, special,
              consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of the
              Service. Our total liability for any claim relating to the Service is limited to the greater of (a) the
              amount you paid us for the Service in the <strong>twelve (12) months</strong> before the claim or{" "}
              <strong>(b) zero</strong> if you have not paid us.
            </p>
            <p className="mt-4">
              Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the
              fullest extent permitted.
            </p>
          </section>

          <section>
            <h2>9. Changes</h2>
            <p>
              We may update these Terms from time to time. We will post the revised Terms with an updated &quot;Last
              updated&quot; date. Continued use of the Service after changes become effective constitutes acceptance of
              the revised Terms, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2>10. Governing law</h2>
            <p>
              Unless a mandatory law of your country says otherwise, these Terms are governed by the laws applicable to
              Amandev Technologies&apos; place of establishment, without regard to conflict-of-law rules.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href="mailto:support@amandevtech.com">
                <strong>support@amandevtech.com</strong>
              </a>
            </p>
            <p className="mt-4">
              Current Terms of Service are available at:{" "}
              <a href="https://vitaflow-app.com/terms" target="_blank" rel="noopener noreferrer">
                <strong>https://vitaflow-app.com/terms</strong>
              </a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Terms;
