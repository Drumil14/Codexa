import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Blueprint grid */}
            <div aria-hidden className="absolute inset-0 blueprint-dark opacity-40" />
            {/* Accent glow spots */}
            <div
              aria-hidden
              className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[120px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[120px]"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                / ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.7rem]">
                Let&apos;s build something<br className="hidden sm:block" />{" "}
                your customers will love
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/55 sm:text-lg">
                Book a free 30-minute call. We&apos;ll talk through your goals
                and tell you honestly whether we&apos;re the right fit.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-white/90 sm:w-auto"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Call
                </Link>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/[0.07] sm:w-auto"
                >
                  {SITE.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Client testimonial */}
              <figure className="mx-auto mt-12 max-w-lg border-t border-white/[0.08] pt-10">
                <blockquote>
                  <p className="text-base italic leading-relaxed text-white/45">
                    &ldquo;Quotes that once took half a day now take minutes,
                    pricing is consistent across the team, and support calls
                    dropped sharply as customers self-serve.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-white/15" />
                  <cite className="font-mono text-[11px] not-italic uppercase tracking-[0.14em] text-white/30">
                    Northwind Logistics
                  </cite>
                  <span className="h-px w-8 bg-white/15" />
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
