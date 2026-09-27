export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  author: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-trust-in-2026",
    title: "Designing for trust: what premium brands get right in 2026",
    excerpt:
      "Trust is a design decision long before it is a marketing one. Here is the visual system we use to make new brands feel established from day one.",
    date: "2026-08-28",
    readMinutes: 6,
    category: "Design",
    author: "Ventrix Studio",
    body: [
      "Every buyer makes a judgement about your credibility in the first few seconds on the page. That judgement is almost entirely visual: spacing, contrast, motion, and how confidently the page states what it does.",
      "We start with hierarchy. One clear promise, one clear action, and nothing competing with them. When a hero section carries three equally loud messages, visitors read none of them.",
      "Next comes material consistency. Glass surfaces, glow, and depth are only premium when they follow the same rules everywhere — the same blur, the same border, the same radius. Inconsistency reads as improvisation.",
      "Finally, proof. Named clients, real numbers, and specific outcomes beat adjectives. Replace \"world-class results\" with the actual result and the sentence starts working.",
      "Trust compounds. A brand that behaves predictably across its site, decks, and ads earns attention that competitors have to buy.",
    ],
  },
  {
    slug: "webgl-that-does-not-hurt-performance",
    title: "WebGL that doesn't hurt performance",
    excerpt:
      "Real 3D on a marketing site is worth it only if it stays fast. Our checklist for shipping WebGL that loads quickly and degrades gracefully.",
    date: "2026-08-14",
    readMinutes: 7,
    category: "Engineering",
    author: "Ventrix Engineering",
    body: [
      "3D is the fastest way to make a site feel modern and the fastest way to make it feel broken. The difference is entirely in how it is loaded.",
      "Lazy-load the scene. Nothing about the 3D layer should block first paint — the page should be readable and interactive before a single polygon arrives.",
      "Pause offscreen work. A canvas that keeps animating below the fold burns battery for no benefit. Render only while visible.",
      "Respect reduced-motion preferences with a static fallback that still looks intentional, not like a missing image.",
      "Budget your geometry. A handful of low-poly shapes with good lighting outperforms a dense model every time, both visually and on mid-range phones.",
    ],
  },
  {
    slug: "performance-marketing-funnel-audit",
    title: "The 30-minute funnel audit we run before spending a cent",
    excerpt:
      "Most paid campaigns fail on the landing page, not in the ad account. This is the audit we run first, and what we usually find.",
    date: "2026-07-30",
    readMinutes: 5,
    category: "Marketing",
    author: "Ventrix Growth",
    body: [
      "Before touching budgets we walk the funnel exactly as a stranger would: click the ad, land on the page, try to convert on a phone with one hand.",
      "The first thing we check is message match. If the ad promises a price and the page opens with a manifesto, the click is already wasted.",
      "Then friction. Every extra form field, every unexplained step, every slow-loading asset above the fold has a measurable cost per conversion.",
      "We instrument before we optimise. Without reliable event tracking, every later decision is a guess dressed as a strategy.",
      "Fixing the page usually moves cost per acquisition further than any bid adjustment could.",
    ],
  },
  {
    slug: "ai-automation-that-earns-its-keep",
    title: "AI automation that earns its keep",
    excerpt:
      "Where AI genuinely saves teams hours, where it quietly creates new work, and how we decide which processes to automate first.",
    date: "2026-07-16",
    readMinutes: 6,
    category: "AI",
    author: "Ventrix AI",
    body: [
      "The best automation candidates are repetitive, high-volume, and tolerant of review. The worst are rare, high-stakes, and impossible to verify quickly.",
      "We map a process end to end before automating any part of it. Half the time the real win is removing a step, not accelerating it.",
      "Keep a human in the loop wherever a mistake is expensive. Review queues turn a risky system into a dependable one.",
      "Measure the outcome, not the novelty: hours saved, response time, error rate. If none of them move, the automation is decoration.",
      "Start with one workflow, prove the number, then expand. Ambitious rollouts stall; small proven ones spread on their own.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
