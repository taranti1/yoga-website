"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, ctaLink } from "@/data/navigation";
import LotusIcon from "@/components/decorative/LotusIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const showSolid = isScrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <LotusIcon
              size={28}
              className={`transition-colors duration-500 ${
                showSolid ? "text-sage" : "text-warm-white"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-heading text-xl font-light tracking-wide transition-colors duration-500 ${
                  showSolid ? "text-deep-forest" : "text-warm-white"
                }`}
              >
                Cynthia Tarantino
              </span>
              <span
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  showSolid ? "text-clay" : "text-warm-white/70"
                }`}
              >
                Yoga & Reiki
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300 ${
                  showSolid
                    ? pathname === link.href
                      ? "text-sage"
                      : "text-deep-forest hover:text-sage"
                    : pathname === link.href
                      ? "text-warm-white"
                      : "text-warm-white/80 hover:text-warm-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaLink.href}
              className={`font-body text-xs font-semibold tracking-[0.08em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${
                showSolid
                  ? "bg-deep-forest text-warm-white hover:bg-sage"
                  : "bg-warm-white/20 text-warm-white border border-warm-white/40 hover:bg-warm-white/30"
              }`}
            >
              {ctaLink.label}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              showSolid ? "text-deep-forest" : "text-warm-white"
            }`}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-deep-forest flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-heading text-3xl transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-sage"
                        : "text-warm-white/80 hover:text-warm-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <Link
                  href={ctaLink.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-4 inline-block font-body text-sm font-semibold tracking-[0.08em] uppercase px-8 py-3 rounded-full bg-sage text-warm-white hover:bg-sage-light transition-colors duration-300"
                >
                  {ctaLink.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
