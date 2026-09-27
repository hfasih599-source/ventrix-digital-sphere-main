import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { ServiceLayout, ServiceCTA } from "@/components/ventrix/services/ServiceLayout";
import { Ambient3D } from "@/components/ventrix/three/Lazy3D";
import { blogPosts, formatDate, type BlogPost } from "@/lib/blog/posts";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <ServiceLayout crumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}>
      <article className="relative px-6 md:px-10 pt-10">
        <div className="pointer-events-none absolute -top-20 right-0 opacity-30">
          <Ambient3D />
        </div>
        <div className="max-w-3xl mx-auto relative">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF2E7A]">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/45">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readMinutes} min read
            </span>
          </div>
          <p className="mt-8 text-lg text-white/70 leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 space-y-6 text-white/60 leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-12 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:text-[#FF2E7A] transition"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> All articles
          </Link>
        </div>
      </article>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass rounded-2xl p-6 block"
              >
                <div className="text-[11px] uppercase tracking-widest text-[#FF2E7A]">
                  {p.category}
                </div>
                <h3 className="mt-3 text-base font-medium leading-snug group-hover:text-[#FF2E7A] transition">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/50 group-hover:gap-2.5 transition-all">
                  Read <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
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
