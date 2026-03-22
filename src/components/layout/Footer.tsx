import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import LotusIcon from "@/components/decorative/LotusIcon";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Yoga Classes", href: "/services" },
  { label: "Private Sessions", href: "/services" },
  { label: "Reiki Healing", href: "/services" },
  { label: "Workshops", href: "/services" },
  { label: "Retreats", href: "/services" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/cynthia.a.tarantino/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-warm-white" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LotusIcon size={24} className="text-sage" />
              <span className="font-heading text-xl font-light">
                Cynthia Tarantino
              </span>
            </Link>
            <p className="font-body text-sm text-warm-white/60 leading-relaxed mb-6">
              Guiding you home to yourself through the practices of yoga and reiki healing.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-warm-white/50 hover:text-sage transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-clay mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-clay mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-clay mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ctarantino991@comcast.net"
                  className="flex items-center gap-3 font-body text-sm text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                >
                  <Mail size={16} className="text-sage flex-shrink-0" />
                  ctarantino991@comcast.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+19085787345"
                  className="flex items-center gap-3 font-body text-sm text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                >
                  <Phone size={16} className="text-sage flex-shrink-0" />
                  (908) 578-7345
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-warm-white/60">
                <MapPin size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span>
                  Serving Long Beach Island, Cranford, Milburn &amp; Summit, NJ
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-white/40">
            &copy; {new Date().getFullYear()} Cynthia Tarantino. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-body text-xs text-warm-white/40">
            <span>Website by Cynthia Tarantino</span>
            <LotusIcon size={16} className="text-sage/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
