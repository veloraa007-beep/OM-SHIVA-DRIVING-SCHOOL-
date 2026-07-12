"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/velora/SectionHeading";
import { AnimatedCounter } from "@/components/velora/AnimatedCounter";

const bigNumbers = [
  { value: 500, suffix: "+", label: "Drivers Trained", sub: "since 2004 in North Bangalore" },
  { value: 4.9, label: "Google Rating",   sub: "from 200+ verified reviews",  isDecimal: true, suffix: "★" },
  { value: 20,  suffix: "+", label: "Years Teaching", sub: "by our head instructor Prakash" },
  { value: 100, suffix: "%", label: "Student Focus",  sub: "no shortcuts, ever" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 26 } },
};

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="velora-py-about bg-[#0F172A] overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Stats panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {bigNumbers.map(({ value, suffix, label, sub, isDecimal }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="font-numbers font-black text-white leading-none mb-2"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    {isDecimal ? (
                      `${value}${suffix}`
                    ) : (
                      <AnimatedCounter
                        value={value as number}
                        suffix={suffix}
                        duration={2}
                        className="text-white"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                      />
                    )}
                  </div>
                  <div className="font-heading font-bold text-white text-[15px] mb-1">{label}</div>
                  <div className="text-[12px] text-white/40 leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-blue-500" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400">
                Why Choose Us
              </span>
            </div>

            <h2
              id="why-us-heading"
              className="font-heading font-black text-white leading-[1.07] tracking-[-0.035em] mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Not just another
              <br />driving school.
            </h2>

            <p className="text-white/55 text-[1.05rem] leading-relaxed mb-8">
              There are dozens of driving schools in Bangalore. What makes students
              consistently choose us — and recommend us to their families — is the
              way we teach. Patiently. Systematically. Without cutting corners.
            </p>

            <div className="space-y-4">
              {[
                { title: "Safety first, always",         desc: "Dual-control brakes on every car. Our instructors are trained to handle any situation calmly." },
                { title: "Flexible around your life",    desc: "Early mornings, evenings, weekends — 6 AM to 8 PM, 7 days a week." },
                { title: "End-to-end licence support",   desc: "From LLR prep to RTO road test — we handle every step so you don't have to." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-2xl bg-white/4 border border-white/8">
                  <div className="w-1.5 rounded-full bg-[#2563EB] flex-shrink-0 self-stretch" aria-hidden="true" />
                  <div>
                    <div className="font-heading font-bold text-white text-[14px] mb-1">{title}</div>
                    <div className="text-[13px] text-white/50 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
