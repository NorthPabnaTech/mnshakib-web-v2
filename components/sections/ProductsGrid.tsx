import { Container } from "@/components/ui/Container";
import { products } from "@/lib/content/products";

export function ProductsGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => {
            const Component = p.url ? "a" : "div";
            const linkProps = p.url
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Component
                key={p.id}
                {...linkProps}
                className="group relative bg-bg-elev border border-line-soft hover:border-accent-soft hover:-translate-y-1 transition-all duration-300 p-8 min-h-[260px] flex flex-col"
              >
                {/* Status dot */}
                <span
                  className={`absolute top-5 right-5 w-2 h-2 rounded-full ${
                    p.status === "live"
                      ? "bg-accent shadow-[0_0_12px_var(--accent)]"
                      : "bg-text-dim"
                  }`}
                />

                <div className="font-display font-medium text-3xl mb-2 tracking-tight">
                  {p.name}
                </div>
                <div className="font-mono text-[10px] text-accent uppercase tracking-[0.22em] mb-5">
                  {p.category}
                </div>
                <p className="text-sm text-text-mute leading-relaxed flex-grow">
                  {p.description}
                </p>
                {p.url && (
                  <span className="mt-6 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-mute group-hover:text-accent transition-colors">
                    Visit <span>→</span>
                  </span>
                )}
              </Component>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
