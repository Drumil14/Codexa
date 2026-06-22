/**
 * Lightweight className joiner. Filters out falsy values so you can write
 * conditional classes without pulling in extra dependencies.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}

export const SITE = {
  name: "Codexa",
  domain: "https://codexa.dev",
  tagline: "We Build Websites That Grow Businesses",
  description:
    "Codexa is a software and web development studio. We build high-performance websites, web apps, dashboards, and custom software that move real business metrics.",
  email: "hello@codexa.dev",
  phone: "+1 (555) 012-8890",
  location: "Remote-first · New York · Worldwide",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    dribbble: "https://dribbble.com",
  },
} as const;
