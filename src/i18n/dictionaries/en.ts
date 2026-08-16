import type { Dict } from "../types";

export const en: Dict = {
  nav: {
    how: "How it works",
    benefits: "Benefits",
    portal: "The portal",
    security: "Security",
    ios: "iOS",
    iosApp: "iOS app",
    labTests: "Lab Tests",
    pricing: "iOS pricing",
    privacy: "Privacy",
    cta: "Book a demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    logoAlt: "Serumo logo",
  },

  footer: {
    tagline:
      "The patient-owned health record. Labs deposit reports; patients keep control of them.",
    copyright: "Serumo. Educational insights for personal wellness.",
    forLabs: "For laboratories",
    ios: "iOS app",
    labTests: "Lab Tests",
    pricing: "iOS pricing",
    privacy: "Privacy",
    terms: "Terms",
    refunds: "Refunds",
    contact: "Contact",
    contactTitle: "Contact",
    contactSupport: "Support:",
    legalLine: "Amandev Technologies SARL AU · Casablanca, Morocco",
  },

  labs: {
    hero: {
      badge: "For clinical laboratories in Morocco",
      titleLead: "Give your patients their results,",
      titleAccent: "in an app they own.",
      subtitle:
        "Serumo is a patient-owned health record. Your lab deposits the report; the patient claims it themselves, securely. No LIS integration, no development work on your side.",
      ctaPrimary: "Request a pilot",
      ctaSecondary: "See how it works",
      note: "Free for your patients · Works with any LIS",
      showcase: {
        label: "What your patients see",
        demoNote: "Demo screenshots — fictitious data, no real patient.",
        prev: "Previous screenshot",
        next: "Next screenshot",
        show: "Show screenshot",
        slides: [
          {
            caption: "Home",
            alt: "The Serumo app: patient dashboard showing the share of markers in range and the latest report.",
          },
          {
            caption: "Trends",
            alt: "The Serumo app: how one marker evolves across several reports, against its reference range.",
          },
          {
            caption: "Health log",
            alt: "The Serumo app: markers grouped by theme, each positioned against its reference range.",
          },
        ],
      },
    },

    problem: {
      eyebrow: "The problem",
      title: "Result delivery hasn't changed in twenty years.",
      intro:
        "Your analysis is impeccable. It's the last metre — from the counter to the patient — that is still done by hand.",
      cards: [
        {
          title: "Patients lose their report",
          desc: "Paper mislaid, PDF buried in an inbox. By the next visit the history is gone — and with it any biological baseline.",
        },
        {
          title: "No digital delivery channel",
          desc: "An email attachment is neither tracked, nor verified, nor kept in a form the patient can genuinely use.",
        },
        {
          title: "No budget to interface the LIS",
          desc: "HL7 interfacing projects are long, expensive, and rarely a priority next to the needs of the technical platform.",
        },
      ],
    },

    how: {
      eyebrow: "The flow",
      title: "From report to patient, in four steps.",
      steps: [
        {
          tag: "STEP 1 · AT THE LAB",
          title: "Deposit the report",
          desc: "Upload the PDF from the web portal, or simply let your LIS email it to a dedicated address. No connector to build.",
          visualPrimary: "report_2847.pdf",
          visualSecondary: "Upload · or automatic email delivery",
        },
        {
          tag: "STEP 2 · AUTOMATIC",
          title: "Serumo matches on the CIN",
          desc: "The CIN printed on the report is used to bind the document to the pre-registered patient. Unmatched documents go to a quarantine queue for manual binding.",
          visualPrimary: "CIN recognised",
          visualSecondary: "Automatic match with the pre-registered patient",
        },
        {
          tag: "STEP 3 · IMMEDIATE",
          title: "The patient is notified",
          desc: "A “your result is ready” notification goes out by email and WhatsApp, on the channel your patient already uses.",
          visualPrimary: "Your result is ready",
          visualSecondary: "Email · WhatsApp",
        },
        {
          tag: "STEP 4 · PATIENT SIDE",
          title: "Verified claim",
          desc: "The patient enters a one-time code in XXXX-XXXX format together with their date of birth. The report then joins their Serumo record, for good.",
          visualPrimary: "7K2M-4QP8",
          visualSecondary: "One-time code + date of birth",
        },
      ],
    },

    benefits: {
      eyebrow: "Benefits",
      title: "Built to fit your operation, not the other way round.",
      items: [
        {
          title: "Zero LIS integration",
          desc: "No HL7, no API to build, no IT project. Your LIS sends a PDF — that's all.",
        },
        {
          title: "Works with any LIS",
          desc: "Matching happens on the document itself, never on the software that produced it. Your current system is fine.",
        },
        {
          title: "Patient-verified claim",
          desc: "One-time code and date of birth: the report is only released to the right person.",
        },
        {
          title: "Email and WhatsApp notification",
          desc: "Your patients are alerted as soon as results are validated, on the channels they actually check.",
        },
        {
          title: "Free for your patients",
          desc: "Viewing and keeping results in Serumo costs the patient nothing.",
        },
        {
          title: "Minimal staff workflow",
          desc: "One upload — or nothing at all if sending is automated. No new procedure for staff to adopt.",
        },
      ],
    },

    portal: {
      eyebrow: "The lab portal",
      title: "Everything you need, in a browser.",
      intro:
        "The Serumo portal is a desktop web application designed for reception and admin staff. Nothing to install.",
      items: [
        {
          title: "Report upload",
          desc: "One at a time or in batches, from any workstation in the lab.",
        },
        {
          title: "Delivery and claim tracking",
          desc: "Status per patient: deposited, notified, claimed. You know who received what.",
        },
        {
          title: "Code re-issue",
          desc: "Patient lost their code? Regenerate it in one click from the delivery record.",
        },
        {
          title: "Patient pre-registration",
          desc: "Register patient orders at reception so that automatic matching works.",
        },
        {
          title: "Quarantine queue",
          desc: "Documents whose CIN could not be matched are held aside and bound manually.",
        },
        {
          title: "“Your patients” view",
          desc: "Strictly limited to deliveries made by your laboratory. You never see another facility's data.",
        },
      ],
    },

    trust: {
      eyebrow: "Trust and compliance",
      title: "The data belongs to the patient.",
      lead: "Serumo is a patient-owned health record. Your laboratory acts as a contributor, not as the controller of the data held in the patient's account.",
      cardTitle: "Contributor, not controller",
      cardDesc:
        "You deposit a report. The patient decides to claim it, keep it, and share it.",
      points: [
        {
          title: "Encrypted in transit and at rest",
          desc: "Reports and health data are encrypted end to end, from storage through to viewing.",
        },
        {
          title: "Access partitioned per lab",
          desc: "Each facility only reaches its own deliveries. No cross-laboratory access.",
        },
        {
          title: "Explicit patient consent",
          desc: "The patient verifies their identity and accepts the document before it joins their record.",
        },
        {
          title: "Designed for Law 09-08",
          desc: "The architecture and processing are designed to meet Moroccan personal-data requirements.",
        },
      ],
      noticeTitle: "CNDP filing in progress",
      noticeBody:
        "Serumo is designed to meet the requirements of Law 09-08 on the protection of individuals with regard to the processing of personal data. The filing with the CNDP is currently under review. Serumo claims no approval, authorisation, or certification at this stage.",
    },

    cta: {
      title: "Run a pilot with your laboratory.",
      subtitle:
        "We set up a supported pilot: a handful of reports, portal access, and hands-on help verifying that automatic matching works with your documents.",
      button: "Email the Serumo team",
      secondary: "We reply within two business days",
      legal: "Amandev Technologies SARL AU · Casablanca, Morocco",
    },
  },

  ios: {
    hero: {
      badge: "Available now on iOS",
      titleLead: "Your blood test has a story.",
      titleAccent: "Serumo tells it.",
      subtitle:
        "Upload any lab report and watch a wall of numbers become plain-language explanations, a personal improvement plan, and a health story that grows with every visit. Available in French, Arabic & English.",
      downloadOn: "Download on the",
      appStore: "App Store",
      rating: "5.0",
      socialProof: "Free to start · iPhone",
      carouselLabel: "App screenshots",
      prevSlide: "Previous screenshot",
      nextSlide: "Next screenshot",
      showSlide: "Show screenshot",
      slides: [
        {
          caption: "Home",
          alt: "Serumo home screen: report overview, progress story, and latest markers.",
        },
        {
          caption: "Insights",
          alt: "Insights screen: markers needing attention with suggested actions.",
        },
        {
          caption: "Plans",
          alt: "Plans screen: daily health plan and active improvement steps.",
        },
        {
          caption: "Summary",
          alt: "Summary screen: AI-generated plain-language overview of your lab results.",
        },
        {
          caption: "Trends",
          alt: "Trends screen: biomarker charts across multiple lab visits.",
        },
      ],
    },

    valueProps: [
      "Every lab supported",
      "Multi-file upload",
      "Locked PDFs",
      "Photo results",
      "French, Arabic & English",
      "100% private",
    ],

    beforeAfter: {
      eyebrow: "The transformation",
      titleLine1: "What your lab gives you.",
      titleLine2: "What Serumo gives you.",
      beforeLabel: "BEFORE",
      afterLabel: "WITH SERUMO",
      beforeQuote: "“Is L bad? Should I worry? What do I even do with this?”",
      markerTitle: "Ferritin — your iron reserves",
      markerBadge: "Slightly low",
      markerDesc: "Low iron stores often explain tiredness. Very common, very fixable.",
      planTitle: "YOUR 3-STEP PLAN",
      planDesc: "Iron-rich meals 4×/week · pair with vitamin C · retest in 12 weeks",
      askTitle: "ASK YOUR DOCTOR",
      askDesc:
        "“Could low ferritin explain my fatigue? Should we test iron saturation too?”",
    },

    features: {
      eyebrow: "Features",
      title: "Everything you need to read your labs with confidence.",
      items: [
        {
          title: "AI-powered summaries",
          desc: "Educational, plain-language summaries for every report you upload.",
        },
        {
          title: "Marker-level trends",
          desc: "Track each biomarker across reports to see how it's evolving.",
        },
        {
          title: "Progress stories",
          desc: "Compare your latest labs with previous results in one glance.",
        },
        {
          title: "Health logs & reminders",
          desc: "Stay consistent with checklists and gentle reminders.",
        },
        {
          title: "Multi-marker patterns",
          desc: "Discover broader patterns across markers for a fuller picture.",
        },
        {
          title: "French, Arabic & English",
          desc: "Full multilingual support across the app — pick your language and Serumo adapts.",
        },
      ],
    },

    how: {
      eyebrow: "Your journey",
      title: "From one upload to a lifetime of understanding",
      steps: [
        {
          tag: "STEP 1 · TODAY",
          title: "Drop in everything you have",
          desc: "PDFs, photos of paper results, locked reports, or multiple files at once — from any lab, in French, Arabic, or English. Serumo reads them all.",
          visualPrimary: "lab_results_march.pdf",
          visualSecondary: "bloodwork_photo.jpg",
          visualExtra: "· 2 more",
        },
        {
          tag: "STEP 2 · 30 SECONDS LATER",
          title: "Get the headline, instantly",
          desc: "An AI summary tells you what's healthy, what needs attention, and how urgent it is — before you read a single number.",
          visualPrimary:
            "13 of 14 markers look healthy. Ferritin is slightly low — nothing alarming, and very fixable.",
          visualSecondary: "",
          visualExtra: "",
        },
        {
          tag: "STEP 3 · WHEN YOU'RE CURIOUS",
          title: "Understand every marker",
          desc: "Tap any biomarker for a plain-language explanation of what it is, what your number means, and why it matters for you.",
          visualPrimary: "What is ferritin?",
          visualSecondary:
            "Think of it as your body's iron savings account. Yours is running a little low…",
          visualExtra: "",
        },
        {
          tag: "STEP 4 · THIS WEEK",
          title: "Follow your improvement plan",
          desc: "Practical, personalised steps for each marker that needs work — food, habits, health logs, and when to retest.",
          visualPrimary: "Iron-rich meals 4×/week",
          visualSecondary: "Pair with vitamin C",
          visualExtra: "Retest in 12 weeks",
        },
        {
          tag: "EVERY VISIT AFTER · YOUR STORY",
          title: "Watch your progress story grow",
          desc: "Each new test adds a chapter. Trends across every marker, every visit — proof that what you're doing is working.",
          visualPrimary: "Ferritin · Mar → Jun ·",
          visualSecondary: "+41%",
          visualExtra: "",
        },
      ],
    },

    trust: {
      eyebrow: "Privacy first",
      title: "A story only you can read.",
      cardTitle: "100% private",
      cardDesc:
        "Private by design. We never sell or share your health data — no ads, no exceptions.",
      body: "Your bloodwork is some of the most personal data you have. Serumo keeps it encrypted and under your control, always.",
      disclaimerTitle: "Educational insights, not medical advice",
      disclaimerBody:
        "Serumo helps you understand your lab data for personal wellness and education. It does not provide diagnosis or treatment. Always consult a qualified healthcare professional for medical decisions.",
    },

    cta: {
      title: "Start your health story today.",
      subtitle:
        "Free to download. Serumo turns any lab report into plain-language insights, tracks your biomarker trends, and builds your personal health story over time.",
      downloadOn: "Download on the",
      appStore: "App Store",
      note: "★★★★★ 5.0 · Free to start · iPhone",
      ariaDownload: "Download Serumo on the App Store",
    },
  },

  pricing: {
    backHome: "← Back to home",
    title: "Pricing",
    intro:
      "Serumo is free to start. Premium unlocks unlimited uploads, full insights, and personalized health plans — for you or your whole household. Subscribe in the app (App Store / Google Play) or on the web.",
    monthly: "Monthly",
    yearly: "Yearly",
    free: "Free",
    forever: "forever",
    premium: "Premium",
    perMonth: "month",
    perYear: "year",
    oneProfile: "1 profile",
    freeFeatures: [
      "Upload and store lab reports",
      "Core biomarker tracking",
      "One AI report summary per profile",
    ],
    premiumFeatures: [
      "Unlimited lab report uploads",
      "Full plain-language insights for every biomarker",
      "Personalized improvement plans and actions",
      "Unlimited AI report summaries",
      "Biomarker trends across all your tests",
      "Premium for up to 4 household profiles",
    ],
    bundlesTitle: "Premium household bundles",
    bundlesIntro:
      "Add Premium profiles for the people you care for — each person's uploads and insights stay separate.",
    tableProfiles: "Premium profiles",
    tablePerMonth: "Per month",
    tablePerYear: "Per year",
    tableApproxMonth: "≈ per month",
    profileSingular: "profile",
    profilePlural: "profiles",
    disclaimerLead:
      "Prices shown are indicative and may vary by country/region. The exact price, including any applicable taxes, is always shown at checkout before you confirm your purchase. Web purchases are processed by our merchant of record, Paddle; in-app purchases are billed by the App Store or Google Play. Subscriptions renew automatically until canceled — see our",
    termsLink: "Terms of Service",
    and: "and",
    refundLink: "Refund Policy",
  },

  legal: {
    backHome: "← Back to home",
    effectiveDate: "Effective date:",
    lastUpdated: "Last updated:",
    availableIn: "Available in:",
  },

  notFound: {
    title: "404",
    message: "This page does not exist.",
    back: "Return to home",
  },
};
