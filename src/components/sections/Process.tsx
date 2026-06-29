import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="development process"
          title="How we take you from idea to launch"
          lead="A clear, five-step process with no surprises. You'll always know what's happening, what's next, and where your project stands."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-7 transition-shadow hover:shadow-card">
                  {/* Decorative step number */}
                  <span
                    aria-hidden
                    className="absolute right-5 top-2 select-none font-mono text-[88px] font-bold leading-none text-ink/[0.04]"
                  >
                    {step.step}
                  </span>
                  {/* Icon */}
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <div className="mt-5 flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      Step {step.step}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* 6th slot — CTA */}
          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-accent/30 bg-accent/[0.04] p-7 text-center transition-all hover:border-accent/50 hover:bg-accent/[0.08]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10">
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div>
                <p className="font-semibold tracking-tight text-ink">
                  Ready to start?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Book a free discovery call
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
