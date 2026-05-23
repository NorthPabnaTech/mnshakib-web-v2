import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";

export function AboutNarrative() {
  const { about } = site;

  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* Narrative column */}
          <div>
            {about.narrative.map((block, i) =>
              block.type === "pullquote" ? (
                <blockquote
                  key={i}
                  className="font-display italic font-light text-3xl leading-snug text-accent border-l-2 border-accent pl-7 my-10"
                >
                  &ldquo;{block.text}&rdquo;
                </blockquote>
              ) : (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-text mb-5 last:text-text-mute"
                >
                  {block.text}
                </p>
              )
            )}
          </div>

          {/* Stats + current roles sidebar */}
          <aside className="lg:sticky lg:top-32 self-start space-y-3">
            {about.stats.map((s, i) => (
              <div
                key={i}
                className="border border-line-soft p-7 bg-bg-elev hover:border-accent-soft transition-colors"
              >
                <div className="font-display text-5xl font-light text-accent leading-none tracking-tight">
                  {s.number}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-mute mt-3">
                  {s.label}
                </div>
              </div>
            ))}

            {about.currentRoles.length > 0 && (
              <div className="mt-10 pt-8 border-t border-line-soft">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-5">
                  Current Roles
                </div>
                {about.currentRoles.map((r, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-3 border-b border-dotted border-line-soft last:border-b-0 text-[15px]"
                  >
                    <span className="text-text">{r.role}</span>
                    <span className="text-text-mute font-mono text-xs">{r.org}</span>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </Container>
    </section>
  );
}
