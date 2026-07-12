"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/velora/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Enquire & Enroll",
    desc: "Call or WhatsApp us. We explain your options, answer every question, and register you — usually the same day.",
    color: "from-blue-50 to-blue-100/50",
    border: "border-blue-100",
    numColor: "text-[#2563EB]",
  },
  {
    num: "02",
    title: "Learner's Licence",
    desc: "We give you study materials and guide you through the RTO's online LLR test — the gateway to your licence.",
    color: "from-indigo-50 to-indigo-100/50",
    border: "border-indigo-100",
    numColor: "text-indigo-600",
  },
  {
    num: "03",
    title: "Hands-On Training",
    desc: "Learn controls, clutch, traffic rules, parking, highway driving — all on real Bangalore roads in a dual-control car.",
    color: "from-violet-50 to-violet-100/50",
    border: "border-violet-100",
    numColor: "text-violet-600",
  },
  {
    num: "04",
    title: "RTO Road Test",
    desc: "We prepare you with mock tests and accompany you to the test ground. You'll walk in confident.",
    color: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-100",
    numColor: "text-emerald-600",
  },
  {
    num: "05",
    title: "Get Your Licence",
    desc: "You receive your permanent driving licence. You join hundreds of confident drivers we've trained over two decades.",
    color: "from-amber-50 to-amber-100/50",
    border: "border-amber-100",
    numColor: "text-amber-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 280, damping: 26 } },
};

export function TimelineSection() {
  return (
    <section
      id="journey"
      className="velora-py-journey bg-white"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <SectionHeading
          id="journey-heading"
          eyebrow="Your Journey"
          title={<>From Zero to Licence —<br />Here's How It Works</>}
          description="A structured, stress-free path from complete beginner to licensed driver. No guesswork, no confusion."
          align="center"
          className="mb-16 mx-auto"
        />

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div
            className="absolute top-[3.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="grid grid-cols-5 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {steps.map(({ num, title, desc, color, border, numColor }) => (
              <motion.div key={num} variants={item} className="flex flex-col items-center text-center">
                {/* Step circle */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} border ${border} flex items-center justify-center mb-5 shadow-sm`}
                >
                  <span className={`font-numbers font-black text-[15px] ${numColor}`}>{num}</span>
                </div>

                {/* Card */}
                <div className={`flex-1 bg-gradient-to-b ${color} border ${border} rounded-2xl p-5 w-full`}>
                  <h3 className="font-heading font-bold text-[#0F172A] text-[15px] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#E5E7EB] via-[#E5E7EB] to-transparent"
            aria-hidden="true"
          />
          <motion.ol
            className="space-y-6"
            role="list"
            variants={container as any}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map(({ num, title, desc, color, border, numColor }) => (
              <motion.li key={num} variants={item} className="relative pl-16">
                <div
                  className={`absolute left-0 top-0 z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${color} border ${border} flex items-center justify-center shadow-sm`}
                >
                  <span className={`font-numbers font-black text-[13px] ${numColor}`}>{num}</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#F3F4F6]">
                  <h3 className="font-heading font-bold text-[#0F172A] text-[16px] mb-1.5">{title}</h3>
                  <p className="text-[#6B7280] text-[14px] leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
