# Development Guide

Local development setup, scripts, and common workflows for the Yehuda Huri portfolio site.
This is a **frontend-only** marketing/portfolio site — there is no backend, auth, or database.

## Prerequisites

- **Node.js 22+** — https://nodejs.org
- **npm 10+** — comes with Node.js
- **Git** — for version control

## Initial Setup

### 1. Install

```bash
npm install
```

### 2. Configure environment (optional)

```bash
cp frontend/env.sample frontend/.env
```

```env
# Public site URL (canonical + OG absolute URLs)
VITE_FRONTEND_URL=http://localhost:5173

# Analytics (optional)
# VITE_ANALYTICS_PROVIDER=cloudflare
# VITE_CLOUDFLARE_ANALYTICS_TOKEN=your_token
```

The site runs without any env vars. There is no contact form — visitors reach out via the social
links (LinkedIn, GitHub, npm) in the footer.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server (port 5173) |
| `npm run build` | Type-check (`tsc`) + build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run clean` | Remove node_modules and build artifacts |

## Project structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # SeoHead, SocialLinks, SkipToMain
│   │   │   ├── layout/      # AppLayout, AppHeader, ChromeActions, SiteFooter, nav
│   │   │   └── marketing/   # Sections, PortfolioExplorer, ContactForm, cards
│   │   ├── config/
│   │   │   ├── locales/     # en.json + he.json (all copy)
│   │   │   ├── marketing/   # siteMeta, portfolioProjects, contentKeys
│   │   │   ├── ThemeProvider/
│   │   │   └── i18n.ts
│   │   ├── pages/marketing/ # LandingPage, PrivacyPolicyPage, AccessibilityPage
│   │   ├── theme/           # presets + DemoThemeColors (canonical hex)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/              # portfolio screenshots, robots.txt, sitemap.xml
│   └── index.html
├── design-system/yehuda-huri/
└── docs/
```

## Common workflows

### Change copy (text only)

Edit `frontend/src/config/locales/en.json` and `he.json` — no component changes needed.

### Add / edit a portfolio project

1. Add or edit an entry in `frontend/src/config/marketing/portfolioProjects.ts` (links, tags, images).
2. Add its key to `PORTFOLIO_PROJECT_KEYS` in `frontend/src/config/marketing/contentKeys.ts`.
3. Add copy under `marketing.portfolio.<key>` in both locale files.
4. Drop the screenshot into `frontend/public/portfolio/` and reference it in the config.

### Change theme colors

Edit `frontend/src/theme/tokens/DemoThemeColors.ts` (canonical hex). The default preset is
`fullstackForge` (blue), set in `frontend/src/theme/presets/types.ts`.

## Debugging

- **Vite HMR:** changes reflect instantly.
- **Eruda console (mobile):** tap the "Yehuda Huri." text in the footer 8× to load the Eruda console.

## Code style

- TypeScript strict mode; type all props/state; avoid `any`.
- Functional components with hooks; keep components focused.
- Reuse shared consts/utils/hooks; keep hex out of components (use theme tokens).

## Resources

- [React](https://react.dev) · [Vite](https://vitejs.dev) · [Material-UI](https://mui.com) · [i18next](https://www.i18next.com)
