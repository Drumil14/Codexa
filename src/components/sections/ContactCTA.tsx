import { ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-accent px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0 blueprint-dark opacity-40"
            />
            <div
              aria-hidden
              className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">
                / ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.7rem]">
                Let&apos;s build something your customers will love
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                Book a free 30-minute call. We&apos;ll talk through your goals
                and tell you honestly whether we&apos;re the right fit.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full bg-white text-ink hover:bg-ink hover:text-white sm:w-auto"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Call
                </Button>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/10 sm:w-auto"
                >
                  {SITE.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
