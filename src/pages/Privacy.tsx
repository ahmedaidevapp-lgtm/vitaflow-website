import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container max-w-3xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">VitaFlow - Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate3">
          Effective date: 15 April 2026
          <br />
          Last updated: 15 April 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-navy">
          <section>
            <h2>1. Who We Are</h2>
            <p>
              <strong>Data controller:</strong> Amandev Technologies
              <br />
              <strong>Privacy contact:</strong> ahmed.aidev.app@gmail.com
              <br />
              <strong>Support contact:</strong> ahmed.aidev.app@gmail.com
            </p>
            <p className="mt-4">
              VitaFlow (&quot;we,&quot; &quot;us,&quot; or &quot;the Service&quot;) is a mobile application that helps users organize,
              visualize, and understand laboratory test results over time for personal wellness and educational purposes
              only.
            </p>
            <p className="mt-4">
              VitaFlow is not a medical device and does not provide medical advice, diagnosis, or treatment. It is not
              represented as certified under HIPAA, GDPR conformance, or similar frameworks unless separately and
              expressly documented.
            </p>
            <p className="mt-4">
              This Privacy Policy explains how we collect, use, store, share, and protect information, including
              health-related information you choose to upload.
            </p>
          </section>

          <section>
            <h2>2. Scope</h2>
            <p>This Privacy Policy applies to:</p>
            <ul>
              <li>
                The VitaFlow mobile app on iOS and Android (bundle/package identifier:{" "}
                <code>com.vitalcheck.app</code>)
              </li>
              <li>
                The backend API used for accounts, authentication, uploads, parsing, storage, and related features
              </li>
            </ul>
            <p className="mt-4">
              This Policy does not apply to third-party services you use independently (for example, laboratory portals,
              email providers, or device manufacturers), except where directly integrated as described in this Policy.
            </p>
          </section>

          <section>
            <h2>3. Information We Collect</h2>
            <p>What we collect depends on the features you use and what you choose to provide.</p>

            <h3>3.1 Account and Identity Information</h3>
            <ul>
              <li>Email address (for email/password sign-up and sign-in)</li>
              <li>Display name (if provided)</li>
              <li>
                Authentication data:
                <ul className="mt-2 list-[circle]">
                  <li>Password hash (we do not store plaintext passwords)</li>
                  <li>Identity provider token-based authentication data for supported social sign-in</li>
                </ul>
              </li>
              <li>Internal user/account identifier</li>
              <li>Account metadata (for example creation and update timestamps)</li>
              <li>Preferred language/locale (for example English, French, Arabic)</li>
            </ul>

            <h3>3.2 Health and Wellness-Related Information</h3>
            <p>When you use core app features, we may process:</p>
            <ul>
              <li>Lab report files you upload (PDFs/images), including personal or clinical details visible in those files</li>
              <li>
                Structured data extracted from reports, including marker/test names, values, units, reference ranges,
                status labels (for example low/normal/high), confidence/review flags, and report dates
              </li>
              <li>Educational summaries, insights, checklists, and disclaimers generated in connection with your reports</li>
              <li>Progress comparisons across reports</li>
              <li>Health log entries and checklist/reminder settings you create in-app</li>
            </ul>
            <p className="mt-4">
              We do not require government IDs, insurance numbers, or full medical records, unless those details appear
              in files you upload or text you enter.
            </p>

            <h3>3.3 Technical, Usage, and Security Information</h3>
            <ul>
              <li>API request metadata (for example timestamps, request context, IP address, and error/security logs)</li>
              <li>Session and token data (access/refresh token workflows)</li>
              <li>Local app storage data (for example language preference and secure session storage)</li>
              <li>Local notification scheduling data based on your health-log/reminder settings</li>
            </ul>

            <h3>3.4 Optional Third-Party Sign-In (Google and Apple)</h3>
            <p>
              If you choose Continue with Google or Continue with Apple, the sign-in flow is handled by the selected
              identity provider under that provider&apos;s own terms and privacy policy.
            </p>
            <p className="mt-4">
              We receive the identity token and limited account information needed to authenticate you and create or
              access your VitaFlow account. We do not receive your Google or Apple account password.
            </p>
          </section>

          <section>
            <h2>4. How We Use Information</h2>
            <p>We use personal information for the following purposes:</p>
            <ul>
              <li>Provide and operate the Service (account creation, authentication, data sync, report/trend/health log display)</li>
              <li>Process uploads (accept files, parse lab content, store encrypted copies)</li>
              <li>Generate educational content (insights, summaries, comparison narratives, non-diagnostic guidance)</li>
              <li>Localization (translate supported content into selected app language)</li>
              <li>Security and reliability (abuse prevention, rate-limiting, debugging, monitoring, service integrity)</li>
              <li>Legal compliance (respond to lawful requests and enforce rights/safety obligations)</li>
            </ul>
            <p className="mt-4">
              We do not use your uploaded lab content to train our own proprietary models unless we notify you and
              obtain any required consent. Third-party AI providers may apply their own policies to API-submitted content
              consistent with their terms.
            </p>
          </section>

          <section>
            <h2>5. Legal Bases (EEA/UK/Switzerland and Similar Jurisdictions)</h2>
            <p>Depending on your location and applicable law, we may rely on:</p>
            <ul>
              <li>Contract (to provide requested app functionality)</li>
              <li>Legitimate interests (security, fraud prevention, reliability)</li>
              <li>Consent (where required for optional processing)</li>
              <li>Health/sensitive data basis as required by law, including explicit consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2>6. Sharing and Processors</h2>
            <p>
              We do not sell personal information.
              <br />
              We do not share personal information for advertising profiling.
            </p>
            <p className="mt-4">We may share data only as necessary with:</p>

            <h3>6.1 Infrastructure and Service Providers</h3>
            <ul>
              <li>Cloud/API hosting and database providers</li>
              <li>File storage providers used for encrypted upload storage</li>
              <li>Security and operational tooling providers (for example TLS, DNS, backups, logs)</li>
            </ul>

            <h3>6.2 AI Processing Provider (OpenAI)</h3>
            <p>
              For lab extraction and certain optional language features, we may send limited data to OpenAI API
              services, including:
            </p>
            <ul>
              <li>Lab report text extracted from your uploaded PDF/image</li>
              <li>Relevant report page image regions needed for OCR/extraction</li>
              <li>Marker context (for example marker names, values, units, ranges, and report date)</li>
              <li>Optional prompt context needed to generate educational summaries in your selected language</li>
            </ul>
            <p className="mt-4">
              Before any personal or health-related report content is sent to OpenAI, VitaFlow presents an in-app
              disclosure and requests your permission. You can choose not to allow this processing. If you decline,
              AI-dependent features will be unavailable, but other non-AI app functions remain accessible.
            </p>
            <p className="mt-4">References:</p>
            <ul>
              <li>
                <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer">
                  https://openai.com/policies/terms-of-use
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
                  https://openai.com/policies/privacy-policy
                </a>
              </li>
            </ul>

            <h3>6.3 Identity Providers</h3>
            <p>If you choose social sign-in, identity data is processed by:</p>
            <ul>
              <li>Google OAuth</li>
              <li>Sign in with Apple</li>
            </ul>
            <p className="mt-4">
              These providers authenticate your identity and send us token-based identity assertions required for account
              access.
            </p>

            <h3>6.4 Expo / React Native Ecosystem</h3>
            <p>
              VitaFlow is built with Expo/React Native and may rely on platform services from Apple/Google and related
              SDK infrastructure.
            </p>
            <p className="mt-4">
              Reference:{" "}
              <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">
                https://expo.dev/privacy
              </a>
            </p>

            <h3>6.5 Legal/Safety Disclosures</h3>
            <p>We may disclose data where required to:</p>
            <ul>
              <li>Comply with law or legal process</li>
              <li>Protect service integrity and security</li>
              <li>Protect users, rights, and public safety</li>
            </ul>
          </section>

          <section>
            <h2>7. International Transfers</h2>
            <p>
              Your data may be processed in jurisdictions where our providers operate, including the United States (for
              example via OpenAI and cloud infrastructure). Where legally required, we apply appropriate transfer
              safeguards, including contractual protections where applicable.
            </p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>We retain data only as long as needed for the purposes above, including:</p>
            <ul>
              <li>Account data: while your account is active</li>
              <li>Uploaded files and related records: until deleted by you, your account is deleted, or retention is no longer required</li>
              <li>Operational/security logs: for a limited period necessary for security and compliance</li>
              <li>Legal hold exceptions: longer retention where legally required</li>
            </ul>
          </section>

          <section>
            <h2>9. Security Measures</h2>
            <p>We implement technical and organizational safeguards, including:</p>
            <ul>
              <li>HTTPS/TLS for data in transit</li>
              <li>Strong password hashing (no plaintext password storage)</li>
              <li>Application-layer encryption at rest (including uploaded files and designated sensitive fields) where configured in production</li>
              <li>Scoped access controls and authenticated user isolation</li>
              <li>Blind-index techniques for certain lookup operations when encryption is enabled</li>
            </ul>
            <p className="mt-4">No system is 100% secure. You are responsible for keeping your device and credentials secure.</p>
          </section>

          <section>
            <h2>10. Your Rights and Choices</h2>
            <p>Depending on applicable law, you may have rights to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Restrict/object to certain processing</li>
              <li>Receive a portable export</li>
              <li>Withdraw consent (where consent is the legal basis)</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-4">
              VitaFlow supports account deletion and data export through authenticated account features and/or by
              contacting support.
            </p>
            <p className="mt-4">
              For help, contact:{" "}
              <a href="mailto:ahmed.aidev.app@gmail.com">ahmed.aidev.app@gmail.com</a>
            </p>
          </section>

          <section>
            <h2>10.1 In-App Consent for Third-Party AI Processing</h2>
            <p>When a feature requires third-party AI processing, VitaFlow shows an in-app notice that:</p>
            <ul>
              <li>Explains what data will be sent (report text/images and related marker context)</li>
              <li>Identifies the recipient (OpenAI API services)</li>
              <li>Requests your permission before transmission</li>
            </ul>
            <p className="mt-4">
              If you do not grant permission, AI-dependent features remain unavailable and no report content is sent to
              OpenAI.
            </p>
          </section>

          <section>
            <h2>11. Children&apos;s Privacy</h2>
            <p>
              VitaFlow is not directed to children under 16 (or the minimum age required by your jurisdiction). If we
              learn we collected personal data from a child in violation of law, we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2>12. Automated Processing</h2>
            <p>
              VitaFlow uses automated processing (including machine-learning-based parsing) to structure uploaded lab
              information and generate educational summaries. This does not constitute medical diagnosis or treatment.
            </p>
            <p className="mt-4">
              We do not use solely automated decision-making that produces legal or similarly significant effects in the
              GDPR sense.
            </p>
          </section>

          <section>
            <h2>13. U.S. State Privacy Disclosures (Including California)</h2>
            <p>Where applicable U.S. state privacy laws apply:</p>
            <ul>
              <li>Categories of data collected and purposes are described in Sections 3 and 4</li>
              <li>We do not sell personal information or share it for cross-context behavioral advertising</li>
              <li>
                You may exercise eligible rights by contacting:{" "}
                <a href="mailto:ahmed.aidev.app@gmail.com">ahmed.aidev.app@gmail.com</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>14. Morocco-Specific Privacy Notice</h2>
            <p>
              If you are located in Morocco, your personal data is processed in accordance with Law No. 09-08 relating
              to the protection of individuals with regard to the processing of personal data, under the supervision of
              the CNDP (Commission Nationale de controle de la protection des Donnees a caractere Personnel).
            </p>
            <p className="mt-4">
              Because VitaFlow may process laboratory and health-related information, this data is treated as sensitive
              personal data and is processed only for the purposes described in this Policy and to provide the Service
              requested by the user.
            </p>
            <p className="mt-4">
              Users in Morocco may request access, correction, updating, or deletion of their personal data, and may
              exercise other rights available under applicable law, by contacting:{" "}
              <a href="mailto:ahmed.aidev.app@gmail.com">ahmed.aidev.app@gmail.com</a>.
            </p>
            <p className="mt-4">
              Where personal data is transferred outside Morocco (including to service providers used for hosting,
              infrastructure, or AI processing), such transfers are carried out under applicable legal safeguards and
              compliance requirements.
            </p>
          </section>

          <section>
            <h2>15. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted with a revised &quot;Last
              updated&quot; date and, where required, additional notice will be provided (for example in-app notice or
              email).
            </p>
          </section>

          <section>
            <h2>16. Contact</h2>
            <p>
              Privacy requests and support:{" "}
              <a href="mailto:ahmed.aidev.app@gmail.com">ahmed.aidev.app@gmail.com</a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Privacy;
