import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectCover
          project={project}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-sm">
          {project.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        {/* Impact metrics */}
        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
          {project.impact.map((metric) => (
            <div key={metric.label}>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-display text-xl font-semibold text-ink">
                {metric.value}
              </dd>
              <p className="mt-0.5 text-[11px] leading-tight text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </dl>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-ink/[0.04] px-2 py-1 font-mono text-[11px] text-ink/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
