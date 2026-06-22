import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Process } from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From business websites and e-commerce to web apps, dashboards, redesigns, and ongoing maintenance — the full range of what Codexa builds.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="services"
        title="What we build"
        lead="Six core offerings covering the full lifecycle of a digital product — from a first marketing site to the internal tools that run your operation."
      />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.slug} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-muted">{service.description}</p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                          Includes
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-ink">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                          Deliverables
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-ink">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal className="mt-12">
            <p className="rounded-2xl border border-dashed border-line bg-white/60 p-6 text-center text-sm text-muted">
              Not sure which fits? Most engagements blend a few of these.
              Tell us the outcome you&apos;re after and we&apos;ll propose the
              right scope.
            </p>
          </Reveal>
        </div>
      </section>

      <Process />
      <ContactCTA />
    </>
  );
}
