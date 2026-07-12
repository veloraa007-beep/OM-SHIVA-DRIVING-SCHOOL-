"use client";

import * as React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { VeloraButton } from "./VeloraButton";

export interface LocationCardProps {
  area: string;
  address: string;
  distance?: string;
  time?: string;
  mapUrl?: string;
  className?: string;
}

export function LocationCard({
  area,
  address,
  distance,
  time,
  mapUrl,
  className,
}: LocationCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-3xl p-6 border border-[#E5E7EB] hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] transition-all duration-300 group",
        className
      )}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] transition-colors duration-300">
          <MapPin className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-heading font-extrabold text-xl text-[#0F172A] mb-1">{area}</h3>
          <p className="text-[#64748B] text-[14px] leading-relaxed line-clamp-2">{address}</p>
        </div>
      </div>
      
      {(distance || time) && (
        <div className="flex items-center gap-4 py-4 mb-4 border-y border-[#F1F5F9]">
          {distance && (
            <div className="flex items-center gap-2 text-[#475569] text-sm font-medium">
              <Navigation className="w-4 h-4 text-slate-400" />
              {distance}
            </div>
          )}
          {time && (
            <div className="flex items-center gap-2 text-[#475569] text-sm font-medium">
              <Clock className="w-4 h-4 text-slate-400" />
              {time}
            </div>
          )}
        </div>
      )}
      
      {mapUrl && (
        <VeloraButton 
          variant="outline" 
          size="md" 
          className="w-full" 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Map
        </VeloraButton>
      )}
    </div>
  );
}
