"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/velora/SectionHeading";

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
      className="section-py bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="faq-heading"
              eyebrow="FAQ"
              title={<>Questions?<br />We've got<br />answers.</>}
              description="Don't see your question here? Call or WhatsApp us — we respond quickly."
              className="mb-7"
            />
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%20have%20a%20question%20about%20your%20driving%20school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#E5E7EB] text-[#0F172A] text-[14px] font-semibold hover:border-[#0F172A] hover:bg-[#F8FAFC] transition-all"
            >
              Ask on WhatsApp
            </a>
          </div>

          {/* Right — accordion */}
          <div
            className="space-y-2"
            role="list"
            aria-label="Frequently asked questions"
          >
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className={cn(
                  "bg-[#F8FAFC] rounded-2xl border transition-all duration-200",
                  open === i
                    ? "border-[#2563EB]/30 bg-white shadow-sm shadow-blue-50"
                    : "border-transparent hover:border-[#E5E7EB] hover:bg-white"
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
                  <span
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
                      open === i
                        ? "bg-[#2563EB] text-white rotate-180"
                        : "bg-[#F1F5F9] text-[#9CA3AF]"
                    )}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                  style={{
                    maxHeight: open === i ? "300px" : "0px",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-6 text-[#6B7280] text-[14px] leading-relaxed">
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
