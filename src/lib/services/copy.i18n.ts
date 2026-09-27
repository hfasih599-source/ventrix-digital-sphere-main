import type { LanguageCode } from "@/lib/i18n/translations";
import type { CategorySlug } from "./catalog";
import type { ServiceCopy } from "./copy.en";

type Tpl = {
  tagline: Record<CategorySlug, string>;
  intro: Record<CategorySlug, (s: string) => string>;
  deliverables: (s: string) => { t: string; d: string }[];
  why: (s: string) => { t: string; d: string }[];
  faq: (s: string) => { q: string; a: string }[];
};

const templates: Record<Exclude<LanguageCode, "en">, Tpl> = {
  ar: {
    tagline: {
      design: "تصميم يجعل الناس يتوقفون عند علامتك.",
      engineering: "هندسة موثوقة تنمو مع أعمالك.",
      marketing: "تسويق يجلب عملاء، لا مجرد مشاهدات.",
      creative: "محتوى بصري يمنح علامتك حضوراً فاخراً.",
      ai: "ذكاء اصطناعي يتولى العمل المتكرر عنك.",
    },
    intro: {
      design: (s) => `نقدّم ${s} بمعايير العلامات الفاخرة: تركيب بصري دقيق، طباعة محترفة، ونظام قابل للتوسّع يستخدمه فريقك بثقة.`,
      engineering: (s) => `نبني ${s} بكود نظيف ومُختبر، وأداء سريع، وبنية تتحمّل النمو الحقيقي دون إعادة كتابة.`,
      marketing: (s) => `ندير ${s} كنظام قياس واختبار مستمر، بهدف واضح: خفض تكلفة العميل ورفع الإيرادات شهراً بعد شهر.`,
      creative: (s) => `ننتج ${s} بجودة سينمائية — من الفكرة والستوري بورد حتى التسليم بجميع المقاسات والقنوات.`,
      ai: (s) => `نطبّق ${s} داخل أدواتك وبياناتك الفعلية، مع ضوابط أمان ومراجعة بشرية وتقارير توضح الساعات الموفّرة.`,
    },
    deliverables: (s) => [
      { t: "جلسة اكتشاف", d: `نحدد الأهداف والجمهور ومعايير النجاح قبل بدء ${s}.` },
      { t: "مخرجات واضحة", d: "قائمة تسليمات محددة ومتفق عليها مسبقاً، دون مفاجآت." },
      { t: "ملفات المصدر", d: "تحصل على جميع الملفات والوصول الكامل بعد التسليم." },
      { t: "دعم بعد التسليم", d: "فترة متابعة وتحسينات صغيرة بعد الإطلاق." },
    ],
    why: (s) => [
      { t: "فريق خبير", d: `يتولى ${s} مختصون كبار، بلا تسليم لفرق أقل خبرة.` },
      { t: "نتائج قابلة للقياس", d: "نتفق على مؤشرات الأداء ونرفع تقريراً شهرياً واضحاً." },
      { t: "تواصل بخمس لغات", d: "نعمل بالعربية والإنجليزية والألمانية والإيطالية والفرنسية." },
    ],
    faq: (s) => [
      { q: `كم تستغرق مدة ${s}؟`, a: "معظم المشاريع تتراوح بين أسبوعين وثمانية أسابيع حسب النطاق، ونشارك جدولاً زمنياً قبل البدء." },
      { q: "كيف يتم التسعير؟", a: "سعر ثابت للمشروع أو عقد شهري للعمل المستمر، مع نطاق واضح في كلا الحالتين." },
      { q: "هل نملك المخرجات؟", a: "نعم، الملكية الكاملة تنتقل إليك بعد السداد النهائي." },
    ],
  },
  de: {
    tagline: {
      design: "Design, das im Feed stoppt.",
      engineering: "Technik, die mit dir wächst.",
      marketing: "Marketing, das Kunden bringt — nicht nur Impressionen.",
      creative: "Bewegtbild, das deine Marke teuer aussehen lässt.",
      ai: "KI, die die Fleißarbeit übernimmt.",
    },
    intro: {
      design: (s) => `Wir liefern ${s} auf Premium-Niveau: klare Hierarchie, präzise Typografie und ein System, das dein Team eigenständig weiterführen kann.`,
      engineering: (s) => `Wir bauen ${s} mit typisiertem, getestetem Code, echten Performance-Budgets und einer Architektur, die Wachstum aushält.`,
      marketing: (s) => `Wir betreiben ${s} als Test- und Messsystem mit einem Ziel: sinkende Akquisitionskosten und wachsender Umsatz.`,
      creative: (s) => `Wir produzieren ${s} von Konzept und Storyboard bis zur Auslieferung in allen Formaten und Kanälen.`,
      ai: (s) => `Wir integrieren ${s} in deine echten Tools und Daten — mit Guardrails, Freigabeschritten und nachvollziehbarer Zeitersparnis.`,
    },
    deliverables: (s) => [
      { t: "Discovery-Workshop", d: `Ziele, Zielgruppe und Erfolgskriterien vor dem Start von ${s}.` },
      { t: "Definierte Deliverables", d: "Ein klarer Leistungsumfang, vorab abgestimmt — keine Überraschungen." },
      { t: "Quelldateien", d: "Vollständige Übergabe aller Dateien und Zugänge." },
      { t: "Support nach Launch", d: "Betreuungsfenster inklusive kleinerer Anpassungen." },
    ],
    why: (s) => [
      { t: "Nur Senior-Team", d: `${s} wird von erfahrenen Spezialisten umgesetzt, nicht weitergegeben.` },
      { t: "Messbare Ergebnisse", d: "Gemeinsam definierte KPIs und ein klares monatliches Reporting." },
      { t: "Fünf Sprachen", d: "Wir arbeiten auf Deutsch, Englisch, Französisch, Italienisch und Arabisch." },
    ],
    faq: (s) => [
      { q: `Wie lange dauert ${s}?`, a: "Je nach Umfang zwei bis acht Wochen — den Zeitplan bekommst du vor dem Start." },
      { q: "Wie wird abgerechnet?", a: "Festpreis pro Projekt oder monatliches Retainer für laufende Arbeit." },
      { q: "Gehören uns die Ergebnisse?", a: "Ja, vollständige Rechteübertragung nach Schlusszahlung." },
    ],
  },
  it: {
    tagline: {
      design: "Design che ferma lo scroll.",
      engineering: "Tecnologia che cresce con te.",
      marketing: "Marketing che porta clienti, non solo impression.",
      creative: "Contenuti in movimento che rendono il brand premium.",
      ai: "AI che si occupa del lavoro ripetitivo.",
    },
    intro: {
      design: (s) => `Realizziamo ${s} con standard premium: gerarchia chiara, tipografia curata e un sistema che il tuo team può estendere da solo.`,
      engineering: (s) => `Sviluppiamo ${s} con codice tipizzato e testato, performance reali e un'architettura pensata per la crescita.`,
      marketing: (s) => `Gestiamo ${s} come un sistema di test e misurazione, con un obiettivo: abbassare il costo di acquisizione e aumentare i ricavi.`,
      creative: (s) => `Produciamo ${s} dal concept e storyboard alla consegna in tutti i formati e canali.`,
      ai: (s) => `Integriamo ${s} nei tuoi strumenti e dati reali, con guardrail, approvazioni umane e ore risparmiate misurate.`,
    },
    deliverables: (s) => [
      { t: "Sessione di discovery", d: `Obiettivi, pubblico e metriche definiti prima di iniziare ${s}.` },
      { t: "Deliverable definiti", d: "Uno scope chiaro e concordato in anticipo, senza sorprese." },
      { t: "File sorgente", d: "Consegna completa di file e accessi." },
      { t: "Supporto post-lancio", d: "Una finestra di assistenza con piccole ottimizzazioni incluse." },
    ],
    why: (s) => [
      { t: "Solo team senior", d: `${s} è realizzato da specialisti esperti, senza passaggi a junior.` },
      { t: "Risultati misurabili", d: "KPI concordati e reporting mensile trasparente." },
      { t: "Cinque lingue", d: "Lavoriamo in italiano, inglese, francese, tedesco e arabo." },
    ],
    faq: (s) => [
      { q: `Quanto tempo richiede ${s}?`, a: "Da due a otto settimane in base allo scope; la timeline è condivisa prima di partire." },
      { q: "Come funziona il prezzo?", a: "Prezzo fisso a progetto oppure retainer mensile per attività continuative." },
      { q: "I risultati sono nostri?", a: "Sì, piena proprietà al saldo finale." },
    ],
  },
  fr: {
    tagline: {
      design: "Un design qui arrête le scroll.",
      engineering: "Une technique qui grandit avec vous.",
      marketing: "Un marketing qui amène des clients, pas des impressions.",
      creative: "Du contenu animé qui rend la marque premium.",
      ai: "De l'IA qui prend en charge les tâches répétitives.",
    },
    intro: {
      design: (s) => `Nous réalisons ${s} au niveau des marques premium : hiérarchie claire, typographie soignée et un système que votre équipe peut faire vivre.`,
      engineering: (s) => `Nous développons ${s} avec du code typé et testé, de vraies contraintes de performance et une architecture prête à grandir.`,
      marketing: (s) => `Nous pilotons ${s} comme un système de test et de mesure, avec un objectif : baisser le coût d'acquisition et augmenter le revenu.`,
      creative: (s) => `Nous produisons ${s} du concept et du storyboard jusqu'à la livraison dans tous les formats et canaux.`,
      ai: (s) => `Nous intégrons ${s} dans vos outils et données réels, avec garde-fous, validations humaines et heures économisées mesurées.`,
    },
    deliverables: (s) => [
      { t: "Atelier de cadrage", d: `Objectifs, audience et indicateurs définis avant de lancer ${s}.` },
      { t: "Livrables définis", d: "Un périmètre clair et validé en amont, sans surprise." },
      { t: "Fichiers sources", d: "Remise complète des fichiers et des accès." },
      { t: "Suivi après lancement", d: "Une période d'accompagnement avec petits ajustements inclus." },
    ],
    why: (s) => [
      { t: "Équipe senior", d: `${s} est réalisé par des spécialistes expérimentés, sans sous-traitance junior.` },
      { t: "Résultats mesurables", d: "Des KPI définis ensemble et un reporting mensuel transparent." },
      { t: "Cinq langues", d: "Nous travaillons en français, anglais, allemand, italien et arabe." },
    ],
    faq: (s) => [
      { q: `Combien de temps prend ${s} ?`, a: "De deux à huit semaines selon le périmètre ; le calendrier est partagé avant le démarrage." },
      { q: "Comment se fait la tarification ?", a: "Prix fixe au projet ou forfait mensuel pour un accompagnement continu." },
      { q: "Sommes-nous propriétaires ?", a: "Oui, transfert complet des droits au solde final." },
    ],
  },
};

export function buildServiceCopy(
  lang: LanguageCode,
  category: CategorySlug,
  serviceName: string,
): ServiceCopy {
  const tpl = templates[lang as Exclude<LanguageCode, "en">];
  return {
    tagline: tpl.tagline[category],
    intro: tpl.intro[category](serviceName),
    deliverables: tpl.deliverables(serviceName),
    why: tpl.why(serviceName),
    faq: tpl.faq(serviceName),
  };
}
