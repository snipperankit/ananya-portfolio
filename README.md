# Ananya Rao — portfolio

A complete Astro portfolio with a client-editable **Case Studies** section
(Sveltia CMS) and a chart embed for results visualisations. Built to run free
on Netlify and be enhanced in VS Code.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
```

`npm run build` outputs the static site to `dist/`; `npm run preview` serves it.

## Where to edit things

| Want to change…               | Edit                                               |
| ----------------------------- | -------------------------------------------------- |
| Name, role, nav, social links | `src/consts.ts`                                    |
| Colors, fonts, spacing        | `src/styles/global.css` (design tokens at the top) |
| Home page                     | `src/pages/index.astro`                            |
| About page                    | `src/pages/about.astro`                            |
| Case-study layout             | `src/pages/work/[...slug].astro`                   |
| A case study's content        | `src/content/casestudies/*.mdx`                    |
| The editing form Ananya sees  | `public/admin/config.yml`                          |

## Add a case study by hand

Create a new `.mdx` file in `src/content/casestudies/` copying the frontmatter
from `fintech-scrum.mdx`. Set `featured: true` to show it on the home page.
Paste a Datawrapper/Flourish share link into `chartEmbed` for the graph.

## The editing panel (Sveltia CMS)

Local test (no GitHub needed): add `local_backend: true` under `backend` in
`public/admin/config.yml`, then run in two terminals:

```bash
npm run dev
npx @sveltia/cms-proxy-server
```

Open http://localhost:4321/admin. Remove `local_backend: true` before deploying.

## Resume page

The resume is available at `/resume` and is editable via the CMS as `src/content/resume.mdx`.
To edit the resume in the admin panel use the "Resume" entry in the left-hand menu.

## Deploy free on Netlify

1. Push this repo to GitHub (VS Code → Source Control → Publish to GitHub).
2. Netlify → Add new site → Import from Git → pick the repo.
   Build command `npm run build`, publish directory `dist`.
3. You get a free `*.netlify.app` URL. For the `/admin` login, register a GitHub
   OAuth app and link it to your Netlify site.
4. When ready, buy a domain and add it in Netlify (only paid step).

Set your real domain in `astro.config.mjs` (`site:`) when you have one.

## Notes

- Images: the `cover` field is optional; case studies without one show a placeholder.
  To use CMS image uploads, align `media_folder` in `config.yml` with `src/assets`.
- Confirm the Sveltia loader URL in `public/admin/index.html` against
  https://sveltiacms.app if the panel doesn't load.
