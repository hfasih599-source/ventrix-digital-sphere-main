import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { ServiceLayout, ServiceCTA } from "@/components/ventrix/services/ServiceLayout";
import { Ambient3D } from "@/components/ventrix/three/Lazy3D";
import { blogPosts, formatDate } from "@/lib/blog/posts";

export function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <ServiceLayout crumbs={[{ label: "Blog" }]}>
      <section className="relative px-6 md:px-10 pt-10 pb-4">
        <div className="pointer-events-none absolute -top-20 right-0 opacity-40">
          <Ambient3D />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E7A]">Insights</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Notes from the <span className="text-gradient">Ventrix studio</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/60">
            Practical writing on brand design, engineering, growth and AI — the things we learn
            shipping client work every week.
          </p>
        </div>
      </section>

      {featured && (
        <section className="px-6 md:px-10 pt-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group block glass rounded-3xl p-8 md:p-12 transition hover:border-white/20"
            >
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
                <span className="rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-3 py-1 text-white tracking-normal">
                  Featured
                </span>
                <span>{featured.category}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readMinutes} min read
                </span>
              </div>
              <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl group-hover:text-[#FF2E7A] transition">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-white/60">{featured.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#FF2E7A] group-hover:gap-3 transition-all">
                Read article <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {rest.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
                <span className="text-[#FF2E7A]">{p.category}</span>
                <span>{p.readMinutes} min</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight leading-snug">
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-[#FF2E7A] transition"
                >
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm text-white/60 flex-1">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                <span>{formatDate(p.date)}</span>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-1.5 text-[#FF2E7A] hover:gap-2.5 transition-all"
                >
                  Read <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ServiceCTA />
    </ServiceLayout>
  );
}
