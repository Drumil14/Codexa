"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMock } from "./HeroMock";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Signature blueprint grid + accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 blueprint mask-fade" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </span>
            <span className="font-mono text-xs text-muted">
              Trusted by 60+ growing teams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            We Build Websites That{" "}
            <span className="text-gradient">Grow Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Codexa is a software and web development studio. We design and build
            high-performance websites, web apps, and custom software that turn
            traffic into revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Book a Call
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href="/portfolio"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Signature animated product window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <HeroMock />
        </motion.div>
      </div>
    </section>
  );
}
