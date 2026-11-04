import { Link } from "react-router-dom";
import { HeroCard, SiteLayout } from "@/components/site/layout";
import LegalTable from "@/components/legal/LegalTable";

/** English translation of PrivacyFrDoc, the reference text that mirrors the CNDP dossier. Change both together. */
const Privacy = () => {
  return (
    <SiteLayout>
      <HeroCard>
      <article lang="en" dir="ltr" className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-11 md:pt-12">
        <p className="mb-6 text-[13px]">
          <Link to="/" className="text-ink-subtle no-underline transition-colors hover:text-ink">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-balance text-[clamp(32px,4vw,48px)] font-light leading-[1.08] tracking-[-0.04em]">Serumo - Privacy Policy</h1>
        <p className="mt-5 text-[13px] leading-[1.7] text-ink-subtle">
          Effective date: 15 April 2026
          <br />
          Last updated: 4 November 2026
        </p>
        <p className="mt-3 text-[13px] text-ink-subtle">
          <span className="font-medium text-ink">English</span>
          {" · "}
          <Link to="/privacy/fr" className="font-medium text-ink underline underline-offset-2 hover:text-ink-muted">
            Français
          </Link>
        </p>
        <p className="mt-3 text-[13px] text-ink-subtle">The French version is the reference text; this is a translation.</p>

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-[1.75] text-ink-muted [&_h2]:text-ink [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&_h2]:mb-3 [&_h3]:text-ink [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-ink [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-ink-muted [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-ink">
          <section>
            <h2>1. Data controller</h2>
            <p>
              <strong>Amandev Technologies SARL AU</strong>, RC 726561 Casablanca
              <br />
              236 bd Abdelmoumen, angle rue Pasquier, Imm. F8, 2nd floor, office 6, Maârif, 20330 Casablanca, Morocco
              <br />
              <strong>Data protection:</strong> Mr Ahmed El Ghazouani, managing director —{" "}
              <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a>
            </p>
            <p className="mt-4">
              Serumo (formerly “VitaFlow Health”) is a mobile (iOS) and web (<code>app.getserumo.com</code>) app that lets you keep,
              understand and track your lab results and those of your family, and lets partner medical laboratories deliver a result to you
              securely.
            </p>
            <p className="mt-4">
              Serumo is for wellness and education. It is not a medical device: it does not diagnose, prescribe or offer treatment. Talk to
              your doctor about your results.
            </p>
            <p className="mt-4">
              Processing is governed by Moroccan Law No. 09-08 on the protection of individuals with regard to the processing of personal
              data. A <strong>prior authorization request</strong> has been filed with the CNDP (Commission Nationale de contrôle de la
              protection des Données à caractère Personnel) and is under review; its reference will be shown here once granted.
            </p>
          </section>

          <section>
            <h2>2. Data we process</h2>
            <LegalTable
              head={["Category", "Data", "Source"]}
              rows={[
                [
                  "Identification",
                  "First and last name, email, phone number (sign-in by code), city, birth year; date of birth and national ID (CIN) number for partner-lab patients only",
                  "You; partner lab",
                ],
                [
                  <strong key="s">Health data</strong>,
                  "Lab reports (files), values, units, reference ranges and dates; health history you declare (conditions and treatments from a fixed list); blood type (optional); recommended check-ups; educational summaries; health journal",
                  "You; partner lab",
                ],
                ["Lifestyle (optional)", "Sex, height, weight, habits (smoking, activity, diet), usual reason for testing, personalization notes", "You"],
                ["Technical and logs", "Internal identifiers, session tokens, access logs (identifiers, hashed IP address and browser), consent records", "Service"],
                ["Usage statistics (with your consent)", "Pseudonymous identifier, in-app actions, page address patterns; never what you type", "Service"],
                ["Subscription", "Status and purchase history; payment is handled by Apple or Google", "Apple, Google"],
              ]}
            />
            <p className="mt-4">
              We do not collect genetic or biometric data, location, or bank details. A report you upload may contain other information (lab
              letterhead, prescribing doctor): it is stored encrypted with the file.
            </p>
            <h3>Family profiles</h3>
            <p>
              One account can manage up to eight profiles (yourself, relatives, children). Each profile’s data is kept separate. When you
              create a profile for someone else, you confirm you are authorized to manage their data; this confirmation is recorded.
            </p>
          </section>

          <section>
            <h2>3. Why we process it</h2>
            <LegalTable
              head={["Purpose", "Basis"]}
              rows={[
                ["Create and manage your account and profiles", "Your express consent to the processing of your health data; performance of the service you asked for"],
                ["Store your reports encrypted", "Your express consent"],
                ["Read your reports automatically and explain them (artificial intelligence)", "A separate, prior express consent, which you can refuse without losing the service"],
                ["Show how your results change over time, with context notes produced by reviewed medical rules (no AI)", "Your express consent"],
                ["Record your health history, at your request", "A specific express consent, per profile"],
                ["Recommend check-ups and, with your consent, send reminders by WhatsApp or email (not yet active)", "A separate express consent"],
                ["Share a profile’s results with a doctor you choose", "Your own action"],
                ["Receive a result delivered by a partner lab", "Contract with the lab; your consent collected by the lab"],
                ["Secure the service (authentication, logs, abuse prevention, backups)", "Legitimate interest and security obligation"],
                ["Measure feature use to improve Serumo", "Your consent (off by default)"],
                ["Manage subscriptions", "Performance of the contract"],
              ]}
            />
            <p className="mt-4">Your data is never sold, rented or used for advertising, and is not used to train any artificial intelligence model.</p>
          </section>

          <section>
            <h2>4. Your consents</h2>
            <p>
              Each decision is recorded with the version of the text you were shown, the date and the profile concerned. You can withdraw any
              consent at any time in settings (Profile &amp; settings → Privacy); this does not affect what was done before.
            </p>
            <ul className="mt-4">
              <li>
                <strong>At sign-up</strong>: you confirm you are 18 or older and agree that Serumo processes the health data you add. Without it no
                account is created; to withdraw it, delete your account.
              </li>
              <li>
                <strong>AI analysis</strong>: before the first analysis, and whenever the text changes, a screen explains what is sent to OpenAI in
                the United States (section 6). <strong>If you decline, nothing is sent</strong>: your report is still stored encrypted and you can
                start the analysis later.
              </li>
              <li>
                <strong>Health history</strong> (per profile), and separately its use in your personalized summary. Withdrawing the first consent
                deletes that profile’s history.
              </li>
              <li>
                <strong>Reminders</strong> by WhatsApp or email. Messages never contain a test name, value or condition. Stop with “STOP”, the
                unsubscribe link, or in settings.
              </li>
              <li>
                <strong>Usage statistics</strong>: off by default, asked once.
              </li>
              <li>
                <strong>Information emails</strong> (welcome, feedback request): optional box at sign-up.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Recipients</h2>
            <p>
              Only authorized Amandev Technologies staff access your data, as far as their role requires. We use the following processors,
              which act on our instructions under a contract:
            </p>
            <LegalTable
              head={["Provider", "Role", "Data received", "Where processed"]}
              rows={[
                ["Railway Corporation", "Hosting: servers, database, files", "All; files and medical data encrypted by us (Railway does not hold the key)", "Netherlands (EU)"],
                ["OpenAI OpCo, LLC", "Reading reports, educational summaries, translation", "Report text without your identifiers; page images of a scanned document; personalization details", <strong key="us">United States</strong>],
                ["GitHub, Inc.", "Backups", "Encrypted copy of the database; GitHub does not hold the key", "United States"],
                ["Functional Software, Inc. (Sentry)", "Technical errors in the web app", "Error message, page, browser; no IP address, identifier or content", "United States"],
                ["WhatsApp LLC (Meta)", "Sign-in codes, “result available” notices, reminders with consent", "Phone, first name, neutral message; never a result", "United States"],
                ["RevenueCat, Inc.", "Subscription management", "Pseudonymous identifier, purchase history", "United States"],
                ["Sendinblue SAS (Brevo)", "Transactional email and SMS", "Email or phone, first name, neutral message or code", "France (EU)"],
                ["Mailgun Technologies, Inc. (Sinch)", "Receiving partner labs’ emails", "Attached report, relayed without a copy; technical log kept 1 to 5 days", "EU"],
                ["PostHog, Inc.", "Usage statistics, with consent", "Pseudonymous identifier, actions; no health data", "Germany (EU)"],
              ]}
            />
            <p className="mt-4">Other recipients, which are not our processors:</p>
            <ul className="mt-2">
              <li>
                <strong>Partner labs</strong> (Morocco): they deliver your results; afterwards they only receive aggregate statistics, never your
                personal data.
              </li>
              <li>
                <strong>The doctor you choose</strong> (section 10): one profile’s results, for 90 days at most, until you revoke the share.
              </li>
              <li>
                <strong>Apple and Google</strong>, if you choose “Sign in with Apple / Google” or to pay for a subscription, under their own terms.
                We never receive your password or bank details.
              </li>
              <li>Authorities, where the law requires it.</li>
            </ul>
            <p className="mt-4">
              No health data is sent to Brevo, WhatsApp, Sentry, RevenueCat or PostHog. Backups and medical files only leave our servers
              encrypted.
            </p>
          </section>

          <section>
            <h2>6. Transfers outside Morocco</h2>
            <p>
              <strong>To the European Union</strong> (Railway, Brevo, Mailgun, PostHog): countries the CNDP recognizes as providing adequate
              protection (Law 09-08, art. 43). Railway, Mailgun and PostHog are US companies; any access they may have from the United States
              (support, operations) only reaches data we have encrypted, as far as your files and medical data are concerned.
            </p>
            <p className="mt-4">
              <strong>To the United States</strong>, which is not on that list:
            </p>
            <ul className="mt-2">
              <li>
                <strong>OpenAI</strong>: only with your <strong>express consent</strong>, given on the AI analysis screen (art. 44). Before sending,
                your name, date of birth, CIN number, file numbers, phone, email and address are removed from the text automatically. For a
                scanned document or photo, the page images are sent and may contain this information. OpenAI does not keep this data for its
                own use (<code>store=false</code>) and does not use it to train its models.
              </li>
              <li>
                <strong>WhatsApp</strong> and <strong>RevenueCat</strong>: needed to perform the service you ask for (sign-in code, message,
                subscription), with messages that contain no health data.
              </li>
              <li>
                <strong>GitHub</strong> and <strong>Sentry</strong>: contractual safeguards and, for GitHub, encryption of backups with a key only
                we hold; these transfers are part of our authorization request to the CNDP.
              </li>
            </ul>
            <p className="mt-4">
              We have asked OpenAI to process AI requests in the EU, and plan to move backups to storage located in the EU. Any change to this
              list will be published here and notified to the CNDP.
            </p>
          </section>

          <section>
            <h2>7. Retention</h2>
            <LegalTable
              head={["Data", "Period"]}
              rows={[
                ["Account, profiles, reports, results, health history", "While you use the account; deleted automatically after 540 days of inactivity; deleted immediately if you delete your account"],
                ["Lab-delivered result not claimed (file, contact details, date of birth, CIN, code)", "30 days at most, then deleted; the delivery copy is deleted as soon as you claim the result"],
                ["Documents emailed by a lab, awaiting a match", "30 days at most"],
                ["HPRIM messages from labs (raw text)", "30 days; results already delivered stay in your account"],
                ["Share with a doctor", "90 days at most, or until revoked"],
                ["Closed check-ups, reminder log, profile change history", "24 months"],
                ["Consent records", "Current decision: as long as the account exists; superseded decisions: 24 months"],
                ["Sign-in codes by WhatsApp or SMS", "24 hours"],
                ["Encrypted backups", "90 days"],
                ["Access log (identifiers only, no health data)", "6 years, including after account deletion"],
              ]}
            />
            <p className="mt-4">
              After a deletion, data may remain in encrypted backups until they expire (90 days at most). Where the law or a dispute requires
              it, a deletion may be suspended for as long as strictly necessary.
            </p>
          </section>

          <section>
            <h2>8. Security</h2>
            <ul>
              <li>Encrypted connections (HTTPS/TLS); passwords hashed, never stored in plain text.</li>
              <li>
                <strong>Application-level encryption (AES-256-GCM)</strong> of report files, test names, values, ranges, summaries, health history,
                identity and lifestyle data, with a key held by Amandev Technologies outside the hosting provider. Lookups by email, phone or CIN
                use blind indexes, without decryption.
              </li>
              <li>Strict separation of data by account and by profile, enforced by the server.</li>
              <li>Access and consent logs; daily encrypted backups.</li>
              <li>No results or health information in emails, SMS or WhatsApp messages.</li>
            </ul>
            <p className="mt-4">No system is infallible. If a data breach puts you at risk, we will inform you and the CNDP.</p>
          </section>

          <section>
            <h2>9. Your rights</h2>
            <p>
              You have the right of <strong>access</strong>, <strong>rectification</strong>, <strong>objection</strong> on legitimate grounds and{" "}
              <strong>withdrawal</strong> of your consents (Law 09-08, art. 7 to 9). In the app:
            </p>
            <ul className="mt-4">
              <li>
                <strong>Export</strong> of your account, your reports with their results and your health journal; other data (health history,
                family profiles, consents, check-ups, shares) is provided on written request.
              </li>
              <li>Editing your information and correcting a value extracted from a report.</li>
              <li>
                Immediate <strong>deletion</strong> of a report, a history item, a profile or your whole account.
              </li>
              <li>Withdrawing each consent and revoking a share with a doctor.</li>
            </ul>
            <p className="mt-4">
              You can also write to <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a> or to the postal address in section 1. We
              verify your identity without asking for more than necessary and reply free of charge within 30 days at most. The account holder
              exercises these rights for the profiles they manage; a relative can also write to us directly.
            </p>
            <p className="mt-4">
              You can lodge a complaint with the CNDP (
              <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer">
                www.cndp.ma
              </a>
              ). If another law applies to you (for example the GDPR in the EU), you can exercise the rights it grants through the same
              contact.
            </p>
          </section>

          <section>
            <h2>10. Sharing with a doctor</h2>
            <p>
              You can share a profile’s results with a doctor you choose. They get a personal, password-protected access to a snapshot of the
              results, for 90 days at most. You can revoke the share at any time; access ends immediately.
            </p>
          </section>

          <section>
            <h2>11. Results delivered by a partner lab</h2>
            <p>
              With your consent collected at the lab, a partner lab can deliver your result through Serumo. For this delivery the lab is the
              controller and Serumo acts on its behalf: the file and your contact details are stored encrypted, you receive a neutral message
              (with no result), and you claim the result with the code the lab gives you. An unclaimed delivery is deleted after 30 days. Until
              you claim it, you can exercise your rights with the lab or with us.
            </p>
            <p className="mt-4">Once claimed, the result joins your account and follows this policy. It is never sent to the AI before you consent.</p>
          </section>

          <section>
            <h2>12. Age and children</h2>
            <p>
              You must be <strong>18 or older</strong> to create an account. A child’s data can only be recorded in a profile created and managed
              by their parent, the account holder. Children’s profiles receive no reminders. If we learn that a minor has created an account, we
              delete it.
            </p>
          </section>

          <section>
            <h2>13. Automated processing</h2>
            <p>
              The AI extracts values from your reports and writes educational explanations. Context notes linked to your health history are
              produced by rules reviewed by Serumo’s medical advisor, not by the AI. No decision with legal effects on you is made on this
              basis. You can correct any extracted value.
            </p>
          </section>

          <section>
            <h2>14. The getserumo.com website and local storage</h2>
            <p>
              The getserumo.com website uses no advertising cookies and no audience measurement. The demo-request form for labs is delivered to
              our email address by the Web3Forms service. The apps keep your session, language and preferences on your device; usage
              statistics are only enabled with your consent.
            </p>
          </section>

          <section>
            <h2>15. Changes</h2>
            <p>
              We publish any change on this page with a new “last updated” date. If it changes how your data is used or who receives it, we
              tell you in the app and, where consent is needed, ask for it again.
            </p>
          </section>

          <section>
            <h2>16. Contact</h2>
            <p>
              Amandev Technologies — data protection: <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a>
              <br />
              236 bd Abdelmoumen, angle rue Pasquier, Imm. F8, 2nd floor, office 6, Maârif, 20330 Casablanca, Morocco
            </p>
          </section>
        </div>
      </article>
      </HeroCard>
    </SiteLayout>
  );
};

export default Privacy;
