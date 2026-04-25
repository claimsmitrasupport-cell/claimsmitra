import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/claims-mitra-logo.png";

export const Footer = () => {
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
            We help Indian families recover what insurers owe them — by appealing rejected claims,
            chasing delays and disputing short-settlements with documented, IRDAI-aligned process.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-smooth">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-smooth">Services</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-smooth">Knowledge Hub</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-smooth">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Reach Us</h4>
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
          <p>© {new Date().getFullYear()} ClaimsMitra Advisory Pvt. Ltd. All rights reserved.</p>
          <p>ClaimsMitra is an independent claim assistance firm and is not an insurer or IRDAI-registered intermediary.</p>
        </div>
      </div>
    </footer>
  );
};
