import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/types";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <Link
      href="/services"
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
