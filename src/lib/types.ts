import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  deliverables: string[];
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  year: string;
  /** One-line overview shown on cards. */
  summary: string;
  /** Full case-study narrative. */
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  impact: { label: string; value: string }[];
  /** Two hex stops used to generate the on-brand cover art. */
  cover: { from: string; to: string };
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Stat = {
  value: string;
  label: string;
};

export type PricingTier = {
  name: string;
  /** e.g. "$999" */
  price: string;
  /** Short positioning line under the name. */
  tagline: string;
  features: string[];
  /** e.g. "2 weeks delivery" */
  delivery: string;
  /** Highlighted as the recommended option. */
  featured?: boolean;
};
