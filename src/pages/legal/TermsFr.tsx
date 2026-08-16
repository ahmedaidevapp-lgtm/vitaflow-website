import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import LegalLanguageNotice from "@/components/legal/LegalLanguageNotice";

const TermsFr = () => {
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
          Serumo — Conditions d&apos;utilisation
        </h1>
        <p className="mt-4 text-sm text-slate3">
          Date d&apos;entrée en vigueur : 20 avril 2026
          <br />
          Dernière mise à jour : 14 juillet 2026
        </p>
        <p className="mt-3 text-sm text-slate3">
          <span className="font-medium text-navy">Français</span>
          {" · "}
          <Link
            to="/terms"
            className="text-primary-dark underline underline-offset-2 hover:text-primary font-medium"
          >
            English
          </Link>
        </p>

        <LegalLanguageNotice shownLanguage="fr" />

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
          <p>
            Les présentes conditions d&apos;utilisation (les « Conditions ») régissent votre utilisation
            des applications mobile et web Serumo ainsi que des services associés (ensemble, le
            « Service »), proposés par <strong>Amandev Technologies SARL AU</strong>, société immatriculée
            à Casablanca, Maroc (« nous »). En créant un compte ou en utilisant le Service, vous acceptez
            les présentes Conditions.
          </p>

          <section>
            <h2>1. Le Service</h2>
            <p>
              Serumo vous aide à organiser, visualiser et comprendre vos résultats d&apos;analyses de
              laboratoire dans la durée, à des{" "}
              <strong>fins de bien-être personnel et d&apos;éducation uniquement</strong>. Le Service ne
              fournit <strong>pas</strong> d&apos;avis médical, de diagnostic ni de traitement. Aucun
              élément de l&apos;application ne remplace le jugement d&apos;un professionnel de santé
              qualifié.
            </p>
          </section>

          <section>
            <h2>2. Conditions d&apos;accès</h2>
            <p>
              Vous devez être en capacité de conclure un contrat contraignant dans votre juridiction et
              satisfaire à l&apos;âge minimum exigé par Apple, Google ou la loi applicable (généralement{" "}
              <strong>16 ans</strong> révolus, ou davantage lorsque cela est requis). N&apos;utilisez pas
              le Service si vous ne remplissez pas ces conditions.
            </p>
          </section>

          <section>
            <h2>3. Comptes et sécurité</h2>
            <p>
              Vous êtes responsable de la confidentialité de vos identifiants et de toute activité
              effectuée depuis votre compte. Informez-nous sans délai à l&apos;adresse indiquée ci-dessous
              si vous suspectez un accès non autorisé.
            </p>
            <p className="mt-4">
              Vous pouvez vous connecter par e-mail et mot de passe et/ou via les fournisseurs
              d&apos;identité pris en charge (tels que Google ou « Se connecter avec Apple »), sous réserve
              des conditions propres à ces fournisseurs.
            </p>
          </section>

          <section>
            <h2>4. Usage acceptable</h2>
            <p>
              Vous vous engagez à ne pas détourner le Service, notamment en tentant d&apos;accéder aux
              données d&apos;autrui, en sondant ou en perturbant nos systèmes, en téléversant des contenus
              malveillants, ou en utilisant le Service en violation de la loi. Nous pouvons suspendre ou
              résilier votre accès si nous estimons raisonnablement que vous avez enfreint les présentes
              Conditions ou que vous faites peser un risque sur le Service ou sur les autres utilisateurs.
            </p>
          </section>

          <section>
            <h2>5. Vos contenus</h2>
            <p>
              Vous conservez vos droits sur les comptes rendus d&apos;analyses et les informations que vous
              téléversez. Pour faire fonctionner le Service, vous nous concédez une licence limitée
              permettant de traiter, stocker, chiffrer et afficher vos contenus, dans les conditions
              décrites par notre{" "}
              <Link to="/privacy/fr">politique de confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2>6. Abonnements et paiements</h2>
            <p>
              Certaines fonctionnalités nécessitent un abonnement payant à reconduction automatique. Vous
              pouvez souscrire via l&apos;App Store d&apos;Apple, Google Play, ou sur le web depuis notre
              site.
            </p>

            <h3>6.1 Formules d&apos;abonnement</h3>
            <p>
              Les formules disponibles, leurs durées et leurs prix sont affichés au moment du paiement, sur
              notre <Link to="/pricing">page tarifs</Link>, ainsi que sur la fiche de la boutique
              concernée. Les prix peuvent varier selon le pays ou la région et selon les taxes applicables.
            </p>

            <h3>6.2 Facturation et reconduction automatique</h3>
            <p>Si vous souscrivez via l&apos;App Store d&apos;Apple :</p>
            <ul>
              <li>
                Le paiement est prélevé sur votre compte Apple ID lors de la confirmation de l&apos;achat.
              </li>
              <li>
                L&apos;abonnement se reconduit automatiquement, sauf désactivation de la reconduction au
                moins 24 heures avant la fin de la période de facturation en cours.
              </li>
              <li>
                Votre compte est débité au titre de la reconduction dans les 24 heures précédant la fin de
                la période de facturation en cours.
              </li>
              <li>
                Vous pouvez gérer ou désactiver la reconduction automatique dans les réglages de votre
                compte Apple ID après l&apos;achat.
              </li>
            </ul>
            <p className="mt-4">
              Si vous souscrivez via Google Play, la facturation et la reconduction sont régies par les
              conditions d&apos;abonnement de Google Play et par les réglages de votre compte Google.
            </p>
            <p className="mt-4">
              Si vous souscrivez sur notre site web, votre achat est traité par notre revendeur officiel{" "}
              <strong>Paddle</strong> (
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer">
                paddle.com
              </a>
              ), qui prend en charge le paiement, la facturation, les taxes applicables et le service
              client lié au paiement. Les abonnements web se reconduisent automatiquement à la fin de
              chaque période de facturation jusqu&apos;à résiliation. Vous pouvez résilier à tout moment
              depuis les paramètres de votre compte dans l&apos;application web, ou via le lien figurant
              dans vos e-mails de confirmation de commande et de reçu.
            </p>

            <h3>6.3 Essais gratuits et offres promotionnelles</h3>
            <p>
              Lorsqu&apos;un essai gratuit ou un tarif promotionnel est proposé, les conditions
              d&apos;éligibilité, la durée et les modalités de conversion sont présentées lors de
              l&apos;inscription. Sauf résiliation avant la fin de l&apos;essai, votre abonnement démarre
              et les frais récurrents applicables sont prélevés.
            </p>

            <h3>6.4 Résiliation et remboursements</h3>
            <p>
              Vous pouvez résilier à tout moment via la plateforme utilisée pour l&apos;achat. La
              résiliation empêche les reconductions futures ; l&apos;accès reste actif jusqu&apos;à la fin
              de la période payée en cours.
            </p>
            <ul className="mt-4">
              <li>
                <strong>Achats App Store / Google Play :</strong> gérez votre abonnement dans les réglages
                de votre compte Apple ID ou Google. Les demandes de remboursement sont traitées par Apple
                ou Google selon leurs politiques respectives.
              </li>
              <li>
                <strong>Achats web :</strong> résiliez depuis les paramètres de votre compte dans
                l&apos;application web ou via vos e-mails de reçu. Les remboursements sont régis par notre{" "}
                <Link to="/refund">politique de remboursement</Link>.
              </li>
            </ul>

            <h3>6.5 Évolution des prix</h3>
            <p>
              Nous pouvons faire évoluer les prix des abonnements, dans les limites autorisées par la loi.
              Toute modification est communiquée à l&apos;avance et prend effet à votre reconduction
              suivante, selon les règles de la plateforme utilisée pour l&apos;achat (Apple, Google ou
              Paddle). Si vous n&apos;acceptez pas une évolution tarifaire, vous pouvez résilier avant sa
              prise d&apos;effet.
            </p>
          </section>

          <section>
            <h2>7. Exclusions de garantie</h2>
            <p>
              Le Service est fourni <strong>« en l&apos;état »</strong>, sans garantie d&apos;aucune sorte,
              dans toute la mesure permise par la loi. Nous ne garantissons pas que les résultats seront
              exacts, complets ou adaptés à un usage particulier.{" "}
              <strong>Consultez toujours un professionnel qualifié</strong> pour vos décisions médicales.
            </p>
          </section>

          <section>
            <h2>8. Limitation de responsabilité</h2>
            <p>
              Dans toute la mesure permise par la loi, nous ne saurions être tenus responsables des
              dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de la perte de
              bénéfices, de données ou de réputation résultant de votre utilisation du Service. Notre
              responsabilité totale au titre de toute réclamation liée au Service est limitée au plus élevé
              des deux montants suivants : (a) les sommes que vous nous avez versées pour le Service au
              cours des <strong>douze (12) mois</strong> précédant la réclamation, ou{" "}
              <strong>(b) zéro</strong> si vous ne nous avez rien versé.
            </p>
            <p className="mt-4">
              Certaines juridictions n&apos;autorisent pas certaines limitations ; dans ces cas, notre
              responsabilité est limitée dans toute la mesure permise.
            </p>
          </section>

          <section>
            <h2>9. Modifications</h2>
            <p>
              Nous pouvons mettre à jour les présentes Conditions. Nous publierons la version révisée
              accompagnée d&apos;une date de « dernière mise à jour » actualisée. La poursuite de
              l&apos;utilisation du Service après l&apos;entrée en vigueur des modifications vaut
              acceptation des Conditions révisées, sauf interdiction légale.
            </p>
          </section>

          <section>
            <h2>10. Droit applicable</h2>
            <p>
              Sauf disposition impérative contraire du droit de votre pays, les présentes Conditions sont
              régies par le droit applicable au lieu d&apos;établissement d&apos;Amandev Technologies, sans
              égard aux règles de conflit de lois.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              Questions relatives aux présentes Conditions :{" "}
              <a href="mailto:ahmed@amandevtech.com">
                <strong>ahmed@amandevtech.com</strong>
              </a>
            </p>
            <p className="mt-4">
              La version en vigueur des conditions d&apos;utilisation est disponible à l&apos;adresse :{" "}
              <a href="https://getserumo.com/terms" target="_blank" rel="noopener noreferrer">
                <strong>https://getserumo.com/terms</strong>
              </a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default TermsFr;
