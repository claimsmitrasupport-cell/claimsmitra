import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgjlqwl";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        toast.success("Request received — an expert will call you within 2 hours.");
      } else {
        const data = await res.json().catch(() => null);
        const msg = data?.errors?.[0]?.message || "Something went wrong. Please try again or WhatsApp us.";
        toast.error(msg);
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold mb-5">
          Contact
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Talk to a claim expert today.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Share your case in 2 minutes. An IRDAI-aligned advisor will review it and call you back — usually within 2 hours.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24 grid lg:grid-cols-5 gap-10">
        {/* FORM */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-card">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent-soft grid place-items-center mb-5">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold">Thank you — we've got it.</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  An advisor will call you within 2 working hours. Meanwhile, you can WhatsApp us for a faster reply.
                </p>
                <Button variant="hero" className="mt-6" onClick={() => setSubmitted(false)}>
                  Submit another claim
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <input type="hidden" name="_subject" value="New ClaimsMitra claim review request" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full name</label>
                    <input required name="name" type="text" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="As on policy" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Mobile</label>
                    <input required name="mobile" type="tel" pattern="[0-9]{10}" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="10-digit number" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input required name="email" type="email" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Type of claim</label>
                <select required name="claim_type" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select…</option>
                  <option>General Insurance</option>
                  <option>Health Insurance</option>
                  <option>Motor Insurance</option>
                  <option>Travel Insurance</option>
                </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Insurer</label>
                    <input name="insurer" type="text" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. Star Health" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tell us about the claim</label>
                  <textarea required name="message" rows={4} className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="What was the reason for rejection / delay / short-settlement?" />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending…" : (<>Request Free Claim Review <ArrowRight className="h-4 w-4" /></>)}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by ClaimsMitra advisors. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* INFO */}
        <div className="lg:col-span-2 space-y-5">
          <a
            href="https://wa.me/9198792 70170"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl bg-[hsl(142_70%_45%)] text-white shadow-elegant hover-lift"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="h-6 w-6" />
              <h3 className="font-display font-bold text-lg">WhatsApp us instantly</h3>
            </div>
            <p className="text-sm text-white/90">Fastest way to reach an advisor — typical reply in under 5 minutes.</p>
            <p className="mt-3 font-semibold">+91 98792 70170</p>
          </a>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="font-display font-bold text-lg mb-4">Other ways to reach us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call us</p>
                  <p className="text-muted-foreground">+91 98792 70170 · Mon–Sat, 9am–8pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@claimsmitra.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Offices</p>
                  <p className="text-muted-foreground">Bengaluru · Mumbai · Delhi NCR</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl gradient-mesh border border-border">
            <p className="text-sm font-semibold text-primary">Why ClaimsMitra?</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> No win, no fee — risk-free engagement</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Senior insurance professionals on every file</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Transparent updates at every step</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
