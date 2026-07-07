"use client";

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:bg-primary/90 shadow-sm": variant === "primary",
            "bg-secondary text-white hover:bg-secondary/90": variant === "secondary",
            "border border-primary text-primary hover:bg-primary/5": variant === "outline",
            "hover:bg-primary/5 text-primary": variant === "ghost",
            "bg-[#25D366] text-white hover:bg-[#20b858] shadow-sm": variant === "whatsapp",
            "h-10 px-5 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
