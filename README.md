# Sahana Shreedhar Kulkarni — Portfolio

A modern, animated single-page portfolio for a Senior Full Stack Engineer.
Dark **bento-grid** aesthetic — electric-lime accent, mono type accents, and
smooth Framer Motion animations throughout.

> **Design:** bento-grid layout from `theme-previews/` — panelled cards on a dark
> canvas, lime highlights, and subtle scroll-reveal motion.

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React 18 · TypeScript · Vite · Tailwind CSS v3 · Framer Motion · Lucide |
| Tooling | npm workspaces · ESM throughout |

Fully static — no backend. Contact is handled with direct email / LinkedIn /
GitHub links, so there's nothing to run, secure, or pay to host.

## Structure

```
sahana-portfolio/
├── client/   # React + TS frontend (Vite)
│   ├── index.html   # ← Vite entry point (do not delete — see note below)
│   └── src/
│       ├── components/{layout,ui,sections}
│       ├── data/        # ← all content lives here (edit these to update the site)
│       ├── hooks/  types/  utils/  styles/
└── package.json   # root scripts (delegate to the client workspace)
```

> **Note:** `client/index.html` is the required Vite entry point. It holds the
> `<div id="root">` mount and the `<script src="/src/main.tsx">` that boots the
> React app, plus all SEO / Open Graph meta and font links. Deleting it breaks
> both `npm run dev` and `npm run build`, so leave it in place.

## Getting started

```bash
# from the repo root
npm install

# run the dev server (http://localhost:5173)
npm run dev
```

## Editing content

All content is plain TypeScript in `client/src/data/` — no component edits needed:

- `personal.ts` — name, bio, links, education, hero stats
- `skills.ts` — skill categories
- `experience.ts` — work history
- `projects.ts` — project cards (set `featured`/`status` per project)
- `achievements.ts` — awards, talks, recognition

## Before deploying

Drop these into `client/public/` (see `client/public/ASSETS_TODO.md`):
- `resume.pdf` — your latest resume (the “resume.pdf ↓” buttons link to it)
- `og-image.png` — 1200×630 social-share preview (optional)

## Build & deploy

```bash
npm run build        # builds the static site → client/dist
```

Deploy the static output anywhere for free — **Vercel / Netlify / Cloudflare
Pages / GitHub Pages**. On Vercel: root = `client`, build = `npm run build`,
output = `dist`. No environment variables or backend required.
