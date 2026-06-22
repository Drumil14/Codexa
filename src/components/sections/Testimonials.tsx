import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="testimonials"
          title="What clients say after launch"
          lead="The real measure of our work is whether teams want to keep building with us. Most do."
          align="center"
        />

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <Quote className="h-7 w-7 text-accent/30" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-mono text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-muted">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
