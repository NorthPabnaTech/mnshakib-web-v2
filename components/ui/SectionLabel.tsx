import type { HeadlinePart } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Mono section label with leading bullet.
 * CBC uses "0 1 •  Brand Planning" style — number, dot, label.
 */
export function SectionLabel({
  children,
  number,
  className,
}: {
  children: React.ReactNode;
  number?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[11px] uppercase text-text-mute tracking-[0.22em] mb-6 flex items-center gap-3",
        className
      )}
    >
      {number && (
        <>
          <span className="text-accent">{number}</span>
          <span className="text-text-dim">•</span>
        </>
      )}
      {children}
    </div>
  );
}

/**
 * Renders HeadlineParts: text segments + italic accent segments.
 *
 * <Headline parts={[
 *   { type: "text", value: "Get your brand back in the " },
 *   { type: "ital", value: "black" },
 * ]} />
 */
export function Headline({
  parts,
  className,
  as = "h1",
}: {
  parts: HeadlinePart[];
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const Tag = as;
  return (
    <Tag className={cn("font-display font-normal", className)}>
      {parts.map((p, i) =>
        p.type === "ital" ? (
          <span key={i} className="ital">
            {p.value}
          </span>
        ) : (
          <span key={i}>{p.value}</span>
        )
      )}
    </Tag>
  );
}
