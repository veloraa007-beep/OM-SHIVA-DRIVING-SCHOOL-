"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/velora/SectionHeading";
import { VeloraButton } from "@/components/velora/VeloraButton";

const faqs = [
  {
    q: "Do I need any prior experience to join?",
    a: "Not at all. We accept complete beginners. Our instructors start from the very basics — how to sit, adjust mirrors, use the clutch — and work up from there at your own pace.",
  },
  {
    q: "How many classes will I need before I'm test-ready?",
    a: "Most students are ready for the RTO road test in 15–25 sessions, depending on how quickly they pick up skills. We won't put you forward for the test until you're genuinely confident.",
  },
  {
    q: "Do you help with the LLR (Learner's Licence) test?",
    a: "Yes. We provide study materials and guide you through the RTO's online LLR test. Once you pass, we schedule your practical driving classes.",
  },
  {
    q: "What are your timing options?",
    a: "We operate every day from 6:00 AM to 8:00 PM. Slots are typically 1 hour per session. We'll find a time that works around your job, college, or other commitments.",
  },
  {
    q: "What cars will I be trained in?",
    a: "You'll train in our Maruti Suzuki Swift (2013–2015) for beginner sessions, and can progress to our 2025 Brezza SUV once you're comfortable. All cars have dual-control systems.",
  },
  {
    q: "Where is OM Shiva Motor Driving School located?",
    a: "We're at Jalahalli Cross Road, Near Shiva Temple, Nethaji Nagar, Chokkasandra, Peenya, Bengaluru – 560057. Easily accessible from Peenya, Jalahalli, Dasarahalli, Nagasandra, and Yeshwanthpur.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-py bg-[#F8FAFC]"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left — static */}
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title={<>Questions?<br />We've got<br />answers.</>}
              description="Don't see your question here? Call or WhatsApp us and we'll get back to you right away."
              className="mb-6"
            />
            <VeloraButton
              href="https://wa.me/919902295515?text=Hi%2C%20I%20have%20a%20question%20about%20your%20driving%20school"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
            >
              Ask on WhatsApp
            </VeloraButton>
          </div>

          {/* Right — accordion */}
          <div
            className="space-y-3"
            role="list"
            aria-label="Frequently asked questions"
          >
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-200",
                  open === i
                    ? "border-[#BFDBFE] shadow-sm shadow-blue-100/50"
                    : "border-[#E5E7EB] hover:border-[#D1D5DB]"
                )}
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-heading font-semibold text-[#0F172A] text-[15px] leading-snug">
                    {q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-[#9CA3AF] flex-shrink-0 transition-transform duration-200",
                      open === i && "rotate-180 text-[#2563EB]"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    open === i ? "max-h-60" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-5 text-[#6B7280] text-[14px] leading-relaxed">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
