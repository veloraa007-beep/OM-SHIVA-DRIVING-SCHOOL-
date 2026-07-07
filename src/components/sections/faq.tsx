"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const faqs = [
    {
      q: "How many days does the driving course take?",
      a: "Our standard beginner course spans over 15 to 21 days depending on your learning pace. Each session is 30-45 minutes of practical driving."
    },
    {
      q: "Do you help with getting the Driving License?",
      a: "Yes! We provide end-to-end assistance. We help you apply for the Learner's License (LLR), prep you for the road test, and assist with the permanent license documentation at the RTO."
    },
    {
      q: "Do you offer weekend or early morning classes?",
      a: "Absolutely. We understand working professionals have tight schedules. Our classes start as early as 6:00 AM and run till 8:00 PM, including weekend batches."
    },
    {
      q: "Is it safe for women to learn at your school?",
      a: "Safety and respect are our top priorities. We have highly professional instructors, and upon request, we can arrange specific time slots or female instructors based on availability."
    },
    {
      q: "What cars do you use for training?",
      a: "We train students on dual-control enabled hatchbacks (Maruti Swift) and compact SUVs (Brezza) to ensure you learn on vehicles relevant to modern city driving."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Everything you need to know about our driving courses and RTO processes.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === i ? "border-accent/30 bg-blue-50/30 shadow-sm" : "border-slate-200 hover:border-accent/30"
              )}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-heading font-bold text-lg text-primary">{faq.q}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 text-accent transition-transform duration-300 shrink-0 ml-4",
                  openIndex === i ? "rotate-180" : ""
                )} />
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
