import type { HeadlinePart } from "@/lib/types";
import { Container } from "./Container";
import { Headline, SectionLabel } from "./SectionLabel";
import { Breadcrumb } from "@/components/nav/Breadcrumb";

interface PageHeroProps {
  eyebrowNumber: string;
  eyebrow: string;
  title: HeadlinePart[] | string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
}

/**
 * Standard subpage header: breadcrumb → eyebrow → display headline → subtitle.
 * Generous padding above to clear the fixed nav.
 */
export function PageHero({ eyebrowNumber, eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-44 pb-20 border-b border-line-soft fade-in">
      <Container>
        <Breadcrumb items={breadcrumb} />
        <SectionLabel number={eyebrowNumber}>{eyebrow}</SectionLabel>
        {typeof title === "string" ? (
          <h1 className="font-display font-normal text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[1100px] mb-6">
            {title}
          </h1>
        ) : (
          <Headline
            parts={title}
            className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] max-w-[1100px] mb-6"
          />
        )}
        {subtitle && (
          <p className="text-lg sm:text-xl text-text-mute leading-relaxed max-w-[720px]">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
