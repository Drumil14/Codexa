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
  summary: string;
  technologies: string[];
  impact: { label: string; value: string }[];
  /** Two hex stops used to generate the on-brand cover art. */
  cover: { from: string; to: string };
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
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
