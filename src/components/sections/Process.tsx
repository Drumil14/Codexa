import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="how we work"
          title="A clear path from idea to impact"
          lead="No black boxes. Four phases, weekly visibility, and working software in your hands early."
        />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <StaggerItem key={step.step} className="bg-white">
              <div className="relative flex h-full flex-col p-7">
                <span className="font-mono text-sm text-accent-600">
                  {step.step}
                </span>
                <span aria-hidden className="mt-3 block h-px w-10 bg-accent" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
