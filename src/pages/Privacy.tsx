import { Link } from "react-router-dom";
import { Shield, Inbox, Settings, Lock, Share2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Inbox,
    title: "Data Collection",
    body: "We collect only the information you voluntarily share — your name, contact details, policy documents, denial letters, hospital bills and claim correspondence. We do not buy data from third parties or scrape personal information.",
  },
  {
    icon: Settings,
    title: "Usage",
    body: "Your data is used solely to audit your claim, draft representations on your behalf, communicate with insurers or the Insurance Ombudsman, and keep you updated on case progress. We never use your information for unrelated marketing.",
  },
  {
    icon: Lock,
    title: "Security",
    body: "Files are stored on access-controlled cloud infrastructure with encryption in transit and at rest. Access is limited to the case handler assigned to you and the partner reviewing your file. Physical documents, where shared, are shredded after digitisation.",
  },
  {
    icon: Share2,
    title: "Sharing",
    body: "We share your information only with: (a) the insurer or its grievance officer, (b) the Insurance Ombudsman or regulatory authority where required, and (c) legal counsel if your matter escalates to litigation — and only with your written consent. We never sell your data.",
  },
  {
    icon: Phone,
    title: "Contact",
    body: "To request access, correction or deletion of your data, write to info@claimsmitra.in or call +91 9879270170.",
    highlight: true,
  },
];

const Privacy = () => {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div className="relative container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-16 text-center">
          <div className="inline-flex h-14 w-14 rounded-2xl gradient-hero items-center justify-center shadow-glow mb-5">
            <Shield className="h-7 w-7 text-primary-foreground" strokeWidth={2.2} />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data is safe and protected. Here's exactly how we handle it.
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

export default Privacy;
