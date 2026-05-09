import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/claims-mitra-logo.png";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useT } from "@/i18n/LanguageContext";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const t = useT();

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/services", label: t("nav_services") },
    { to: "/blog", label: t("nav_blog") },
    { to: "/contact", label: t("nav_contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-px mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="ClaimsMitra logo"
            className="h-10 w-10 md:h-11 md:w-11 object-contain"
          />
          <span className="font-display font-bold text-lg tracking-tight">
            Claims<span className="gradient-text">Mitra</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-smooth",
                  isActive
                    ? "text-primary bg-primary-soft"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button asChild variant="hero" size="default">
            <Link to="/contact">{t("nav_cta")}</Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-px py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-lg text-base font-medium",
                    isActive ? "text-primary bg-primary-soft" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contact">{t("nav_cta")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
