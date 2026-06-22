import { cn } from "@/lib/utils";

/**
 * Monospace eyebrow rendered as a faux file path (e.g. "/services").
 * This path-style label is a recurring brand signature tying the UI to code.
 */
export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]",
        dark ? "text-accent-400" : "text-accent-600",
        className,
      )}
    >
      <span aria-hidden className="opacity-50">
        /
      </span>
      {children}
    </span>
  );
}
