import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/ventrix/SiteHeader";
import { SiteFooter } from "@/components/ventrix/SiteFooter";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { serviceLabels } from "@/lib/services/labels";

export const WHATSAPP_ONLY = "+1 (512) 801-6299";
export const WHATSAPP_ONLY_RAW = "15128016299";
export const CALLS_NUMBER = "+1 (254) 348-9215";
export const CALLS_NUMBER_RAW = "12543489215";
export const OFFICE_ADDRESS = "5900 Balcones Dr Suite 100, Austin, TX 78731";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function ServiceLayout({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: ReactNode;
}) {
  const { lang } = useLanguage();
  const L = serviceLabels[lang];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <SiteHeader />
      <main className="pt-32 md:pt-36">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center gap-1.5 text-xs text-white/45"
        >
          <Link to="/" className="hover:text-white transition">
            {L.breadcrumbHome}
          </Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 rtl:rotate-180" />
              {c.to === "/services" ? (
                <Link to="/services" className="hover:text-white transition">
                  {c.label}
                </Link>
              ) : c.to === "/blog" ? (
                <Link to="/blog" className="hover:text-white transition">
                  {c.label}
                </Link>
              ) : c.to && c.params ? (
                <Link
                  to="/services/$category"
                  params={{ category: c.params.category as string }}
                  className="hover:text-white transition"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/70">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function ServiceCTA() {
  const { lang } = useLanguage();
  const L = serviceLabels[lang];
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          {L.ctaTitle.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">{L.ctaTitle.split(" ").slice(-1)}</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">{L.ctaSubtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-6 py-3 text-sm font-medium glow-magenta hover:brightness-110 transition"
          >
            {L.ctaPrimary}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_ONLY_RAW}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass px-6 py-3 text-sm font-medium hover:text-[#FF2E7A] transition"
          >
            {L.ctaSecondary}
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-white/40 text-xs">{L.whatsappOnly}</div>
            <a
              href={`https://wa.me/${WHATSAPP_ONLY_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block hover:text-[#FF2E7A] transition"
            >
              {WHATSAPP_ONLY}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-white/40 text-xs">{L.callsWhatsapp}</div>
            <a
              href={`tel:+${CALLS_NUMBER_RAW}`}
              className="mt-1 block hover:text-[#FF2E7A] transition"
            >
              {CALLS_NUMBER}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-white/40 text-xs">{L.office}</div>
            <div className="mt-1 text-white/70 text-[13px]">{OFFICE_ADDRESS}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
