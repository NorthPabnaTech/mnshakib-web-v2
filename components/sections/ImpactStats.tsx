import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Stat {
  number: string;
  label: string;
  context: string;
}

const STATS: Stat[] = [
  {
    number: "10+",
    label: "Years",
    context:
      "in strategy, marketing, and venture-building across Bangladesh, Denmark, and Canada",
  },
  {
    number: "12+",
    label: "Products",
    context:
      "B2B SaaS and applied-AI products built through UpscaleBD and venture collaborations",
  },
  {
    number: "75K+",
    label: "Workforce",
    context:
      "deployed enterprise HR tech across Ha-Meem, Coats, BSRM, and similar-scale operations",
  },
  {
    number: "3",
    label: "Markets",
    context:
      "active operating presence across Bangladesh, the GCC, and increasingly North America",
  },
];

export function ImpactStats() {
  return (
    <section className="py-24 sm:py-32 border-y border-line-soft bg-bg-elev">
      <Container>
        <SectionLabel>Impact</SectionLabel>
        <h2 className="font-display font-normal text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em] mb-16 max-w-[800px]">
          What that <span className="ital">actually</span> looks like.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line-soft border border-line-soft">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-bg-elev hover:bg-bg-elev2 transition-colors p-8 sm:p-10 group"
            >
              <div className="font-display font-light text-[clamp(3.5rem,5vw,5.5rem)] leading-none text-accent tracking-tight mb-4">
                {s.number}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-dim mb-4">
                {s.label}
              </div>
              <p className="text-sm text-text-mute leading-relaxed">{s.context}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
