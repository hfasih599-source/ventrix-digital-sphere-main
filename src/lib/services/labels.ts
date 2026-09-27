import type { LanguageCode } from "@/lib/i18n/translations";

export type ServiceLabels = {
  breadcrumbHome: string;
  breadcrumbServices: string;
  allServices: string;
  servicesTitle: string;
  servicesTitleAccent: string;
  servicesSubtitle: string;
  explore: string;
  includedTitle: string;
  includedSubtitle: string;
  processTitle: string;
  processSubtitle: string;
  whyTitle: string;
  whySubtitle: string;
  faqTitle: string;
  relatedTitle: string;
  relatedSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  whatsappOnly: string;
  callsWhatsapp: string;
  office: string;
  servicesCount: (n: number) => string;
  inCategory: (c: string) => string;
};

export const serviceLabels: Record<LanguageCode, ServiceLabels> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    allServices: "All services",
    servicesTitle: "Everything we do,",
    servicesTitleAccent: "in one place",
    servicesSubtitle:
      "Five practices, thirty-one specialist services. Explore a practice or jump straight to the service you need.",
    explore: "Explore",
    includedTitle: "What's included",
    includedSubtitle: "Concrete deliverables, defined before we start.",
    processTitle: "How we work",
    processSubtitle: "A calm, senior-led engagement from kickoff to launch.",
    whyTitle: "Why Ventrix",
    whySubtitle: "What makes this engagement different.",
    faqTitle: "Frequently asked",
    relatedTitle: "Related services",
    relatedSubtitle: "Often combined with this engagement.",
    ctaTitle: "Ready to start?",
    ctaSubtitle: "Tell us about your goals — we reply within one business day.",
    ctaPrimary: "Get a free consultation",
    ctaSecondary: "Message on WhatsApp",
    whatsappOnly: "WhatsApp only",
    callsWhatsapp: "Calls & WhatsApp",
    office: "Office",
    servicesCount: (n) => `${n} services`,
    inCategory: (c) => `Part of ${c}`,
  },
  ar: {
    breadcrumbHome: "الرئيسية",
    breadcrumbServices: "الخدمات",
    allServices: "جميع الخدمات",
    servicesTitle: "كل ما نقدمه",
    servicesTitleAccent: "في مكان واحد",
    servicesSubtitle:
      "خمس تخصصات وواحد وثلاثون خدمة متخصصة. استعرض التخصص أو انتقل مباشرة إلى الخدمة التي تحتاجها.",
    explore: "استعرض",
    includedTitle: "ما تحصل عليه",
    includedSubtitle: "مخرجات واضحة نحددها قبل البدء.",
    processTitle: "كيف نعمل",
    processSubtitle: "مسار منظم بقيادة خبراء من الانطلاق حتى الإطلاق.",
    whyTitle: "لماذا فينتريكس",
    whySubtitle: "ما يميز هذا التعاون.",
    faqTitle: "أسئلة متكررة",
    relatedTitle: "خدمات ذات صلة",
    relatedSubtitle: "غالباً ما تُدمج مع هذه الخدمة.",
    ctaTitle: "جاهز للبدء؟",
    ctaSubtitle: "أخبرنا بأهدافك — نرد خلال يوم عمل واحد.",
    ctaPrimary: "استشارة مجانية",
    ctaSecondary: "تواصل على واتساب",
    whatsappOnly: "واتساب فقط",
    callsWhatsapp: "مكالمات وواتساب",
    office: "المكتب",
    servicesCount: (n) => `${n} خدمة`,
    inCategory: (c) => `ضمن ${c}`,
  },
  de: {
    breadcrumbHome: "Start",
    breadcrumbServices: "Leistungen",
    allServices: "Alle Leistungen",
    servicesTitle: "Alles, was wir tun —",
    servicesTitleAccent: "an einem Ort",
    servicesSubtitle:
      "Fünf Disziplinen, einunddreißig Spezialleistungen. Entdecke eine Disziplin oder gehe direkt zur passenden Leistung.",
    explore: "Ansehen",
    includedTitle: "Das ist enthalten",
    includedSubtitle: "Konkrete Ergebnisse, vor dem Start definiert.",
    processTitle: "So arbeiten wir",
    processSubtitle: "Ein ruhiger, senior-geführter Ablauf von Kickoff bis Launch.",
    whyTitle: "Warum Ventrix",
    whySubtitle: "Was dieses Projekt anders macht.",
    faqTitle: "Häufige Fragen",
    relatedTitle: "Passende Leistungen",
    relatedSubtitle: "Wird häufig damit kombiniert.",
    ctaTitle: "Bereit zu starten?",
    ctaSubtitle: "Erzähl uns von deinen Zielen — Antwort innerhalb eines Werktags.",
    ctaPrimary: "Kostenlose Beratung",
    ctaSecondary: "Auf WhatsApp schreiben",
    whatsappOnly: "Nur WhatsApp",
    callsWhatsapp: "Anrufe & WhatsApp",
    office: "Büro",
    servicesCount: (n) => `${n} Leistungen`,
    inCategory: (c) => `Teil von ${c}`,
  },
  it: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Servizi",
    allServices: "Tutti i servizi",
    servicesTitle: "Tutto ciò che facciamo,",
    servicesTitleAccent: "in un unico posto",
    servicesSubtitle:
      "Cinque practice, trentuno servizi specialistici. Esplora una practice o vai diretto al servizio che ti serve.",
    explore: "Esplora",
    includedTitle: "Cosa è incluso",
    includedSubtitle: "Deliverable concreti, definiti prima di iniziare.",
    processTitle: "Come lavoriamo",
    processSubtitle: "Un percorso ordinato e guidato da senior, dal kickoff al lancio.",
    whyTitle: "Perché Ventrix",
    whySubtitle: "Cosa rende diverso questo progetto.",
    faqTitle: "Domande frequenti",
    relatedTitle: "Servizi correlati",
    relatedSubtitle: "Spesso combinati con questo servizio.",
    ctaTitle: "Pronto a partire?",
    ctaSubtitle: "Raccontaci i tuoi obiettivi — rispondiamo entro un giorno lavorativo.",
    ctaPrimary: "Consulenza gratuita",
    ctaSecondary: "Scrivici su WhatsApp",
    whatsappOnly: "Solo WhatsApp",
    callsWhatsapp: "Chiamate e WhatsApp",
    office: "Ufficio",
    servicesCount: (n) => `${n} servizi`,
    inCategory: (c) => `Parte di ${c}`,
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbServices: "Services",
    allServices: "Tous les services",
    servicesTitle: "Tout ce que nous faisons,",
    servicesTitleAccent: "en un seul endroit",
    servicesSubtitle:
      "Cinq pôles, trente-et-un services spécialisés. Explorez un pôle ou allez droit au service qu'il vous faut.",
    explore: "Explorer",
    includedTitle: "Ce qui est inclus",
    includedSubtitle: "Des livrables concrets, définis avant de commencer.",
    processTitle: "Notre méthode",
    processSubtitle: "Un accompagnement serein, mené par des seniors, du cadrage au lancement.",
    whyTitle: "Pourquoi Ventrix",
    whySubtitle: "Ce qui rend cette mission différente.",
    faqTitle: "Questions fréquentes",
    relatedTitle: "Services associés",
    relatedSubtitle: "Souvent combinés à ce service.",
    ctaTitle: "Prêt à démarrer ?",
    ctaSubtitle: "Parlez-nous de vos objectifs — réponse en un jour ouvré.",
    ctaPrimary: "Consultation gratuite",
    ctaSecondary: "Écrire sur WhatsApp",
    whatsappOnly: "WhatsApp uniquement",
    callsWhatsapp: "Appels & WhatsApp",
    office: "Bureau",
    servicesCount: (n) => `${n} services`,
    inCategory: (c) => `Partie de ${c}`,
  },
};
