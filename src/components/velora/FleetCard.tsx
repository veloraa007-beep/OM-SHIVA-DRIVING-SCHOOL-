"use client";

import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FleetCardProps {
  name: string;
  type: string;
  years: string;
  description: string;
  features: string[];
  badge: string;
  badgeColor: string;
  image: string;
  alt: string;
  className?: string;
}

export function FleetCard({
  name,
  type,
  years,
  description,
  features,
  badge,
  badgeColor,
  image,
  alt,
  className,
}: FleetCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500",
        className
      )}
      aria-label={name}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden" style={{background: "linear-gradient(135deg, #f0f4f8 0%, #e8eef5 100%)"}}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized
        />
        {/* Badge */}
        <div className={cn("absolute top-5 left-5 px-3 py-1.5 rounded-full text-[12px] font-semibold border bg-white/90 backdrop-blur-sm", badgeColor)}>
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-[#0F172A] mb-1">
              {name}
            </h3>
            <p className="text-[#64748B] text-sm font-medium uppercase tracking-wide">
              {type} · {years}
            </p>
          </div>
        </div>

        <p className="text-[#64748B] text-base leading-relaxed mb-6">
          {description}
        </p>

        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-[#2563EB]" aria-hidden="true" />
              </span>
              <span className="text-[#475569] text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
