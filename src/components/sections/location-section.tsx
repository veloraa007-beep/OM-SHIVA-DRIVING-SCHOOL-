"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";
import { SectionHeading } from "@/components/velora/SectionHeading";

const nearbyAreas = [
  "Peenya", "Jalahalli", "Chokkasandra", "Dasarahalli", "Nagasandra", "Yeshwanthpur"
];

export function LocationSection() {
  return (
    <section
      id="location"
      className="velora-py-fleet bg-white"
      aria-labelledby="location-heading"
    >
      <div className="container">
        <SectionHeading
          id="location-heading"
          eyebrow="Find Us"
          title={<>We're Right Here<br />in North Bangalore</>}
          description="Conveniently located at Jalahalli Cross, near Shiva Temple — easily accessible from Peenya, Jalahalli, Dasarahalli, and surrounding areas."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">

          {/* ── Map ── */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-[#E5E7EB]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: "440px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.119098758836!2d77.5190!3d13.0394117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4c10d0adcf%3A0x2efdb5e6a37d2c95!2sOM%20SHIVA%20MOTOR%20DRIVING%20SCHOOL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OM Shiva Motor Driving School location on Google Maps — Jalahalli Cross, Peenya, Bangalore"
            />
          </motion.div>

          {/* ── Info ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Address card */}
            <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
              <div className="flex gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Address</div>
                  <p className="text-white/85 text-[14px] leading-relaxed">
                    Jalahalli Cross Road, Near Shiva Temple,<br />
                    Nethaji Nagar, Chokkasandra, Peenya,<br />
                    <strong className="text-white font-semibold">Bengaluru – 560057</strong>
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/XbrbyazA2uuoGAry9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-[13px] font-bold hover:bg-[#1d4ed8] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                Get Directions
              </a>
            </div>

            {/* Contact + hours */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#F3F4F6]">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1">Phone</div>
                <a
                  href="tel:+919902295515"
                  className="text-[#0F172A] text-[14px] font-bold hover:text-[#2563EB] transition-colors"
                >
                  +91 99022 95515
                </a>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#F3F4F6]">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1">Hours</div>
                <div className="text-[#0F172A] text-[14px] font-bold leading-snug">
                  Mon – Sun<br />
                  <span className="text-[#2563EB]">6 AM – 8 PM</span>
                </div>
              </div>
            </div>

            {/* Nearby areas */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#F3F4F6]">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                  Areas We Serve
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-[#374151] text-[12px] font-semibold"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
