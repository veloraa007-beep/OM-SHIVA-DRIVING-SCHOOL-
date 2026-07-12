"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";

const vehicles = [
  {
    name: "Maruti Suzuki Swift",
    year: "2013 – 2015",
    type: "Manual Petrol Hatchback",
    badge: "Beginner Friendly",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    description:
      "The ideal car to start your journey. Compact, light steering, and excellent road feedback — perfect for learning clutch control and navigating tight Bangalore lanes with confidence.",
    features: ["Manual Transmission", "Dual-Control Brakes", "Easy Handling", "City & Highway Ready"],
    image: "/swift_real.jpg",
    alt: "Real Maruti Suzuki Swift (2013–2015) training car at OM Shiva Motor Driving School, Peenya — dual-control beginner vehicle",
    imageSide: "right" as const,
  },
  {
    name: "Maruti Suzuki Brezza",
    year: "2025 Model",
    type: "SUV — Manual & Automatic",
    badge: "Latest 2025 Model",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
    description:
      "Our premium training vehicle. The 2025 Brezza gives you real SUV confidence — higher seating, modern safety features, and ideal preparation for students who plan to drive an SUV.",
    features: ["Advanced Controls", "Dual-Control System", "SUV Dynamics", "Modern Safety Tech"],
    image: "/brezza_red.jpg",
    alt: "2025 Maruti Suzuki Brezza (red) SUV at OM Shiva Motor Driving School — brand-new training vehicle for advanced driving practice in Bangalore",
    imageSide: "left" as const,
  },
];

export function FleetSection() {
  return (
    <section
      id="fleet"
      className="velora-py-fleet bg-[#F8FAFC]"
      aria-labelledby="fleet-heading"
    >
      <div className="container">
        <SectionHeading
          id="fleet-heading"
          eyebrow="Our Training Fleet"
          title={<>Modern Cars.<br />Maximum Safety.</>}
          description="Every vehicle is fitted with professional dual-control systems so our instructor can intervene instantly — giving you the freedom to learn without fear."
          className="mb-16"
        />

        <div className="space-y-16">
          {vehicles.map(({ name, year, type, badge, badgeBg, description, features, image, alt, imageSide }) => (
            <motion.article
              key={name}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              aria-label={`${name} training car`}
            >
              {/* Image */}
              <div className={`relative ${imageSide === "left" ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#E2E8F0] shadow-xl shadow-slate-200/50">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-contain p-6 transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[12px] font-bold border ${badgeBg}`}>
                    {badge}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
                <div className="mb-2">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#9CA3AF]">
                    {type} · {year}
                  </span>
                </div>
                <h3
                  className="font-heading font-black text-[#0F172A] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  {name}
                </h3>
                <p className="text-[#64748B] text-[1rem] leading-relaxed mb-7">
                  {description}
                </p>
                <ul className="grid grid-cols-2 gap-3" role="list">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#2563EB]" aria-hidden="true" />
                      </span>
                      <span className="text-[#475569] text-[13px] font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
