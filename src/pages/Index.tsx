import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, ShieldCheck, FileSearch, Scale,
  Clock, IndianRupee, Star, FileText, MessageSquare, HandCoins,
  Trophy, TrendingUp, Wallet, Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroImg from "@/assets/hero-illustration.jpg";
import processImg from "@/assets/process-illustration.jpg";
import familyImg from "@/assets/family-protection.jpg";
import heroMotion from "@/assets/hero-motion.mp4.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t, lang } = useLanguage();
  const [claimType, setClaimType] = useState("");
  const [amount, setAmount] = useState("");
  const [showResult, setShowResult] = useState(false);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary-soft/60 to-transparent -z-10" />

        {/* Subtle looping motion background */}
        <video
          src={heroMotion.url}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-multiply"
        />

        <div className="container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              {t("hero_title_1")}
              <br />
              <span className="gradient-text">{t("hero_title_2")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero_sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  {t("hero_cta_review")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">{t("hero_cta_how")}</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {t("hero_chip_1")}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> {t("hero_chip_2")}</div>
            </div>

            {/* Hero illustration on mobile */}
            <div className="relative mt-10 lg:hidden">
              <div className="absolute -inset-4 gradient-hero opacity-15 blur-3xl rounded-[3rem]" aria-hidden />
              <img
                src={heroImg}
                alt="Friendly insurance claim advisor"
                width={1280}
                height={960}
                className="relative w-full rounded-3xl shadow-elegant border border-border bg-card"
              />
            </div>
          </div>

          {/* Eligibility checker + illustration */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 gradient-hero opacity-20 blur-3xl rounded-[3rem]" />

            {/* Decorative illustration above the form on desktop */}
            <img
              src={heroImg}
              alt=""
              aria-hidden
              width={1280}
              height={960}
              className="hidden lg:block relative w-2/3 mx-auto -mb-8 rounded-3xl shadow-elegant border border-border bg-card"
            />

            <div className="relative bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-elegant">

              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-primary-soft grid place-items-center">
                  <FileSearch className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{t("elig_title")}</h3>
                  <p className="text-xs text-muted-foreground">{t("elig_sub")}</p>
                </div>
              </div>

              <form onSubmit={checkEligibility} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("elig_type")}</label>
                  <select
                    required
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">{t("elig_type_placeholder")}</option>
                    <option>{t("opt_general")}</option>
                    <option>{t("opt_health")}</option>
                    <option>{t("opt_travel")}</option>
                    <option>{t("opt_motor")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("elig_amount")}</label>
                  <input
                    required
                    type="number"
                    min="1000"
                    placeholder={t("elig_amount_placeholder")}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  {t("elig_check")} <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              {showResult && (
                <div className="mt-5 p-4 rounded-xl bg-accent-soft border border-accent/20 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{t("elig_result_title")}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t("elig_result_desc")}{" "}
                        <Link to="/contact" className="text-primary font-medium underline-offset-2 hover:underline">
                          {t("elig_result_cta")}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* TRUST STATS */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: 120, suf: "+", label: t("stat_claims"), icon: Trophy, accent: false },
            { v: 95, suf: "%+", label: t("stat_success"), icon: TrendingUp, accent: false },
            { v: 14, suf: "Cr+", label: t("stat_recovered"), pre: "₹", icon: Wallet, accent: false },
            { v: 21, suf: lang === "hi" ? " दिन" : " days", label: t("stat_resolution"), icon: Timer, accent: true },
          ].map((s, i) => (
            <div
              key={i}
              className={`relative text-center p-6 rounded-2xl border shadow-card hover-lift overflow-hidden ${
                s.accent
                  ? "bg-gradient-to-br from-accent-soft to-card border-accent/30"
                  : "bg-card border-border"
              }`}
            >
              {s.accent && (
                <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {t("stat_fast")}
                </div>
              )}
              <div
                className={`mx-auto mb-3 h-11 w-11 rounded-xl grid place-items-center ${
                  s.accent ? "bg-accent/15 text-accent" : "bg-primary-soft text-primary"
                }`}
              >
                <s.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${
                s.accent ? "text-accent" : "gradient-text"
              }`}>
                <AnimatedCounter end={s.v} suffix={s.suf} prefix={s.pre} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE — process visual */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 gradient-hero opacity-15 blur-3xl rounded-[3rem]" aria-hidden />
            <img
              src={processImg}
              alt="Claim advisor on a video call helping a client recover their insurance payout"
              width={1280}
              height={960}
              loading="lazy"
              className="relative w-full rounded-3xl shadow-elegant border border-border bg-card"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">{t("how_eyebrow")}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 leading-tight">
              {t("how_title")}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("how_desc")}
            </p>
            <div className="mt-8">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">{t("how_book")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">{t("svc_eyebrow")}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            {t("svc_title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("svc_desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: FileText, title: t("svc_card1_t"),
              desc: t("svc_card1_d"),
              color: "from-primary/10 to-primary/5",
            },
            {
              icon: Clock, title: t("svc_card2_t"),
              desc: t("svc_card2_d"),
              color: "from-accent/15 to-accent/5",
            },
            {
              icon: IndianRupee, title: t("svc_card3_t"),
              desc: t("svc_card3_d"),
              color: "from-warning/10 to-warning/5",
            },
          ].map((s) => (
            <Link
              to="/services"
              key={s.title}
              className="group relative p-7 rounded-2xl bg-card border border-border shadow-card hover-lift overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-smooth`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-primary-soft grid place-items-center mb-5">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                  {t("svc_learn")} <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary/40 py-20 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">{t("proc_eyebrow")}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              {t("proc_title")}
            </h2>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            {[
              { i: MessageSquare, t: t("proc_s1_t"), d: t("proc_s1_d") },
              { i: FileSearch, t: t("proc_s2_t"), d: t("proc_s2_d") },
              { i: Scale, t: t("proc_s3_t"), d: t("proc_s3_d") },
              { i: HandCoins, t: t("proc_s4_t"), d: t("proc_s4_d") },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="relative z-10 mx-auto h-16 w-16 rounded-2xl gradient-hero grid place-items-center text-primary-foreground shadow-glow">
                  <step.i className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <div className="mt-2 text-xs font-bold text-primary">{t("proc_step")} {idx + 1}</div>
                <h4 className="mt-1 font-display font-semibold text-lg">{step.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">{t("test_eyebrow")}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            {t("test_title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "My mother's cardiac claim was rejected for non-disclosure of mild hypertension. ClaimsMitra got the entire ₹4.2 lakh approved within five weeks.",
              a: "Priya Menon", r: "Bengaluru · Health Claim",
            },
            {
              q: "My motor claim was short-settled by ₹68,000 citing depreciation. Their team challenged the surveyor's report and recovered every rupee.",
              a: "Arjun Sharma", r: "Pune · Motor Claim",
            },
            {
              q: "Insurer sat on my claim for 87 days. ClaimsMitra escalated to Bima Bharosa and we got the payout plus ₹6,400 in interest.",
              a: "Rohit Banerjee", r: "Kolkata · Delayed Claim",
            },
          ].map((tm, i) => (
            <div key={i} className="p-7 rounded-2xl bg-card border border-border shadow-card hover-lift">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{tm.q}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold text-sm">{tm.a}</p>
                <p className="text-xs text-muted-foreground">{tm.r}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAMILY PROTECTION CALLOUT */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary-soft via-card to-accent-soft p-8 sm:p-12">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            <img
              src={familyImg}
              alt="An Indian family protected by an insurance shield"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full max-w-sm mx-auto rounded-2xl"
            />
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">{t("fam_eyebrow")}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 leading-tight">
                {t("fam_title")}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                {t("fam_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-px mx-auto max-w-7xl pb-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="relative">
            <ShieldCheck className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
              {t("fcta_title")}
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
              {t("fcta_desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                <Link to="/contact">{t("fcta_start")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/blog">{t("fcta_guides")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
