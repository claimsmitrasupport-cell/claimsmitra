import { Link } from "react-router-dom";
import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { useT } from "@/i18n/LanguageContext";

const leadership = [
  { name: "Sneha Kaushik Trivedi", roleKey: "role_promoter" as const, initials: "SK" },
  { name: "Kaushik Meghani", roleKey: "role_partner" as const, initials: "KM" },
  { name: "Sanjeev Sharda", roleKey: "role_partner" as const, initials: "SS" },
];

const reasons = [
  { icon: ShieldCheck, tKey: "about_r1_t" as const, dKey: "about_r1_d" as const },
  { icon: Sparkles, tKey: "about_r2_t" as const, dKey: "about_r2_d" as const },
  { icon: Users, tKey: "about_r3_t" as const, dKey: "about_r3_d" as const },
  { icon: Target, tKey: "about_r4_t" as const, dKey: "about_r4_d" as const },
];

const WHATSAPP_URL = "https://wa.me/919879270170";
const PHONE_DISPLAY = "+91 98792 70170";

const About = () => {
  const t = useT();
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-70" aria-hidden />
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold tracking-wide uppercase">
              {t("about_chip")}
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {t("about_title_1")} <span className="gradient-text">{t("about_title_2")}</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("about_sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t("about_wa")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {t("about_advisor")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 gradient-hero opacity-15 blur-3xl rounded-[3rem]" aria-hidden />
            <img
              src={aboutTeam}
              alt="ClaimsMitra advisors helping a client review insurance claim documents"
              width={1280}
              height={960}
              loading="lazy"
              className="relative w-full rounded-3xl shadow-elegant border border-border bg-card"
            />
          </div>
        </div>
      </section>

      {/* INTRO + MISSION */}
      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{t("about_who")}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("about_who_p1")}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("about_who_p2")}
            </p>
          </div>

          <div className="rounded-2xl gradient-hero p-8 md:p-10 text-primary-foreground shadow-glow relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <Target className="h-8 w-8" />
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight">{t("about_mission")}</h2>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/90 leading-relaxed">
              {t("about_mission_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("about_lead")}</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
              {t("about_lead_title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("about_lead_sub")}
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            {leadership.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-elegant transition-smooth"
              >
                <div className="h-16 w-16 rounded-2xl gradient-hero text-primary-foreground grid place-items-center font-display text-xl font-bold shadow-glow">
                  {p.initials}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{t(p.roleKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t("about_why")}</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
              {t("about_why_title")}
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.tKey}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-base">{t(r.tKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(r.dKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE + CTA */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
            <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">{t("about_office")}</h2>
            <address className="mt-4 not-italic text-muted-foreground leading-relaxed">
              <span className="block font-semibold text-foreground">{t("about_addr_company")}</span>
              {t("about_addr_line1")}<br />
              {t("about_addr_line2")}
            </address>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              {t("about_stuck")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("about_stuck_desc")}
            </p>

            <a
              href={`tel:+919879270170`}
              className="mt-5 inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-smooth"
            >
              <Phone className="h-4 w-4 text-primary" />
              {PHONE_DISPLAY}
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t("about_wa")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  {t("about_free")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
