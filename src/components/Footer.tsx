import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/claims-mitra-logo.png";
import { useT } from "@/i18n/LanguageContext";

export const Footer = () => {
  const t = useT();
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ClaimsMitra logo" className="h-11 w-11 object-contain" />
            <span className="font-display font-bold text-lg">
              Claims<span className="gradient-text">Mitra</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            {t("ftr_desc")}
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">{t("ftr_company")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-smooth">{t("nav_home")}</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-smooth">{t("nav_services")}</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-smooth">{t("nav_blog")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">{t("nav_contact")}</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-smooth">{t("ftr_terms")}</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-smooth">{t("ftr_privacy")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">{t("ftr_reach")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 9879270170</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@claimsmitra.in</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> AFC Ventures office no. 13 Loyalka compound, opp. Chowpatty 
Mumbai</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ClaimsMitra Advisory Pvt. Ltd. {t("ftr_rights")}</p>
          <p>{t("ftr_disc")}</p>
        </div>
      </div>
    </footer>
  );
};
