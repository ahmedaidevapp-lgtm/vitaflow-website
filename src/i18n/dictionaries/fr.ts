/**
 * French dictionary — the source of truth for the site's copy.
 *
 * `Dict` is derived from this object (see ./index.ts), so every other language is
 * checked against this shape at compile time. Add a key here first.
 */
export const fr = {
  nav: {
    pagesLabel: "Pages du site",
    labs: "Laboratoires",
    labsOverview: "Vue d'ensemble",
    patientsGroup: "Patients",
    ios: "L'application",
    pricing: "Tarifs",
    labTests: "Analyses",
    signIn: "Se connecter",
    signInPatient: "Espace patient",
    signInLab: "Portail laboratoire",
    signInDoctor: "Espace médecin",
    cta: "Demander une démo",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
  },

  footer: {
    tagline:
      "Le dossier de santé détenu par le patient. Les laboratoires déposent les comptes rendus ; les patients en gardent le contrôle.",
    forLabs: "Pour les laboratoires",
    ios: "Pour les patients",
    labTests: "Analyses",
    pricing: "Tarifs de l'application",
    privacy: "Confidentialité",
    terms: "Conditions",
    refunds: "Remboursements",
    contact: "Contact",
    contactTitle: "Contact",
    contactSupport: "Support :",
    legalLine: "Amandev Technologies SARL AU · Casablanca, Maroc",
  },

  labs: {
    hero: {
      product: " pour laboratoires",
      titleLead: "Du laboratoire au ",
      titleAccent: "patient",
      titleTail: ", sans détour.",
      subtitle:
        "Serumo donne à votre laboratoire un canal de remise des comptes rendus : vous déposez le PDF, le patient le récupère dans une application qui lui appartient. Aucune intégration SGL, aucun développement de votre côté.",
      ctaPrimary: "Demander une démo",
      ctaSecondary: "Voir le fonctionnement",
      note: "Gratuit pour vos patients · Compatible avec tout SGL",
      demoNote: "Captures de démonstration — données fictives.",
      notificationDetail: "Votre patient choisit de recevoir ses résultats par WhatsApp ou par e-mail.",
      shots: [
        "Application Serumo : tableau de bord patient avec la part de marqueurs dans la norme et le dernier compte rendu.",
        "Application Serumo : évolution d'un marqueur entre plusieurs comptes rendus, avec l'intervalle de référence.",
        "Application Serumo : marqueurs regroupés par thème, avec position par rapport à l'intervalle de référence.",
      ],
    },

    problem: {
      eyebrow: "Le problème",
      title: "Entre le laboratoire et le patient, il manque un lien.",
      intro:
        "Votre analyse est irréprochable. C'est le dernier mètre, du comptoir au patient, qui se fait encore à la main.",
      cards: [
        {
          title: "Le patient perd son compte rendu",
          desc: "Papier égaré, PDF noyé dans une boîte mail. À la visite suivante, l'historique a disparu, et avec lui toute référence biologique.",
        },
        {
          title: "Aucun canal de remise numérique",
          desc: "Une pièce jointe par e-mail n'est ni suivie, ni vérifiée, ni conservée sous une forme réellement exploitable par le patient.",
        },
        {
          title: "Pas de budget pour interfacer le SGL",
          desc: "Les projets d'interfaçage HL7 sont longs, coûteux et rarement prioritaires face aux besoins du plateau technique.",
        },
      ],
    },

    how: {
      eyebrow: "Le parcours",
      title: "Du compte rendu au patient, en quatre étapes.",
      steps: [
        {
          tag: "ÉTAPE 1 · AU LABORATOIRE",
          title: "Déposez le compte rendu",
          desc: "Téléversez le PDF depuis le portail web, ou laissez simplement votre SGL l'envoyer à une adresse dédiée. Aucun connecteur à développer.",
          visualPrimary: "compte_rendu_2847.pdf",
          visualSecondary: "Téléversement · ou envoi e-mail automatique",
        },
        {
          tag: "ÉTAPE 2 · AUTOMATIQUE",
          title: "Serumo reconnaît le patient",
          desc: "Serumo lit le numéro de téléphone sur le compte rendu et l'envoie automatiquement au bon patient.",
          visualPrimary: "✓ Numéro reconnu",
          visualSecondary: "Rapprochement automatique avec le patient préenregistré",
        },
        {
          tag: "ÉTAPE 3 · IMMÉDIAT",
          title: "Le patient est notifié",
          desc: "Une notification « votre résultat est prêt » part par e-mail et WhatsApp, sur le canal que votre patient utilise déjà.",
          visualPrimary: "Votre résultat est prêt",
          visualSecondary: "E-mail · WhatsApp",
        },
        {
          tag: "ÉTAPE 4 · CÔTÉ PATIENT",
          title: "Récupération vérifiée",
          desc: "Le patient saisit un code à usage unique au format XXXX-XXXX avec sa date de naissance. Le compte rendu rejoint alors son dossier Serumo, définitivement.",
          visualPrimary: "7K2M-4QP8",
          visualSecondary: "Code à usage unique + date de naissance",
        },
      ],
    },

    benefits: {
      eyebrow: "Avantages",
      title: "Conçu pour s'adapter à votre fonctionnement, pas l'inverse.",
      items: [
        {
          title: "Zéro intégration SGL",
          desc: "Pas de HL7, pas d'API à développer, pas de projet informatique. Votre SGL envoie un PDF, c'est tout.",
        },
        {
          title: "Compatible avec tout SGL",
          desc: "Le rapprochement se fait sur le document lui-même, jamais sur le logiciel qui l'a produit. Votre système actuel convient.",
        },
        {
          title: "Récupération vérifiée par le patient",
          desc: "Code à usage unique et date de naissance : le compte rendu n'est remis qu'à la bonne personne.",
        },
        {
          title: "Notification e-mail et WhatsApp",
          desc: "Vos patients sont alertés dès la validation des résultats, sur les canaux qu'ils consultent vraiment.",
        },
        {
          title: "Gratuit pour vos patients",
          desc: "Consulter et conserver ses résultats dans Serumo ne coûte rien au patient.",
        },
        {
          title: "Charge minimale pour l'équipe",
          desc: "Un téléversement, ou rien du tout si l'envoi est automatisé. Aucune nouvelle procédure à adopter.",
        },
      ],
    },

    portal: {
      eyebrow: "Le portail laboratoire",
      title: "Tout ce qu'il vous faut, dans un navigateur.",
      intro:
        "Le portail Serumo est une application web pour poste fixe, pensée pour l'accueil et l'administration. Rien à installer.",
      imgAlt: "Portail Serumo : page d'accueil du laboratoire.",
      items: [
        {
          title: "Téléversement des comptes rendus",
          desc: "Un par un ou par lots, depuis n'importe quel poste du laboratoire.",
        },
        {
          title: "Suivi des remises et récupérations",
          desc: "Statut par patient : déposé, notifié, récupéré. Vous savez qui a reçu quoi.",
        },
        {
          title: "Réémission de code",
          desc: "Le patient a perdu son code ? Régénérez-le en un clic depuis la fiche de remise.",
        },
        {
          title: "Préenregistrement des patients",
          desc: "Enregistrez les demandes à l'accueil pour que le rapprochement automatique fonctionne.",
        },
        {
          title: "Vue « Vos patients »",
          desc: "Strictement limitée aux remises effectuées par votre laboratoire. Vous ne voyez jamais les données d'un autre établissement.",
        },
      ],
    },

    trust: {
      eyebrow: "Confiance et conformité",
      title: "Les données appartiennent au patient.",
      lead: "Serumo est un dossier de santé détenu par le patient. Votre laboratoire agit comme contributeur, et non comme responsable des données conservées dans le compte du patient.",
      cardTitle: "Contributeur, pas responsable",
      cardDesc:
        "Vous déposez un compte rendu. Le patient décide de le récupérer, de le conserver et de le partager.",
      points: [
        {
          title: "Chiffré en transit et au repos",
          desc: "Les comptes rendus et données de santé sont chiffrés de bout en bout, du stockage à la consultation.",
        },
        {
          title: "Accès cloisonné par laboratoire",
          desc: "Chaque établissement n'accède qu'à ses propres remises. Aucun accès inter-laboratoires.",
        },
        {
          title: "Consentement explicite du patient",
          desc: "Le patient vérifie son identité et accepte le document avant qu'il ne rejoigne son dossier.",
        },
        {
          title: "Conçu pour la loi 09-08",
          desc: "L'architecture et les traitements sont conçus pour répondre aux exigences marocaines en matière de données personnelles.",
        },
      ],
      noticeTitle: "Déclaration CNDP en cours",
      noticeBody:
        "Serumo est conçu pour répondre aux exigences de la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. La déclaration auprès de la CNDP est en cours d'instruction. Serumo ne revendique à ce stade aucune approbation, autorisation ou certification.",
    },

    cta: {
      eyebrow: "Pilote",
      title: "Lancez un pilote avec votre laboratoire.",
      subtitle:
        "Nous mettons en place un pilote accompagné : quelques comptes rendus, un accès au portail et une aide concrète pour vérifier que le rapprochement automatique fonctionne avec vos documents.",
      button: "Demander une démo",
      secondary: "Réponse sous deux jours ouvrés",
    },

    demoForm: {
      title: "Demander une démo",
      subtitle:
        "Dites-nous en deux minutes comment fonctionne votre laboratoire. Nous revenons vers vous sous deux jours ouvrés avec un créneau de démo.",
      name: "Nom et prénom",
      namePlaceholder: "Dr. Votre nom",
      lab: "Laboratoire",
      labPlaceholder: "Nom de votre laboratoire",
      email: "E-mail professionnel",
      emailPlaceholder: "vous@laboratoire.ma",
      phone: "Téléphone",
      phonePlaceholder: "+212 6 00 00 00 00",
      phoneOptional: "facultatif",
      city: "Ville",
      cityPlaceholder: "Casablanca",
      volume: "Comptes rendus par jour",
      volumePlaceholder: "Choisissez une fourchette",
      volumeOptions: ["Moins de 50", "50 à 200", "200 à 500", "Plus de 500"],
      message: "Votre besoin",
      messagePlaceholder:
        "Parlez-nous de votre SIL, du format de vos comptes rendus, ou de ce que vous aimeriez voir pendant la démo.",
      messageOptional: "facultatif",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours…",
      cancel: "Annuler",
      successTitle: "Demande envoyée",
      successBody:
        "Merci. Votre demande est arrivée chez nous — nous revenons vers vous sous deux jours ouvrés.",
      successClose: "Fermer",
      errorTitle: "L'envoi a échoué",
      errorBody: "Réessayez dans un instant, ou écrivez-nous directement :",
      privacy:
        "Vos coordonnées servent uniquement à répondre à cette demande. Aucune donnée patient ne doit figurer dans ce formulaire.",
      fallback: "Vous préférez l'e-mail ?",
      fallbackLink: "Écrivez-nous directement",
    },

    discoveryPopup: {
      title: "Envie d'un appel découverte ?",
      body:
        "Prenez contact et nous fixons un appel de 20 minutes dans les prochains jours pour voir si Serumo a sa place dans votre laboratoire.",
      cta: "Prendre contact",
      dismiss: "Fermer cette invitation",
      later: "Peut-être plus tard",
    },
  },

  ios: {
    hero: {
      badge: "Disponible sur iOS",
      titleLead: "Votre bilan sanguin raconte une histoire.",
      titleAccent: "Serumo la met en mots.",
      subtitle:
        "Importez n'importe quel compte rendu et regardez un mur de chiffres devenir des explications claires, un plan d'amélioration personnel et une histoire de santé qui s'enrichit à chaque visite. Disponible en français, en arabe et en anglais.",
      downloadOn: "Télécharger sur l'",
      appStore: "App Store",
      rating: "5.0",
      socialProof: "Gratuit au départ · iPhone",
      shots: [
        "Écran d'accueil Serumo : part des marqueurs dans la norme, marqueurs limites et hors norme, et dernière synthèse.",
        "Détail d'un compte rendu : chaque marqueur avec sa valeur, son intervalle de référence et son statut.",
        "Écran Tendances : évolution de la glycémie à jeun sur plusieurs bilans, avec l'intervalle de référence.",
        "Écran Plans : une série de jours consécutifs et une liste d'actions pour améliorer un marqueur.",
      ],
    },

    valueProps: [
      "Tous les laboratoires",
      "Import multi-fichiers",
      "PDF protégés",
      "Photos de résultats",
      "Français, arabe et anglais",
      "100 % privé",
    ],

    beforeAfter: {
      eyebrow: "La transformation",
      titleLine1: "Ce que votre laboratoire vous remet.",
      titleLine2: "Ce que Serumo vous en fait.",
      beforeLabel: "AVANT",
      afterLabel: "AVEC SERUMO",
      beforeQuote: "« L bas, c'est grave ? Je dois m'inquiéter ? Qu'est-ce que j'en fais ? »",
      markerTitle: "Ferritine — vos réserves de fer",
      markerBadge: "Légèrement bas",
      markerDesc:
        "Des réserves de fer basses expliquent souvent la fatigue. Très fréquent, et facile à corriger.",
      planTitle: "VOTRE PLAN EN 3 ÉTAPES",
      planDesc: "Repas riches en fer 4×/semaine · associer à la vitamine C · recontrôle dans 12 semaines",
      askTitle: "À DEMANDER À VOTRE MÉDECIN",
      askDesc:
        "« Une ferritine basse pourrait-elle expliquer ma fatigue ? Faut-il aussi doser la saturation de la transferrine ? »",
    },

    features: {
      eyebrow: "Fonctionnalités",
      title: "Tout ce qu'il faut pour lire vos analyses avec confiance.",
      items: [
        {
          title: "Synthèses générées par IA",
          desc: "Des résumés pédagogiques en langage clair pour chaque compte rendu importé.",
        },
        {
          title: "Tendances par marqueur",
          desc: "Suivez chaque biomarqueur d'un compte rendu à l'autre pour voir son évolution.",
        },
        {
          title: "Histoires de progression",
          desc: "Comparez vos dernières analyses aux précédentes d'un seul coup d'œil.",
        },
        {
          title: "Journal santé et rappels",
          desc: "Gardez le rythme grâce à des listes de suivi et des rappels discrets.",
        },
        {
          title: "Lectures croisées",
          desc: "Repérez les tendances communes à plusieurs marqueurs pour une vision d'ensemble.",
        },
        {
          title: "Français, arabe et anglais",
          desc: "Application entièrement multilingue — choisissez votre langue, Serumo s'adapte.",
        },
      ],
    },

    how: {
      eyebrow: "Votre parcours",
      title: "D'un simple import à une compréhension durable",
      steps: [
        {
          tag: "ÉTAPE 1 · AUJOURD'HUI",
          title: "Importez tout ce que vous avez",
          desc: "PDF, photos de résultats papier, comptes rendus protégés, ou plusieurs fichiers d'un coup — de n'importe quel laboratoire, en français, en arabe ou en anglais. Serumo lit tout.",
          visualPrimary: "analyses_mars.pdf",
          visualSecondary: "photo_bilan.jpg",
          visualExtra: "· 2 autres",
        },
        {
          tag: "ÉTAPE 2 · 30 SECONDES PLUS TARD",
          title: "L'essentiel, immédiatement",
          desc: "Une synthèse IA vous dit ce qui va bien, ce qui mérite attention et à quel point c'est urgent — avant même de lire un seul chiffre.",
          visualPrimary:
            "13 marqueurs sur 14 sont dans les clous. La ferritine est un peu basse — rien d'alarmant, et facile à corriger.",
          visualSecondary: "",
          visualExtra: "",
        },
        {
          tag: "ÉTAPE 3 · QUAND LA CURIOSITÉ VIENT",
          title: "Comprenez chaque marqueur",
          desc: "Touchez n'importe quel biomarqueur pour une explication en langage clair : ce que c'est, ce que votre chiffre signifie, et pourquoi cela compte pour vous.",
          visualPrimary: "C'est quoi, la ferritine ?",
          visualSecondary:
            "Voyez-la comme votre compte épargne en fer. Le vôtre est un peu à découvert…",
          visualExtra: "",
        },
        {
          tag: "ÉTAPE 4 · CETTE SEMAINE",
          title: "Suivez votre plan d'amélioration",
          desc: "Des étapes concrètes et personnalisées pour chaque marqueur à travailler — alimentation, habitudes, journal santé, et le bon moment pour recontrôler.",
          visualPrimary: "Repas riches en fer 4×/semaine",
          visualSecondary: "Associer à la vitamine C",
          visualExtra: "Recontrôle dans 12 semaines",
        },
        {
          tag: "À CHAQUE VISITE · VOTRE HISTOIRE",
          title: "Regardez votre progression s'écrire",
          desc: "Chaque nouveau bilan ajoute un chapitre. Les tendances de tous vos marqueurs, visite après visite — la preuve que ce que vous faites fonctionne.",
          visualPrimary: "Ferritine · mars → juin ·",
          visualSecondary: "+41 %",
          visualExtra: "",
        },
      ],
    },

    trust: {
      eyebrow: "La confidentialité d'abord",
      title: "Une histoire que vous seul pouvez lire.",
      cardTitle: "100 % privé",
      cardDesc:
        "Privé par conception. Nous ne vendons ni ne partageons jamais vos données de santé — pas de publicité, sans exception.",
      body: "Votre bilan sanguin fait partie des données les plus intimes qui soient. Serumo les garde chiffrées et sous votre contrôle, toujours.",
      disclaimerTitle: "Informations éducatives, pas un avis médical",
      disclaimerBody:
        "Serumo vous aide à comprendre vos données biologiques à des fins de bien-être personnel et d'éducation. L'application ne fournit ni diagnostic ni traitement. Consultez toujours un professionnel de santé qualifié pour toute décision médicale.",
    },

    cta: {
      title: "Commencez votre histoire de santé aujourd'hui.",
      subtitle:
        "Téléchargement gratuit. Serumo transforme n'importe quel compte rendu en explications claires, suit vos tendances biologiques et construit votre histoire de santé dans la durée.",
      downloadOn: "Télécharger sur l'",
      appStore: "App Store",
      note: "★★★★★ 5,0 · Gratuit au départ · iPhone",
      ariaDownload: "Télécharger Serumo sur l'App Store",
    },
  },

  pricing: {
    backHome: "← Retour à l'accueil",
    title: "Tarifs",
    intro:
      "Serumo est gratuit au départ. Premium débloque les imports illimités, l'intégralité des analyses et des plans santé personnalisés — pour vous ou pour tout votre foyer. L'abonnement se souscrit dans l'application (App Store / Google Play) ou sur le web.",
    monthly: "Mensuel",
    yearly: "Annuel",
    currencyLabel: "Devise",
    periodLabel: "Période de facturation",
    free: "Gratuit",
    forever: "pour toujours",
    premium: "Premium",
    perMonth: "mois",
    perYear: "an",
    oneProfile: "1 profil",
    freeFeatures: [
      "Import et conservation d'un seul compte rendu",
      "Suivi des biomarqueurs essentiels",
      "Une synthèse IA par profil",
    ],
    premiumFeatures: [
      "Imports de comptes rendus illimités",
      "Explications complètes en langage clair pour chaque biomarqueur",
      "Plans d'amélioration et actions personnalisés",
      "Synthèses IA illimitées",
      "Tendances des biomarqueurs sur tous vos bilans",
      "Premium pour jusqu'à 4 profils du foyer",
    ],
    bundlesTitle: "Formules Premium pour le foyer",
    bundlesIntro:
      "Ajoutez des profils Premium pour vos proches — les imports et les analyses de chacun restent cloisonnés.",
    tableProfiles: "Profils Premium",
    tablePerMonth: "Par mois",
    tablePerYear: "Par an",
    tableApproxMonth: "≈ par mois",
    profileSingular: "profil",
    profilePlural: "profils",
    disclaimerLead:
      "Les prix affichés sont indicatifs et peuvent varier selon le pays ou la région. Le prix exact, taxes applicables comprises, est toujours indiqué au moment du paiement, avant confirmation. Les achats web sont traités par notre revendeur officiel Paddle ; les achats intégrés sont facturés par l'App Store ou Google Play. Les abonnements se renouvellent automatiquement jusqu'à résiliation — voir nos",
    termsLink: "Conditions d'utilisation",
    and: "et notre",
    refundLink: "Politique de remboursement",
  },

  legal: {
    backHome: "← Retour à l'accueil",
    effectiveDate: "Date d'entrée en vigueur :",
    lastUpdated: "Dernière mise à jour :",
    availableIn: "Disponible en :",
  },

  notFound: {
    title: "404",
    message: "Cette page n'existe pas.",
    back: "Retour à l'accueil",
  },
};
