import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Business Funding", path: "/services" },
    { name: "Financial Advisory", path: "/services" },
    { name: "SME Consulting", path: "/services" },
    { name: "Investment Planning", path: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(220,50%,15%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative container-custom">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-cyan flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-tight text-white">FINCARE</span>
                  <span className="text-[11px] font-medium tracking-widest text-white/60">SOLUTIONS FZE LLC</span>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Your trusted partner for smart financial solutions. We help ambitious businesses in the UAE and GCC achieve their growth potential.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white flex items-center gap-1 group transition-colors duration-300"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white flex items-center gap-1 group transition-colors duration-300"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                    <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                    <span className="text-sm">Ajman Free Zone, United Arab Emirates</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@fincaresolutions.ae" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">info@fincaresolutions.ae</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+971000000000" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">+971 XX XXX XXXX</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-white/50">
              <span>© {new Date().getFullYear()} FINCARE SOLUTIONS FZE LLC. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>UAE Registered Company (Ajman)</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-white/40 text-center leading-relaxed max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> FINCARE SOLUTIONS FZE LLC does not guarantee financial returns. All financial services are subject to eligibility criteria and regulatory compliance. Past performance is not indicative of future results. Please consult with qualified financial advisors before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
