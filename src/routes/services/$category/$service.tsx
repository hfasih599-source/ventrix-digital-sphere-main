import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/ventrix/services/ServicePage";
import { getService, type CategorySlug } from "@/lib/services/catalog";
import { enServiceCopy } from "@/lib/services/copy.en";
import { serviceNameEn } from "@/lib/services/resolve";

export const Route = createFileRoute("/services/$category/$service")({
  loader: ({ params }) => {
    const entry = getService(params.category, params.service);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Ventrix Services" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const name = serviceNameEn(loaderData.entry);
    const copy = enServiceCopy[loaderData.entry.slug];
    const description = `${copy.tagline} ${copy.intro}`.slice(0, 155);
    return {
      meta: [
        { title: `${name} Services — Ventrix Services` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} — Ventrix Services` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { entry } = Route.useLoaderData();
  return <ServicePage entry={{ ...entry, category: entry.category as CategorySlug }} />;
}
