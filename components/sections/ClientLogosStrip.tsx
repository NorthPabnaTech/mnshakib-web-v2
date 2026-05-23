import { Marquee } from "@/components/interactive/Marquee";
import { Container } from "@/components/ui/Container";

const CLIENTS = [
  "ActionAid Bangladesh",
  "BSRM",
  "Ha-Meem Group",
  "Coats Bangladesh",
  "Prime Bank",
  "EDOTCO",
  "Sheba Platform",
  "RANCON Holdings",
  "Holcim Group",
  "PMaspire Singapore",
];

/**
 * Client logos marquee. Until real SVG logos are provided,
 * we render names as styled text — same effect, swap-in later.
 *
 * To use real logos: drop them in /public/logos/ and replace
 * the text spans with <Image> components.
 */
export function ClientLogosStrip() {
  return (
    <section className="py-16 border-y border-line-soft bg-bg-elev">
      <Container>
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-text-dim mb-8">
          Trusted by leadership teams across
        </div>
      </Container>
      <Marquee speed="fast">
        {CLIENTS.map((c) => (
          <span
            key={c}
            className="font-display text-2xl sm:text-3xl font-light text-text-mute hover:text-accent transition-colors px-10 whitespace-nowrap"
          >
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
