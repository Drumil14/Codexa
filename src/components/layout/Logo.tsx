import { cn } from "@/lib/utils";

/**
 * Codexa brand mark.
 *
 * A diamond formed by two angular brackets framing a faceted emblem — a
 * geometric, monochrome mark with no AI-startup clichés. Rendered as vector so
 * it stays crisp at any size; the color flips on dark surfaces so the mark
 * stays legible on both the light navbar and the dark footer.
 */
export function Mark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const c = dark ? "#FAFAFB" : "#0B0E16";

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Codexa"
      fill="none"
    >
      {/* Diamond brackets */}
      <path
        d="M43 20 L13 50 L43 80"
        stroke={c}
        strokeWidth="13"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M57 20 L87 50 L57 80"
        stroke={c}
        strokeWidth="13"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      {/* Faceted emblem */}
      <path
        d="M34 62 L34 53 L45 43 L50 47 L55 43 L66 53 L66 62 L57 62 L57 55 L43 55 L43 62 Z"
        fill={c}
      />
    </svg>
  );
}

export function Logo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark dark={dark} />
      <span
        className={cn(
          "font-display text-lg font-semibold uppercase tracking-[0.16em]",
          dark ? "text-white" : "text-ink",
        )}
      >
        Codexa
      </span>
    </span>
  );
}
