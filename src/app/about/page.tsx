import type { Metadata } from "next";
import { VALUES, STATS } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Codexa is a small, senior web and software studio. Our mission, our values, and why growing teams choose us to build their most important products.",
};

const reasons = [
  "Senior engineers and designers on every engagement — no junior hand-offs.",
  "Fixed, transparent pricing and timelines agreed before we start.",
  "You own 100% of the code, with documentation your team can run with.",
  "Performance, accessibility, and SEO built in from the first commit.",
  "Weekly demos so you always see real progress, never a black box.",
  "A long-term partner who's still here after launch.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="about"
        title="A senior studio for teams who care about the details"
        lead="Codexa was founded on a simple belief: great software comes from small teams of experienced people who treat your business as if it were their own."
      />

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>our mission</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  Build software that earns its keep
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <Reveal delay={0.1}>
                  <p>
                    Too many websites and tools are slow, fragile, and
                    disconnected from the business they&apos;re meant to serve.
                    We exist to change that — to build digital products that are
                    fast, durable, and tied directly to outcomes that matter.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p>
                    We keep our team small and senior on purpose. It means fewer
                    layers, clearer communication, and work we&apos;re genuinely
                    proud to attach our name to. Every project gets people who
                    have shipped real products at scale.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="bg-white p-6">
                      <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="our values"
            title="What we hold ourselves to"
            lead="Four principles that shape how we make decisions, write code, and work with the teams who hire us."
          />
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="flex h-full gap-4 rounded-2xl border border-line p-7">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-ink">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Why clients choose Codexa */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>why clients choose us</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  The reasons teams stick with Codexa
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg text-muted">
                  Most of our work comes from referrals and repeat clients.
                  Here&apos;s what they tell us makes the difference.
                </p>
              </Reveal>
            </div>

            <StaggerGroup className="space-y-3">
              {reasons.map((reason, i) => (
                <StaggerItem key={reason}>
                  <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs font-semibold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-ink">{reason}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
