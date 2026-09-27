import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Plus, Minus, Sparkles } from "lucide-react";
import { ServiceLayout, ServiceCTA } from "./ServiceLayout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { ServiceEntry } from "@/lib/services/catalog";
import { serviceLabels } from "@/lib/services/labels";
import { relatedServices, serviceCopy, serviceName } from "@/lib/services/resolve";
import { VentrixCore3D, Ambient3D } from "@/components/ventrix/three/Lazy3D";

export function ServicePage({ entry }: { entry: ServiceEntry }) {
  const { t, lang } = useLanguage();
  const L = serviceLabels[lang];
  const group = t.services.groups[entry.catIndex];
  const name = serviceName(lang, entry);
  const copy = serviceCopy(lang, entry);
  const related = relatedServices(entry);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <ServiceLayout
      crumbs={[
        { label: L.breadcrumbServices, to: "/services" },
        { label: group.title, to: "/services/$category", params: { category: entry.category } },
        { label: name },
      ]}
    >
      <section className="relative px-6 md:px-10 pt-10 pb-8">
        <div className="max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Link
              to="/services/$category"
              params={{ category: entry.category }}
              className="inline-flex rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#FF2E7A] hover:text-white transition"
            >
              {L.inCategory(group.title)}
            </Link>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">{name}</h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">{copy.tagline}</p>
            <p className="mt-4 text-white/55 max-w-2xl">{copy.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-6 py-3 text-sm font-medium glow-magenta hover:brightness-110 transition"
              >
                {L.ctaPrimary} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
              <Link
                to="/services/$category"
                params={{ category: entry.category }}
                className="rounded-full glass px-6 py-3 text-sm font-medium hover:text-[#FF2E7A] transition"
              >
                {group.title}
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block h-[380px]">
            <VentrixCore3D />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{L.includedTitle}</h2>
          <p className="mt-3 text-white/55">{L.includedSubtitle}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.deliverables.map((d, i) => (
              <motion.div
                key={d.t}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass rounded-2xl p-6"
              >
                <Check className="h-5 w-5 text-[#FF2E7A]" />
                <div className="mt-4 font-medium">{d.t}</div>
                <p className="mt-2 text-sm text-white/55">{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-10 py-16">
        <div className="pointer-events-none absolute top-0 right-0 opacity-30">
          <Ambient3D />
        </div>
        <div className="max-w-7xl mx-auto relative grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{L.processTitle}</h2>
            <p className="mt-3 text-white/55">{L.processSubtitle}</p>
            <div className="mt-8 space-y-4">
              {t.process.steps.map((s, i) => (
                <div key={s.t} className="flex gap-4 rounded-2xl border border-white/10 p-5">
                  <span className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-[#D40061] to-[#FF2E7A] text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-medium">{s.t}</div>
                    <p className="mt-1 text-sm text-white/55">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{L.whyTitle}</h2>
            <p className="mt-3 text-white/55">{L.whySubtitle}</p>
            <div className="mt-8 space-y-4">
              {copy.why.map((w) => (
                <div key={w.t} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#FF2E7A]" />
                    <div className="font-medium">{w.t}</div>
                  </div>
                  <p className="mt-2 text-sm text-white/55">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">
            {L.faqTitle}
          </h2>
          <div className="mt-10 space-y-3">
            {copy.faq.map((f, i) => (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-start"
                >
                  <span className="font-medium text-sm md:text-base">{f.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-4 w-4 shrink-0 text-[#FF2E7A]" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-white/50" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm text-white/60">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{L.relatedTitle}</h2>
          <p className="mt-3 text-white/55">{L.relatedSubtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={`${r.category}-${r.slug}`}
                to="/services/$category/$service"
                params={{ category: r.category, service: r.slug }}
                className="group rounded-2xl border border-white/10 p-6 transition hover:border-[#D40061]/50 hover:bg-white/[0.03]"
              >
                <div className="text-[11px] uppercase tracking-widest text-white/40">
                  {t.services.groups[r.catIndex].tag}
                </div>
                <div className="mt-2 font-medium">{serviceName(lang, r)}</div>
                <span className="mt-4 inline-flex items-center gap-2 text-xs text-[#FF2E7A] group-hover:gap-3 transition-all">
                  {L.explore} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </ServiceLayout>
  );
}
