"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 2,
  className,
  ...props 
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, duration]);

  return (
    <div className={cn("font-heading font-extrabold tracking-tight", className)} {...props}>
      <span ref={ref}>
        {prefix}0{suffix}
      </span>
    </div>
  );
}
