"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Star, Phone } from "lucide-react";
import { AnimatedCounter } from "@/components/velora/AnimatedCounter";

const stats = [
  { value: 4.9, label: "Google Rating", suffix: "★", isDecimal: true },
  { value: 200, label: "Happy Students", suffix: "+", isDecimal: false },
  { value: 20,  label: "Years Training", suffix: "+", isDecimal: false },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY  = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      aria-label="Hero — OM Shiva Motor Driving School"
    >
      {/* ── Full-bleed background photo with parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/hero_lesson.png"
          alt="Young female student confidently learning to drive with a patient instructor at OM Shiva Motor Driving School, Peenya Bangalore"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized
        />
      </motion.div>

      {/* ── Gradient overlays ── */}
      {/* Left-to-right dark gradient — covers text area */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.92) 38%, rgba(15,23,42,0.60) 62%, rgba(15,23,42,0.10) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 100%)",
        }}
      />
      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, transparent 100%)",
        }}
      />

      {/* ── Dot-grid texture (left half only) ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to right, black 0%, black 35%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 35%, transparent 65%)",
        }}
      />

      {/* ── Content ── */}
      <div className="container relative z-20 flex-1 flex items-center velora-py-hero">
        <div className="max-w-[580px]">

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-8"
          >
            <MapPin className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            <span className="text-[11px] font-bold text-white/70 tracking-widest uppercase">
              Peenya · Jalahalli · North Bangalore
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading font-black text-white leading-[1.04] tracking-[-0.045em] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Drive with
            <br />
            <span className="text-[#3B82F6]">Confidence.</span>
            <br />
            <span
              className="text-white/45 font-semibold"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.85rem)" }}
            >
              Bangalore's most trusted
              <br className="hidden sm:block" /> driving school.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            className="text-white/60 text-[1.05rem] leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Patient instructors, modern dual-control cars, and complete RTO
            assistance — everything you need to go from learner to licensed,
            with zero stress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-[#2563EB] text-white text-[15px] font-bold hover:bg-[#1d4ed8] active:bg-[#1e40af] transition-all shadow-xl shadow-blue-900/50"
            >
              Book a Free Demo Class
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+919902295515"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-[15px] font-semibold hover:bg-white/12 transition-all"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +91 99022 95515
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center gap-8 pt-8 border-t border-white/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
          >
            {stats.map(({ value, label, suffix, isDecimal }, i) => (
              <div key={label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="w-px h-8 bg-white/12 flex-shrink-0" aria-hidden="true" />
                )}
                <div>
                  <div className="font-numbers font-black text-white leading-none"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {isDecimal ? `${value}${suffix}` : (
                      <AnimatedCounter value={value} suffix={suffix} duration={1.8}
                        className="text-white" style={{ fontSize: "inherit" }}
                      />
                    )}
                  </div>
                  <div className="text-[11px] text-white/40 font-medium mt-0.5 tracking-wide">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Floating review card — bottom right of viewport ── */}
      <motion.div
        className="absolute bottom-8 right-6 z-30 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3.5 shadow-2xl border border-white/60 max-w-[280px]"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Featured student review"
      >
        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center font-heading font-black text-[#2563EB] text-sm flex-shrink-0">
          F
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
            <span className="text-[9px] text-[#9CA3AF] ml-1 font-medium uppercase tracking-wide">Google</span>
          </div>
          <p className="text-[12px] text-[#374151] font-semibold leading-snug line-clamp-2">
            "Got my license with confidence. Highly recommended!"
          </p>
          <p className="text-[10px] text-[#9CA3AF] mt-0.5">Faheem Bagalkot</p>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
        style={{ opacity }}
        aria-hidden="true"
      >
        <span className="text-[9px] font-semibold text-white/30 uppercase tracking-[0.22em]">Scroll</span>
        <motion.div
          className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent rounded-full"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
