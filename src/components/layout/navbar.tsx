"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs sm:text-sm py-2 fixed top-0 w-full z-[60]">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9★</span>
            <span className="text-white/70 hidden sm:inline">· 200+ Verified Google Reviews</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70 hidden md:inline">Mon–Sun 6:00 AM – 8:00 PM</span>
            <Link
              href="tel:+919535704871"
              className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 95357 04871
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "fixed top-[32px] w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-200/50"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-heading font-extrabold text-xl md:text-2xl text-primary tracking-tight leading-none">
              OM SHIVA<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
              Motor Driving School
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold text-foreground/70 hover:text-primary transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
              <Button variant="primary" size="sm">
                Book Your Class
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden xl:hidden bg-white border-t border-slate-100"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-100">
                  <Link href="tel:+919535704871">
                    <Button
                      variant="outline"
                      className="w-full gap-2 justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      Call +91 95357 04871
                    </Button>
                  </Link>
                  <Link href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes">
                    <Button
                      variant="primary"
                      className="w-full justify-center"
                    >
                      Book Your Driving Class
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
