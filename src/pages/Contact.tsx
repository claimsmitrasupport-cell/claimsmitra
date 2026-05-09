import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useT } from "@/i18n/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgjlqwl";

const Contact = () => {
  const t = useT();
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
          {t("cnt_chip")}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          {t("cnt_title")}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("cnt_sub")}
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
                <h2 className="font-display text-2xl font-bold">{t("cnt_thanks_t")}</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  {t("cnt_thanks_d")}
                </p>
                <Button variant="hero" className="mt-6" onClick={() => setSubmitted(false)}>
                  {t("cnt_another")}
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <input type="hidden" name="_subject" value="New ClaimsMitra claim review request" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t("cnt_name")}</label>
                    <input required name="name" type="text" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("cnt_name_ph")} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t("cnt_mobile")}</label>
                    <input required name="mobile" type="tel" pattern="[0-9]{10}" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("cnt_mobile_ph")} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("cnt_email")}</label>
                  <input required name="email" type="email" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("cnt_email_ph")} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t("cnt_type")}</label>
                <select required name="claim_type" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">{t("cnt_select")}</option>
                  <option value="General Insurance">{t("opt_general")}</option>
                  <option value="Health Insurance">{t("opt_health")}</option>
                  <option value="Motor Insurance">{t("opt_motor")}</option>
                  <option value="Travel Insurance">{t("opt_travel")}</option>
                </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">{t("cnt_insurer")}</label>
                    <input name="insurer" type="text" className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("cnt_insurer_ph")} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("cnt_msg")}</label>
                  <textarea required name="message" rows={4} className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={t("cnt_msg_ph")} />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? t("cnt_sending") : (<>{t("cnt_request")} <ArrowRight className="h-4 w-4" /></>)}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  {t("cnt_consent")}
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
              <h3 className="font-display font-bold text-lg">{t("cnt_wa_t")}</h3>
            </div>
            <p className="text-sm text-white/90">{t("cnt_wa_d")}</p>
            <p className="mt-3 font-semibold">+91 98792 70170</p>
          </a>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="font-display font-bold text-lg mb-4">{t("cnt_other")}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("cnt_call")}</p>
                  <p className="text-muted-foreground">{t("cnt_call_d")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("cnt_email_lbl")}</p>
                  <p className="text-muted-foreground">info@claimsmitra.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-soft grid place-items-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("cnt_offices")}</p>
                  <p className="text-muted-foreground">{t("cnt_offices_d")}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl gradient-mesh border border-border">
            <p className="text-sm font-semibold text-primary">{t("cnt_why")}</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t("cnt_why_1")}</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t("cnt_why_2")}</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t("cnt_why_3")}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
