import { TECH_STACK } from "@/lib/data";

export function LogoMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <section className="border-y border-line bg-white/60 py-8" aria-label="Technologies we use">
      <div className="container-x">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted">
          The modern stack we build on
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap font-display text-lg font-medium text-ink/35"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
