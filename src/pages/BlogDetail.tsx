import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs, getBlog } from "@/data/blogs";
import { useLanguage } from "@/i18n/LanguageContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const blog = id ? getBlog(id) : undefined;

  if (!blog) {
    return (
      <section className="container-px mx-auto max-w-3xl py-24 text-center">
        <h1 className="font-display text-3xl font-bold">{t("blog_not_found")}</h1>
        <p className="mt-3 text-muted-foreground">{t("blog_not_found_d")}</p>
        <Button asChild variant="hero" className="mt-6">
          <Link to="/blog">{t("blog_back_hub")}</Link>
        </Button>
      </section>
    );
  }

  const loc = blog[lang];
  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <article>
      {/* HERO */}
      <header className="container-px mx-auto max-w-3xl pt-12 md:pt-16 pb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
          <ArrowLeft className="h-4 w-4" /> {t("blog_back")}
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary font-semibold">{loc.category}</span>
          <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
          <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {blog.date}</span>
        </div>
        <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          {loc.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{loc.preview}</p>
      </header>

      <div className="container-px mx-auto max-w-4xl">
        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant">
          <img src={blog.image} alt={loc.title} width={1200} height={800} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* BODY */}
      <div className="container-px mx-auto max-w-3xl py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          {loc.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-display text-2xl sm:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "p") {
              return (
                <p key={i} className="text-base sm:text-lg text-foreground/85 leading-[1.75] my-5">
                  {block.text}
                </p>
              );
            }
            if (block.type === "ul" && block.items) {
              return (
                <ul key={i} className="my-6 space-y-2.5">
                  {block.items.map((it, k) => (
                    <li key={k} className="flex items-start gap-3 text-base sm:text-lg text-foreground/85 leading-relaxed">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i} className="my-10 pl-6 border-l-4 border-primary bg-primary-soft/40 py-5 pr-5 rounded-r-xl">
                  <p className="text-lg italic text-foreground/90 leading-relaxed m-0">"{block.text}"</p>
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl gradient-hero text-primary-foreground text-center">
          <h3 className="font-display text-2xl font-bold">{t("blog_cta_title")}</h3>
          <p className="mt-2 text-primary-foreground/85">{t("blog_cta_desc")}</p>
          <Button asChild size="lg" className="mt-5 bg-background text-primary hover:bg-background/90">
            <Link to="/contact">{t("blog_cta_btn")} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>

      {/* RELATED */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <h2 className="font-display text-2xl font-bold mb-8">{t("blog_continue")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((b) => {
            const rl = b[lang];
            return (
              <Link key={b.id} to={`/blog/${b.id}`} className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt={rl.title} loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-primary">{rl.category}</p>
                  <h4 className="mt-2 font-display font-semibold leading-snug group-hover:text-primary transition-smooth">{rl.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default BlogDetail;
