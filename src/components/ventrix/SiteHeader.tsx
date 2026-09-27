import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Palette,
  Code2,
  Megaphone,
  Film,
  Brain,
} from "lucide-react";
import logoAsset from "../../assets/ventrix-logo.png";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/ventrix/LanguageSwitcher";
import { categories, servicesOf } from "@/lib/services/catalog";
import { serviceLabels } from "@/lib/services/labels";

const catIcons = [Palette, Code2, Megaphone, Film, Brain];

export function SiteHeader() {
  const { t, lang } = useLanguage();
  const L = serviceLabels[lang];
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileCat, setMobileCat] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string][] = [
    [t.nav.about, "/#about"],
    [t.nav.work, "/#portfolio"],
    [t.nav.process, "/#process"],
    [t.nav.pricing, "/#pricing"],
    [t.nav.contact, "/#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all ${
            scrolled || servicesOpen ? "glass" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logoAsset} alt="Ventrix" className="h-9 w-9 object-contain" />
            <span className="font-display font-semibold tracking-tight text-lg">
              VENTRIX<span className="text-[#D40061]">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href={links[0][1]} className="hover:text-white transition-colors">
              {links[0][0]}
            </a>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {t.nav.services}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="fixed left-0 right-0 top-[4.6rem] px-6 flex flex-col items-center"
                  >
                    <div className="rounded-3xl border border-white/10 bg-[#0B0206]/95 backdrop-blur-2xl p-6 w-[min(92vw,64rem)] grid grid-cols-2 lg:grid-cols-5 gap-6 shadow-2xl">
                      {categories.map((c, i) => {
                        const Icon = catIcons[i];
                        const group = t.services.groups[c.catIndex];
                        return (
                          <div key={c.slug}>
                            <Link
                              to="/services/$category"
                              params={{ category: c.slug }}
                              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#FF2E7A] transition"
                            >
                              <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#D40061] to-[#FF2E7A] flex items-center justify-center">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              {group.title}
                            </Link>
                            <ul className="mt-3 space-y-2">
                              {servicesOf(c.slug).map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    to="/services/$category/$service"
                                    params={{ category: c.slug, service: s.slug }}
                                    className="block text-[13px] leading-snug text-white/60 hover:text-white transition"
                                  >
                                    {group.items[s.itemIndex]}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-2 text-center">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs text-white/80 hover:text-white transition"
                      >
                        {L.allServices} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.slice(1).map(([l, h]) => (
              <a key={h} href={h} className="hover:text-white transition-colors">
                {l}
              </a>
            ))}

            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-5 py-2.5 text-sm font-medium text-white glow-magenta hover:brightness-110 transition"
            >
              {t.nav.bookCall} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>

          <button
            aria-label="Menu"
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto"
            >
              <a href={links[0][1]} onClick={() => setOpen(false)} className="text-white/80">
                {links[0][0]}
              </a>

              <div className="rounded-xl border border-white/10">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-white/90 text-sm font-medium"
                >
                  {t.nav.services}
                </Link>
                {categories.map((c) => {
                  const group = t.services.groups[c.catIndex];
                  const isOpen = mobileCat === c.slug;
                  return (
                    <div key={c.slug} className="border-t border-white/5">
                      <button
                        onClick={() => setMobileCat(isOpen ? null : c.slug)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-left text-sm text-white/70"
                      >
                        {group.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <ul className="pb-2">
                          <li>
                            <Link
                              to="/services/$category"
                              params={{ category: c.slug }}
                              onClick={() => setOpen(false)}
                              className="block px-6 py-1.5 text-[13px] text-[#FF2E7A]"
                            >
                              {L.explore} · {group.title}
                            </Link>
                          </li>
                          {servicesOf(c.slug).map((s) => (
                            <li key={s.slug}>
                              <Link
                                to="/services/$category/$service"
                                params={{ category: c.slug, service: s.slug }}
                                onClick={() => setOpen(false)}
                                className="block px-6 py-1.5 text-[13px] text-white/60"
                              >
                                {group.items[s.itemIndex]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {links.slice(1).map(([l, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="text-white/80">
                  {l}
                </a>
              ))}
              <Link to="/blog" onClick={() => setOpen(false)} className="text-white/80">
                Blog
              </Link>
              <LanguageSwitcher variant="mobile" />
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-5 py-2.5 text-center font-medium"
              >
                {t.nav.bookCall}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
