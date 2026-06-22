import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Codexa. Tell us what you're building and we'll get back to you within one business day.",
};

const channels = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: MapPin, label: "Where we are", value: SITE.location },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="contact"
        title="Tell us what you're building"
        lead="Fill out the form and we'll get back to you within one business day. The more you can share about your goals, the more useful our first reply will be."
      />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Details */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="space-y-2">
                  {channels.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-accent/30">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-50 text-accent-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                            {c.label}
                          </p>
                          <p className="mt-1 font-medium text-ink">{c.value}</p>
                        </div>
                      </div>
                    );
                    return c.href ? (
                      <a key={c.label} href={c.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={c.label}>{content}</div>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 rounded-xl border border-line bg-ink p-6 text-white">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-400">
                    / what happens next
                  </p>
                  <ol className="mt-4 space-y-3 text-sm text-white/70">
                    <li>1. We review your message and goals.</li>
                    <li>2. We reply with questions or a call invite.</li>
                    <li>3. Together we shape the right scope and plan.</li>
                  </ol>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
