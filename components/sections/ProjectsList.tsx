import { Container } from "@/components/ui/Container";
import { projects } from "@/lib/content/projects";

export function ProjectsList() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`group grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_1.6fr_1fr_1fr_auto] gap-4 lg:gap-8 py-7 border-t border-line-soft items-center cursor-pointer transition-all hover:px-4 ${
                i === projects.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-[11px] text-text-dim tracking-[0.15em]">
                {p.year}
              </span>
              <span className="font-display font-normal text-xl sm:text-2xl tracking-tight transition-colors group-hover:text-accent">
                {p.title}
              </span>
              <span className="hidden lg:block font-mono text-[11px] text-text-mute uppercase tracking-[0.13em]">
                {p.client}
              </span>
              <span className="hidden lg:block text-sm text-text-mute">{p.category}</span>
              <span className="font-display text-2xl text-text-dim transition-all group-hover:text-accent group-hover:translate-x-2">
                →
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
