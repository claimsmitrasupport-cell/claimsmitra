import { Link } from "react-router-dom";
import {
  ArrowRight, Clock, FileText, IndianRupee, CheckCircle2,
  HeartPulse, Stethoscope, ShieldCheck, Hourglass, Plane, Car,
  XCircle, Wrench, Users, Gauge, Eye, Trophy, Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesIllustration from "@/assets/services-illustration.jpg";
import { useT } from "@/i18n/LanguageContext";

const insuranceCategories = [
  { icon: HeartPulse, tKey: "cat_life_t" as const, dKey: "cat_life_d" as const, color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Stethoscope, tKey: "cat_health_t" as const, dKey: "cat_health_d" as const, color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: ShieldCheck, tKey: "cat_general_t" as const, dKey: "cat_general_d" as const, color: "text-primary", bg: "bg-primary-soft" },
  { icon: Hourglass, tKey: "cat_term_t" as const, dKey: "cat_term_d" as const, color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Plane, tKey: "cat_travel_t" as const, dKey: "cat_travel_d" as const, color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Car, tKey: "cat_motor_t" as const, dKey: "cat_motor_d" as const, color: "text-violet-600", bg: "bg-violet-50" },
];

const problems = [
  { icon: XCircle, tKey: "prob1_t" as const, dKey: "prob1_d" as const },
  { icon: Clock, tKey: "prob2_t" as const, dKey: "prob2_d" as const },
  { icon: IndianRupee, tKey: "prob3_t" as const, dKey: "prob3_d" as const },
  { icon: Wrench, tKey: "prob4_t" as const, dKey: "prob4_d" as const },
];

const whyUs = [
  { icon: Users, tKey: "why1_t" as const, dKey: "why1_d" as const },
  { icon: Gauge, tKey: "why2_t" as const, dKey: "why2_d" as const },
  { icon: Eye, tKey: "why3_t" as const, dKey: "why3_d" as const },
  { icon: Trophy, tKey: "why4_t" as const, dKey: "why4_d" as const },
];


const services = [
  {
    icon: FileText,
    badgeKey: "sd1_badge" as const,
    titleKey: "sd1_title" as const,
    introKey: "sd1_intro" as const,
    bulletKeys: ["sd1_b1", "sd1_b2", "sd1_b3", "sd1_b4"] as const,
    statV: "76%",
    statLKey: "sd1_stat_l" as const,
  },
  {
    icon: Clock,
    badgeKey: "sd2_badge" as const,
    titleKey: "sd2_title" as const,
    introKey: "sd2_intro" as const,
    bulletKeys: ["sd2_b1", "sd2_b2", "sd2_b3", "sd2_b4"] as const,
    statVKey: "sd2_stat_v" as const,
    statLKey: "sd2_stat_l" as const,
  },
  {
    icon: IndianRupee,
    badgeKey: "sd3_badge" as const,
    titleKey: "sd3_title" as const,
    introKey: "sd3_intro" as const,
    bulletKeys: ["sd3_b1", "sd3_b2", "sd3_b3", "sd3_b4"] as const,
    statV: "₹54k",
    statLKey: "sd3_stat_l" as const,
  },
];

const Services = () => {
  const t = useT();
  return (
    <>
      {/* HEADER */}
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
          {t("spg_chip")}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          {t("spg_title")}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("spg_sub")}
        </p>
      </section>

      {/* INSURANCE CATEGORIES */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center mb-12">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-4">
              {t("spg_our")}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl">
              {t("spg_h2")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              {t("spg_h2_sub")}
            </p>
          </div>
          <img
            src={servicesIllustration}
            alt="Icons representing different insurance categories"
            width={1280}
            height={960}
            loading="lazy"
            className="hidden lg:block w-72 rounded-2xl border border-border shadow-card bg-card"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {insuranceCategories.map((c) => (
            <div
              key={c.tKey}
              className="group relative bg-card border border-border rounded-2xl p-6 shadow-card hover-lift"
            >
              <div className={`h-12 w-12 rounded-xl ${c.bg} ${c.color} grid place-items-center mb-4`}>
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{t(c.tKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(c.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {t("spg_problems")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t("spg_problems_sub")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.tKey}
              className="bg-gradient-to-br from-primary-soft to-card border border-primary/10 rounded-2xl p-6 hover-lift"
            >
              <div className="h-11 w-11 rounded-xl bg-card text-primary grid place-items-center shadow-sm mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold">{t(p.tKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(p.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICE BLOCKS */}
      <div className="container-px mx-auto max-w-7xl space-y-20 pb-20">
        {services.map((s, idx) => (
          <section key={s.titleKey} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-4">
                <s.icon className="h-3.5 w-3.5" /> {t(s.badgeKey)}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">{t(s.titleKey)}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t(s.introKey)}</p>
              <ul className="mt-6 space-y-3">
                {s.bulletKeys.map((bk) => (
                  <li key={bk} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{t(bk)}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">{t("spg_audit_btn")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 gradient-hero opacity-10 blur-3xl rounded-[3rem]" />
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-elegant">
                <div className="aspect-[4/3] rounded-2xl gradient-mesh flex flex-col items-center justify-center p-8">
                  <div className="font-display text-5xl sm:text-6xl font-bold gradient-text">{s.statVKey ? t(s.statVKey) : s.statV}</div>
                  <p className="mt-3 text-center text-muted-foreground max-w-xs">{t(s.statLKey)}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[t("sd_steps_audit"), t("sd_steps_appeal"), t("sd_steps_recover")].map((p, i) => (
                    <div key={p} className="p-3 rounded-xl bg-secondary/60">
                      <div className="text-xs font-bold text-primary">0{i + 1}</div>
                      <div className="text-sm font-medium mt-1">{p}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {t("spg_why")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t("spg_why_sub")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w) => (
            <div
              key={w.tKey}
              className="bg-card border border-border rounded-2xl p-6 text-center hover-lift"
            >
              <div className="h-12 w-12 mx-auto rounded-2xl gradient-hero text-primary-foreground grid place-items-center mb-4 shadow-glow">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold">{t(w.tKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(w.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATE FEES CTA BLOCK */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary-soft via-card to-accent-soft p-8 sm:p-12">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full gradient-hero opacity-10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="flex items-start gap-5">
              <div className="hidden sm:grid h-14 w-14 rounded-2xl bg-card text-primary place-items-center shadow-card shrink-0">
                <Calculator className="h-7 w-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card text-primary text-xs font-semibold mb-3">
                  {t("spg_fee_chip")}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  {t("spg_fee_title")}
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  {t("spg_fee_desc")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">{t("spg_fee_calc")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">{t("spg_fee_consult")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-8">
        <div className="rounded-3xl bg-secondary/50 border border-border p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl font-bold">{t("spg_unsure")}</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {t("spg_unsure_desc")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">{t("spg_submit")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t("spg_talk")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
