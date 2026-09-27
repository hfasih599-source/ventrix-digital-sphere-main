import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceLayout, ServiceCTA } from "./ServiceLayout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { servicesOf, type CategoryEntry } from "@/lib/services/catalog";
import { serviceLabels } from "@/lib/services/labels";
import { serviceCopy, serviceName } from "@/lib/services/resolve";
import { Ambient3D } from "@/components/ventrix/three/Lazy3D";

export function CategoryPage({ entry }: { entry: CategoryEntry }) {
  const { t, lang } = useLanguage();
  const L = serviceLabels[lang];
  const group = t.services.groups[entry.catIndex];
  const list = servicesOf(entry.slug);

  return (
    <ServiceLayout
      crumbs={[
        { label: L.breadcrumbServices, to: "/services" },
        { label: group.title },
      ]}
    >
      <section className="relative px-6 md:px-10 pt-10 pb-6">
        <div className="pointer-events-none absolute -top-24 left-0 opacity-40">
          <Ambient3D />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-flex rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#FF2E7A]">
            {group.tag}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            {group.title}
          </h1>
          <p className="mt-5 max-w-2xl text-white/60">{t.services.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-6 py-3 text-sm font-medium glow-magenta hover:brightness-110 transition"
            >
              {L.ctaPrimary}
            </a>
            <Link
              to="/services"
              className="rounded-full glass px-6 py-3 text-sm font-medium hover:text-[#FF2E7A] transition"
            >
              {L.allServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const copy = serviceCopy(lang, s);
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to="/services/$category/$service"
                  params={{ category: entry.slug, service: s.slug }}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#D40061]/50 hover:bg-white/[0.04]"
                >
                  <h2 className="text-xl font-semibold tracking-tight">
                    {serviceName(lang, s)}
                  </h2>
                  <p className="mt-3 text-sm text-white/55 line-clamp-3">{copy.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-[#FF2E7A] group-hover:gap-3 transition-all">
                    {L.explore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{L.processTitle}</h2>
          <p className="mt-3 text-white/55">{L.processSubtitle}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <div key={s.t} className="glass rounded-2xl p-6">
                <div className="text-[#FF2E7A] text-xs font-semibold">0{i + 1}</div>
                <div className="mt-3 font-medium">{s.t}</div>
                <p className="mt-2 text-sm text-white/55">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </ServiceLayout>
  );
}
