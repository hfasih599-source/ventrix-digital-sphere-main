import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { languages } from "@/lib/i18n/translations";

export function LanguageSwitcher({ variant = "nav" }: { variant?: "nav" | "mobile" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label="Language"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-white/70 hover:text-white transition ${
          variant === "mobile" ? "glass w-full justify-center" : "glass"
        }`}
      >
        <Globe className="h-4 w-4 text-[#FF2E7A]" />
        <span>{current.label}</span>
      </button>
      {open && (
        <div
          className={`absolute z-50 mt-2 min-w-[10rem] glass rounded-2xl p-2 ${
            variant === "mobile" ? "inset-x-0" : "end-0"
          }`}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-white/10 ${
                l.code === lang ? "text-white" : "text-white/70"
              }`}
            >
              <span>{l.label}</span>
              {l.code === lang && <Check className="h-4 w-4 text-[#FF2E7A]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}