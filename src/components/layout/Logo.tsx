import { cn } from "@/lib/utils";

/**
 * Codexa brand mark.
 *
 * A solid, geometric monogram: a confident rounded-square tile holding a
 * custom-drawn "C" aperture, with a single accent "cursor" node resting in the
 * opening — a quiet nod to a code editor without any AI-startup cliché.
 *
 * Monochrome by design. The tile/glyph invert on dark surfaces so the mark
 * stays crisp on both the light navbar and the dark footer.
 */
export function Mark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  // On light backgrounds: ink tile, paper glyph. On dark: paper tile, ink glyph.
  const tile = dark ? "#FAFAFB" : "#0B0E16";
  const glyph = dark ? "#0B0E16" : "#FAFAFB";

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Codexa"
    >
      <rect width="40" height="40" rx="11" fill={tile} />
      <path
        d="M22.5 12.6 H17 Q12.5 12.6 12.5 17.4 V22.6 Q12.5 27.4 17 27.4 H22.5"
        fill="none"
        stroke={glyph}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="25.8" y="17" width="6" height="6" rx="1.9" fill="#4D5DFB" />
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
          "font-display text-lg font-semibold tracking-tight",
          dark ? "text-white" : "text-ink",
        )}
      >
        Codexa
      </span>
    </span>
  );
}
