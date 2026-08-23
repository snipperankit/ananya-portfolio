# Ananya Rao — Portfolio

Professional portfolio for Ananya Rao — Project Management Specialist, Release Train Engineer & Scrum Master. Built with Astro, Tailwind CSS, and Decap CMS.

**Live:** https://ananya-rao-portfolio.com  
**CMS:** https://ananya-rao-portfolio.com/admin/

---

## Architecture Overview

```
┌──────────────┐     ┌──────────────┐     ┌───────────────────┐
│   Decap CMS  │────▶│    GitHub     │────▶│      Vercel       │
│  /admin/     │     │  main branch │     │  Build & Deploy   │
│  (Browser)   │     │  MDX content │     │  Static site CDN  │
└──────┬───────┘     └──────────────┘     └────────┬──────────┘
       │                                           │
       ▼                                           ▼
┌──────────────┐                          ┌───────────────────┐
│  Cloudflare  │                          │   Cloudflare DNS  │
│  Worker      │                          │  ananya-rao-      │
│  OAuth Proxy │                          │  portfolio.com    │
└──────────────┘                          └───────────────────┘
```

### Infrastructure

| Service        | Role                         | Plan         |
| -------------- | ---------------------------- | ------------ |
| **Vercel**     | Hosting, build, CDN          | Hobby (free) |
| **GitHub**     | Source code, content storage | Free         |
| **Cloudflare** | DNS, domain, OAuth Worker    | Free         |
| **Decap CMS**  | Content management UI        | Open source  |

### Tech Stack

| Layer     | Technology                                              |
| --------- | ------------------------------------------------------- |
| Framework | Astro 5 (static site generator)                         |
| Styling   | Tailwind CSS 3, dark mode (`class` strategy)            |
| Fonts     | Newsreader (display), Space Grotesk (UI), IBM Plex Mono |
| Content   | MDX with block-based frontmatter                        |
| CMS       | Decap CMS 3.15.1 (GitHub OAuth via Cloudflare Worker)   |
| i18n      | EN (default) + DE under `/de/*`                         |

---

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Responsive nav + hamburger + theme toggle
│   ├── Footer.astro          # Links, copyright, impressum
│   ├── ContactToast.astro    # LinkedIn + email toast popup
│   ├── CertBadge.astro       # Inline SVG cert icons
│   └── pages/
│       ├── HomePage.astro    # Landing: hero, stats, certs, selected work, CTA
│       ├── AboutPage.astro   # Bio, work timeline, education, certifications
│       ├── CaseStudiesPage.astro  # Card grid for blog posts
│       ├── InsightsPage.astro     # Card grid for insights
│       └── ImpressumPage.astro    # Legal notice (DE/EN)
├── content/
│   ├── blog/*.mdx            # Case studies (block-based body)
│   └── casestudies/*.mdx     # Insights (block-based body)
├── data/
│   └── profile.ts            # Experience, education, certs, contact (EN+DE)
├── i18n.ts                   # Translations and localizePath helper
├── consts.ts                 # Site name, role, nav links
├── layouts/
│   └── Layout.astro          # Shell: fonts, theme, header/footer
├── pages/
│   ├── index.astro           # EN home
│   ├── about.astro           # EN about
│   ├── blog/                 # EN case studies listing + [slug] detail
│   ├── work/                 # EN insights listing + [...slug] detail
│   ├── impressum.astro       # EN legal notice
│   └── de/                   # DE pages (index, about, blog, work, impressum)
└── styles/
    └── global.css            # Base styles
public/
├── admin/
│   ├── config.yml            # CMS collection config
│   └── index.html            # CMS entry point
├── logos/                    # Customer + certification logos
└── uploads/                  # CMS media uploads
```

---

## Routes

| Path           | Page                      |
| -------------- | ------------------------- |
| `/`            | Home (EN)                 |
| `/about`       | About (EN)                |
| `/blog`        | Case Studies listing (EN) |
| `/blog/[slug]` | Case Study detail (EN)    |
| `/work`        | Insights listing (EN)     |
| `/work/[slug]` | Insight detail (EN)       |
| `/impressum`   | Legal notice (EN)         |
| `/de/*`        | German versions of above  |
| `/admin/`      | CMS admin panel           |

---

## Local Development

```bash
npm install
npm run dev          # http://localhost:4321
```

### Local CMS editing

```bash
# Terminal 1
npm run dev

# Terminal 2
npx decap-server     # Proxy on port 8081
```

Add `local_backend: true` to the top of `public/admin/config.yml` for local use.  
Remove it before pushing to production.

Open http://localhost:4321/admin/ to edit content locally.

### Build & Preview

```bash
npm run build        # Outputs to dist/
npm run preview      # Serves dist/ locally
```

---

## Content Management

### Where to edit

| Want to change…                   | Edit                                   |
| --------------------------------- | -------------------------------------- |
| Name, role, nav                   | `src/consts.ts`                        |
| Colors, fonts                     | `tailwind.config.cjs`                  |
| Translations                      | `src/i18n.ts`                          |
| Work experience, education, certs | `src/data/profile.ts`                  |
| Case study content                | `src/content/blog/*.mdx` or CMS        |
| Insight content                   | `src/content/casestudies/*.mdx` or CMS |
| CMS form fields                   | `public/admin/config.yml`              |

### Add a case study via CMS

1. Go to https://ananya-rao-portfolio.com/admin/
2. Login with GitHub
3. Click **Case Studies** → **New**
4. Fill in Title, Date, Description, Skills/Tags
5. Add body blocks (Heading, Text, Image, Quote, etc.)
6. Click **Publish** → Vercel auto-deploys in ~1 min

### Add a case study by hand

Create `src/content/blog/my-post.mdx`:

```yaml
---
title: "My Case Study"
date: "2026-01-15"
eyebrow: "Case Study"
description: "Short description for the card view."
skills:
  - SAFe
  - PI Planning
blocks:
  - type: heading
    level: 2
    text: "Context"
  - type: text
    text: "Your content here with **markdown** support."
  - type: image
    url: /uploads/my-image.png
    alt: "Diagram"
---
```

---

## Deployment

### Production (already configured)

Every push to `main` triggers:

1. Vercel pulls from GitHub
2. Runs `npm run build`
3. Deploys `dist/` to CDN
4. Available at https://ananya-rao-portfolio.com

### CMS → Deploy flow

```
CMS Save → Git commit to main → Vercel build → Live in ~1 min
```

### Infrastructure setup (one-time, already done)

1. **Vercel**: Connected to `snipperankit/ananya-portfolio`, auto-deploys `main`
2. **Cloudflare DNS**: CNAME `@` → Vercel DNS (proxy off)
3. **Cloudflare Worker** (`sveltia-cms-auth`): OAuth proxy for CMS GitHub login
4. **GitHub OAuth App**: Callback URL → Cloudflare Worker `/callback`

---

## i18n

- English served at `/`
- German served at `/de/*`
- Blog/insight detail pages are EN-only; DE lang switcher falls back to section listing
- Translations in `src/i18n.ts`, profile data in `src/data/profile.ts` (both EN+DE)

---

## Security

- GitHub 2FA enabled
- No secrets in code; OAuth secrets stored in Cloudflare Worker env vars (encrypted)
- `ALLOWED_DOMAINS` on Cloudflare Worker restricts OAuth proxy usage
- Sole collaborator on GitHub repo
- Vercel deployment protection on preview deployments

---

## Free Tier Limits

| Service            | Limit             | Resets  |
| ------------------ | ----------------- | ------- |
| Vercel builds      | 6,000 min/month   | Monthly |
| Vercel bandwidth   | 100 GB/month      | Monthly |
| Cloudflare Workers | 100K requests/day | Daily   |
| GitHub repo        | 5 GB storage      | —       |
