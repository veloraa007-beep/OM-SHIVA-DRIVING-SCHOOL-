"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export function SignsFAQ() {
  const faqs = [
    {
      question: "How many questions are asked in the RTO Learner's Licence test?",
      answer: "In Karnataka, the computer-based test for a Learner's Licence (LLR) typically consists of 15 multiple-choice questions. You need to answer at least 10 correctly to pass the test."
    },
    {
      question: "What happens if I ignore a mandatory traffic sign?",
      answer: "Mandatory signs are required by law. Ignoring them is a traffic violation and can result in fines (challas) from the traffic police, or worse, cause a serious accident."
    },
    {
      question: "Are traffic signs different across different states in India?",
      answer: "No, traffic signs are standardized across India under the Motor Vehicles Act. A 'Stop' sign in Bengaluru looks exactly the same as one in Mumbai or Delhi."
    },
    {
      question: "Can I take the driving test in Kannada?",
      answer: "Yes, the RTO computer test in Karnataka can be taken in Kannada, English, or Hindi. You can choose your preferred language before starting the test."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <HelpCircle className="w-32 h-32 text-primary" />
      </div>
      
      <h2 className="text-3xl font-heading font-bold text-primary mb-8 relative z-10">Frequently Asked Questions</h2>
      
      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-accent bg-blue-50/30' : 'border-slate-100 hover:border-slate-300'}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
