# Yehuda Huri — Personal portfolio

A personal portfolio / showcase site for **Yehuda Huri** — Senior Full Stack Engineer & System
Designer at Amdocs. Presents experience, skills, selected products, and a way to get in touch.

**Stack:** React 19, Vite 6, Material-UI 6, TypeScript, react-i18next (EN/HE, RTL), dark/light themes.

---

## Purpose

- Present Yehuda as a senior full-stack engineer & system designer: experience, skills, and the
  products he's built (Android TV, PWAs, SaaS, and open-source developer tools).
- Point visitors to his work and profiles (portfolio + LinkedIn / GitHub / npm).

---

## Features

- **Single-page marketing site:** Overview, About, Experience, Skills, Portfolio.
- **i18n:** English and Hebrew with full RTL support; language toggle in the header.
- **Theming:** Four presets (Blueprint / Atelier / Forge / Enterprise); **Forge (blue)** is the
  default. Dark and light modes, persisted.
- **Contact:** social profile links (LinkedIn, GitHub, npm) in the footer — no contact form.

---

## Quick start

### Prerequisites

- Node.js 22+
- npm 10+

### Install and run

```bash
npm install

# Optional: set VITE_FRONTEND_URL / analytics (no env vars required to run)
cp frontend/env.sample frontend/.env

npm run dev
```

- **Site:** http://localhost:5173

---

## Project structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # AppLayout, AppHeader, ChromeActions, SiteFooter, nav
│   │   │   └── marketing/     # Sections, PortfolioExplorer, ContactForm, cards
│   │   ├── config/
│   │   │   ├── locales/       # en.json + he.json (all marketing.* copy)
│   │   │   ├── marketing/     # siteMeta, portfolioProjects, contentKeys
│   │   │   └── ThemeProvider/ # mode + preset state
│   │   ├── pages/marketing/   # LandingPage, PrivacyPolicyPage, AccessibilityPage
│   │   ├── theme/             # presets + DemoThemeColors (canonical hex)
│   │   └── App.tsx            # Routes: landing (/) + legal pages
│   ├── public/                # portfolio screenshots, robots.txt, sitemap.xml
│   └── index.html
├── design-system/yehuda-huri/ # MASTER.md, THEME-IMPLEMENTATION.md, pages/
├── docs/                      # LAUNCH_CHECKLIST.md, LEGAL_PAGES_SPEC.md
└── README.md
```

---

## Routes

| Path | Description |
|------|-------------|
| `/` | Single-page landing (Overview, About, Experience, Skills, Portfolio, Contact) |
| `/about`, `/skills`, `/portfolio` | Redirect to the matching landing section |
| `/privacy` | Privacy Policy |
| `/accessibility` | Accessibility Statement |

---

## Content and copy

- All user-facing text lives in **i18n**: `frontend/src/config/locales/en.json` and `he.json`
  under the `marketing` key (nav, home, about, experience, skills, portfolio, contact, footer) and
  the `legal` key. Edit those JSON files to change copy — no component changes needed.
- Portfolio projects are configured in `frontend/src/config/marketing/portfolioProjects.ts`
  (links, tags, images) with copy in the locale files under `marketing.portfolio.*`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check + build the frontend |
| `npm run lint` | Lint the frontend |

---

## What to do next

See **[docs/LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md)** for go-live steps (Cloudflare Pages
deploy, production domain, OG image, remaining screenshots).

---

## License

MIT — see the [LICENSE](LICENSE) file.
