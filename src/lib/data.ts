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
} from "lucide-react";
import type {
  NavItem,
  Service,
  Project,
  Testimonial,
  ProcessStep,
  Value,
  Stat,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    summary: "Marketing sites engineered to convert visitors into customers.",
    description:
      "Fast, accessible, search-optimized sites that turn traffic into qualified leads. Built on a modern stack so your team can ship updates without waiting on developers.",
    icon: Globe,
    features: ["Conversion-focused design", "SEO foundations", "CMS for your team", "Core Web Vitals tuned"],
    deliverables: ["Design system", "Responsive build", "Analytics setup", "Launch support"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    summary: "Storefronts that load fast, rank well, and sell more.",
    description:
      "Headless and platform-based commerce that handles real catalog scale. We optimize the full funnel — from product discovery to a checkout that doesn't leak revenue.",
    icon: ShoppingCart,
    features: ["Headless or Shopify", "Optimized checkout", "Inventory integrations", "Payment & tax setup"],
    deliverables: ["Storefront build", "Cart & checkout", "Payment integration", "Performance audit"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary: "Custom SaaS and product builds, from MVP to scale.",
    description:
      "Full-stack applications with authentication, billing, and real-time features. We architect for maintainability so the product can grow without a rewrite.",
    icon: Code2,
    features: ["Auth & billing", "Real-time data", "API architecture", "Cloud deployment"],
    deliverables: ["Technical spec", "Production app", "CI/CD pipeline", "Documentation"],
  },
  {
    slug: "dashboards",
    title: "Dashboard & Internal Tools",
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
      "We audit your current site, keep what converts, and rebuild the rest on a faster, cleaner foundation — protecting SEO equity through the migration.",
    icon: Paintbrush,
    features: ["UX & performance audit", "Brand refresh", "SEO-safe migration", "Phased rollout"],
    deliverables: ["Audit report", "New design", "Migration plan", "Redirect strategy"],
  },
  {
    slug: "maintenance",
    title: "Website Maintenance",
    summary: "Ongoing care so your site stays fast, secure, and current.",
    description:
      "Proactive monitoring, security patches, performance tuning, and a monthly improvement budget. Think of us as your fractional engineering team.",
    icon: ShieldCheck,
    features: ["Uptime monitoring", "Security updates", "Monthly improvements", "Priority support"],
    deliverables: ["Monitoring setup", "Monthly reports", "Update cycles", "SLA support"],
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
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "AWS"],
    impact: [
      { label: "Faster quotes", value: "70%" },
      { label: "Manual hours saved / wk", value: "120" },
      { label: "Customer NPS", value: "+34" },
    ],
    cover: { from: "#4D5DFB", to: "#9B6CFB" },
  },
  {
    slug: "lumen-skincare",
    client: "Lumen",
    title: "Headless storefront that doubled conversion",
    industry: "Beauty & E-Commerce",
    year: "2024",
    summary:
      "A rebuild from a slow legacy theme to a headless storefront with a frictionless, single-page checkout.",
    technologies: ["Next.js", "Shopify Hydrogen", "Tailwind", "Vercel"],
    impact: [
      { label: "Conversion rate", value: "2.1x" },
      { label: "Page load", value: "0.9s" },
      { label: "Mobile revenue", value: "+58%" },
    ],
    cover: { from: "#FB7185", to: "#F59E0B" },
  },
  {
    slug: "atlas-fintech",
    client: "Atlas",
    title: "SaaS dashboard for real-time portfolio analytics",
    industry: "Fintech",
    year: "2023",
    summary:
      "A real-time analytics product with streaming data, custom charting, and enterprise-grade access controls.",
    technologies: ["React", "TypeScript", "WebSockets", "D3", "Node.js"],
    impact: [
      { label: "Daily active users", value: "12k" },
      { label: "Data latency", value: "<200ms" },
      { label: "Churn reduction", value: "-22%" },
    ],
    cover: { from: "#06B6D4", to: "#4D5DFB" },
  },
  {
    slug: "meridian-health",
    client: "Meridian",
    title: "Patient intake tool for a growing clinic network",
    industry: "Healthcare",
    year: "2023",
    summary:
      "A HIPAA-conscious intake and scheduling tool that eliminated paper forms across 14 locations.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    impact: [
      { label: "Intake time", value: "-65%" },
      { label: "Locations live", value: "14" },
      { label: "Paper forms removed", value: "100%" },
    ],
    cover: { from: "#10B981", to: "#06B6D4" },
  },
  {
    slug: "forge-studios",
    client: "Forge",
    title: "Marketing site rebuild for a design studio",
    industry: "Creative Agency",
    year: "2024",
    summary:
      "A high-craft marketing site with motion-led storytelling that lifted inbound leads within a quarter.",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
    impact: [
      { label: "Inbound leads", value: "+140%" },
      { label: "Bounce rate", value: "-31%" },
      { label: "Lighthouse", value: "99" },
    ],
    cover: { from: "#8B5CF6", to: "#EC4899" },
  },
  {
    slug: "vertex-manufacturing",
    client: "Vertex",
    title: "Internal operations hub for manufacturing",
    industry: "Manufacturing",
    year: "2023",
    summary:
      "A central operations dashboard unifying inventory, orders, and floor metrics into one live view.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Docker"],
    impact: [
      { label: "Reporting speed", value: "10x" },
      { label: "Systems unified", value: "6" },
      { label: "Errors reduced", value: "-48%" },
    ],
    cover: { from: "#F59E0B", to: "#EF4444" },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Codexa shipped in eight weeks what our last agency couldn't finish in six months. The code was clean enough that our own team could take it from there.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Northwind",
    initials: "SC",
  },
  {
    quote:
      "Our checkout went from a liability to our best-performing surface. Revenue per visitor is up and the site has never been faster.",
    name: "Marcus Webb",
    role: "Founder",
    company: "Lumen",
    initials: "MW",
  },
  {
    quote:
      "They understood the business problem before writing a line of code. The dashboard they built is now the tool our whole team lives in.",
    name: "Priya Nair",
    role: "Head of Operations",
    company: "Atlas",
    initials: "PN",
  },
  {
    quote:
      "Communication was excellent and the work was meticulous. It genuinely felt like an extension of our own engineering team.",
    name: "David Okafor",
    role: "CTO",
    company: "Vertex",
    initials: "DO",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with your goals, not our tech. A focused discovery sprint maps the problem, the users, and the metric that defines success.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design the experience and the architecture together — wireframes, a real design system, and a technical plan you can sign off on.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Production-grade code from day one, shipped in weekly increments. You see working software early and often, never a black box.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We ship, measure, and iterate. Post-launch we tune performance and conversion so the work keeps paying off long after go-live.",
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
    title: "Senior team, no hand-offs",
    description:
      "You work directly with the engineers and designers building your product — not a rotating cast of juniors.",
    icon: Handshake,
  },
  {
    title: "Performance by default",
    description:
      "Every build targets top Core Web Vitals and Lighthouse scores. Fast sites rank higher and convert better.",
    icon: Gauge,
  },
  {
    title: "Built to scale",
    description:
      "Architecture decisions made for where you're going, so your platform grows with you instead of against you.",
    icon: LineChart,
  },
  {
    title: "Transparent process",
    description:
      "Weekly demos, shared roadmaps, and clear pricing. You always know exactly where your project stands.",
    icon: ShieldCheck,
  },
];

export const STATS: Stat[] = [
  { value: "60+", label: "Products shipped" },
  { value: "8 yrs", label: "Average team experience" },
  { value: "98", label: "Avg. Lighthouse score" },
  { value: "100%", label: "Client-owned code" },
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
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];
