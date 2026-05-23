"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils";

interface NumberedSolutionsProps {
  /** Show as home-page teaser (first 4 services only, with a link to full page) */
  teaser?: boolean;
}

/**
 * The CBC-signature scrolling solutions section.
 * Left column is sticky with the active practice number + title.
 * Right column is a scrollable stack of solution cards.
 * As you scroll, the active item updates.
 */
export function NumberedSolutions({ teaser = false }: NumberedSolutionsProps) {
  const items = teaser ? services.slice(0, 4) : services;
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionLabel>{teaser ? "How I work" : "Practice Areas"}</SectionLabel>
        <h2 className="font-display font-normal text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em] mb-20 max-w-[900px]">
          {teaser ? "How " : "Six practices. "}
          <span className="ital">{teaser ? "I help" : "One operating principle."}</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Sticky left rail */}
          <div className="lg:sticky lg:top-32 self-start">
            <ul className="space-y-3">
              {items.map((s, i) => (
                <li
                  key={s.id}
                  className={cn(
                    "transition-all duration-500 cursor-pointer",
                    i === activeIdx ? "opacity-100" : "opacity-30 hover:opacity-60"
                  )}
                  onClick={() => {
                    cardRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "font-mono text-sm transition-colors",
                        i === activeIdx ? "text-accent" : "text-text-dim"
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[10px] text-text-dim uppercase tracking-[0.18em]">
                      •
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight">
                      {s.title}
                      {s.italicTitle && (
                        <span className="italic text-accent-soft font-light">
                          {" "}{s.italicTitle}
                        </span>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {teaser && (
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-text-mute hover:text-accent transition-colors"
              >
                See all 6 practices <span>→</span>
              </Link>
            )}
          </div>

          {/* Solution cards */}
          <div className="space-y-32">
            {items.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="scroll-mt-32"
              >
                <div className="flex items-baseline gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.22em]">
                  <span className="text-accent text-2xl font-light">0</span>
                  <span className="text-accent text-2xl font-light">{i + 1}</span>
                  <span className="text-text-dim">•</span>
                  <span className="text-text-mute">{s.title}</span>
                </div>

                <h3 className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.03em] mb-6">
                  {s.title}{" "}
                  {s.italicTitle && (
                    <span className="ital">{s.italicTitle}</span>
                  )}
                </h3>

                <p className="text-lg text-text-mute leading-relaxed mb-8 max-w-[560px]">
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-mute border border-line px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
