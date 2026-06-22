# Codexa — Agency Website

A modern, production-ready marketing site for **Codexa**, a software & web
development studio. Built with Next.js 15 (App Router), TypeScript, Tailwind
CSS, and Framer Motion.

## Highlights

- **5 pages** — Home, Services, Portfolio, About, Contact
- **Sticky, scroll-aware navbar** with an animated full-screen mobile menu
- **Framer Motion** scroll-reveal animations and hover micro-interactions
- **Working contact form** with validation, loading and success states, posting
  to an API route you can wire to email/Slack/CRM
- **SEO-ready** — per-page metadata, Open Graph, JSON-LD, dynamic `sitemap.xml`
  and `robots.txt`
- **Accessible & fast** — semantic HTML, visible keyboard focus, reduced-motion
  support, no external image dependencies (cover art is generated SVG)
- **Reusable component architecture** with a central content data layer

## Getting started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, navbar, footer
│   ├── page.tsx            # Home
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts# Contact form endpoint (wire to email here)
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   ├── loading.tsx         # Route-level loading state
│   ├── not-found.tsx       # 404
│   ├── icon.svg            # Favicon
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Footer, Logo
│   ├── sections/           # Home page sections (Hero, Services, etc.)
│   ├── ui/                 # Reusable primitives (Button, Reveal, cards…)
│   └── forms/              # ContactForm
└── lib/
    ├── data.ts             # All site content lives here
    ├── types.ts
    └── utils.ts            # cn() helper + SITE config
```

## Customizing

- **Content** — edit `src/lib/data.ts` (services, projects, testimonials,
  process, stats) and `SITE` in `src/lib/utils.ts` (name, email, phone, socials).
- **Brand colors / fonts** — `tailwind.config.ts` and the font imports in
  `src/app/layout.tsx`.
- **Contact form delivery** — open `src/app/api/contact/route.ts`; there's a
  commented example for sending email with Resend, plus notes for Slack/CRM.
- **Domain** — update `SITE.domain` in `src/lib/utils.ts` so metadata, sitemap,
  and JSON-LD use your real URL.

## Deploy

This deploys cleanly to **Vercel** (recommended), Netlify, or any Node host.

```bash
# Vercel
npx vercel
```

Set any environment variables your contact integration needs (e.g.
`RESEND_API_KEY`) in your host's dashboard.

---

Built with Next.js · TypeScript · Tailwind CSS · Framer Motion.
