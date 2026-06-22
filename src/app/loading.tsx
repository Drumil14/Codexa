export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-xl bg-accent/20" />
          <span className="absolute inset-0 grid place-items-center rounded-xl bg-accent font-mono text-lg font-bold text-white">
            C
          </span>
          <span className="absolute -inset-1 animate-ping rounded-xl bg-accent/20" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
