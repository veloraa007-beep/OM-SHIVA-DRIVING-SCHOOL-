"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  animation?: boolean;
  theme?: "light" | "dark";
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, eyebrow, title, description, align = "left", animation = true, theme = "light", ...props }, ref) => {
    const alignClass = {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right ml-auto",
    }[align];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
      },
    } as const;

    const itemVariants = {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 24 },
      },
    };

    const content = (
      <>
        {eyebrow && (
          <motion.div variants={animation ? (itemVariants as any) : undefined} className="mb-4">
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-px bg-[#2563EB]" aria-hidden="true" />
              <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                {eyebrow}
              </span>
            </span>
          </motion.div>
        )}
        
        <motion.h2 
          variants={animation ? (itemVariants as any) : undefined} 
          className={cn("font-heading font-extrabold tracking-tight text-3xl md:text-4xl lg:text-5xl", theme === "light" ? "text-[#0F172A]" : "text-white")}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p 
            variants={animation ? (itemVariants as any) : undefined} 
            className={cn("mt-4 text-lg leading-relaxed max-w-2xl", theme === "light" ? "text-[#64748B]" : "text-white/70")}
          >
            {description}
          </motion.p>
        )}
      </>
    );

    if (animation) {
      return (
        <motion.div
          ref={ref}
          className={cn("max-w-3xl", alignClass, className)}
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          {...(props as any)}
        >
          {content}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={cn("max-w-3xl", alignClass, className)} {...props}>
        {content}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";
