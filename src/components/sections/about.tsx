"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";
import { AnimatedCounter } from "@/components/velora/AnimatedCounter";
import { VeloraButton } from "@/components/velora/VeloraButton";

const highlights = [
  "Patient, certified instructors who adapt to your learning pace",
  "Dual-control cars — instructor has full control in emergencies",
  "Complete RTO documentation, LLR test prep & license assistance",
  "Real Bangalore road conditions — peak traffic, highways, and parking",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="velora-py-about bg-[#F8FAFC]"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* ── Image Side ── */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Accent block behind image */}
            <div
              className="absolute -top-5 -left-5 w-32 h-32 rounded-2xl bg-blue-100 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-[#0F172A]/5 -z-10"
              aria-hidden="true"
            />

            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[5/4] bg-[#E2E8F0] shadow-xl shadow-slate-200/60">
              {/*
               * PHOTO PLACEHOLDER:
               * Replace src below with a real photo of the OM Shiva driving school
               * office, cars, or instructor. Recommended: instructor with car.
               * Current: Unsplash stock photo (male portrait).
               */}
              <Image
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=85"
                alt="Driving instructor at OM Shiva Motor Driving School demonstrating car controls to a student in Peenya, Bangalore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-[#0F172A] rounded-2xl p-5 shadow-2xl max-w-[190px]">
              <AnimatedCounter
                value={25}
                suffix="+"
                duration={2}
                className="text-white text-[2.5rem]"
              />
              <div className="text-[13px] font-semibold text-white mt-1">Years of Experience</div>
              <div className="text-[11px] text-white/50 mt-0.5">Prakash, Head Instructor</div>
            </div>
          </motion.div>

          {/* ── Text Side ── */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              id="about-heading"
              eyebrow="About Us"
              title={<>North Bangalore's Most<br />Trusted Driving School</>}
              className="mb-5"
            />
            <p className="section-body mb-5">
              OM Shiva Motor Driving School has been training safe, confident
              drivers in Peenya and Jalahalli for over two decades. Founded by
              <strong className="text-[#0F172A] font-semibold"> Prakash</strong>,
              our head instructor with 25+ years of experience, we've helped
              hundreds of students earn their licenses and drive independently.
            </p>
            <p className="text-[#6B7280] text-[1rem] leading-relaxed mb-8">
              We don't rush you. We don't cut corners. We teach you the way
              driving should be taught — safely, systematically, and with patience.
            </p>

            <ul className="space-y-3 mb-8" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#374151] text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <VeloraButton
              href="/about"
              variant="ghost"
              size="md"
              icon
              className="px-0 hover:bg-transparent text-[#2563EB] hover:text-[#1d4ed8]"
              aria-label="Learn more about OM Shiva Motor Driving School"
            >
              More about us
            </VeloraButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
