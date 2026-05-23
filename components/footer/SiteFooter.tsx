import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-line-soft bg-bg-deep">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-display text-xl font-medium tracking-tight">
            Nazmus<span className="text-accent">.</span>Shakib
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-[11px] text-text-dim uppercase tracking-[0.18em]">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <span className="text-text-dim">
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
