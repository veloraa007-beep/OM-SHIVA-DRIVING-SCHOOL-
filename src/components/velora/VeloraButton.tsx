"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const veloraButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/20",
        secondary:
          "bg-[#0F172A] text-white hover:bg-[#1e293b] hover:shadow-lg hover:shadow-slate-900/20",
        outline:
          "border-2 border-[#E5E7EB] bg-transparent text-[#0F172A] hover:border-[#0F172A] hover:bg-[#F8FAFC]",
        ghost:
          "bg-transparent text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]",
        white:
          "bg-white text-[#0F172A] hover:bg-gray-50 hover:shadow-lg hover:shadow-black/5",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-6 text-[14px]",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-11 w-11",
      },
      shadow: {
        true: "shadow-md shadow-black/5",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shadow: false,
    },
  }
);

export interface VeloraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof veloraButtonVariants> {
  asChild?: boolean;
  href?: string;
  icon?: boolean | React.ReactNode;
  animation?: boolean;
}

export const VeloraButton = React.forwardRef<HTMLButtonElement, VeloraButtonProps>(
  (
    {
      className,
      variant,
      size,
      shadow,
      asChild = false,
      href,
      icon,
      animation = true,
      children,
      ...props
    },
    ref
  ) => {
    const Component = href ? Link : "button";
    
    // Determine the icon to render
    const renderIcon = () => {
      if (!icon) return null;
      if (typeof icon === "boolean") {
        return <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />;
      }
      return <span className="ml-2">{icon}</span>;
    };

    const innerContent = (
      <>
        {children}
        {renderIcon()}
      </>
    );

    const buttonProps = {
      className: cn(veloraButtonVariants({ variant, size, shadow, className }), icon && "group"),
      ...(href ? { href } : {}),
      ref: ref as any,
      ...props,
    };

    if (animation) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Component {...buttonProps as any}>{innerContent}</Component>
        </motion.div>
      );
    }

    return <Component {...buttonProps as any}>{innerContent}</Component>;
  }
);
VeloraButton.displayName = "VeloraButton";
