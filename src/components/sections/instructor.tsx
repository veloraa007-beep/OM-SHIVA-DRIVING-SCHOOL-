"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";

const credentials = [
  { value: "25+", label: "Years Training" },
  { value: "500+", label: "Drivers Trained" },
  { value: "4.9★", label: "Google Rating" },
];

const highlights = [
  "Certified RTO-recognised driving instructor",
  "Fluent in Kannada, Hindi & English",
  "Specialises in first-time & nervous learners",
  "Patient — never shouts, never rushes",
];

export function InstructorSection() {
  return (
    <section
      id="instructor"
      className="velora-py-about bg-[#0F172A] overflow-hidden"
      aria-labelledby="instructor-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-blue-500" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400">
                Head Instructor
              </span>
            </div>

            {/* Heading */}
            <h2
              id="instructor-heading"
              className="font-heading font-black text-white leading-[1.07] tracking-[-0.035em] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Meet Prakash.
              <br />
              <span className="text-white/40 font-semibold" style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}>
                25 years. Hundreds of drivers.
                <br />One philosophy: patience.
              </span>
            </h2>

            {/* Pull quote */}
            <div className="relative pl-6 mb-8 border-l-2 border-blue-500">
              <Quote className="w-6 h-6 text-blue-500/40 absolute -left-3 -top-1" aria-hidden="true" />
              <p className="text-white/65 text-[1.05rem] leading-relaxed italic">
                "I started this school because I saw how badly driving was being taught.
                No patience. No method. I decided to do it differently — one student
                at a time."
              </p>
              <p className="text-[12px] text-white/35 font-semibold mt-3 tracking-wide uppercase">
                — Prakash, Founder
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/65 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/919902295515?text=Hi%20Prakash%20sir%2C%20I%27d%20like%20to%20enquire%20about%20a%20driving%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-bold hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-900/40"
            >
              Message Prakash Sir
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          {/* ── RIGHT: Image + Credentials ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#1E293B]">
              {/*
               * PHOTO PLACEHOLDER — replace with real photo of Prakash (head instructor).
               * Recommended: portrait shot, him near a car or in office.
               * Current: Unsplash stock photo.
               */}
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
                alt="Prakash, head driving instructor at OM Shiva Motor Driving School, Peenya Bangalore — 25+ years experience"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" aria-hidden="true" />

              {/* Credentials strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {credentials.map(({ value, label }) => (
                    <div key={label} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10">
                      <div className="font-numbers font-black text-white text-[1.4rem] leading-none">{value}</div>
                      <div className="text-[10px] text-white/60 font-medium mt-1 leading-snug">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-5 -right-5 w-32 h-32 rounded-3xl bg-blue-600/15 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
