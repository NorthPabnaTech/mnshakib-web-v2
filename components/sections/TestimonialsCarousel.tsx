import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DragCarousel } from "@/components/interactive/DragCarousel";
import { reviews } from "@/lib/content/reviews";

export function TestimonialsCarousel() {
  return (
    <section className="py-24 sm:py-32 border-t border-line-soft">
      <Container>
        <SectionLabel>Testimonials</SectionLabel>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <h2 className="font-display font-normal text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-[-0.03em] max-w-[800px]">
            What people <span className="ital">have said</span>.
          </h2>
          <p className="text-base text-text-mute leading-relaxed max-w-[400px]">
            Drag the cards left and right to scroll through. Recommendations from former
            colleagues, clients, and senior leaders.
          </p>
        </div>
      </Container>

      {/* Carousel breaks out of container for the full-bleed feel */}
      <div className="pl-6 sm:pl-12 lg:pl-24">
        <DragCarousel>
          {reviews.map((r) => (
            <article
              key={r.id}
              className="shrink-0 w-[88vw] sm:w-[520px] lg:w-[560px] bg-bg-elev border border-line-soft p-10 flex flex-col select-none"
            >
              <div className="font-display italic font-light text-6xl leading-[0.5] text-accent mb-4 opacity-50">
                &ldquo;
              </div>
              <p className="font-display font-light text-xl sm:text-2xl leading-snug mb-8 flex-grow">
                {r.body}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-line-soft">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-display italic font-medium text-bg flex-shrink-0">
                  {r.authorInitials}
                </div>
                <div>
                  <div className="text-base font-medium">{r.authorName}</div>
                  <div className="font-mono text-[10px] text-text-mute uppercase tracking-[0.16em] mt-1">
                    {r.authorRole}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </DragCarousel>
      </div>
    </section>
  );
}
