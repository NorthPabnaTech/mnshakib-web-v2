import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function CtaStrip() {
  return (
    <section className="py-24 border-t border-line-soft bg-gradient-to-b from-bg to-bg-deep text-center">
      <Container size="narrow">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6">
          Let's Build Something
        </div>
        <h2 className="font-display font-normal text-[clamp(2.4rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em] mb-6">
          Have a <span className="ital">hard problem</span> worth solving?
        </h2>
        <p className="text-text-mute text-lg max-w-[560px] mx-auto mb-10 leading-relaxed">
          I take on a small number of engagements each quarter — venture-build collaborations,
          fractional product leadership, and senior advisory work.
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <Button variant="primary" href={`mailto:${site.contact.email}`} external>
            {site.contact.email} <span>→</span>
          </Button>
          <Button variant="ghost" href={site.contact.linkedIn} external>
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
