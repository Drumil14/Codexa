import {
  Globe,
  ShoppingCart,
  LayoutGrid,
  Gauge,
  Paintbrush,
  ShieldCheck,
  Rocket,
  LineChart,
  Code2,
  Handshake,
  PhoneCall,
  Compass,
  LifeBuoy,
  BadgeCheck,
} from "lucide-react";
import type {
  NavItem,
  Service,
  Project,
  ProcessStep,
  Value,
  Stat,
  PricingTier,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    summary: "Marketing sites that turn visitors into paying customers.",
    description:
      "A fast, modern website built to win trust and generate leads. Clear messaging, professional design, and a structure that makes it easy for customers to choose you.",
    icon: Globe,
    features: ["Conversion-focused design", "SEO foundations", "Easy-to-edit CMS", "Mobile-first build"],
    deliverables: ["Custom design", "Responsive build", "Analytics setup", "Launch support"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    summary: "Online stores that load fast, rank well, and sell more.",
    description:
      "Storefronts that handle real catalog scale and make buying effortless. We optimize the full funnel — from product discovery to a checkout that doesn't leak revenue.",
    icon: ShoppingCart,
    features: ["Shopify or headless", "Optimized checkout", "Inventory integrations", "Payment & tax setup"],
    deliverables: ["Storefront build", "Cart & checkout", "Payment integration", "Performance audit"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary: "Custom software, from MVP to a product that scales.",
    description:
      "Full-stack applications with authentication, databases, and dashboards. We architect for maintainability so your product can grow without a costly rewrite.",
    icon: Code2,
    features: ["Auth & user accounts", "Database integration", "API integrations", "Cloud deployment"],
    deliverables: ["Technical plan", "Production app", "Admin dashboard", "Documentation"],
  },
  {
    slug: "dashboards",
    title: "Dashboards & Internal Tools",
    summary: "Operational tools your team actually wants to use.",
    description:
      "Admin panels, analytics dashboards, and internal tooling that replace spreadsheets and manual work. Clear data, fast workflows, role-based access.",
    icon: LayoutGrid,
    features: ["Data visualization", "Role-based access", "Workflow automation", "Export & reporting"],
    deliverables: ["UX flows", "Dashboard build", "Integrations", "Team onboarding"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    summary: "Modernize an aging site without losing what works.",
    description:
      "We audit your current site, keep what converts, and rebuild the rest on a faster, cleaner foundation — protecting your search rankings through the migration.",
    icon: Paintbrush,
    features: ["UX & performance audit", "Brand refresh", "SEO-safe migration", "Phased rollout"],
    deliverables: ["Audit report", "New design", "Migration plan", "Redirect strategy"],
  },
  {
    slug: "maintenance",
    title: "Website Care & Support",
    summary: "Ongoing care so your site stays fast, secure, and current.",
    description:
      "Proactive monitoring, security updates, performance tuning, and a monthly improvement budget. Think of us as your on-call web team.",
    icon: ShieldCheck,
    features: ["Uptime monitoring", "Security updates", "Monthly improvements", "Priority support"],
    deliverables: ["Monitoring setup", "Monthly reports", "Update cycles", "Support SLA"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "northwind-logistics",
    client: "Northwind",
    title: "Logistics platform that cut quote time by 70%",
    industry: "Logistics & Supply Chain",
    year: "2024",
    summary:
      "A customer portal and internal pricing dashboard replacing a tangle of spreadsheets and email threads.",
    overview:
      "Northwind is a regional freight company quoting hundreds of shipments a week. Their sales team relied on spreadsheets and email to price and track every job.",
    problem:
      "Quoting took hours, numbers were inconsistent between reps, and customers had no way to check the status of a shipment without calling in.",
    solution:
      "We built a customer-facing portal backed by an internal pricing dashboard, with a shared rate engine, role-based access, and live shipment tracking on a modern, typed stack.",
    outcome:
      "Quotes that once took half a day now take minutes, pricing is consistent across the team, and support calls dropped sharply as customers self-serve.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "AWS"],
    impact: [
      { label: "Faster quotes", value: "70%" },
      { label: "Hours saved / wk", value: "120" },
      { label: "Customer NPS", value: "+34" },
    ],
    cover: { from: "#1F2747", to: "#4D5DFB" },
  },
  {
    slug: "lumen-skincare",
    client: "Lumen",
    title: "Online store rebuild that doubled conversion",
    industry: "Retail & E-Commerce",
    year: "2024",
    summary:
      "A rebuild from a slow legacy theme to a fast storefront with a frictionless, single-page checkout.",
    overview:
      "Lumen is a growing skincare brand selling direct to consumers. Their store ran on an aging theme that was slow on mobile, where most of their customers shopped.",
    problem:
      "Pages took seconds to load, the checkout was clunky on phones, and the brand was quietly losing sales it had already paid to acquire.",
    solution:
      "We rebuilt the storefront for speed, redesigned product pages around the brand, and replaced the checkout with a streamlined, single-page mobile flow.",
    outcome:
      "Conversion rate doubled, pages load in under a second, and mobile — their largest channel — became their best-performing one.",
    technologies: ["Next.js", "Shopify", "Tailwind", "Vercel"],
    impact: [
      { label: "Conversion rate", value: "2.1x" },
      { label: "Page load", value: "0.9s" },
      { label: "Mobile revenue", value: "+58%" },
    ],
    cover: { from: "#5A2A44", to: "#C2557A" },
  },
  {
    slug: "atlas-fintech",
    client: "Atlas",
    title: "Analytics dashboard for real-time portfolios",
    industry: "Fintech",
    year: "2023",
    summary:
      "A real-time analytics product with streaming data, custom charts, and enterprise-grade access controls.",
    overview:
      "Atlas needed a product that gave their clients a live view of portfolio performance, replacing static reports their analysts assembled by hand.",
    problem:
      "Reports were stale the moment they were sent, building them ate analyst time, and clients wanted to explore their own numbers on demand.",
    solution:
      "We designed and built a real-time dashboard with streaming data, custom charting, saved views, and granular, role-based permissions for enterprise clients.",
    outcome:
      "Clients now self-serve up-to-the-second insights, analysts reclaimed days each month, and the live data became a reason customers stayed.",
    technologies: ["React", "TypeScript", "WebSockets", "D3", "Node.js"],
    impact: [
      { label: "Daily active users", value: "12k" },
      { label: "Data latency", value: "<200ms" },
      { label: "Churn reduction", value: "-22%" },
    ],
    cover: { from: "#10303F", to: "#2E8FA8" },
  },
  {
    slug: "meridian-health",
    client: "Meridian",
    title: "Patient intake tool for a growing clinic network",
    industry: "Healthcare",
    year: "2023",
    summary:
      "A privacy-conscious intake and scheduling tool that eliminated paper forms across 14 locations.",
    overview:
      "Meridian runs a network of clinics that were onboarding every new patient with paper forms re-keyed by front-desk staff.",
    problem:
      "Paper intake was slow, error-prone, and inconsistent across locations, and staff spent hours each day transcribing forms into their systems.",
    solution:
      "We built a privacy-conscious digital intake and scheduling tool with validated forms, that patients complete before they arrive, rolled out across every location.",
    outcome:
      "Intake time fell by two thirds, transcription errors disappeared, and all 14 locations now run on one consistent, paperless workflow.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    impact: [
      { label: "Intake time", value: "-65%" },
      { label: "Locations live", value: "14" },
      { label: "Paper forms removed", value: "100%" },
    ],
    cover: { from: "#15433B", to: "#2E9E86" },
  },
  {
    slug: "forge-studios",
    client: "Forge",
    title: "Marketing site rebuild for a design studio",
    industry: "Creative Agency",
    year: "2024",
    summary:
      "A high-craft marketing site with motion-led storytelling that lifted inbound leads within a quarter.",
    overview:
      "Forge is a boutique design studio whose old website didn't reflect the quality of their work or bring in the right kind of clients.",
    problem:
      "The site looked dated, loaded slowly, and buried the work, so strong prospects bounced before they ever saw what Forge could do.",
    solution:
      "We rebuilt the site around their portfolio with considered typography, smooth motion, and a fast, accessible foundation that puts the work first.",
    outcome:
      "Inbound leads more than doubled in a quarter, bounce rate dropped, and the studio finally had a site worth sending to dream clients.",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
    impact: [
      { label: "Inbound leads", value: "+140%" },
      { label: "Bounce rate", value: "-31%" },
      { label: "Lighthouse", value: "99" },
    ],
    cover: { from: "#332652", to: "#7A5BC0" },
  },
  {
    slug: "vertex-manufacturing",
    client: "Vertex",
    title: "Internal operations hub for manufacturing",
    industry: "Manufacturing",
    year: "2023",
    summary:
      "A central operations dashboard unifying inventory, orders, and floor metrics into one live view.",
    overview:
      "Vertex managed production across six disconnected systems, with managers stitching numbers together by hand to understand the floor.",
    problem:
      "Data lived in silos, reporting was slow and manual, and small errors crept in every time figures were copied between tools.",
    solution:
      "We built a single operations hub that pulls inventory, orders, and floor metrics into one live dashboard, with automated reporting in place of spreadsheets.",
    outcome:
      "Reporting that took hours is now instant, six systems feed one source of truth, and data-entry errors dropped by nearly half.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Docker"],
    impact: [
      { label: "Reporting speed", value: "10x" },
      { label: "Systems unified", value: "6" },
      { label: "Errors reduced", value: "-48%" },
    ],
    cover: { from: "#4A2F18", to: "#C0813C" },
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation about your business, your customers, and exactly what you need the website to do.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "We map the site structure and create a clear, user-focused design you sign off on before a line of code is written.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build a fast, responsive, and scalable website with clean, maintainable code — and show you progress as we go.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Thorough testing, performance optimization, and a smooth deployment so your new site goes live without surprises.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Ongoing Support",
    description:
      "Maintenance, updates, and future improvements so your site keeps performing long after launch day.",
    icon: LifeBuoy,
  },
];

export const VALUES: Value[] = [
  {
    title: "Business outcomes first",
    description:
      "We measure success in your metrics — leads, revenue, hours saved — not in features shipped or lines of code.",
    icon: LineChart,
  },
  {
    title: "Engineering you can build on",
    description:
      "Clean, typed, documented code. No lock-in, no mystery. Your team can pick up where we leave off.",
    icon: Code2,
  },
  {
    title: "Speed without shortcuts",
    description:
      "We move fast in tight increments, but never at the cost of accessibility, performance, or maintainability.",
    icon: Rocket,
  },
  {
    title: "A real partnership",
    description:
      "Direct access to the people doing the work, clear communication, and honest timelines. No account-manager telephone game.",
    icon: Handshake,
  },
];

export const WHY_CHOOSE: Value[] = [
  {
    title: "Built to bring you customers",
    description:
      "Every page is designed around one job: turning visitors into enquiries, calls, and sales — not just looking good in a portfolio.",
    icon: LineChart,
  },
  {
    title: "Fast and mobile-first",
    description:
      "Most of your traffic is on a phone. We build sites that load in under a second and look sharp on every screen size.",
    icon: Gauge,
  },
  {
    title: "A brand that earns trust",
    description:
      "Professional design and clear messaging that make your business look established and credible from the first scroll.",
    icon: BadgeCheck,
  },
  {
    title: "Clear pricing and real support",
    description:
      "Fixed quotes agreed up front, honest timelines, and a team that's still here to help long after you go live.",
    icon: Handshake,
  },
];

export const STATS: Stat[] = [
  { value: "50+", label: "Websites & apps launched" },
  { value: "<1s", label: "Typical load time" },
  { value: "98", label: "Avg. Lighthouse score" },
  { value: "100%", label: "Client-owned code" },
];

export const PRICING: PricingTier[] = [
  {
    name: "Starter Website",
    price: "$999",
    tagline: "A professional online presence for new and small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "SEO basics",
    ],
    delivery: "2 weeks delivery",
  },
  {
    name: "Business Website",
    price: "$2,499",
    tagline: "A custom, content-managed site built to generate leads.",
    features: [
      "Custom design",
      "CMS integration",
      "Analytics setup",
      "Performance optimization",
    ],
    delivery: "3–4 weeks delivery",
    featured: true,
  },
  {
    name: "Custom Web Application",
    price: "$4,999",
    tagline: "Software tailored to how your business actually works.",
    features: [
      "Authentication",
      "Database integration",
      "Admin dashboard",
      "API integrations",
      "Custom functionality",
    ],
    delivery: "Timeline scoped to your project",
  },
];

export const TECH_STACK: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Vercel",
  "Prisma",
  "Framer Motion",
  "Figma",
];

export const BUDGET_RANGES: string[] = [
  "Under $1k",
  "$1k – $2.5k",
  "$2.5k – $5k",
  "$5k – $10k",
  "$10k+",
  "Not sure yet",
];
