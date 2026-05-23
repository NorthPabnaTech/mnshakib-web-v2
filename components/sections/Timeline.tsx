import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/lib/content/experiences";

export function Timeline() {
  return (
    <section className="py-24">
      <Container>
        <SectionLabel>Career Timeline</SectionLabel>

        <div className="relative pl-10 mt-12 max-w-[920px]">
          {/* Vertical rule */}
          <span className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-line to-transparent" />

          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pb-14 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12"
            >
              {/* Dot marker */}
              <span className="absolute -left-8 top-2 w-5 h-5 rounded-full bg-bg border-2 border-accent" />

              {/* Date column */}
              <div className="font-mono text-[11px] text-text-dim uppercase tracking-[0.18em] pt-1">
                {exp.isCurrent && <span className="text-accent">●</span>}{" "}
                {exp.startDate}
                {exp.endDate && ` — ${exp.endDate}`}
              </div>

              {/* Content column */}
              <div>
                <h4 className="font-display text-2xl font-medium tracking-tight leading-tight mb-2">
                  {exp.role}
                </h4>
                <div className="font-mono text-[11px] text-accent uppercase tracking-[0.18em] mb-4 flex flex-wrap items-center gap-2">
                  {exp.company}
                  {exp.location && (
                    <span className="text-text-dim text-[10px]">· {exp.location}</span>
                  )}
                </div>
                <p className="text-base text-text-mute leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.bullets && (
                  <ul className="list-none p-0 space-y-2 mt-4">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-mute leading-relaxed pl-5 relative"
                      >
                        <span className="absolute left-0 text-accent-soft font-mono">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
