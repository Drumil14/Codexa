import { Check, Clock } from "lucide-react";
import { PRICING } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="pricing"
          title="Straightforward pricing, no surprises"
          lead="Transparent starting points for the work we do most. You'll always get a fixed quote before anything begins."
          align="center"
        />

        <StaggerGroup className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-300",
                  tier.featured
                    ? "border-accent/40 shadow-glow lg:-translate-y-2"
                    : "border-line hover:-translate-y-1 hover:shadow-card",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-accent-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-700">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="mt-3 min-h-[2.5rem] text-sm leading-relaxed text-muted">
                  {tier.tagline}
                </p>

                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
                  Starting at
                </p>
                <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-ink">
                  {tier.price}
                </p>

                <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-7">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 flex items-center gap-2 text-sm font-medium text-ink">
                  <Clock className="h-4 w-4 shrink-0 text-muted" />
                  {tier.delivery}
                </p>

                <Button
                  href="/contact"
                  variant={tier.featured ? "primary" : "ghost"}
                  className="mt-6 w-full"
                >
                  Get a quote
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-8">
          <p className="mx-auto max-w-2xl text-center text-sm text-muted">
            Every project is unique. Final pricing depends on your requirements
            and scope — we&apos;ll walk you through it on a free discovery call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
