"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DragCarouselProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Horizontal drag carousel.
 * The user drags the row of cards left/right with their mouse / finger.
 * Custom "drag" cursor label follows the pointer while hovering.
 */
export function DragCarousel({ children, className }: DragCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      setDragConstraint(Math.max(0, trackWidth - containerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      }}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-5 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -dragConstraint, right: 0 }}
        dragElastic={0.1}
      >
        {children}
      </motion.div>

      {/* Custom "drag" cursor — follows mouse position */}
      {showCursor && (
        <div
          className="absolute pointer-events-none w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.18em] font-medium z-50 select-none"
          style={{
            transform: `translate(${cursorPos.x - 28}px, ${cursorPos.y - 28}px)`,
          }}
        >
          drag
        </div>
      )}
    </div>
  );
}
