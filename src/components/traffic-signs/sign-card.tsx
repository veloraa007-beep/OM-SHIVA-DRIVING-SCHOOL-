"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { TrafficSign } from "@/data/traffic-signs";

export function SignCard({ sign }: { sign: TrafficSign }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Dynamically get the icon component
  // @ts-ignore - Dynamic access to lucide icons
  const IconComponent = Icons[sign.iconName] || Icons.AlertCircle;

  // Colors based on category for the Indian context
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Mandatory":
        return "text-red-600 bg-red-50 border-red-200";
      case "Warning":
        return "text-red-600 bg-yellow-50 border-red-200"; // Warnings often have red borders and white/yellow backgrounds
      case "Informatory":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const getShapeStyles = (category: string) => {
    // A simplified visual representation.
    switch (category) {
      case "Mandatory":
        return "rounded-full border-4";
      case "Warning":
        return "rounded-lg border-4 rotate-45"; // Diamond shape for warning (though Indian signs are often triangles)
      case "Informatory":
        return "rounded-lg border-2";
      default:
        return "rounded-lg border-2";
    }
  };

  return (
    <div 
      className="h-[320px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-shadow border border-white/40">
          <div className="flex-1 flex items-center justify-center mb-4">
            <div className={`flex items-center justify-center w-32 h-32 ${getCategoryStyles(sign.category)} ${sign.category === 'Warning' ? '' : getShapeStyles(sign.category)} relative`}>
              {/* For warning, if we rotate the container, we must counter-rotate the icon */}
              <div className={`${sign.category === 'Warning' ? 'transform -rotate-45' : ''}`}>
                 <IconComponent className="w-12 h-12" strokeWidth={2.5} />
              </div>
              {/* For Warning specifically, we'll draw a CSS triangle if we wanted, but diamond is fine for placeholder */}
            </div>
          </div>
          <h3 className="font-heading font-bold text-lg text-primary">{sign.name}</h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-2">{sign.category}</p>
          <div className="text-xs text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            Hover to learn more
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 backface-hidden glass-card rounded-3xl p-6 flex flex-col shadow-xl border border-accent/20 overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent -z-10" />
          
          <div className="mb-4 pb-4 border-b border-slate-100">
            <h3 className="font-heading font-bold text-lg text-primary mb-1">{sign.name}</h3>
            <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-semibold">
              {sign.category} Sign
            </span>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Meaning</p>
              <p className="text-sm text-slate-700 leading-relaxed">{sign.meaning}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1 flex items-center gap-1">
                <Icons.ShieldAlert className="w-3 h-3" /> Safety Tip
              </p>
              <p className="text-sm text-slate-700 leading-relaxed font-medium bg-white/50 p-3 rounded-xl border border-white">
                {sign.safetyTip}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
