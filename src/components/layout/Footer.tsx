import Link from "next/link";
import { Github, Linkedin, Twitter, Dribbble, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SERVICES } from "@/lib/data";
import { SITE } from "@/lib/utils";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 blueprint-dark opacity-60" />
      <div className="container-x relative">
        {/* Top CTA strip */}
        <div className="flex flex-col gap-6 border-b border-line-dark py-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">
              / let&apos;s build
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-white/60">
              Tell us what you&apos;re building. We&apos;ll reply within one business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-accent hover:text-white"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              Pages
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="text-white/50">{SITE.location}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Github, href: SITE.socials.github, label: "GitHub" },
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: SITE.socials.x, label: "X" },
                { Icon: Dribbble, href: SITE.socials.dribbble, label: "Dribbble" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-line-dark text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-line-dark py-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Codexa. All rights reserved.</p>
          <p className="font-mono text-xs">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
