import { Link } from "react-router-dom";
import { HeroCard, SiteLayout } from "@/components/site/layout";
import LegalLanguageNotice from "@/components/legal/LegalLanguageNotice";
import LegalTable from "@/components/legal/LegalTable";

/**
 * Reference text: it states, for the user, what the CNDP dossier (docs/cndp/dossier-2026-11 in the
 * app repo, annexes 1, 3, 5, 6 and 10) declares. Change both together.
 */
const PrivacyFr = () => {
  return (
    <SiteLayout>
      <HeroCard>
      <article lang="fr" dir="ltr" className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-11 md:pt-12">
        <p className="mb-6 text-[13px]">
          <Link to="/" className="text-ink-subtle no-underline transition-colors hover:text-ink">
            ← Retour à l&apos;accueil
          </Link>
        </p>
        <h1 className="text-balance text-[clamp(32px,4vw,48px)] font-light leading-[1.08] tracking-[-0.04em]">
          Serumo - Politique de confidentialité
        </h1>
        <p className="mt-5 text-[13px] leading-[1.7] text-ink-subtle">
          Date d&apos;effet : 15 avril 2026
          <br />
          Dernière mise à jour : 4 novembre 2026
        </p>
        <p className="mt-3 text-[13px] text-ink-subtle">
          <Link to="/privacy" className="font-medium text-ink underline underline-offset-2 hover:text-ink-muted">
            English
          </Link>
          {" · "}
          <span className="font-medium text-ink">Français</span>
        </p>

        <LegalLanguageNotice shownLanguage="fr" />

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-[1.75] text-ink-muted [&_h2]:text-ink [&_h2]:text-[22px] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&_h2]:mb-3 [&_h3]:text-ink [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-ink [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-ink-muted [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-ink">
          <section>
            <h2>1. Responsable du traitement</h2>
            <p>
              <strong>Amandev Technologies SARL AU</strong>, RC 726561 Casablanca
              <br />
              236 bd Abdelmoumen, angle rue Pasquier, Imm. F8, 2e étage, bureau 6, Maârif, 20330 Casablanca, Maroc
              <br />
              <strong>Protection des données :</strong> M. Ahmed El Ghazouani, gérant —{" "}
              <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a>
            </p>
            <p className="mt-4">
              Serumo (anciennement « VitaFlow Health ») est une application mobile (iOS) et web (<code>app.getserumo.com</code>) qui vous
              permet de conserver, comprendre et suivre vos résultats d&apos;analyses biologiques et ceux de vos proches, et qui permet à des
              laboratoires d&apos;analyses partenaires de vous remettre un résultat de façon sécurisée.
            </p>
            <p className="mt-4">
              Serumo a une finalité de bien-être et d&apos;éducation. Ce n&apos;est pas un dispositif médical : le service ne pose pas de
              diagnostic, ne prescrit pas et ne propose pas de traitement. Parlez de vos résultats à votre médecin.
            </p>
            <p className="mt-4">
              Le traitement est soumis à la loi n° 09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des
              données à caractère personnel. Une <strong>demande d&apos;autorisation préalable</strong> a été déposée auprès de la CNDP
              (Commission Nationale de contrôle de la protection des Données à caractère Personnel) et est en cours d&apos;instruction ; sa
              référence sera indiquée ici dès sa délivrance.
            </p>
          </section>

          <section>
            <h2>2. Données que nous traitons</h2>
            <LegalTable
              head={["Catégorie", "Données", "Origine"]}
              rows={[
                [
                  "Identification",
                  "Nom et prénom, email, numéro de téléphone (connexion par code), ville, année de naissance ; date de naissance et numéro de CIN pour les patients des laboratoires partenaires uniquement",
                  "Vous ; laboratoire partenaire",
                ],
                [
                  <strong key="s">Données de santé</strong>,
                  "Comptes rendus d’analyses (fichiers), valeurs, unités, intervalles de référence et dates ; antécédents que vous déclarez (maladies et traitements d’une liste fermée) ; groupe sanguin (facultatif) ; contrôles recommandés ; résumés éducatifs ; journal de santé",
                  "Vous ; laboratoire partenaire",
                ],
                [
                  "Mode de vie (facultatif)",
                  "Sexe, taille, poids, habitudes (tabac, activité, alimentation), motif habituel des analyses, notes de personnalisation",
                  "Vous",
                ],
                [
                  "Techniques et journaux",
                  "Identifiants internes, jetons de session, journaux d’accès (identifiants, adresse IP et navigateur hachés), preuves de consentement",
                  "Service",
                ],
                ["Statistiques d’usage (sur accord)", "Identifiant pseudonyme, actions dans l’application, modèles d’adresse de page ; jamais ce que vous saisissez", "Service"],
                ["Abonnement", "Statut et historique d’achats ; le paiement est géré par Apple ou Google", "Apple, Google"],
              ]}
            />
            <p className="mt-4">
              Nous ne collectons pas de données génétiques ou biométriques, de géolocalisation, ni de coordonnées bancaires. Un compte rendu
              que vous téléversez peut contenir d&apos;autres informations (en-tête du laboratoire, médecin prescripteur) : elles sont stockées
              chiffrées avec le fichier.
            </p>
            <h3>Profils de vos proches</h3>
            <p>
              Un compte peut gérer jusqu&apos;à huit profils (vous-même, vos proches, vos enfants). Les données de chaque profil restent
              séparées. En créant le profil d&apos;une autre personne, vous attestez être autorisé à gérer ses données ; cette attestation est
              enregistrée.
            </p>
          </section>

          <section>
            <h2>3. Pourquoi nous les traitons</h2>
            <LegalTable
              head={["Finalité", "Fondement"]}
              rows={[
                ["Créer et gérer votre compte et vos profils", "Votre consentement exprès au traitement de vos données de santé ; exécution du service demandé"],
                ["Stocker vos comptes rendus de façon chiffrée", "Votre consentement exprès"],
                ["Lire automatiquement vos comptes rendus et vous les expliquer (intelligence artificielle)", "Un consentement exprès distinct et préalable, que vous pouvez refuser sans perdre le service"],
                ["Afficher l’évolution de vos résultats et des notes de contexte produites par des règles médicales relues (sans IA)", "Votre consentement exprès"],
                ["Enregistrer vos antécédents de santé, à votre demande", "Un consentement exprès spécifique, par profil"],
                ["Recommander des contrôles et, sur accord, envoyer des rappels par WhatsApp ou email (fonction pas encore active)", "Un consentement exprès séparé"],
                ["Partager les résultats d’un profil avec le médecin de votre choix", "Votre initiative"],
                ["Recevoir un résultat déposé par un laboratoire partenaire", "Contrat avec le laboratoire ; votre accord recueilli par le laboratoire"],
                ["Sécuriser le service (authentification, journaux, prévention des abus, sauvegardes)", "Intérêt légitime et obligation de sécurité"],
                ["Mesurer l’utilisation des fonctions pour améliorer Serumo", "Votre consentement (désactivé par défaut)"],
                ["Gérer les abonnements", "Exécution du contrat"],
              ]}
            />
            <p className="mt-4">
              Vos données ne sont ni vendues, ni louées, ni utilisées à des fins publicitaires, et ne servent à entraîner aucun modèle
              d&apos;intelligence artificielle.
            </p>
          </section>

          <section>
            <h2>4. Vos consentements</h2>
            <p>
              Chaque décision est enregistrée avec la version du texte qui vous a été montré, la date et le profil concerné. Vous pouvez
              retirer chaque consentement à tout moment dans les réglages (Profil et réglages → Confidentialité), sans effet sur ce qui a été
              fait avant le retrait.
            </p>
            <ul className="mt-4">
              <li>
                <strong>À l&apos;inscription</strong> : vous confirmez avoir 18 ans ou plus et vous acceptez que Serumo traite les données de
                santé que vous ajoutez. Sans cet accord, aucun compte n&apos;est créé ; pour le retirer, supprimez votre compte.
              </li>
              <li>
                <strong>Analyse par l&apos;IA</strong> : avant la première analyse, et à chaque nouvelle version du texte, un écran vous explique
                ce qui est envoyé à OpenAI aux États-Unis (section 6). <strong>Si vous refusez, rien n&apos;est envoyé</strong> : votre compte rendu
                est quand même stocké chiffré et vous pouvez lancer l&apos;analyse plus tard.
              </li>
              <li>
                <strong>Antécédents de santé</strong> (par profil), et séparément leur utilisation dans votre résumé personnalisé. Retirer le
                premier accord supprime les antécédents du profil.
              </li>
              <li>
                <strong>Rappels</strong> par WhatsApp ou email. Les messages ne contiennent ni nom d&apos;examen, ni valeur, ni maladie. Arrêt par
                « STOP », par le lien de désinscription ou dans les réglages.
              </li>
              <li>
                <strong>Statistiques d&apos;utilisation</strong> : désactivées par défaut, demandées une fois.
              </li>
              <li>
                <strong>Emails d&apos;information</strong> (bienvenue, demande d&apos;avis) : case facultative à l&apos;inscription.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Destinataires</h2>
            <p>
              Seules les personnes habilitées d&apos;Amandev Technologies accèdent à vos données, dans la limite de leurs fonctions. Nous
              faisons appel aux sous-traitants suivants, qui agissent sur nos instructions et dans le cadre d&apos;un contrat :
            </p>
            <LegalTable
              head={["Prestataire", "Rôle", "Données reçues", "Lieu de traitement"]}
              rows={[
                ["Railway Corporation", "Hébergement : serveurs, base de données, fichiers", "Toutes ; fichiers et données médicales chiffrés par nous (Railway n’a pas la clé)", "Pays-Bas (UE)"],
                ["OpenAI, L.L.C.", "Lecture des comptes rendus, résumés éducatifs, traduction", "Texte du compte rendu sans vos identifiants ; image des pages d’un document scanné ; informations de personnalisation", <strong key="us">États-Unis</strong>],
                ["GitHub, Inc.", "Sauvegardes", "Copie chiffrée de la base ; GitHub n’a pas la clé", "États-Unis"],
                ["Functional Software, Inc. (Sentry)", "Erreurs techniques de l’application web", "Message d’erreur, page, navigateur ; ni adresse IP, ni identifiant, ni contenu", "États-Unis"],
                ["WhatsApp LLC (Meta)", "Codes de connexion, avis « résultat disponible », rappels sur accord", "Téléphone, prénom, message neutre ; jamais de résultat", "États-Unis"],
                ["RevenueCat, Inc.", "Gestion des abonnements", "Identifiant pseudonyme, historique d’achats", "États-Unis"],
                ["Sendinblue SAS (Brevo)", "Emails et SMS transactionnels", "Email ou téléphone, prénom, message neutre ou code", "France (UE)"],
                ["Mailgun Technologies, Inc. (Sinch)", "Réception des emails des laboratoires partenaires", "Compte rendu joint, relayé sans copie ; journal technique de 1 à 5 jours", "UE"],
                ["PostHog, Inc.", "Statistiques d’utilisation, sur accord", "Identifiant pseudonyme, actions ; aucune donnée de santé", "Allemagne (UE)"],
              ]}
            />
            <p className="mt-4">Autres destinataires, qui ne sont pas nos sous-traitants :</p>
            <ul className="mt-2">
              <li>
                <strong>Laboratoires partenaires</strong> (Maroc) : ils déposent vos résultats ; ensuite, ils ne reçoivent que des statistiques
                agrégées, jamais vos données personnelles.
              </li>
              <li>
                <strong>Le médecin que vous choisissez</strong> (section 10) : les résultats d&apos;un profil, pendant 90 jours au plus, jusqu&apos;à ce
                que vous révoquiez le partage.
              </li>
              <li>
                <strong>Apple et Google</strong>, si vous choisissez « Se connecter avec Apple / Google » ou pour le paiement d&apos;un abonnement,
                selon leurs propres conditions. Nous ne recevons ni votre mot de passe ni vos coordonnées bancaires.
              </li>
              <li>
                Les autorités, lorsque la loi nous y oblige.
              </li>
            </ul>
            <p className="mt-4">
              Aucune donnée de santé n&apos;est envoyée à Brevo, WhatsApp, Sentry, RevenueCat ou PostHog. Les sauvegardes et les fichiers
              médicaux ne quittent nos serveurs que chiffrés.
            </p>
          </section>

          <section>
            <h2>6. Transferts hors du Maroc</h2>
            <p>
              <strong>Vers l&apos;Union européenne</strong> (Railway, Brevo, Mailgun, PostHog) : pays reconnus par la CNDP comme assurant une
              protection suffisante des données (art. 43 de la loi 09-08). Railway, Mailgun et PostHog sont des sociétés américaines dont
              l&apos;accès éventuel depuis les États-Unis (support, exploitation) ne porte que sur des données que nous avons chiffrées pour ce
              qui concerne vos fichiers et données médicales.
            </p>
            <p className="mt-4">
              <strong>Vers les États-Unis</strong>, qui ne figurent pas parmi ces pays :
            </p>
            <ul className="mt-2">
              <li>
                <strong>OpenAI</strong> : uniquement avec votre <strong>consentement exprès</strong>, donné sur l&apos;écran d&apos;analyse par l&apos;IA (art.
                44). Avant envoi, votre nom, votre date de naissance, votre numéro de CIN, les numéros de dossier, votre téléphone, votre email
                et votre adresse sont supprimés automatiquement du texte. Pour un document scanné ou une photo, l&apos;image des pages est
                envoyée et peut contenir ces informations. OpenAI ne conserve pas ces données pour son propre usage (<code>store=false</code>) et
                ne les utilise pas pour entraîner ses modèles.
              </li>
              <li>
                <strong>WhatsApp</strong> et <strong>RevenueCat</strong> : nécessaires à l&apos;exécution du service que vous demandez (code de connexion,
                message, abonnement), avec des messages qui ne contiennent aucune donnée de santé.
              </li>
              <li>
                <strong>GitHub</strong> et <strong>Sentry</strong> : garanties contractuelles et, pour GitHub, chiffrement des sauvegardes dont nous
                gardons seuls la clé ; ces transferts font partie de notre demande d&apos;autorisation à la CNDP.
              </li>
            </ul>
            <p className="mt-4">
              Nous avons demandé à OpenAI que le traitement de l&apos;IA soit effectué dans l&apos;UE et prévoyons de déplacer les sauvegardes vers un
              stockage situé dans l&apos;UE. Toute modification de cette liste sera publiée ici et portée à la connaissance de la CNDP.
            </p>
          </section>

          <section>
            <h2>7. Durées de conservation</h2>
            <LegalTable
              head={["Données", "Durée"]}
              rows={[
                ["Compte, profils, comptes rendus, résultats, antécédents", "Tant que vous utilisez le compte ; suppression automatique après 540 jours sans activité ; suppression immédiate si vous supprimez votre compte"],
                ["Résultat déposé par un laboratoire et non récupéré (fichier, coordonnées, date de naissance, CIN, code)", "30 jours au plus, puis suppression ; la copie de dépôt est supprimée dès que vous récupérez le résultat"],
                ["Documents reçus par email d’un laboratoire, en attente", "30 jours au plus"],
                ["Messages HPRIM reçus des laboratoires (texte brut)", "30 jours ; les résultats déjà remis restent dans votre compte"],
                ["Partage avec un médecin", "90 jours au plus, ou jusqu’à révocation"],
                ["Contrôles clos, journal des rappels, historique des modifications du profil", "24 mois"],
                ["Preuves de consentement", "Décision en vigueur : tant que le compte existe ; décisions remplacées : 24 mois"],
                ["Codes de connexion par WhatsApp ou SMS", "24 heures"],
                ["Sauvegardes chiffrées", "90 jours"],
                ["Journal d’accès (identifiants uniquement, sans donnée de santé)", "6 ans, y compris après la suppression du compte"],
              ]}
            />
            <p className="mt-4">
              Après une suppression, une donnée peut subsister dans les sauvegardes chiffrées jusqu&apos;à leur expiration (90 jours au plus). En
              cas d&apos;obligation légale ou de litige, une suppression peut être suspendue pour la durée strictement nécessaire.
            </p>
          </section>

          <section>
            <h2>8. Sécurité</h2>
            <ul>
              <li>Connexions chiffrées (HTTPS/TLS) ; mots de passe hachés, jamais stockés en clair.</li>
              <li>
                <strong>Chiffrement dans l&apos;application (AES-256-GCM)</strong> des fichiers de comptes rendus, des noms d&apos;analyses, valeurs,
                intervalles, résumés, antécédents, données d&apos;identité et de mode de vie, avec une clé détenue par Amandev Technologies, hors
                de l&apos;hébergeur. Les recherches par email, téléphone ou CIN passent par des index aveugles, sans déchiffrement.
              </li>
              <li>Séparation stricte des données par compte et par profil, contrôlée par le serveur.</li>
              <li>Journal des accès et des consentements ; sauvegardes chiffrées quotidiennes.</li>
              <li>Aucun résultat ni information de santé dans les emails, SMS et messages WhatsApp.</li>
            </ul>
            <p className="mt-4">
              Aucun système n&apos;est infaillible. En cas de violation de données présentant un risque pour vous, nous vous en informerons ainsi
              que la CNDP.
            </p>
          </section>

          <section>
            <h2>9. Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;<strong>accès</strong>, de <strong>rectification</strong>, d&apos;<strong>opposition</strong> pour motif légitime
              et de <strong>retrait</strong> de vos consentements (loi 09-08, art. 7 à 9). Dans l&apos;application :
            </p>
            <ul className="mt-4">
              <li>
                <strong>Export</strong> de votre compte, de vos comptes rendus avec leurs résultats et de votre journal de santé ; les autres
                données (antécédents, profils des proches, consentements, contrôles, partages) vous sont communiquées sur demande écrite.
              </li>
              <li>Modification de vos informations et correction d&apos;une valeur extraite d&apos;un compte rendu.</li>
              <li>
                <strong>Suppression</strong> immédiate d&apos;un compte rendu, d&apos;un antécédent, d&apos;un profil ou de votre compte entier.
              </li>
              <li>Retrait de chaque consentement et révocation d&apos;un partage avec un médecin.</li>
            </ul>
            <p className="mt-4">
              Vous pouvez aussi écrire à <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a> ou à l&apos;adresse postale de la
              section 1. Nous vérifions votre identité sans demander plus que nécessaire et répondons gratuitement sous 30 jours au plus. Le
              titulaire d&apos;un compte exerce ces droits pour les profils qu&apos;il gère ; un proche peut aussi nous écrire directement.
            </p>
            <p className="mt-4">
              Vous pouvez introduire une réclamation auprès de la CNDP (
              <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer">
                www.cndp.ma
              </a>
              ). Si une autre loi s&apos;applique à vous (par exemple le RGPD dans l&apos;UE), vous pouvez exercer les droits qu&apos;elle prévoit
              auprès du même contact.
            </p>
          </section>

          <section>
            <h2>10. Partage avec un médecin</h2>
            <p>
              Vous pouvez partager les résultats d&apos;un profil avec le médecin de votre choix. Il reçoit un accès personnel protégé par mot de
              passe à un instantané des résultats, pendant 90 jours au plus. Vous pouvez révoquer le partage à tout moment ; l&apos;accès est
              alors coupé immédiatement.
            </p>
          </section>

          <section>
            <h2>11. Résultats déposés par un laboratoire partenaire</h2>
            <p>
              Avec votre accord recueilli au laboratoire, un laboratoire partenaire peut déposer votre résultat sur Serumo. Pour ce dépôt, le
              laboratoire est responsable du traitement et Serumo agit pour son compte : le fichier et vos coordonnées sont stockés chiffrés,
              vous recevez un message neutre (sans résultat) et vous récupérez le résultat avec le code remis par le laboratoire. Un dépôt
              non récupéré est supprimé après 30 jours. Tant que vous ne l&apos;avez pas récupéré, vous pouvez exercer vos droits auprès du
              laboratoire ou auprès de nous.
            </p>
            <p className="mt-4">
              Une fois le résultat récupéré, il intègre votre compte et suit la présente politique. Il n&apos;est jamais envoyé à l&apos;IA avant votre
              consentement.
            </p>
          </section>

          <section>
            <h2>12. Âge et enfants</h2>
            <p>
              Il faut avoir <strong>18 ans ou plus</strong> pour créer un compte. Les données d&apos;un enfant ne peuvent être enregistrées que dans un
              profil créé et géré par son parent, titulaire du compte. Les profils d&apos;enfants ne reçoivent pas de rappels. Si nous apprenons
              qu&apos;un mineur a créé un compte, nous le supprimons.
            </p>
          </section>

          <section>
            <h2>13. Traitements automatisés</h2>
            <p>
              L&apos;IA extrait les valeurs de vos comptes rendus et rédige des explications éducatives. Les notes de contexte liées à vos
              antécédents sont produites par des règles relues par la conseillère médicale de Serumo, pas par l&apos;IA. Aucune décision
              produisant des effets juridiques à votre égard n&apos;est prise sur ce fondement. Vous pouvez corriger toute valeur extraite.
            </p>
          </section>

          <section>
            <h2>14. Site getserumo.com et stockage local</h2>
            <p>
              Le site getserumo.com n&apos;utilise ni cookie publicitaire ni outil de mesure d&apos;audience. Le formulaire de demande de démonstration
              destiné aux laboratoires est transmis par le service Web3Forms à notre adresse email. Les applications conservent sur votre
              appareil votre session, votre langue et vos préférences ; les statistiques d&apos;utilisation ne sont activées qu&apos;avec votre accord.
            </p>
          </section>

          <section>
            <h2>15. Modifications</h2>
            <p>
              Nous publions toute modification sur cette page avec une nouvelle date de mise à jour. Si elle change l&apos;usage de vos données
              ou leurs destinataires, nous vous en informons dans l&apos;application et, lorsqu&apos;un consentement est nécessaire, nous vous le
              redemandons.
            </p>
          </section>

          <section>
            <h2>16. Contact</h2>
            <p>
              Amandev Technologies — protection des données :{" "}
              <a href="mailto:ahmed@amandevtech.com">ahmed@amandevtech.com</a>
              <br />
              236 bd Abdelmoumen, angle rue Pasquier, Imm. F8, 2e étage, bureau 6, Maârif, 20330 Casablanca, Maroc
            </p>
          </section>
        </div>
      </article>
      </HeroCard>
    </SiteLayout>
  );
};

export default PrivacyFr;
