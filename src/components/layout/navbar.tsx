"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",          href: "/" },
  { label: "About",         href: "/about" },
  { label: "Courses",       href: "/courses" },
  { label: "Traffic Signs", href: "/traffic-signs" },
  { label: "Contact",       href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const pathname                      = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] text-white"
        style={{ height: "36px" }}
      >
        <div className="container h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="font-semibold text-white">4.9</span>
              <span className="hidden sm:inline">from 200+ Google reviews</span>
            </span>
            <span className="hidden md:inline text-white/40">·</span>
            <span className="hidden md:inline">Mon – Sun &nbsp;6 AM – 8 PM</span>
          </div>
          <a
            href="tel:+919902295515"
            className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors"
            aria-label="Call us at +91 99022 95515"
          >
            <Phone className="w-3 h-3" aria-hidden="true" />
            +91 99022 95515
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300 ease-out",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_12px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5",
        )}
        style={{ top: "36px" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="OM Shiva Driving School – Home">
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-heading font-black text-[22px] tracking-tight transition-colors duration-300",
                  scrolled ? "text-[#0F172A]" : "text-[#0F172A]"
                )}
              >
                OM SHIVA<span className="text-[#3B82F6]">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#6B7280] mt-0.5">
                MOTOR DRIVING SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Desktop navigation">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200",
                    active
                      ? "text-[#2563EB] bg-blue-50"
                      : "text-[#374151] hover:text-[#0F172A] hover:bg-[#F9FAFB]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#2563EB] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919902295515"
              className="flex items-center gap-2 text-[13px] font-semibold text-[#374151] hover:text-[#0F172A] transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20driving%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1d4ed8] active:bg-[#1e40af] transition-colors shadow-sm shadow-blue-200"
            >
              Book a Class
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#F3F4F6] text-[#374151] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-[#0F172A]/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[300px] bg-white shadow-2xl flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-[#F3F4F6]">
                <div className="flex flex-col leading-none">
                  <span className="font-heading font-extrabold text-[17px] tracking-tight text-[#0F172A]">
                    OM SHIVA<span className="text-[#2563EB]">.</span>
                  </span>
                  <span className="text-[9px] font-medium tracking-[0.18em] uppercase text-[#9CA3AF] mt-0.5">
                    Motor Driving School
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F3F4F6] text-[#6B7280]"
                  aria-label="Close menu"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map(({ label, href }, i) => {
                  const active = pathname === href;
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
                          active
                            ? "bg-blue-50 text-[#2563EB] font-semibold"
                            : "text-[#374151] hover:bg-[#F9FAFB]"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {label}
                        <ChevronRight className="w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-[#F3F4F6] space-y-3">
                <a
                  href="tel:+919902295515"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#374151] text-[14px] font-semibold hover:bg-[#F9FAFB] transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +91 99022 95515
                </a>
                <a
                  href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20driving%20classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Book a Driving Class
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
