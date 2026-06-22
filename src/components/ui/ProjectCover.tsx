import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Renders an on-brand, deterministic cover graphic for a project.
 * Avoids external image files entirely — fast, crisp at any size, and
 * always available offline. The motif reads as an abstract product UI.
 */
export function ProjectCover({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const id = project.slug;
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg
        viewBox="0 0 640 400"
        role="img"
        aria-label={`${project.client} project cover`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={project.cover.from} />
            <stop offset="100%" stopColor={project.cover.to} />
          </linearGradient>
          <pattern
            id={`grid-${id}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="640" height="400" fill={`url(#g-${id})`} />
        <rect width="640" height="400" fill={`url(#grid-${id})`} />

        {/* Abstract product-UI motif: stacked cards + a chart line */}
        <g opacity="0.95">
          <rect x="40" y="56" width="220" height="40" rx="10" fill="rgba(255,255,255,0.16)" />
          <rect x="40" y="112" width="150" height="14" rx="7" fill="rgba(255,255,255,0.28)" />
          <rect x="40" y="136" width="110" height="14" rx="7" fill="rgba(255,255,255,0.18)" />

          <rect x="40" y="196" width="260" height="150" rx="16" fill="rgba(255,255,255,0.12)" />
          <polyline
            points="60,316 110,286 160,300 210,250 260,272"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[60, 110, 160, 210, 260].map((x, i) => (
            <circle
              key={x}
              cx={x}
              cy={[316, 286, 300, 250, 272][i]}
              r="4"
              fill="#fff"
            />
          ))}

          <rect x="336" y="196" width="264" height="70" rx="14" fill="rgba(255,255,255,0.16)" />
          <rect x="336" y="276" width="264" height="70" rx="14" fill="rgba(255,255,255,0.1)" />

          <circle cx="540" cy="96" r="56" fill="rgba(255,255,255,0.14)" />
          <circle cx="540" cy="96" r="56" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeDasharray="60 240" />
        </g>

        {/* Client wordmark */}
        <text
          x="40"
          y="382"
          fontFamily="ui-monospace, monospace"
          fontSize="13"
          letterSpacing="2"
          fill="rgba(255,255,255,0.85)"
        >
          {project.client.toUpperCase()} — {project.year}
        </text>
      </svg>
    </div>
  );
}
