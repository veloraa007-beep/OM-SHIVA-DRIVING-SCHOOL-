"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Star, Shield, Users } from "lucide-react";

const stats = [
  { value: "4.9★", label: "Google Rating",   icon: Star },
  { value: "200+", label: "Happy Students",   icon: Users },
  { value: "20+",  label: "Years Training",   icon: Shield },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY  = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* ── Background Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F3F4F6 1px, transparent 1px),
            linear-gradient(to bottom, #F3F4F6 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-blue-50/60 pointer-events-none" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="container relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 pt-[120px] pb-20 lg:pt-[140px]">

        {/* Left — Text */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Location Pill */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#2563EB]">
              Peenya · Jalahalli · North Bangalore
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-extrabold text-[#0F172A] leading-[1.08] tracking-[-0.04em] mb-6">
            <span
              className="block"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              Drive with
            </span>
            <span
              className="block text-[#2563EB]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              Confidence.
            </span>
            <span
              className="block text-[#0F172A]/60 font-semibold mt-1"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
            >
              Learn at Bangalore's Most
              <br className="hidden sm:block" /> Trusted Driving School.
            </span>
          </h1>

          {/* Body */}
          <p className="text-[#6B7280] text-[1.05rem] leading-relaxed max-w-xl mb-8">
            Patient instructors, modern dual-control cars, and complete RTO
            assistance — everything you need to go from learner to licensed, with
            zero stress.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] active:scale-[0.98] transition-all shadow-lg shadow-blue-200"
            >
              Book a Free Demo Class
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#E5E7EB] text-[#374151] text-[15px] font-semibold hover:bg-[#F9FAFB] hover:border-[#D1D5DB] active:scale-[0.98] transition-all bg-white"
            >
              View Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#F3F4F6]">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-numbers font-bold text-[#0F172A] text-[15px] leading-none">
                    {value}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] font-medium mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="flex-1 w-full lg:max-w-[560px] relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imageY }}
        >
          {/* Main Image Frame */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-2xl shadow-slate-200/60 border border-white ring-1 ring-[#E5E7EB]">
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=90"
              alt="Driving instructor teaching a student in a modern car on the streets of Bangalore"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              unoptimized
            />
            {/* Overlay gradient for card legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" aria-hidden="true" />

            {/* Floating Review Card */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg border border-white/60"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-lg font-heading font-bold text-[#2563EB]">
                F
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[12px] text-[#374151] font-medium leading-snug truncate">
                  "Got my license with confidence. Highly recommended!"
                </p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">Faheem Bagalkot · Google Review</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative blob */}
          <div
            className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-blue-100/60 blur-3xl -z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-50/80 blur-3xl -z-10 pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        style={{ opacity }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent rounded-full"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
