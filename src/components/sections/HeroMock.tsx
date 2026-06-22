"use client";

import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const bars = [42, 64, 38, 78, 54, 88, 70];

export function HeroMock() {
  return (
    <div className="relative">
      {/* Soft platform shadow */}
      <div
        aria-hidden
        className="absolute -inset-x-8 -bottom-6 top-10 -z-10 rounded-[2rem] bg-accent/10 blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ED6A5E]" />
          <span className="h-3 w-3 rounded-full bg-[#F4BF4F]" />
          <span className="h-3 w-3 rounded-full bg-[#61C554]" />
          <div className="ml-3 flex-1">
            <div className="mx-auto w-fit rounded-md bg-white px-3 py-1 font-mono text-[11px] text-muted ring-1 ring-line">
              app.codexa.dev/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-3 sm:p-6">
          {/* Sidebar */}
          <div className="hidden flex-col gap-2 sm:flex">
            {["Overview", "Analytics", "Customers", "Settings"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease }}
                className={`rounded-lg px-3 py-2 text-sm ${
                  i === 1
                    ? "bg-accent-50 font-medium text-accent-700"
                    : "text-muted"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* Main panel */}
          <div className="sm:col-span-2">
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "Revenue", v: "$248k", d: "+18%" },
                { k: "Sessions", v: "94.2k", d: "+12%" },
                { k: "Conv. rate", v: "4.8%", d: "+0.6" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.k}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.08, ease }}
                  className="rounded-xl border border-line p-3"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {stat.k}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink">
                    {stat.v}
                  </p>
                  <p className="text-[11px] font-medium text-[#16A34A]">
                    {stat.d}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-4 rounded-xl border border-line p-4">
              <div className="flex items-end justify-between gap-2 sm:gap-3">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${h}px`, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.07, duration: 0.5, ease }}
                    className={`w-full rounded-t-md ${
                      i === bars.length - 2 ? "bg-accent" : "bg-accent/25"
                    }`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "deploy" chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, ease }}
        className="absolute -right-3 top-24 hidden items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-card md:flex"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
        </span>
        <span className="font-mono text-xs text-ink">Deployed · 0.8s</span>
      </motion.div>
    </div>
  );
}
