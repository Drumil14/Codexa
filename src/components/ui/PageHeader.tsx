import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 blueprint mask-fade" />
        <div className="absolute left-1/2 top-0 h-72 w-[680px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[110px]" />
      </div>
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {lead}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={0.15}>{children}</Reveal>}
        </div>
      </div>
    </section>
  );
}
