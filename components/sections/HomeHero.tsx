import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/SectionLabel";

/**
 * V2 home hero — CBC-inspired:
 * massive display headline, italic mint emphasis word,
 * single primary CTA, minimal supporting copy.
 */
export function HomeHero() {
  return (
    <section className="min-h-[88vh] flex items-center pt-32 pb-16 relative fade-in">
      <Container size="wide">
        <div className="max-w-[1200px]">
          <div className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Strategy · Marketing · AI Ventures · Toronto / Dhaka
          </div>

          <Headline
            parts={[
              { type: "text", value: "Strategy that survives " },
              { type: "ital", value: "contact" },
              { type: "text", value: " with the people who have to " },
              { type: "ital", value: "execute it" },
              { type: "text", value: "." },
            ]}
            className="text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-[-0.045em] mb-12"
          />

          <div className="grid sm:grid-cols-[2fr_1fr] gap-12 items-end">
            <p className="text-lg sm:text-xl text-text-mute leading-relaxed max-w-[640px]">
              A decade-plus building B2B SaaS, retail, and AI ventures across two continents.
              Founder of UpscaleBD. CSMO at MAAC. Product Strategy Lead at TorontoCreatives.
            </p>

            <div className="flex flex-col items-start sm:items-end gap-3">
              <Button variant="primary" href="/contact">
                Speak to Shakib <span>→</span>
              </Button>
              <Button variant="text" href="/work">
                View selected work →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
