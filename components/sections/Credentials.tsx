import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { educations } from "@/lib/content/educations";
import { certifications } from "@/lib/content/certifications";

export function Credentials() {
  return (
    <section className="py-24 border-t border-line-soft bg-bg-elev">
      <Container>
        <SectionLabel number="04">Education & Credentials</SectionLabel>
        <h2 className="font-display font-normal text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.03em] mb-6 max-w-[800px]">
          Trained <span className="ital">where strategy is taught well</span>.
        </h2>
        <p className="text-base text-text-mute leading-relaxed mb-16 max-w-[580px]">
          Formal business education plus ongoing professional certifications.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="font-display font-normal text-xl mb-8 pb-4 border-b border-line-soft flex items-center gap-3">
              Education
              <span className="font-mono text-[10px] text-accent tracking-[0.2em] px-2.5 py-0.5 border border-accent-soft rounded-full">
                {String(educations.length).padStart(2, "0")}
              </span>
            </h3>
            {educations.map((e) => (
              <div key={e.id} className="py-5 border-b border-line-soft last:border-b-0">
                <div className="font-mono text-[11px] text-accent tracking-[0.16em] mb-2">
                  {e.years}
                </div>
                <div className="font-display text-lg font-medium mb-1 leading-snug">
                  {e.degree}
                </div>
                <div className="text-text-mute text-sm mb-1.5">{e.school}</div>
                {e.detail && (
                  <div className="text-text-dim text-[13px] italic">{e.detail}</div>
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display font-normal text-xl mb-8 pb-4 border-b border-line-soft flex items-center gap-3">
              Certifications
              <span className="font-mono text-[10px] text-accent tracking-[0.2em] px-2.5 py-0.5 border border-accent-soft rounded-full">
                {String(certifications.length).padStart(2, "0")} ACTIVE
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.map((c) => (
                <div
                  key={c.id}
                  className="relative p-4 bg-bg border border-line-soft hover:border-accent-soft hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="absolute top-3 right-3 text-accent text-sm opacity-60">✓</div>
                  <div className="text-sm font-medium mb-1.5 leading-snug pr-5">
                    {c.name}
                  </div>
                  <div className="font-mono text-[10px] text-text-mute uppercase tracking-[0.13em]">
                    {c.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
