import { WHY_CHOOSE, STATS } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="absolute inset-0 blueprint-dark opacity-50" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow dark>why choose codexa</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Why businesses choose Codexa
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-white/60">
              We&apos;re a small, senior studio that treats your website like
              it&apos;s our own — focused on the results that actually move your
              business forward.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <StaggerGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="bg-ink">
              <div className="p-7">
                <p className="font-display text-4xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/55">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Differentiators */}
        <StaggerGroup className="mt-6 grid gap-5 sm:grid-cols-2">
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="flex gap-4 rounded-2xl border border-line-dark bg-ink-800 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
