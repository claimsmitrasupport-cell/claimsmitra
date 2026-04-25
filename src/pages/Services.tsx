import { Link } from "react-router-dom";
import {
  ArrowRight, Clock, FileText, IndianRupee, CheckCircle2,
  HeartPulse, Stethoscope, ShieldCheck, Hourglass, Plane, Car,
  XCircle, Wrench, Users, Gauge, Eye, Trophy, Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesIllustration from "@/assets/services-illustration.jpg";

const insuranceCategories = [
  { icon: HeartPulse, label: "Life Insurance", desc: "Death claim repudiations, non-disclosure disputes and nominee delays — handled end to end.", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Stethoscope, label: "Health Insurance", desc: "Cashless rejections, reimbursement short-payments and PED-clause denials reversed.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: ShieldCheck, label: "General Insurance", desc: "Property, fire, marine and liability claims — surveyor reports challenged on merit.", color: "text-primary", bg: "bg-primary-soft" },
  { icon: Hourglass, label: "Term Insurance", desc: "Suicide-clause, lifestyle-disclosure and policy-lapse rejections re-opened.", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Plane, label: "Travel Insurance", desc: "Trip cancellation, baggage loss and overseas medical claims recovered with documentation.", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Car, label: "Motor Insurance", desc: "Own-damage shortfalls, total-loss disputes and third-party delays — pursued via MACT where needed.", color: "text-violet-600", bg: "bg-violet-50" },
];

const problems = [
  { icon: XCircle, label: "Claim Rejection", desc: "Reverse denials with policy-clause forensics." },
  { icon: Clock, label: "Claim Delay", desc: "Force settlement plus statutory interest." },
  { icon: IndianRupee, label: "Short Settlement", desc: "Recover the deductions hidden in the CSA." },
  { icon: Wrench, label: "Complete Claim Assistance", desc: "End-to-end handling — audit to recovery." },
];

const whyUs = [
  { icon: Users, label: "Expert Claim Advisors", desc: "Ex-insurance and legal professionals on every file." },
  { icon: Gauge, label: "Faster Resolution", desc: "Median 21-day turnaround on delayed claims." },
  { icon: Eye, label: "Transparent Process", desc: "Written engagement, no hidden costs, no upfront fees." },
  { icon: Trophy, label: "High Success Rate", desc: "76% of audited rejections qualify for recovery." },
];


const services = [
  {
    icon: FileText,
    badge: "Rejected Claims",
    title: "Reverse a denial — even after the insurer's final letter.",
    intro:
      "Most rejections in India are based on a small set of grounds: non-disclosure, waiting periods, exclusions, or the 'reasonable & customary' clause. Each ground has a counter-argument when the denial isn't backed by clear policy language.",
    bullets: [
      "Forensic review of denial letter against your policy wording",
      "Drafted internal appeal with case-law and IRDAI references",
      "Escalation to Grievance Redressal Officer and Bima Bharosa portal",
      "Insurance Ombudsman representation (claims up to ₹50 lakh)",
    ],
    stat: { v: "76%", l: "of rejected claims we audit qualify for recovery" },
  },
  {
    icon: Clock,
    badge: "Delayed Claims",
    title: "Force a settlement — with interest you're legally owed.",
    intro:
      "Under Regulation 9 of IRDAI's 2017 Policyholders' Interest rules, an insurer must settle within 30 days. Beyond that, interest at bank rate + 2% becomes payable. Most policyholders never claim it.",
    bullets: [
      "Documented timeline of every interaction and missed deadline",
      "Formal grievance citing exact regulatory clauses",
      "Bima Bharosa escalation — tracked at the regulator level",
      "Interest calculation and recovery in addition to the claim",
    ],
    stat: { v: "21 days", l: "average resolution after we take over a delayed file" },
  },
  {
    icon: IndianRupee,
    badge: "Short Settlement",
    title: "Recover what was quietly deducted from your payout.",
    intro:
      "When the cheque is smaller than the bill, the deduction sheet usually hides three things: room-rent proportionate deductions, non-medical 'consumables', and reasonable-and-customary capping. Each is challengeable.",
    bullets: [
      "Line-by-line audit of the Claim Settlement Advice",
      "Comparison against IRDAI's standard non-payable list",
      "Peer-hospital benchmarking for R&C disputes",
      "Written representation — without forfeiting your existing payment",
    ],
    stat: { v: "₹54k", l: "median additional recovery per short-settled health claim" },
  },
];

const Services = () => {
  return (
    <>
      {/* HEADER */}
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
          Services
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Specialist help for the three ways insurers under-pay you.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Every engagement begins with a free claim audit. You only pay if we recover.
        </p>
      </section>

      {/* INSURANCE CATEGORIES */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center mb-12">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-4">
              🛠️ Our Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl">
              We help ensure that people have a voice — and a means of redress.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Specialist claim assistance across every line of insurance sold in India.
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
              key={c.label}
              className="group relative bg-card border border-border rounded-2xl p-6 shadow-card hover-lift"
            >
              <div className={`h-12 w-12 rounded-xl ${c.bg} ${c.color} grid place-items-center mb-4`}>
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{c.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Four patterns cover almost every dispute we see.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.label}
              className="bg-gradient-to-br from-primary-soft to-card border border-primary/10 rounded-2xl p-6 hover-lift"
            >
              <div className="h-11 w-11 rounded-xl bg-card text-primary grid place-items-center shadow-sm mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold">{p.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICE BLOCKS */}
      <div className="container-px mx-auto max-w-7xl space-y-20 pb-20">
        {services.map((s, idx) => (
          <section key={s.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-4">
                <s.icon className="h-3.5 w-3.5" /> {s.badge}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Start a free audit <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 gradient-hero opacity-10 blur-3xl rounded-[3rem]" />
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-elegant">
                <div className="aspect-[4/3] rounded-2xl gradient-mesh flex flex-col items-center justify-center p-8">
                  <div className="font-display text-5xl sm:text-6xl font-bold gradient-text">{s.stat.v}</div>
                  <p className="mt-3 text-center text-muted-foreground max-w-xs">{s.stat.l}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {["Audit", "Appeal", "Recover"].map((p, i) => (
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
            Why Choose Us
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            What sets ClaimsMitra apart from generic claim consultants.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w) => (
            <div
              key={w.label}
              className="bg-card border border-border rounded-2xl p-6 text-center hover-lift"
            >
              <div className="h-12 w-12 mx-auto rounded-2xl gradient-hero text-primary-foreground grid place-items-center mb-4 shadow-glow">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold">{w.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
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
                  Success-fee model
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  Calculate Your Success Fees
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Pay only on what we actually recover for you. No upfront retainer, no audit fee.
                  Estimate your net recovery before you engage.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Calculate Fees <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-8">
        <div className="rounded-3xl bg-secondary/50 border border-border p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl font-bold">Not sure which one fits your case?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Share your denial letter or settlement advice — we'll classify it and tell you the recovery odds. Free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Submit Your Case <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
