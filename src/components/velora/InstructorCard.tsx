"use client";

import * as React from "react";
import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InstructorCardProps {
  name: string;
  role: string;
  experience: string;
  image: string;
  className?: string;
}

export function InstructorCard({
  name,
  role,
  experience,
  image,
  className,
}: InstructorCardProps) {
  return (
    <div className={cn("group rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] hover:shadow-xl transition-all duration-500", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F8FAFC]">
        <Image
          src={image}
          alt={`Driving Instructor ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" aria-hidden="true" />
        
        {/* Verification Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span className="text-[12px] font-bold text-[#0F172A]">Govt. Certified</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-heading font-extrabold text-white text-2xl mb-1 drop-shadow-md">
            {name}
          </h3>
          <p className="text-white/90 font-medium text-sm mb-3 drop-shadow-md">
            {role}
          </p>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/20">
            <Award className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-xs font-semibold tracking-wide">
              {experience} Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
