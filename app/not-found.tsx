import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20">
      <Container size="narrow">
        <div className="text-center">
          <div className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-6">
            Error 404
          </div>
          <h1 className="font-display font-normal text-[clamp(3rem,6vw,5rem)] leading-[0.98] tracking-[-0.035em] mb-6">
            Page not <span className="ital">found</span>.
          </h1>
          <p className="text-text-mute text-lg mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Head back home or use the
            navigation above.
          </p>
          <Button variant="primary" href="/">
            Back to home <span>→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
