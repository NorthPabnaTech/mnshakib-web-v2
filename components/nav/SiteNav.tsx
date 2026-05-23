"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content/services";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/ventures", label: "Ventures" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/85 border-b border-line-soft">
      <div className="flex justify-between items-center px-6 sm:px-12 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-lg font-medium tracking-tight">
            Nazmus<span className="text-accent">.</span>Shakib
          </span>
          <span className="font-mono text-[10px] text-text-dim uppercase tracking-[0.18em] hidden sm:inline">
            MCIM · SFP
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {/* Practice mega-menu trigger */}
          <li
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <Link
              href="/practice"
              className={cn(
                "text-sm py-1 transition-colors flex items-center gap-1.5",
                pathname.startsWith("/practice")
                  ? "text-accent"
                  : "text-text-mute hover:text-text"
              )}
            >
              Practice
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={cn(
                  "transition-transform duration-200",
                  menuOpen && "rotate-180"
                )}
              >
                <path
                  d="M2 4l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            {/* Mega-menu */}
            {menuOpen && (
              <div className="absolute top-full left-0 pt-3 w-[520px] -translate-x-1/3">
                <div className="bg-bg-elev border border-line rounded-lg p-2 shadow-2xl">
                  <Link
                    href="/practice"
                    className="block px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim hover:text-accent transition-colors border-b border-line-soft mb-1"
                  >
                    All Practices →
                  </Link>
                  {services.map((s, i) => (
                    <Link
                      key={s.id}
                      href={`/practice#${s.id}`}
                      className="group flex gap-4 items-start px-4 py-3 hover:bg-bg-elev2 transition-colors rounded"
                    >
                      <span className="font-mono text-[11px] text-accent mt-0.5">
                        0{i + 1} •
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-sm font-medium text-text group-hover:text-accent transition-colors">
                          {s.title}{" "}
                          {s.italicTitle && (
                            <span className="italic text-accent-soft font-light">
                              {s.italicTitle}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-text-mute mt-0.5 line-clamp-1">
                          {s.description.split(".")[0]}.
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm py-1 transition-colors",
                    isActive ? "text-accent" : "text-text-mute hover:text-text"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/contact"
              className="px-5 py-2 bg-accent text-bg rounded-full text-xs font-medium hover:bg-text transition-colors inline-flex items-center gap-1.5"
            >
              Speak to Shakib <span>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
