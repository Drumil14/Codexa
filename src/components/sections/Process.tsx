import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="development process"
          title="How we take you from idea to launch"
          lead="A clear, five-step process with no surprises. You'll always know what's happening, what's next, and where your project stands."
        />

        <StaggerGroup className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical connector line */}
          <span
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-line sm:left-[31px]"
          />

          <div className="space-y-10">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.step}>
                  <div className="relative flex gap-5 sm:gap-7">
                    {/* Node */}
                    <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-white text-ink shadow-card sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6 text-accent-600" />
                    </span>

                    <div className="pt-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-accent-600">
                          Step {step.step}
                        </span>
                        <span aria-hidden className="h-px w-6 bg-line" />
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
