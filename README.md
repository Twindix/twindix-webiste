# Twindix — Leadership Intelligence Platform

Twindix helps organizations **evaluate leadership intelligence and unlock smarter decisions**. We go beyond standalone assessments: using **AI-powered behavioral analytics**, Twindix reveals how people think, lead, and perform—then provides a clear, actionable roadmap for meaningful development.

This repository contains the Twindix web app built with **Next.js (App Router)** and optimized for fast, accessible delivery and rich SEO.

## 🛠 Runtime

- **Node.js:** 20.19.4 (LTS)  
- **Package manager:** npm 10.8.2

> This project targets Node 20 LTS. If you use `nvm`, run `nvm use` after cloning.

---

## ✨ What you’ll find inside

- **AI-powered assessments** for executives, candidates, and teams  
- **Behavioral analytics** that turn signals into development roadmaps  
- **Modern web stack**: Next.js, TypeScript, App Router, `next/font` with **Roboto Flex**, and first-class SEO  
- **Production-ready SEO**: Open Graph, Twitter cards, canonical URLs, robots settings, and a themed PWA feel via `themeColor`

---

## 🧠 Brand & SEO defaults (from code metadata)

We ship sensible, business-aligned metadata so your links look great everywhere:

- **Site name:** `Twindix`  
- **Description:** “We evaluate leadership intelligence and unlock smarter decisions.”  
- **Open Graph:**  
  - Image: `/og/og-default.jpg` (1200×630, alt “Twindix – Leadership Intelligence”)  
  - Type: `website`, URL: `${publicUrl}/`  
- **Twitter:** `summary_large_image`, `@twindix`  
- **Robots / Googlebot:** indexing and large previews enabled  
- **Theme color:** `#00519F`  
- **Icons:** favicon + apple touch icon  
- **Fonts:** `next/font` automatically loads **Roboto Flex** with `display=swap` and variable axis `opsz` for crisp text

---

## 🚀 Quick start (with npm)

1) **Clone & install**
```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
```

2) **Run the app (dev)**
```bash
npm run dev
```
Open http://localhost:3000

3) **Lint & type-check (optional but recommended)**
```bash
npm run lint
```

5) **Build for production**
```bash
npm run build
npm start
```

---

## 📁 Key files & folders

- `app/` — App Router pages, layouts, and route handlers  
- `app/layout.tsx` — Root layout with SEO, fonts, `<Navbar/>`, and `<Footer/>`  
- `app/page.tsx` — Home page entry (hot-reloads in dev)  
- `app/globals.css` — Global styles (imported in layout)  
- `components/` — Reusable UI (e.g., `Navbar`, `Footer`)  
- `@/data` — Centralized constants like `publicUrl`

---

## 🧭 Development notes

- **Hot reload:** edit `app/page.tsx` (or any route in `app/`) and see changes instantly.  
- **Fonts:** We use `next/font` to load **Roboto Flex** with variable axes for optimal rendering and performance.  
- **Accessibility:** Stick to semantic HTML and ARIA where needed; our defaults aim for strong Lighthouse scores.  
- **SEO hygiene:**  
  - Keep `metadataBase` in sync with your live domain (`publicUrl`)  
  - Ensure Open Graph image(s) exist in `/public/og/`  
  - Confirm `robots` and `googleBot` settings align with your deployment environment

---

## 🌐 Deployment

Twindix runs well on any platform that supports Next.js:

- **Vercel** (recommended for zero-config Next.js)  
- **Netlify** (Next.js adapter)  
- **Self-hosted Node**: `npm run build && npm start`

---

## 🔧 Useful scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm start        # run built app
npm run lint     # lint code
```

---

## 📄 License

Copyright © Twindix.
All rights reserved unless stated otherwise in this repository.

---

### Original Next.js instructions (for reference)

Learn more:
- Next.js Docs: https://nextjs.org/docs  
- Interactive tutorial: https://nextjs.org/learn  
- GitHub: https://github.com/vercel/next.js
