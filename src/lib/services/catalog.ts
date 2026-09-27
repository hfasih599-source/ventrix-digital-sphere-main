export type CategorySlug = "design" | "engineering" | "marketing" | "creative" | "ai";

export type ServiceEntry = {
  slug: string;
  category: CategorySlug;
  /** index into t.services.groups */
  catIndex: number;
  /** index into t.services.groups[catIndex].items */
  itemIndex: number;
};

export type CategoryEntry = {
  slug: CategorySlug;
  catIndex: number;
};

export const categories: CategoryEntry[] = [
  { slug: "design", catIndex: 0 },
  { slug: "engineering", catIndex: 1 },
  { slug: "marketing", catIndex: 2 },
  { slug: "creative", catIndex: 3 },
  { slug: "ai", catIndex: 4 },
];

const raw: Record<CategorySlug, string[]> = {
  design: [
    "graphic-design",
    "branding",
    "logo-design",
    "ui-ux-design",
    "website-design",
    "mobile-app-design",
    "product-mockups",
    "packaging-design",
  ],
  engineering: [
    "website-development",
    "ecommerce-development",
    "software-development",
    "saas-development",
    "custom-web-applications",
  ],
  marketing: [
    "social-media-management",
    "social-media-marketing",
    "seo",
    "google-ads",
    "meta-ads",
    "email-marketing",
    "content-writing",
    "copywriting",
  ],
  creative: [
    "motion-graphics",
    "2d-animation",
    "3d-animation",
    "video-editing",
    "product-advertisement",
  ],
  ai: [
    "ai-agents",
    "workflow-automation",
    "custom-llm-integrations",
    "chatbots-assistants",
    "ai-powered-analytics",
  ],
};

export const services: ServiceEntry[] = categories.flatMap(({ slug, catIndex }) =>
  raw[slug].map((s, itemIndex) => ({ slug: s, category: slug, catIndex, itemIndex })),
);

export function getCategory(slug: string): CategoryEntry | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getService(category: string, slug: string): ServiceEntry | undefined {
  return services.find((s) => s.category === category && s.slug === slug);
}

export function servicesOf(category: CategorySlug): ServiceEntry[] {
  return services.filter((s) => s.category === category);
}
