import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-dim mb-8 flex gap-3 items-center flex-wrap"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-3">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-text-mute hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-accent" : "text-text-mute"}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="text-text-dim">•</span>}
          </span>
        );
      })}
    </nav>
  );
}
