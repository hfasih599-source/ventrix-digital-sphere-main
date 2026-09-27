import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logoAsset from "../../assets/ventrix-logo.png";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { serviceLabels } from "@/lib/services/labels";

export function SiteFooter() {
  const { t, lang } = useLanguage();
  const L = serviceLabels[lang];
  const hrefs = ["/#about", "/#services", "/#portfolio", "/#pricing", "/#contact"];
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <img
          src={logoAsset}
          alt="Ventrix Services"
          className="mx-auto h-20 w-20 object-contain mb-6"
        />
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
          {t.footer.title} <span className="text-gradient">{t.footer.titleAccent}</span>
          {t.footer.titleEnd}
        </h3>
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/60">
          {t.footer.links.map((l, i) => (
            <a key={l} href={hrefs[i]} className="hover:text-white transition">
              {l}
            </a>
          ))}
          <Link to="/services" className="hover:text-white transition">
            {L.allServices}
          </Link>
          <Link to="/blog" className="hover:text-white transition">
            Blog
          </Link>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 mx-auto flex max-w-md items-center gap-2 glass rounded-full p-1.5"
        >
          <input
            type="email"
            required
            placeholder={t.footer.newsletterPh}
            className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
          />
          <button className="rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-5 py-2 text-sm font-medium">
            {t.footer.subscribe}
          </button>
        </form>
        <div className="mt-10 flex justify-center gap-4">
          {[Instagram, Twitter, Linkedin, Facebook].map((I, i) => (
            <a
              key={i}
              href="/#contact"
              aria-label="Social"
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-[#FF2E7A] transition"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="mt-12 text-xs text-white/40">
          © {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
