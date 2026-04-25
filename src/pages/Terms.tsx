import { Link } from "react-router-dom";
import { FileText, ClipboardList, UserCheck, CreditCard, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: ClipboardList,
    title: "Services",
    body: "ClaimsMitra provides claim assistance services including audit, drafting of representations, grievance escalation and ombudsman representation. We are an independent advisory firm and not an insurer or IRDAI-registered intermediary. All outcomes depend on policy wording, documentary evidence and applicable regulation.",
  },
  {
    icon: UserCheck,
    title: "User Responsibilities",
    body: "You agree to share accurate information, original policy documents, denial letters and medical or accident records relevant to your case. Any misrepresentation, suppression of material facts or fabricated documentation will result in immediate withdrawal of our engagement and forfeiture of any fees paid.",
  },
  {
    icon: CreditCard,
    title: "Payments & Success Fees",
    body: "Initial claim audits are free. If you choose to engage us, our success fee is charged only on amounts actually recovered into your account, as agreed in writing in our engagement letter. Out-of-pocket costs (such as ombudsman filing fees, courier or notarisation) are billed separately at actuals.",
  },
  {
    icon: Scale,
    title: "Legal & Limitation",
    body: "Our role is advisory and representational. We do not guarantee a specific recovery amount or timeline, as final decisions rest with the insurer, ombudsman or court. Our maximum liability in any matter is limited to the fees actually received from you for that matter. Disputes are subject to the exclusive jurisdiction of courts in Mumbai.",
  },
  {
    icon: Phone,
    title: "Contact",
    body: "Questions about these terms? Reach us at info@claimsmitra.in or +91 9879270170.",
    highlight: true,
  },
];

const Terms = () => {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="relative container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-16 text-center">
          <div className="inline-flex h-14 w-14 rounded-2xl gradient-hero items-center justify-center shadow-glow mb-5">
            <FileText className="h-7 w-7 text-primary-foreground" strokeWidth={2.2} />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear and transparent guidelines for working with ClaimsMitra.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">Last updated: 24 April 2026</p>
        </div>
      </section>

      {/* CARD */}
      <section className="container-px mx-auto max-w-4xl pb-20 -mt-6">
        <div className="bg-card border border-border rounded-3xl shadow-card p-6 sm:p-10 space-y-8">
          {sections.map((s) => (
            <div
              key={s.title}
              className={
                s.highlight
                  ? "rounded-2xl bg-primary-soft border border-primary/15 p-6"
                  : "border-b border-border last:border-0 pb-8 last:pb-0"
              }
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-bold">{s.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{s.body}</p>
              {s.highlight && (
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://wa.me/919879270170" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Terms;
