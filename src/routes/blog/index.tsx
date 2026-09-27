import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/ventrix/blog/BlogIndex";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Design, Engineering & Growth Insights | Ventrix Services" },
      {
        name: "description",
        content:
          "Practical articles on premium brand design, high-performance WebGL engineering, paid growth and AI automation from the Ventrix Services studio.",
      },
      { property: "og:title", content: "Ventrix Services Blog" },
      {
        property: "og:description",
        content:
          "Notes from the Ventrix studio on design, engineering, marketing and AI — written from live client work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ventrix-digital-sphere.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ventrix-digital-sphere.lovable.app/blog" }],
  }),
  component: BlogIndex,
});
