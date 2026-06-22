import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="absolute inset-0 -z-10 blueprint mask-fade" />
      <div className="container-x text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent-600">
          404 — not found
        </p>
        <h1 className="mx-auto mt-5 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          This page took a wrong turn
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
