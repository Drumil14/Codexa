import { cn } from "@/lib/utils";

/**
 * Codexa logo: a monospace bracket mark + wordmark. The brackets nod to code
 * without resorting to a generic "</>" cliché.
 */
export function Logo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-base font-bold text-white"
        aria-hidden
      >
        C
      </span>
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
