import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Code2, Megaphone, Film, Brain } from "lucide-react";
import { ServiceLayout, ServiceCTA } from "./ServiceLayout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { categories, servicesOf } from "@/lib/services/catalog";
import { serviceLabels } from "@/lib/services/labels";
import { Ambient3D } from "@/components/ventrix/three/Lazy3D";

const catIcons = [Palette, Code2, Megaphone, Film, Brain];

export function ServicesIndex() {
  const { t, lang } = useLanguage();
  const L = serviceLabels[lang];

  return (
    <ServiceLayout crumbs={[{ label: L.breadcrumbServices }]}>
      <section className="relative px-6 md:px-10 pt-10 pb-4">
        <div className="pointer-events-none absolute -top-20 right-0 opacity-40">
          <Ambient3D />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E7A]">
            {t.services.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {L.servicesTitle} <span className="text-gradient">{L.servicesTitleAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/60">{L.servicesSubtitle}</p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {categories.map((c, i) => {
            const Icon = catIcons[i];
            const group = t.services.groups[c.catIndex];
            const list = servicesOf(c.slug);
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#D40061] to-[#FF2E7A] flex items-center justify-center glow-magenta">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-white/40">
                    {L.servicesCount(list.length)}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">{group.title}</h2>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {list.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$category/$service"
                        params={{ category: c.slug, service: s.slug }}
                        className="group flex items-center gap-2 text-sm text-white/65 hover:text-white transition"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D40061] shrink-0" />
                        {group.items[s.itemIndex]}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$category"
                  params={{ category: c.slug }}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#FF2E7A] hover:text-white transition"
                >
                  {L.explore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ServiceCTA />
    </ServiceLayout>
  );
}
