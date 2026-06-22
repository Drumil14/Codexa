"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-600 shadow-[0_8px_24px_-10px_rgba(77,93,251,0.7)]",
  secondary: "bg-ink text-white hover:bg-ink-700 ring-1 ring-inset ring-ink/10",
  ghost:
    "bg-transparent text-ink ring-1 ring-inset ring-line hover:ring-ink/30 hover:bg-ink/[0.03]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const hover = { y: -2 };
const tap = { y: 0, scale: 0.98 };
const spring = { type: "spring", stiffness: 400, damping: 24 } as const;

const MotionLink = motion.create(Link);

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
  rel?: string;
  prefetch?: ComponentProps<typeof Link>["prefetch"];
  "aria-label"?: string;
  onClick?: () => void;
};

/** Internal link styled as a button, with a subtle motion micro-interaction. */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <MotionLink
      href={href}
      whileHover={hover}
      whileTap={tap}
      transition={spring}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </MotionLink>
  );
}

type ButtonActionProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

/** Same styling as Button, but renders a native <button> for actions. */
export function ButtonAction({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonActionProps) {
  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      transition={spring}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
