"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMock } from "./HeroMock";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const highlights = [
  "More leads",
  "Faster websites",
  "Mobile-optimized",
  "Built to rank",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Signature blueprint grid + subtle accent wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 blueprint mask-fade" />
        <div className="absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16A34A]" />
            </span>
            <span className="font-mono text-xs text-muted">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            We build websites that{" "}
            <span className="text-accent">grow your business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Codexa is a web design and development studio. We build fast, modern
            websites and web apps that help businesses get found, earn trust, and
            turn visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href="/portfolio"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              View our work
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Signature animated product window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <HeroMock />
        </motion.div>
      </div>
    </section>
  );
}
