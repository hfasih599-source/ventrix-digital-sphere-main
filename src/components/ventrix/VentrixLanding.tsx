import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Palette,
  Code2,
  Megaphone,
  Film,
  Brain,
  Check,
  Star,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "../../assets/ventrix-logo.png";
import { categories, servicesOf } from "@/lib/services/catalog";
import { serviceLabels } from "@/lib/services/labels";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SiteHeader } from "@/components/ventrix/SiteHeader";
import { SiteFooter } from "@/components/ventrix/SiteFooter";
import { VentrixCore3D, Ambient3D } from "@/components/ventrix/three/Lazy3D";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  children,
  className = "",
  ambient,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ambient?: "left" | "right";
}) {
  return (
    <section id={id} className={`relative w-full py-24 md:py-32 px-6 md:px-10 ${className}`}>
      {ambient ? <Ambient3D side={ambient} /> : null}
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] rounded-full blur-[100px] opacity-30 mix-blend-screen transition-transform duration-200"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background: "radial-gradient(circle, #D40061 0%, transparent 70%)",
      }}
    />
  );
}

function HeroSphere() {
  const { t } = useLanguage();
  // Animated 3D-ish orb built from layered rings, glass cards, glow
  const chips = [
    { label: t.hero.chips[0], x: "10%", y: "18%", d: 0 },
    { label: t.hero.chips[1], x: "78%", y: "10%", d: 0.4 },
    { label: t.hero.chips[2], x: "82%", y: "62%", d: 0.8 },
    { label: t.hero.chips[3], x: "4%", y: "68%", d: 1.2 },
    { label: t.hero.chips[4], x: "44%", y: "-4%", d: 0.2 },
    { label: t.hero.chips[5], x: "50%", y: "92%", d: 1 },
  ];
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* real WebGL core: sphere + crossed orbital rings + shards */}
      <div className="absolute -inset-[10%]">
        <VentrixCore3D />
      </div>
      <div
        className="pointer-events-none absolute inset-[18%] rounded-full opacity-50 mix-blend-screen blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,46,122,0.55), transparent 55%), radial-gradient(circle at 75% 80%, rgba(212,0,97,0.45), transparent 55%)",
        }}
      />
      {/* chips */}
      {chips.map((c) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.5 + c.d * 0.2, duration: 0.6 },
            y: { duration: 4 + c.d, repeat: Infinity, ease: "easeInOut", delay: c.d },
          }}
          style={{ left: c.x, top: c.y }}
          className="absolute z-10 glass rounded-xl px-3 py-2 text-xs font-medium whitespace-nowrap"
        >
          {c.label}
        </motion.div>
      ))}
      {/* center logo */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={logoAsset}
          alt=""
          className="h-32 w-32 md:h-40 md:w-40 object-contain opacity-90"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-32 px-6 md:px-10 overflow-hidden">
      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#FF2E7A]/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `float-slow ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/70 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FF2E7A]" />
            {t.hero.badge}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-7 py-4 font-medium text-white glow-magenta hover:brightness-110 transition"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-medium hover:bg-white/10 transition"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 gap-8 max-w-md">
            {[
              ["500+", t.hero.stats[0]],
              ["6.4x", t.hero.stats[1]],
              ["98%", t.hero.stats[2]],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-semibold text-gradient">{v}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <HeroSphere />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useLanguage();
  const logos = [
    "NEXORA",
    "LUMIRA",
    "AXIOM",
    "PRISMA",
    "VERTIGO",
    "HELIOS",
    "OBSIDIAN",
    "QUANTA",
    "NORTHWIND",
    "AURORA",
  ];
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
          {t.marquee.trusted}
        </p>
      </div>
      <div className="relative">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
        >
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display font-semibold text-white/30 hover:text-white transition-colors tracking-widest"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mb-16"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/70 mb-5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF2E7A]" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-white/60 text-lg max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow={t.about.eyebrow}
            title={
              <>
                {t.about.title} <span className="text-gradient">{t.about.titleAccent}</span>
              </>
            }
          />
          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.about.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full glass px-4 py-2 text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-white/50">{t.about.growth}</div>
                <div className="text-2xl font-semibold">+248.6%</div>
              </div>
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-[#FF2E7A]" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
            {/* chart */}
            <svg viewBox="0 0 400 160" className="w-full h-40">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FF2E7A" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FF2E7A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,120 C40,110 70,90 110,80 C160,68 190,95 230,70 C270,45 310,55 360,25 L400,15 L400,160 L0,160 Z"
                fill="url(#grad)"
              />
              <path
                d="M0,120 C40,110 70,90 110,80 C160,68 190,95 230,70 C270,45 310,55 360,25 L400,15"
                stroke="#FF2E7A"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                ["SEO", "▲ 214%"],
                ["ROAS", "6.4x"],
                ["MRR", "$182k"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white/5 p-4">
                  <div className="text-xs text-white/50">{k}</div>
                  <div className="text-lg font-semibold text-gradient">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 text-sm"
            style={{ animation: "float-slow 6s ease-in-out infinite" }}
          >
            <div className="text-xs text-white/50">{t.about.aiWorkflow}</div>
            <div className="font-semibold">{t.about.agents}</div>
          </div>
          <div
            className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 text-sm"
            style={{ animation: "float-slow 7s ease-in-out infinite 1s" }}
          >
            <div className="text-xs text-white/50">{t.about.nps}</div>
            <div className="font-semibold text-gradient">92 / 100</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

type ServiceGroup = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  items: string[];
};

const serviceIcons = [Palette, Code2, Megaphone, Film, Brain];

function ServiceCard({ group, index }: { group: ServiceGroup; index: number }) {
  const Icon = group.icon;
  const { lang } = useLanguage();
  const categorySlug = categories[index].slug;
  const subServices = servicesOf(categorySlug);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group glass rounded-3xl p-8 relative overflow-hidden transition-transform duration-300"
    >
      <div
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, #D40061, transparent 70%)" }}
      />
      <div className="relative flex items-start justify-between mb-6">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#D40061] to-[#4A001C] flex items-center justify-center glow-magenta">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-xs uppercase tracking-widest text-white/40">{group.tag}</span>
      </div>
      <Link
        to="/services/$category"
        params={{ category: categorySlug }}
        className="relative block text-2xl font-semibold mb-4 hover:text-[#FF2E7A] transition"
      >
        {group.title}
      </Link>
      <ul className="relative space-y-2.5">
        {group.items.map((it, i) => (
          <li key={it}>
            <Link
              to="/services/$category/$service"
              params={{ category: categorySlug, service: subServices[i]?.slug ?? "" }}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition"
            >
              <Check className="h-4 w-4 text-[#FF2E7A] shrink-0" />
              {it}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/services/$category"
        params={{ category: categorySlug }}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#FF2E7A] hover:gap-3 transition-all"
      >
        {serviceLabels[lang].explore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
      </Link>
    </motion.div>
  );
}

function Services() {
  const { t } = useLanguage();
  const serviceGroups: ServiceGroup[] = t.services.groups.map((g, i) => ({
    ...g,
    icon: serviceIcons[i],
  }));
  return (
    <Section id="services" ambient="right">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={
          <>
            {t.services.title} <span className="text-gradient">{t.services.titleAccent}</span>
          </>
        }
        subtitle={t.services.subtitle}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceGroups.map((g, i) => (
          <ServiceCard key={g.title} group={g} index={i} />
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const { t } = useLanguage();
  const stats = [
    { v: "500+", l: t.stats[0] },
    { v: "200+", l: t.stats[1] },
    { v: "98%", l: t.stats[2] },
    { v: "24/7", l: t.stats[3] },
  ];
  return (
    <Section>
      <div className="glass rounded-[2rem] p-10 md:p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #D40061 0%, transparent 40%), radial-gradient(circle at 80% 80%, #4A001C 0%, transparent 40%)",
          }}
        />
        <div className="relative grid md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl md:text-6xl font-semibold text-gradient">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-3">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const portfolioMeta = [
  { catKey: "branding", ratio: "aspect-[4/5]" },
  { catKey: "websites", ratio: "aspect-square" },
  { catKey: "apps", ratio: "aspect-[4/5]" },
  { catKey: "campaigns", ratio: "aspect-square" },
  { catKey: "motion", ratio: "aspect-[4/5]" },
  { catKey: "ads", ratio: "aspect-square" },
] as const;

function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const catKeys = ["all", "branding", "websites", "apps", "campaigns", "motion"] as const;
  const portfolio = portfolioMeta.map((p, i) => ({
    ...p,
    title: t.portfolio.items[i],
    cat: t.portfolio.cats[p.catKey],
  }));
  const filtered = filter === "all" ? portfolio : portfolio.filter((p) => p.catKey === filter);
  return (
    <Section id="portfolio" ambient="left">
      <SectionHeader
        eyebrow={t.portfolio.eyebrow}
        title={
          <>
            {t.portfolio.title} <span className="text-gradient">{t.portfolio.titleAccent}</span>.
          </>
        }
        subtitle={t.portfolio.subtitle}
      />
      <div className="flex flex-wrap gap-2 mb-10">
        {catKeys.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === c
                ? "bg-gradient-to-r from-[#D40061] to-[#FF2E7A] text-white glow-magenta"
                : "glass text-white/70 hover:text-white"
            }`}
          >
            {t.portfolio.cats[c]}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`group relative rounded-3xl overflow-hidden ${p.ratio} glass block`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: [
                  "linear-gradient(135deg,#4A001C,#0D0D0D)",
                  "linear-gradient(135deg,#7A0033,#050505)",
                  "linear-gradient(135deg,#B0004F,#4A001C)",
                  "linear-gradient(135deg,#0D0D0D,#7A0033)",
                  "linear-gradient(135deg,#D40061,#050505)",
                  "linear-gradient(135deg,#4A001C,#B0004F)",
                ][i % 6],
              }}
            />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(255,46,122,0.35), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="text-xs uppercase tracking-widest text-white/70">{p.cat}</span>
              <div>
                <div className="text-xl md:text-2xl font-semibold text-white">{p.title}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {t.portfolio.viewCase} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps.map((s, i) => ({ n: `0${i + 1}`, ...s }));
  return (
    <Section id="process">
      <SectionHeader
        eyebrow={t.process.eyebrow}
        title={
          <>
            {t.process.title} <span className="text-gradient">{t.process.titleAccent}</span>{" "}
            {t.process.titleEnd}
          </>
        }
      />
      <div className="relative grid md:grid-cols-4 gap-6">
        <div className="absolute left-0 right-0 top-14 hidden md:block h-px bg-gradient-to-r from-transparent via-[#D40061]/60 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-3xl p-8 relative"
          >
            <div className="text-sm text-[#FF2E7A] font-semibold tracking-widest mb-4">{s.n}</div>
            <div className="text-xl font-semibold mb-2">{s.t}</div>
            <p className="text-white/60 text-sm leading-relaxed">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const names = ["Ayesha Rahman", "Daniel Okafor", "Sofia Marchetti"];
  const items = t.testimonials.items.map((item, i) => ({ ...item, n: names[i] }));
  return (
    <Section>
      <SectionHeader
        eyebrow={t.testimonials.eyebrow}
        title={
          <>
            {t.testimonials.title}{" "}
            <span className="text-gradient">{t.testimonials.titleAccent}</span>.
          </>
        }
      />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-3xl p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 text-[#FF2E7A] fill-[#FF2E7A]" />
              ))}
            </div>
            <p className="text-white/80 leading-relaxed">"{item.q}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D40061] to-[#4A001C] flex items-center justify-center font-semibold">
                {item.n.split(" ").map((s) => s[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{item.n}</div>
                <div className="text-xs text-white/50">{item.r}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const { t } = useLanguage();
  const prices = ["$2,400", "$6,900", t.pricing.custom];
  const plans = t.pricing.plans.map((p, i) => ({
    ...p,
    price: prices[i],
    highlight: i === 1,
  }));
  return (
    <Section id="pricing" ambient="right">
      <SectionHeader
        eyebrow={t.pricing.eyebrow}
        title={
          <>
            {t.pricing.title} <span className="text-gradient">{t.pricing.titleAccent}</span>
          </>
        }
      />
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative rounded-3xl p-8 flex flex-col ${
              p.highlight
                ? "bg-gradient-to-b from-[#4A001C] to-[#0D0D0D] border border-[#D40061]/50 glow-magenta"
                : "glass"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-3 py-1 text-xs font-medium">
                {t.pricing.mostPopular}
              </div>
            )}
            <div className="text-sm text-white/60">{p.name}</div>
            <div className="mt-4 flex items-baseline gap-1">
              <div className="text-4xl md:text-5xl font-semibold">{p.price}</div>
              <div className="text-white/50 text-sm">{p.unit}</div>
            </div>
            <p className="mt-3 text-white/60 text-sm">{p.desc}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="h-4 w-4 text-[#FF2E7A]" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition ${
                p.highlight
                  ? "bg-white text-black hover:bg-white/90"
                  : "glass hover:bg-white/10"
              }`}
            >
              {p.cta} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.items;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow={t.faq.eyebrow}
        title={
          <>
            {t.faq.title} <span className="text-gradient">{t.faq.titleAccent}</span>.
          </>
        }
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-medium">{f.q}</span>
              {open === i ? (
                <Minus className="h-5 w-5 text-[#FF2E7A]" />
              ) : (
                <Plus className="h-5 w-5 text-white/60" />
              )}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" ambient="left">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={
              <>
                {t.contact.title}{" "}
                <span className="text-gradient">{t.contact.titleAccent}</span>.
              </>
            }
            subtitle={t.contact.subtitle}
          />
          <div className="space-y-5 text-white/70">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                <Mail className="h-4 w-4 text-[#FF2E7A]" />
              </div>
              hello@ventrixservices.com
            </div>
            <a
              href="https://wa.me/15128016299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#FF2E7A]" />
              </div>
              <span>
                +1 (512) 801-6299
                <span className="block text-xs text-white/40">{t.contact.whatsappOnly}</span>
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#FF2E7A]" />
              </div>
              <span>
                <a href="tel:+12543489215" className="hover:text-white transition-colors">
                  +1 (254) 348-9215
                </a>
                <span className="block text-xs text-white/40">
                  {t.contact.calls}{" "}
                  <a
                    href="https://wa.me/12543489215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline underline-offset-2"
                  >
                    {t.contact.whatsapp}
                  </a>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                <MapPin className="h-4 w-4 text-[#FF2E7A]" />
              </div>
              5900 Balcones Dr Suite 100, Austin, TX 78731
            </div>
          </div>
          <div className="mt-8 glass rounded-3xl overflow-hidden aspect-[16/9]">
            <iframe
              title={t.contact.mapTitle}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-97.7660%2C30.3320%2C-97.7360%2C30.3520&layer=mapnik&marker=30.3420%2C-97.7510"
              className="w-full h-full grayscale opacity-80"
            />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass rounded-3xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label={t.contact.form.name} name="name" placeholder={t.contact.form.namePh} />
            <Field label={t.contact.form.email} name="email" type="email" placeholder={t.contact.form.emailPh} />
            <Field label={t.contact.form.phone} name="phone" placeholder={t.contact.form.phonePh} />
            <Field label={t.contact.form.company} name="company" placeholder={t.contact.form.companyPh} />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-white/50">
              {t.contact.form.service}
            </label>
            <select
              required
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-[#FF2E7A] focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                {t.contact.form.selectService}
              </option>
              {t.contact.form.services.map((s) => (
                  <option key={s} value={s} className="bg-black">
                    {s}
                  </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-white/50">
              {t.contact.form.details}
            </label>
            <textarea
              required
              rows={5}
              placeholder={t.contact.form.detailsPh}
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-[#FF2E7A] focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D40061] to-[#FF2E7A] px-7 py-4 font-medium text-white glow-magenta hover:brightness-110 transition"
          >
            {sent ? t.contact.form.sent : t.contact.form.send}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:border-[#FF2E7A] focus:outline-none"
      />
    </div>
  );
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
        >
          <motion.img
            src={logoAsset.url}
            alt=""
            className="h-24 w-24 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width: w }}
      className="fixed top-0 left-0 h-[2px] z-[110] bg-gradient-to-r from-[#D40061] to-[#FF2E7A]"
    />
  );
}

export function VentrixLanding() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}