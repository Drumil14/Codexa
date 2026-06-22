import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="services"
            title="Everything you need to ship and grow"
            lead="From a first marketing site to complex internal software, we cover the full lifecycle of building for the web."
          />
          <Link
            href="/services"
            className="group hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-600 md:inline-flex"
          >
            All services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
