"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
      role="region"
      aria-label="Quick contact buttons"
    >
      {/* Expandable label */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="flex flex-col items-end gap-2"
          >
            {/* Phone */}
            <a
              href="tel:+919902295515"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-lg transition-shadow"
              aria-label="Call us at +91 99022 95515"
            >
              <span className="text-[13px] font-semibold text-[#0F172A]">+91 99022 95515</span>
              <div className="w-8 h-8 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#374151]" aria-hidden="true" />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919902295515?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20driving%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#25D366] shadow-md hover:shadow-lg hover:bg-[#22c55e] transition-all"
              aria-label="Chat on WhatsApp"
            >
              <span className="text-[13px] font-semibold text-white">Chat on WhatsApp</span>
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle FAB */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors ${
          expanded
            ? "bg-[#F3F4F6] text-[#374151]"
            : "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
        }`}
        aria-expanded={expanded}
        aria-label={expanded ? "Close contact options" : "Contact us"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
