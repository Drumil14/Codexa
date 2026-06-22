import type { Metadata } from "next";
import { PROJECTS, STATS } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected case studies from Codexa — real products across logistics, fintech, healthcare, e-commerce, and more, with the business impact they delivered.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="portfolio"
        title="Work that moved the metric"
        lead="We judge our work by what happened to the business afterward. Here's a selection of recent projects and their measurable results."
      />

      {/* Stats strip */}
      <section className="pt-6">
        <div className="container-x">
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white p-6 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-ink">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="space-y-8 sm:space-y-10">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} y={28}>
                <CaseStudy project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
