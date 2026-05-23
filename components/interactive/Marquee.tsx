"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: "fast" | "slow";
  className?: string;
  /** Reverse direction for a second row */
  reverse?: boolean;
}

/**
 * Infinite horizontal marquee.
 * Pass children once — the component duplicates them under the hood
 * so the loop is seamless.
 */
export function Marquee({
  children,
  speed = "fast",
  className,
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max",
          speed === "fast" ? "animate-marquee-x" : "animate-marquee-slow",
          reverse && "[animation-direction:reverse]"
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
