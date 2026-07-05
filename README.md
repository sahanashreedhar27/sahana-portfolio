<div align="center">

# Sahana Shreedhar Kulkarni — Portfolio

**Senior Full Stack Software Engineer** · Software Engineer III @ Northwestern Mutual · San Diego, CA

_Turning ambiguous problems into clean, high-impact systems._

[![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

[**LinkedIn**](https://www.linkedin.com/in/sahanashreedhar27/) · [**GitHub**](https://github.com/sahanashreedhar27) · [**Email**](mailto:sahanashreedhar27@gmail.com)

</div>

---

A modern, animated single-page portfolio built with React + TypeScript. Dark
**bento-grid** aesthetic — electric-lime accent, mono type accents, and smooth
Framer Motion scroll-reveal animations throughout. Fully static, no backend.

> 🔗 **Live demo:** _add your deployed URL here_ (Vercel / Netlify / GitHub Pages — see [Build & deploy](#build--deploy))

## Highlights

- 🎨 **Bento-grid design** — panelled cards on a dark canvas with lime highlights, from `theme-previews/`
- ⚡ **Motion-driven** — Framer Motion scroll reveals and micro-interactions
- 📝 **Content-as-data** — edit plain TypeScript files, never touch a component
- 🧩 **Sectioned layout** — Hero, About, Skills, Experience, Projects, Achievements, Contact
- 🔒 **Formatting on commit** — Prettier enforced via a husky pre-commit hook

## Tech stack

| Layer    | Tech                                                                    |
| -------- | ----------------------------------------------------------------------- |
| Frontend | React 18 · TypeScript · Vite · Tailwind CSS v3 · Framer Motion · Lucide |
| Tooling  | npm workspaces · Prettier · husky + lint-staged · ESM throughout        |

## Getting started

```bash
# from the repo root
npm install            # also installs the husky pre-commit hook
npm run dev            # dev server → http://localhost:5173
```

## Project structure

```
sahana-portfolio/
├── client/                 # React + TS frontend (Vite)
│   ├── index.html          # Vite entry point — mounts #root & boots main.tsx (keep!)
│   └── src/
│       ├── components/      # layout · ui · sections
│       ├── data/            # ← all site content lives here
│       ├── hooks/ types/ utils/ styles/
├── theme-previews/          # standalone HTML design explorations
└── package.json             # root scripts (delegate to the client workspace)
```

> **Note:** `client/index.html` is the required Vite entry point — it holds the
> `#root` mount, the `main.tsx` boot script, and all SEO / Open Graph meta.
> Deleting it breaks both `npm run dev` and `npm run build`.

## Editing content

All content is plain TypeScript in `client/src/data/` — no component edits needed:

| File              | Controls                                       |
| ----------------- | ---------------------------------------------- |
| `personal.ts`     | name, bio, links, education, hero stats        |
| `skills.ts`       | skill categories                               |
| `experience.ts`   | work history                                   |
| `projects.ts`     | project cards (`featured` / `status` per card) |
| `achievements.ts` | awards, talks, recognition                     |

## Formatting

Prettier is enforced on commit via a husky hook (`npx lint-staged`) that formats
staged files automatically. `npm install` sets this up for you.

```bash
npm run format         # format the whole codebase
npm run format:check   # check without writing (CI-friendly)
```

## Before deploying

Drop these into `client/public/` (see `client/public/ASSETS_TODO.md`):

- `resume.pdf` — your latest resume (the "resume.pdf ↓" buttons link to it)
- `og-image.png` — 1200×630 social-share preview (optional)

## Build & deploy

```bash
npm run build          # static site → client/dist
```

Deploy the static output anywhere for free — **Vercel / Netlify / Cloudflare
Pages / GitHub Pages**. On Vercel: root = `client`, build = `npm run build`,
output = `dist`. No environment variables or backend required.

---

<div align="center">

Built by **Sahana Shreedhar Kulkarni** · [sahanashreedhar27](https://github.com/sahanashreedhar27)

</div>
