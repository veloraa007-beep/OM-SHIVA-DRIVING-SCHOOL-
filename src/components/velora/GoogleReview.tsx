"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GoogleReviewProps {
  author: string;
  avatar: string;
  date: string;
  rating?: number;
  snippet: string;
  fullText?: string;
  sourceUrl?: string;
  className?: string;
}

export function GoogleReview({
  author,
  avatar,
  date,
  rating = 5,
  snippet,
  fullText,
  sourceUrl,
  className,
}: GoogleReviewProps) {
  return (
    <div 
      className={cn(
        "bg-white p-7 rounded-3xl border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={author}
            width={44}
            height={44}
            className="rounded-full object-cover"
            unoptimized
          />
          <div>
            <div className="font-bold text-[#0F172A] text-sm">{author}</div>
            <div className="text-[#64748B] text-[12px]">{date}</div>
          </div>
        </div>
        {/* Google G Logo icon SVG */}
        <div className="w-6 h-6 flex-shrink-0">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      
      <p className="text-[#475569] text-[15px] leading-relaxed flex-grow">
        "{snippet}"
      </p>
      
      {sourceUrl && (
        <a 
          href={sourceUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[13px] font-semibold text-[#2563EB] hover:underline"
        >
          Read on Google
        </a>
      )}
    </div>
  );
}
