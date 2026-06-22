import type { Project } from "@/lib/types";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { cn } from "@/lib/utils";

/**
 * Full case-study layout for the portfolio page. Presents each project as a
 * structured story: Overview → Problem → Solution → Technologies → Outcome.
 */
export function CaseStudy({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <div className="grid lg:grid-cols-2">
        {/* Visual */}
        <div
          className={cn(
            "relative min-h-[280px] lg:min-h-[520px]",
            reversed && "lg:order-last",
          )}
        >
          <ProjectCover project={project} className="absolute inset-0 h-full w-full" />
          <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-sm">
            {project.industry}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col p-7 sm:p-10">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <span>{project.client}</span>
            <span aria-hidden className="h-px w-5 bg-line" />
            <span>{project.year}</span>
          </div>

          <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            {project.title}
          </h2>

          <div className="mt-5 space-y-5">
            <Block label="Overview" body={project.overview} />
            <Block label="Problem" body={project.problem} />
            <Block label="Solution" body={project.solution} />
          </div>

          {/* Technologies */}
          <div className="mt-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-ink/[0.04] px-2.5 py-1 font-mono text-[11px] text-ink/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="mt-7 rounded-2xl border border-line bg-paper p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-600">
              Outcome
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {project.outcome}
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
              {project.impact.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {metric.value}
                  </dd>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {label}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
