import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import LegalLanguageNotice from "@/components/legal/LegalLanguageNotice";
import { SUPPORT_EMAIL } from "@/lib/constants";

const RefundFr = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article lang="fr" dir="ltr" className="container max-w-3xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            ← Retour à l&apos;accueil
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
          Serumo — Politique de remboursement
        </h1>
        <p className="mt-4 text-sm text-slate3">
          Date d&apos;entrée en vigueur : 14 juillet 2026
          <br />
          Dernière mise à jour : 14 juillet 2026
        </p>
        <p className="mt-3 text-sm text-slate3">
          <span className="font-medium text-navy">Français</span>
          {" · "}
          <Link
            to="/refund"
            className="text-primary-dark underline underline-offset-2 hover:text-primary font-medium"
          >
            English
          </Link>
        </p>

        <LegalLanguageNotice shownLanguage="fr" />

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
          <p>
            La présente politique de remboursement s&apos;applique aux abonnements Serumo proposés par{" "}
            <strong>Amandev Technologies SARL AU</strong>. Les modalités de remboursement dépendent du
            canal par lequel vous avez souscrit votre abonnement.
          </p>

          <section>
            <h2>1. Achats effectués sur notre site web</h2>
            <p>
              Les achats web sont traités par notre revendeur officiel, <strong>Paddle</strong> (
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer">
                paddle.com
              </a>
              ), dont le nom apparaît sur votre relevé bancaire ou de carte.
            </p>

            <h3>1.1 Garantie « satisfait ou remboursé » de 14 jours</h3>
            <p>
              Si votre achat ne vous satisfait pas, vous pouvez demander un remboursement intégral dans un
              délai de <strong>14 jours</strong> suivant votre souscription initiale — sans justification à
              fournir.
            </p>

            <h3>1.2 Reconductions</h3>
            <p>
              Si un abonnement se reconduit alors que vous n&apos;aviez pas l&apos;intention de continuer,
              contactez-nous dans les <strong>14 jours</strong> suivant le prélèvement de reconduction et
              nous vous rembourserons celle-ci. Pour éviter toute reconduction non souhaitée, résiliez à
              tout moment avant votre date de facturation — vous conservez l&apos;accès jusqu&apos;à la fin
              de la période que vous avez réglée.
            </p>

            <h3>1.3 Essais gratuits</h3>
            <p>
              Si votre formule comprend un essai gratuit, aucun montant ne vous sera prélevé si vous
              résiliez avant la fin de l&apos;essai. Les prélèvements consécutifs à la conversion d&apos;un
              essai en abonnement payant sont traités comme un achat initial au sens de la section 1.1.
            </p>

            <h3>1.4 Comment demander un remboursement</h3>
            <p>Pour demander le remboursement d&apos;un achat web, vous pouvez :</p>
            <ul>
              <li>
                Nous écrire à{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>
                  <strong>{SUPPORT_EMAIL}</strong>
                </a>{" "}
                depuis l&apos;adresse e-mail associée à votre compte, en indiquant votre numéro de commande
                (figurant dans l&apos;e-mail de reçu) ; ou
              </li>
              <li>
                Répondre à votre e-mail de reçu Paddle, ou contacter directement le service acheteurs de
                Paddle.
              </li>
            </ul>
            <p className="mt-4">
              Les remboursements approuvés sont versés sur votre moyen de paiement d&apos;origine. Selon
              votre banque, le remboursement peut mettre{" "}
              <strong>5 à 10 jours ouvrés</strong> à apparaître.
            </p>

            <h3>1.5 Droits légaux</h3>
            <p>
              Aucune disposition de la présente politique ne limite les droits dont vous disposez au titre
              du droit de la consommation applicable, y compris le droit de rétractation reconnu aux
              consommateurs dans l&apos;Union européenne, au Royaume-Uni et dans d&apos;autres
              juridictions. Lorsque ces lois vous accordent des droits plus étendus, ces droits prévalent.
            </p>
          </section>

          <section>
            <h2>2. Achats effectués via l&apos;App Store ou Google Play</h2>
            <p>
              Les abonnements souscrits dans l&apos;application iOS sont facturés par Apple, et ceux
              souscrits dans l&apos;application Android sont facturés par Google. Nous ne pouvons pas
              rembourser directement ces achats : ils sont traités par la plateforme concernée, selon sa
              propre politique.
            </p>
            <ul>
              <li>
                <strong>Apple App Store :</strong> demandez un remboursement sur{" "}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
                  reportaproblem.apple.com
                </a>
                .
              </li>
              <li>
                <strong>Google Play :</strong> demandez un remboursement depuis votre{" "}
                <a
                  href="https://support.google.com/googleplay/answer/2479637"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  historique de commandes Google Play
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              Si vous ne savez pas où vous avez souscrit votre abonnement, consultez votre e-mail de reçu
              ou contactez-nous : nous vous aiderons à le déterminer.
            </p>
          </section>

          <section>
            <h2>3. Abus</h2>
            <p>
              Nous nous réservons le droit de refuser les demandes de remboursement révélant un
              comportement abusif (par exemple, l&apos;achat et le remboursement répétés dans le but
              d&apos;obtenir gratuitement des fonctionnalités payantes), sauf lorsque le remboursement est
              imposé par la loi.
            </p>
          </section>

          <section>
            <h2>4. Contact</h2>
            <p>
              Questions relatives à la présente politique de remboursement :{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                <strong>{SUPPORT_EMAIL}</strong>
              </a>
            </p>
            <p className="mt-4">
              Voir également nos <Link to="/terms">conditions d&apos;utilisation</Link> et notre{" "}
              <Link to="/privacy/fr">politique de confidentialité</Link>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default RefundFr;
