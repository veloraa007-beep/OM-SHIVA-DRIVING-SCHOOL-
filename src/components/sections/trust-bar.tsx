"use client";

import { motion } from "framer-motion";
import { Shield, Award, Car, Clock, MapPin, Star } from "lucide-react";

const bigStats = [
  { value: "4.9★", label: "Average Google Rating", sub: "from 200+ verified reviews" },
  { value: "500+", label: "Drivers Trained", sub: "since 2004" },
  { value: "20+",  label: "Years of Experience", sub: "Prakash, Head Instructor" },
];

const trustSignals = [
  { icon: Shield, text: "Dual-Control Cars",    sub: "Instructor can brake at any time" },
  { icon: Clock,  text: "6 AM – 8 PM",          sub: "Open 7 days a week" },
  { icon: Car,    text: "2025 Brezza + Swift",   sub: "Modern, well-maintained fleet" },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 28 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export function TrustBar() {
  return (
    <section
      className="bg-white border-y border-[#E5E7EB]"
      aria-label="Key trust indicators"
    >
      <div className="container">
        {/* ── Big Stats Row ── */}
        <motion.div
          className="grid grid-cols-3 divide-x divide-[#F3F4F6] py-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {bigStats.map(({ value, label, sub }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col items-center text-center px-6 first:pl-0 last:pr-0"
            >
              <span
                className="font-numbers font-black text-[#0F172A] leading-none mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                {value}
              </span>
              <span className="font-heading font-bold text-[#0F172A] text-[13px] leading-snug">
                {label}
              </span>
              <span className="text-[11px] text-[#9CA3AF] mt-0.5 font-medium">{sub}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px bg-[#F3F4F6]" aria-hidden="true" />

        {/* ── Trust Signals Row ── */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {trustSignals.map(({ icon: Icon, text, sub }) => (
            <motion.div
              key={text}
              variants={item}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#0F172A] leading-snug">{text}</div>
                <div className="text-[11px] text-[#9CA3AF] mt-0.5">{sub}</div>
              </div>
            </motion.div>
          ))}

          {/* Google badge */}
          <motion.a
            variants={item}
            href="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-[#F1F5F9] transition-all flex-shrink-0"
            aria-label="See Google reviews for OM Shiva Driving School"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#0F172A] text-[13px]">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-[#9CA3AF]">200+ Google Reviews</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
