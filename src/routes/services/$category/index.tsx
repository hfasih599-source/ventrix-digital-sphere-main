import { createFileRoute, notFound } from "@tanstack/react-router";
import { CategoryPage } from "@/components/ventrix/services/CategoryPage";
import { getCategory, servicesOf, type CategorySlug } from "@/lib/services/catalog";
import { categoryNameEn } from "@/lib/services/resolve";

export const Route = createFileRoute("/services/$category/")({
  loader: ({ params }) => {
    const entry = getCategory(params.category);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Ventrix Services" }, { name: "robots", content: "noindex" }],
      };
    }
    const name = categoryNameEn(loaderData.entry);
    const count = servicesOf(loaderData.entry.slug).length;
    const description = `${name} at Ventrix Services — ${count} specialist services delivered by senior teams, with defined deliverables and measurable outcomes.`;
    return {
      meta: [
        { title: `${name} — Ventrix Services` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} — Ventrix Services` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryRoute,
});

function CategoryRoute() {
  const { entry } = Route.useLoaderData();
  return <CategoryPage entry={{ ...entry, slug: entry.slug as CategorySlug }} />;
}
