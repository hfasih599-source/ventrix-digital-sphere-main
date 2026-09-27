import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndex } from "@/components/ventrix/services/ServicesIndex";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Design, Engineering, Marketing & AI | Ventrix Services" },
      {
        name: "description",
        content:
          "Explore 31 specialist services across brand design, web and software engineering, performance marketing, video production and AI automation.",
      },
      { property: "og:title", content: "Ventrix Services — All Services" },
      {
        property: "og:description",
        content:
          "Five practices, thirty-one specialist services. Brand, product, growth, creative and AI under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return <ServicesIndex />;
}
