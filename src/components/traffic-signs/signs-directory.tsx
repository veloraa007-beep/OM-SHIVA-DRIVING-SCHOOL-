"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { trafficSigns, SignCategory } from "@/data/traffic-signs";
import { SignCard } from "./sign-card";
import { Input } from "@/components/ui/input";

export function SignsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SignCategory | "All">("All");

  const categories: (SignCategory | "All")[] = ["All", "Mandatory", "Warning", "Informatory"];

  const filteredSigns = useMemo(() => {
    return trafficSigns.filter((sign) => {
      const matchesSearch = sign.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            sign.meaning.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || sign.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="w-full">
      {/* Search and Filter Controls */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input 
            type="text" 
            placeholder="Search by sign name or meaning..." 
            className="pl-12 bg-slate-50 border-transparent focus:bg-white rounded-full h-12 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <Filter className="text-slate-400 w-5 h-5 mr-2 hidden md:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Signs Grid */}
      {filteredSigns.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSigns.map((sign) => (
              <motion.div
                key={sign.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <SignCard sign={sign} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">No signs found</h3>
          <p className="text-slate-500">We couldn't find any signs matching "{searchQuery}" in {activeCategory}.</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
            className="mt-6 text-accent font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
