import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function PortfolioShowcase() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section id="work" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="recent projects"
            title="Recent projects and the results behind them"
            lead="A few recent builds and the measurable impact they had on the businesses behind them."
          />
          <Link
            href="/portfolio"
            className="group hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-600 md:inline-flex"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
