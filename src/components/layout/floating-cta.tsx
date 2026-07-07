"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <Link
          href="tel:+919535704871"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:shadow-xl transition-shadow animate-pulse-glow"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      >
        <Link
          href="https://wa.me/919535704871?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
}
