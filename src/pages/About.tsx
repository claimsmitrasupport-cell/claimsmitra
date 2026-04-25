import { Link } from "react-router-dom";
import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const leadership = [
  {
    name: "Sneha Kaushik Trivedi",
    role: "Promoter & Partner",
    initials: "SK",
  },
  {
    name: "Kaushik Meghani",
    role: "Partner",
    initials: "KM",
  },
  {
    name: "Sanjeev Sharda",
    role: "Partner",
    initials: "SS",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Expert support for stuck claims",
    desc: "Specialists who handle rejected, delayed and short-settled claims every single day.",
  },
  {
    icon: Sparkles,
    title: "Transparent & trustworthy",
    desc: "Clear timelines, honest assessments and no false promises — ever.",
  },
  {
    icon: Users,
    title: "Experienced professionals",
    desc: "A dedicated team with deep knowledge of IRDAI regulations and insurer playbooks.",
  },
  {
    icon: Target,
    title: "Customer-first approach",
    desc: "We measure success only when you receive what you rightfully deserve.",
  },
];

const WHATSAPP_URL = "https://wa.me/919879270170";
const PHONE_DISPLAY = "+91 98792 70170";

const About = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-70" aria-hidden />
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold tracking-wide uppercase">
              About ClaimsMitra
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Your reliable partner for <span className="gradient-text">stuck insurance claims</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              ClaimsMitra is a dedicated platform helping individuals navigate difficult or delayed
              insurance claims. We simplify the process and provide guidance, support and real
              solutions — so people receive what they rightfully deserve.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Talk to an advisor <ArrowRight className="h-4 w-4" />
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
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Who we are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We understand how stressful and confusing insurance claims can be. Denial letters,
              vague clauses, repeated follow-ups — they leave policyholders exhausted at the worst
              possible time.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That's why ClaimsMitra exists: to act as a reliable partner who assists, guides and
              resolves claim-related issues efficiently, with transparency at every step.
            </p>
          </div>

          <div className="rounded-2xl gradient-hero p-8 md:p-10 text-primary-foreground shadow-glow relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <Target className="h-8 w-8" />
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/90 leading-relaxed">
              To empower people by resolving insurance claim challenges with
              <span className="font-semibold"> transparency, speed and trust</span>.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Leadership</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
              The team behind ClaimsMitra
            </h2>
            <p className="mt-3 text-muted-foreground">
              Operators with decades of combined experience across insurance, finance and dispute resolution.
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
                <p className="text-sm text-primary font-medium mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why choose us</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Built to fight for the policyholder
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-base">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
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
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">Our Office</h2>
            <address className="mt-4 not-italic text-muted-foreground leading-relaxed">
              <span className="block font-semibold text-foreground">AFC Ventures</span>
              Office No. 13, Loyalka Compound<br />
              Opp. Chowpatty, Mumbai
            </address>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col">
            <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold tracking-tight">
              Have a stuck claim? Talk to us today.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Reach out on WhatsApp for the fastest response. Our advisors review every case personally.
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
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Free claim review <ArrowRight className="h-4 w-4" />
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
