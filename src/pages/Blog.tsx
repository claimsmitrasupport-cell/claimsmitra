import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
          Knowledge Hub
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Practical guides to keep your claim from being denied.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Written by claim specialists who fight insurers every day. No jargon, no ads — just what works.
        </p>
      </section>

      {/* Filters */}
      <section className="container-px mx-auto max-w-7xl pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                active === c
                  ? "gradient-hero text-primary-foreground shadow-sm"
                  : "bg-secondary text-foreground/70 hover:bg-primary-soft hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((b) => (
            <Link
              key={b.id}
              to={`/blog/${b.id}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover-lift"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary font-semibold">
                    {b.category}
                  </span>
                  <span className="text-muted-foreground inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {b.readTime}
                  </span>
                </div>
                <h3 className="mt-4 font-display font-bold text-lg leading-snug group-hover:text-primary transition-smooth">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {b.preview}
                </p>
                <div className="mt-auto pt-5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{b.date}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">
                    Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
