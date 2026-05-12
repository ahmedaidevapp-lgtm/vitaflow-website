import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const PrivacyFr = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article lang="fr" className="container max-w-3xl pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-sm font-medium text-primary-dark mb-2">
          <Link to="/" className="text-slate2 hover:text-navy transition-smooth">
            ← Retour à l&apos;accueil
          </Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
          VitaFlow - Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-slate3">
          Date d&apos;effet : 15 avril 2026
          <br />
          Dernière mise à jour : 12 mai 2026
        </p>
        <p className="mt-3 text-sm text-slate3">
          <Link to="/privacy" className="text-primary-dark underline underline-offset-2 hover:text-primary font-medium">
            English
          </Link>
          {" · "}
          <span className="font-medium text-navy">Français</span>
        </p>

        <div className="mt-12 space-y-10 text-[15px] md:text-base leading-relaxed text-slate2 [&_h2]:text-navy [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mb-3 [&_h3]:text-navy [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-navy [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-primary-dark [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-navy">
          <section>
            <h2>1. Qui nous sommes</h2>
            <p>
              <strong>Responsable du traitement :</strong> Amandev Technologies
              <br />
              <strong>Contact confidentialité :</strong> privacy@amandevtech.com
              <br />
              <strong>Contact support :</strong> support@amandevtech.com
            </p>
            <p className="mt-4">
              VitaFlow (&quot;nous&quot;, &quot;notre&quot;, ou le &quot;Service&quot;) est une application mobile qui aide les utilisateurs à organiser,
              visualiser et comprendre leurs résultats d&apos;analyses biologiques dans le temps, à des fins de bien-être personnel et
              d&apos;information uniquement.
            </p>
            <p className="mt-4">
              VitaFlow n&apos;est pas un dispositif médical et ne fournit ni conseil médical, ni diagnostic, ni traitement. Le Service
              n&apos;est pas présenté comme certifié conforme HIPAA, GDPR, ou à un cadre équivalent, sauf documentation expresse
              distincte.
            </p>
            <p className="mt-4">
              La présente Politique de confidentialité explique comment nous collectons, utilisons, stockons, partageons et protégeons
              les informations, y compris les informations de santé que vous choisissez de téléverser.
            </p>
          </section>

          <section>
            <h2>2. Champ d&apos;application</h2>
            <p>La présente Politique de confidentialité s&apos;applique à :</p>
            <ul>
              <li>
                L&apos;application mobile VitaFlow sur iOS et Android (identifiant bundle/package :{" "}
                <code>com.vitalcheck.app</code>)
              </li>
              <li>
                L&apos;API backend utilisée pour les comptes, l&apos;authentification, les téléversements, l&apos;extraction, le stockage et les
                fonctionnalités associées
              </li>
            </ul>
            <p className="mt-4">
              Cette Politique ne s&apos;applique pas aux services tiers que vous utilisez de manière indépendante (par exemple portails de
              laboratoires, fournisseurs e-mail, fabricants d&apos;appareils), sauf intégration directe décrite dans la présente Politique.
            </p>
          </section>

          <section>
            <h2>3. Informations que nous collectons</h2>
            <p>Les données collectées dépendent des fonctionnalités que vous utilisez et des informations que vous choisissez de fournir.</p>

            <h3>3.1 Informations de compte et d&apos;identité</h3>
            <ul>
              <li>Adresse e-mail (inscription/connexion e-mail + mot de passe)</li>
              <li>Nom affiché (si fourni)</li>
              <li>
                Données d&apos;authentification :
                <ul className="mt-2 list-[circle]">
                  <li>Empreinte (hash) de mot de passe (nous ne stockons pas les mots de passe en clair)</li>
                  <li>
                    Données d&apos;authentification tokenisées émises par des fournisseurs d&apos;identité pour la connexion sociale prise en
                    charge
                  </li>
                </ul>
              </li>
              <li>Identifiant interne utilisateur/compte</li>
              <li>Métadonnées de compte (par exemple dates de création et de mise à jour)</li>
              <li>Langue/locale préférée (par exemple anglais, français, arabe)</li>
            </ul>

            <h3>3.1.1 Profils de santé (multi-profils)</h3>
            <p>
              Votre <strong>compte</strong> (identité de connexion) est distinct des <strong>profils de santé</strong> dans l&apos;application.
            </p>
            <ul className="mt-4">
              <li>
                Vous pouvez gérer <strong>jusqu&apos;à huit profils de santé actifs</strong> sur un même compte — par exemple vous-même et des proches
                que vous aidez à suivre. Chaque profil comporte un libellé, une catégorie de lien familial optionnelle (par exemple
                vous-même ou une personne dépendante) et des paramètres d&apos;affichage utilisés uniquement dans l&apos;application.
              </li>
              <li>
                <strong>
                  Rapports biologiques, données structurées de marqueurs, entrées du journal de santé, récits de progression et contenus
                  de bien-être associés sont rattachés à un seul profil.
                </strong>{" "}
                Les données ne sont pas fusionnées entre profils, y compris au sein d&apos;un même compte.
              </li>
              <li>
                Lorsque vous créez un profil pour une personne autre que vous-même, l&apos;application vous demande de{" "}
                <strong>confirmer que vous avez l&apos;autorisation appropriée</strong> pour saisir et gérer ses informations sur votre compte ;
                cette attestation est enregistrée à des fins de piste d&apos;audit.
              </li>
              <li>
                Après la connexion, l&apos;application envoie un <strong>identifiant de profil actif</strong> avec les requêtes API afin que le serveur
                charge et enregistre le bon compartiment de données.
              </li>
            </ul>

            <h3>3.2 Informations liées à la santé et au bien-être</h3>
            <p>
              Lorsque vous utilisez les fonctionnalités principales <strong>pour un profil de santé donné</strong>, nous pouvons traiter :
            </p>
            <ul>
              <li>
                Les fichiers de rapports biologiques téléversés (PDF/images), y compris les informations personnelles ou cliniques
                visibles dans ces fichiers
              </li>
              <li>
                Les données structurées extraites des rapports, y compris noms de marqueurs/tests, valeurs, unités, plages de référence,
                statuts (par exemple bas/normal/élevé), indicateurs de confiance/relecture et dates de rapport
              </li>
              <li>Les résumés éducatifs, analyses, checklists et avertissements générés à partir de vos rapports</li>
              <li>Les comparaisons de progression entre rapports</li>
              <li>Les entrées du journal de santé et les paramètres de checklist/rappels créés dans l&apos;application</li>
            </ul>
            <p className="mt-4">
              Nous ne demandons pas d&apos;identifiants gouvernementaux, de numéros d&apos;assurance, ni de dossier médical complet, sauf si ces
              informations figurent dans les fichiers que vous téléversez ou le texte que vous saisissez.
            </p>

            <h3>3.3 Informations techniques, d&apos;usage et de sécurité</h3>
            <ul>
              <li>Métadonnées des requêtes API (par exemple horodatage, contexte de requête, adresse IP, logs d&apos;erreur/sécurité)</li>
              <li>Données de session et de jetons (flux access/refresh token)</li>
              <li>Données locales de l&apos;application (par exemple langue préférée et stockage sécurisé de session)</li>
              <li>Données locales de planification de notifications basées sur vos rappels/journal de santé</li>
            </ul>

            <h3>3.4 Connexion tierce optionnelle (Google et Apple)</h3>
            <p>
              Si vous choisissez « Continuer avec Google » ou « Continuer avec Apple », le flux de connexion est géré par le fournisseur
              d&apos;identité choisi, selon ses propres conditions et sa politique de confidentialité.
            </p>
            <p className="mt-4">
              Nous recevons le jeton d&apos;identité et des informations de compte limitées nécessaires pour vous authentifier et créer/accéder
              à votre compte VitaFlow. Nous ne recevons pas le mot de passe de votre compte Google ou Apple.
            </p>
          </section>

          <section>
            <h2>4. Comment nous utilisons les informations</h2>
            <p>Nous utilisons les données personnelles aux fins suivantes :</p>
            <ul>
              <li>
                Fournir et exploiter le Service (création de compte, authentification, synchronisation, affichage rapports/tendances/journal
                de santé)
              </li>
              <li>Traiter les téléversements (réception des fichiers, extraction du contenu biologique, stockage de copies chiffrées)</li>
              <li>Générer du contenu éducatif (insights, résumés, comparaisons, orientation non diagnostique)</li>
              <li>Localisation (traduction du contenu pris en charge dans la langue choisie)</li>
              <li>Sécurité et fiabilité (prévention des abus, limitation de débit, débogage, supervision, intégrité du service)</li>
              <li>Conformité légale (réponse aux obligations légales et protection des droits/sécurité)</li>
            </ul>
            <p className="mt-4">
              Nous n&apos;utilisons pas le contenu de vos rapports téléversés pour entraîner nos propres modèles propriétaires, sauf information
              préalable et recueil du consentement requis. Les prestataires IA tiers peuvent appliquer leurs propres politiques aux contenus
              soumis via API, conformément à leurs conditions.
            </p>
          </section>

          <section>
            <h2>5. Bases légales (EEE/Royaume-Uni/Suisse et juridictions similaires)</h2>
            <p>Selon votre lieu de résidence et la loi applicable, nous pouvons nous fonder sur :</p>
            <ul>
              <li>Le contrat (fourniture des fonctionnalités demandées)</li>
              <li>L&apos;intérêt légitime (sécurité, prévention de la fraude, fiabilité)</li>
              <li>Le consentement (lorsqu&apos;il est requis pour des traitements optionnels)</li>
              <li>La base légale applicable aux données de santé/sensibles, incluant le consentement explicite lorsque nécessaire</li>
            </ul>
          </section>

          <section>
            <h2>6. Partage des données et sous-traitants</h2>
            <p>
              Nous ne vendons pas les données personnelles.
              <br />
              Nous ne partageons pas les données personnelles pour du profilage publicitaire.
            </p>
            <p className="mt-4">Nous pouvons partager des données uniquement lorsque nécessaire avec :</p>

            <h3>6.1 Fournisseurs d&apos;infrastructure et de service</h3>
            <ul>
              <li>Fournisseurs d&apos;hébergement cloud/API et de base de données</li>
              <li>Infrastructure Redis gérée pour la file technique de traitement et le stockage de limitation de débit</li>
              <li>Fournisseurs de stockage de fichiers utilisés pour le stockage chiffré des téléversements</li>
              <li>Fournisseurs d&apos;outils sécurité/exploitation (par exemple TLS, DNS, sauvegardes, logs)</li>
            </ul>

            <h3>6.2 Prestataires de traitement IA (OpenAI et/ou Microsoft Azure OpenAI)</h3>
            <p>
              Selon la configuration, VitaFlow utilise les <strong>services API OpenAI</strong> et/ou <strong>Microsoft Azure OpenAI Service</strong> (modèles
              d&apos;IA hébergés) pour les mêmes catégories de traitement. Les références contractuelles ci-dessous couvrent les deux fournisseurs
              lorsque applicable.
            </p>
            <p className="mt-4">
              Lorsque la fonctionnalité est activée pour votre compte et{" "}
              <strong>uniquement après que vous ayez accordé une autorisation pour le profil de santé actif</strong>, nous pouvons transmettre des
              données limitées pour :
            </p>
            <ul>
              <li>
                <strong>Extraction de laboratoire</strong> — texte extrait du PDF/image téléversé et zones d&apos;image pertinentes pour l&apos;OCR / extraction
                structurée des marqueurs
              </li>
              <li>
                <strong>Résumés éducatifs</strong> — contexte des marqueurs (noms, valeurs, unités, plages, date du rapport) et contexte de profil
                facultatif pour des résumés et checklists en langage accessible
              </li>
              <li>
                <strong>Résumés personnalisés de rapport</strong> — résultats de marqueurs structurés et champs de personnalisation facultatifs que vous
                avez fournis
              </li>
              <li>
                <strong>Récits de progression</strong> — comparaison des valeurs de marqueurs entre deux rapports à des fins d&apos;explication bien-être
              </li>
              <li>
                <strong>Explications de schémas multi-marqueurs</strong> — contexte de motifs groupés pour du contenu éducatif
              </li>
              <li>
                <strong>Localisation</strong> — lorsque la langue de l&apos;application n&apos;est pas l&apos;anglais, de courts lots de chaînes déjà générées en anglais
                (pouvant citer noms, valeurs, unités de marqueurs et formulations prudentes) peuvent être envoyés pour{" "}
                <strong>traduction automatique</strong> vers la langue sélectionnée
              </li>
            </ul>
            <p className="mt-4">
              Par défaut, le contenu envoyé aux <strong>API OpenAI</strong> n&apos;est pas utilisé pour entraîner les modèles grand public d&apos;OpenAI ;{" "}
              <strong>Azure OpenAI</strong> est encadré par les règles de traitement des données entreprise de Microsoft pour la configuration utilisée.
              Nous utilisons des appels d&apos;API (pas les produits grand public de type chat), activons <code>store: false</code> lorsque l&apos;API le permet,
              et minimisons les données par requête.
            </p>
            <p className="mt-4">
              Avant tout envoi de contenu personnel ou lié à la santé vers ces prestataires, VitaFlow affiche une information in-app et demande
              votre autorisation. <strong>Ce choix est conservé par profil de santé</strong> (et enregistré côté serveur à des fins de preuve lorsque
              l&apos;application est en ligne) : si vous utilisez plusieurs profils, vous pouvez accepter ou refuser séparément pour chacun. En cas
              de refus pour le profil actif, les fonctionnalités dépendantes de l&apos;IA pour ce profil ne seront pas disponibles, mais les autres
              fonctions non IA resteront accessibles.
            </p>
            <p className="mt-4">Références :</p>
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
              <li>
                <a
                  href="https://learn.microsoft.com/legal/cognitive-services/openai/data-privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://learn.microsoft.com/legal/cognitive-services/openai/data-privacy
                </a>
              </li>
            </ul>

            <h3>6.3 Fournisseurs d&apos;identité</h3>
            <p>Si vous choisissez la connexion sociale, les données d&apos;identité sont traitées par :</p>
            <ul>
              <li>Google OAuth</li>
              <li>Sign in with Apple</li>
            </ul>
            <p className="mt-4">
              Ces fournisseurs authentifient votre identité et nous transmettent les assertions tokenisées nécessaires à l&apos;accès au compte.
            </p>

            <h3>6.4 Écosystème Expo / React Native</h3>
            <p>
              VitaFlow est développée avec Expo/React Native et peut s&apos;appuyer sur des services plateforme Apple/Google et une infrastructure
              SDK associée.
            </p>
            <p className="mt-4">
              Référence :{" "}
              <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">
                https://expo.dev/privacy
              </a>
            </p>

            <h3>6.5 Divulgations légales / sécurité</h3>
            <p>Nous pouvons divulguer des données lorsque nécessaire pour :</p>
            <ul>
              <li>Respecter la loi ou une procédure légale</li>
              <li>Protéger l&apos;intégrité et la sécurité du service</li>
              <li>Protéger les utilisateurs, les droits et la sécurité publique</li>
            </ul>
          </section>

          <section>
            <h2>7. Transferts internationaux</h2>
            <p>
              Vos données peuvent être traitées dans des juridictions où nos fournisseurs opèrent, y compris les <strong>États-Unis</strong> et d&apos;autres
              régions où nos prestataires d&apos;hébergement, de base de données, de files techniques ou d&apos;IA exécutent l&apos;infrastructure.
            </p>
            <p className="mt-4">
              Pour les utilisateurs au <strong>Maroc</strong>, le cadre de la <strong>Loi 09-08</strong> soumet certains transferts de données à caractère personnel
              (y compris les données de santé) hors du Royaume à des <strong>exigences d&apos;autorisation préalable ou d&apos;adéquation</strong> (notamment les{" "}
              <strong>articles 43 et 44</strong>), en complément des garanties techniques et contractuelles. Les transferts transfrontaliers sont décrits
              dans notre <strong>dossier de demande d&apos;autorisation préalable auprès de la CNDP</strong> et le registre des sous-traitants ; nous ne nous
              contentons pas d&apos;une formule générique lorsque des règles plus strictes s&apos;appliquent.
            </p>
            <p className="mt-4">
              Pour tous les utilisateurs, nous appliquons des <strong>mesures techniques</strong> (chiffrement en transit, chiffrement applicatif au repos
              lorsque configuré) et des <strong>mesures contractuelles</strong> avec les sous-traitants lorsque disponibles. L&apos;identité des principaux
              prestataires et leur rôle figure dans la présente Politique (section 6) et dans nos annexes CNDP.
            </p>
          </section>

          <section>
            <h2>8. Conservation des données</h2>
            <p>Nous conservons les données uniquement pendant la durée nécessaire aux finalités ci-dessus, notamment :</p>
            <ul>
              <li>Données de compte : tant que votre compte est actif</li>
              <li>
                Données de santé rattachées à un profil : jusqu&apos;à suppression du profil concerné (lorsque l&apos;application le propose), suppression
                des enregistrements sous-jacents, suppression du compte, ou absence de nécessité de conservation
              </li>
              <li>Fichiers téléversés et enregistrements associés : comme les données de santé ci-dessus (rattachés au profil propriétaire)</li>
              <li>Logs opérationnels/sécurité : pendant une période limitée nécessaire à la sécurité et à la conformité</li>
              <li>Exceptions de conservation légale : rétention plus longue lorsque la loi l&apos;impose</li>
            </ul>
          </section>

          <section>
            <h2>9. Mesures de sécurité</h2>
            <p>Nous mettons en place des mesures techniques et organisationnelles, notamment :</p>
            <ul>
              <li>HTTPS/TLS pour les données en transit</li>
              <li>Hachage robuste des mots de passe (pas de stockage en clair)</li>
              <li>
                <strong>Chiffrement applicatif au repos</strong> pour les fichiers de laboratoire téléversés et les champs sensibles en base, selon{" "}
                <strong>AES-256-GCM</strong> avec clé dédiée côté serveur — <strong>obligatoire dans notre environnement de production</strong> ; le développement local
                peut fonctionner sans cette clé à des fins d&apos;ingénierie uniquement
              </li>
              <li>Application d&apos;une politique de chiffrement strict pour les données de santé et autres données sensibles</li>
              <li>
                Contrôle d&apos;accès scope, <strong>isolation par compte authentifié et compartimentation des données de santé par profil</strong> (appliquée côté
                serveur)
              </li>
              <li>Techniques de blind index pour certaines opérations de recherche lorsque le chiffrement est activé</li>
              <li>
                Journalisation opérationnelle, supervision orientée anomalies, et <strong>piste d&apos;audit</strong> pour les actions sensibles (y compris
                changements de profil actif et événements de consentement), dans les limites de conservation décrites à la section 8
              </li>
            </ul>
            <p className="mt-4">Aucun système n&apos;est sécurisé à 100 %. Vous êtes responsable de la sécurité de votre appareil et de vos identifiants.</p>
          </section>

          <section>
            <h2>10. Vos droits et vos choix</h2>
            <p>Selon la loi applicable, vous pouvez disposer des droits suivants :</p>
            <ul>
              <li>Accéder à vos données personnelles</li>
              <li>Corriger des données inexactes</li>
              <li>Demander la suppression</li>
              <li>Limiter ou vous opposer à certains traitements</li>
              <li>Recevoir une exportation portable</li>
              <li>Retirer votre consentement (lorsque le consentement est la base légale)</li>
              <li>Introduire une réclamation auprès d&apos;une autorité de contrôle</li>
            </ul>
            <p className="mt-4">
              VitaFlow permet la <strong>suppression de profils de santé individuels</strong>, la <strong>suppression de compte</strong> et l&apos;export de données via des
              fonctionnalités authentifiées et/ou en contactant le support. Si vous suivez plusieurs personnes sous votre compte, une demande
              peut nécessiter de préciser si elle vise un profil ou l&apos;intégralité du compte.
            </p>
            <p className="mt-4">
              Pour toute aide :{" "}
              <a href="mailto:support@amandevtech.com">support@amandevtech.com</a>
            </p>
          </section>

          <section>
            <h2>10.1 Consentement in-app pour le traitement IA tiers</h2>
            <p>Lorsqu&apos;une fonctionnalité requiert un traitement IA tiers, VitaFlow affiche une notice in-app qui :</p>
            <ul>
              <li>
                Explique quelles catégories de données peuvent être envoyées (texte/images de rapport, contexte des marqueurs, personnalisation
                de profil facultative, et — pour les langues autres que l&apos;anglais — de courts lots de chaînes anglaises déjà générées, pouvant
                reprendre vos résultats, pour <strong>traduction</strong>)
              </li>
              <li>
                Identifie le ou les destinataires (<strong>services API OpenAI et/ou Microsoft Azure OpenAI</strong>, selon la configuration déployée)
              </li>
              <li>Demande votre autorisation <strong>expresse</strong> avant transmission</li>
            </ul>
            <p className="mt-4">
              La notice concerne <strong>le profil de santé actif</strong> lors du téléversement ou du déclenchement de la fonctionnalité. Si vous ne donnez pas
              votre autorisation pour ce profil, les fonctionnalités dépendantes de l&apos;IA restent indisponibles pour ce profil et{" "}
              <strong>aucune</strong> charge utile de rapport de santé n&apos;est envoyée à ces prestataires pour celui-ci. Une <strong>trace d&apos;audit de consentement</strong>{" "}
              est écrite côté serveur lorsque vous validez votre choix connecté (tentative au mieux si le réseau échoue après sauvegarde locale de
              la préférence).
            </p>
          </section>

          <section>
            <h2>11. Confidentialité des enfants</h2>
            <p>
              VitaFlow n&apos;est pas destinée aux enfants de moins de 16 ans (ou l&apos;âge minimum requis dans votre juridiction). Si nous apprenons que
              nous avons collecté des données personnelles d&apos;un enfant en violation de la loi, nous prendrons des mesures pour les supprimer.
            </p>
          </section>

          <section>
            <h2>12. Traitements automatisés</h2>
            <p>
              VitaFlow utilise des traitements automatisés (y compris des mécanismes de type machine learning, la traduction automatique optionnelle
              et les aides narratives décrites à la section 6.2) pour structurer les informations biologiques téléversées et générer des résumés
              éducatifs. Cela ne constitue pas un diagnostic ou un traitement médical.
            </p>
            <p className="mt-4">
              Nous n&apos;utilisons pas de prise de décision exclusivement automatisée produisant des effets juridiques ou significatifs au sens du
              RGPD.
            </p>
          </section>

          <section>
            <h2>13. Informations de confidentialité — États des États-Unis (dont Californie)</h2>
            <p>Lorsque les lois étatiques américaines applicables s&apos;appliquent :</p>
            <ul>
              <li>Les catégories de données collectées et les finalités sont décrites aux sections 3 et 4</li>
              <li>Nous ne vendons pas les données personnelles et ne les partageons pas pour de la publicité comportementale inter-contextes</li>
              <li>
                Vous pouvez exercer vos droits éligibles en nous contactant :{" "}
                <a href="mailto:privacy@amandevtech.com">privacy@amandevtech.com</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>14. Notice de confidentialité spécifique au Maroc</h2>
            <p>
              Si vous êtes situé au Maroc, vos données personnelles sont traitées conformément à la Loi n° 09-08 relative à la protection des
              personnes physiques à l&apos;égard du traitement des données à caractère personnel, sous le contrôle de la CNDP (Commission Nationale de
              contrôle de la protection des Données à caractère Personnel).
            </p>
            <p className="mt-4">
              Étant donné que VitaFlow peut traiter des informations biologiques et de santé, ces données sont traitées comme des données
              personnelles sensibles et utilisées uniquement pour les finalités décrites dans la présente Politique et pour fournir le Service
              demandé par l&apos;utilisateur.
            </p>
            <p className="mt-4">
              Les utilisateurs situés au Maroc peuvent demander l&apos;accès, la correction, la mise à jour ou la suppression de leurs données
              personnelles, <strong>y compris lorsque les données sont organisées en profils de santé distincts sous un même compte</strong>, et exercer les
              autres droits prévus par la loi applicable, en contactant :{" "}
              <a href="mailto:privacy@amandevtech.com">privacy@amandevtech.com</a>.
            </p>
            <p className="mt-4">
              Lorsque des données personnelles sont transférées hors du Maroc (y compris vers des prestataires utilisés pour l&apos;hébergement,
              l&apos;infrastructure ou le traitement IA), nous combinons <strong>garanties techniques et contractuelles</strong> et{" "}
              <strong>démarches réglementaires</strong> adaptées aux données sensibles et de santé — y compris, lorsque requis,{" "}
              <strong>autorisation préalable ou instruction auprès de la CNDP</strong> et documentation dans notre dossier d&apos;autorisation (articles{" "}
              <strong>43–44</strong> de la Loi 09-08 et pratique d&apos;encadrement).
            </p>
          </section>

          <section>
            <h2>15. Modifications de la présente Politique</h2>
            <p>
              Nous pouvons mettre à jour cette Politique de confidentialité périodiquement. Les mises à jour seront publiées avec une « Dernière
              mise à jour » révisée et, lorsque requis, une information complémentaire sera fournie (par exemple notice in-app ou e-mail).
            </p>
          </section>

          <section>
            <h2>16. Contact</h2>
            <p>
              Demandes de confidentialité :{" "}
              <a href="mailto:privacy@amandevtech.com">privacy@amandevtech.com</a>
              <br />
              Support :{" "}
              <a href="mailto:support@amandevtech.com">support@amandevtech.com</a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default PrivacyFr;
