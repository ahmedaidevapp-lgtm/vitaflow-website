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

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
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
              If you purchase a subscription through the App Store or Google Play, billing and renewal are handled by the
              platform under its terms. Features and pricing are as shown in-app and in the store listing at the time of
              purchase.
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
              <a href="mailto:ahmed.aidev.app@gmail.com">
                <strong>ahmed.aidev.app@gmail.com</strong>
              </a>
            </p>
            <p className="mt-4">
              The authoritative hosted copy of these Terms may be published at{" "}
              <a href="https://vitaflow-app.com/terms" target="_blank" rel="noopener noreferrer">
                <strong>https://vitaflow-app.com/terms</strong>
              </a>{" "}
              (if different from this file, the website version controls for users accessing that URL).
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Terms;
