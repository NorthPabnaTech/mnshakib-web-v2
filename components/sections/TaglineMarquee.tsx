import { Marquee } from "@/components/interactive/Marquee";

/**
 * Two stacked marquee rows scrolling in opposite directions —
 * the CBC signature transition between sections.
 * Tagline phrases pulled from Shakib's voice.
 */
const TAGLINES_TOP = [
  "strategy that ships—",
  "fewer decks, more decisions—",
  "co-founders, not slide-makers—",
  "the messy middle is the work—",
];

const TAGLINES_BOTTOM = [
  "10+ years. 12+ products. 3 continents—",
  "boardroom strategy meets engineering reality—",
  "from MVP to enterprise—",
  "Dhaka. Copenhagen. Toronto—",
];

export function TaglineMarquee() {
  return (
    <div className="py-12 border-y border-line-soft bg-bg-deep">
      <Marquee speed="slow" className="mb-3">
        {TAGLINES_TOP.map((t, i) => (
          <span
            key={i}
            className="font-display font-light italic text-[clamp(2.5rem,6vw,5rem)] text-text px-8 whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </Marquee>
      <Marquee speed="slow" reverse>
        {TAGLINES_BOTTOM.map((t, i) => (
          <span
            key={i}
            className="font-display font-light italic text-[clamp(2.5rem,6vw,5rem)] text-accent-soft px-8 whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
