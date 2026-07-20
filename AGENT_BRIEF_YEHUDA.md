# Agent Brief — Adapt this portfolio site to Yehuda Huri

This repo was **copied from a friend's portfolio site (Moshe Hatab)**. Your job is to
**re-skin it for Yehuda Huri**, replacing **every** trace of the original owner's
personal data and projects with Yehuda's — accurately.

> **PRIME DIRECTIVE — accuracy & no leftovers**
> 1. **Remove 100% of the previous owner's info.** Nothing about "Moshe Hatab" may remain
>    anywhere (name, email, handles, projects, bios, images, design-system folder, docs, git).
> 2. **Never state anything untrue about Yehuda.** If a fact isn't in this brief, do **not**
>    invent it — leave a clearly marked `TODO(yehuda)` placeholder and ask. In particular do
>    **not** copy the friend's claims (20+ years, tier-1 telco client names, iOS/Unity/Firebase
>    skills, freelance/pricing framing) unless Yehuda explicitly confirms they apply.
> 3. When in doubt, ask via the questions UI rather than guessing.

---

## 1. Who Yehuda is (verified facts)

| Field | Value |
| --- | --- |
| Name | **Yehuda Huri** |
| Headline | **Senior Full Stack Engineer · System Designer** |
| Employer | **Amdocs** — Senior Full Stack Developer & System Designer |
| Tenure | **15+ years** at Amdocs (since Apr 2010). *(NOT "20+". Do not fabricate client names.)* |
| Prior role | System Admin at Intel (2008–2010) — optional, usually omit |
| Education | **B.Sc. Software Engineering, Ben-Gurion University of the Negev** (2006–2010) |
| Location | Israel |
| Languages | Hebrew (native), English (full professional) |
| LinkedIn | https://www.linkedin.com/in/yehuda-huri/ |
| GitHub | https://github.com/udah1 |
| npm | https://www.npmjs.com/~udah1 |
| Email (contact form + legal) | `TODO(yehuda)` — needs his address |
| X/Twitter | `TODO(yehuda)` — has one? If not, **remove the X link entirely** |
| Phone / WhatsApp | `TODO(yehuda)` — optional |

### Short bio (use/adapt, keep true)
> Senior Full Stack Developer & System Designer at Amdocs, leading complex backend and frontend
> efforts with an eye for scalability and usability. Passionate about understanding how things
> work under the hood and finding fast, elegant solutions to hard problems — then turning them
> into tools that multiply other people's productivity. Also ships full products end-to-end solo.

### Real tech stack (use ONLY these unless Yehuda adds more)
- **Backend:** Java, Spring, RESTful APIs, EJB, Node.js
- **Frontend:** React, Redux, TypeScript, JavaScript, HTML5, CSS3, ES6, TailwindCSS (also legacy: Knockout, Backbone, RactiveJS)
- **Tooling/arch:** Vite, Redux Toolkit, WebSockets, i18n, System design, reusable component libraries, CLI tooling, MCP servers, Chrome MV3 extensions, VS Code/Cursor extensions
- **Product:** Android TV / Android, PWA, offline-first
- **DO NOT claim** (unless he confirms): iOS-native, Unity/C#, Firebase, AWS Amplify/DynamoDB, Google Play publishing, "20+ years", specific telco client names.

---

## 2. Products (replace ALL of the friend's projects with these)

Links go **behind the name** (the raw `*.vercel.app` URLs are fine — there are no custom
domains yet, except Ateret Yosef). Most repos are **private**, so link the **live site**, not GitHub.

1. **Ateret Yosef — Digital Synagogue Board** — https://ateretyosef.org/he/
   Free, full-stack digital-signage platform for synagogues, built end-to-end: Android TV display
   app + Gabbai mobile management app + worshipper mobile view. Location-precise astronomical
   engine for daily zmanim, multiple prayer rites, 3 calendars, 17 Haftarah lists, offline-first,
   real-time "Red Alert" (Home Front Command) integration. 100% free, non-profit.
   Tags: `Android TV` `PWA` `TypeScript` `Offline-first` `System Design`

2. **LOOZ — Trip Planning + Personal Group App** — https://trip-landing-omega.vercel.app/
   A service that plans your trip and ships your group a personal app: day-by-day itinerary,
   restaurants, shared expense tracking with automatic debt settlement, real-time alerts, and an
   AI travel agent that knows the whole trip. Installable PWA, offline, Hebrew-first.
   **Co-built with Inbal** (`TODO(yehuda)`: confirm attribution/surname).
   Tags: `React` `TypeScript` `PWA` `AI` `i18n`

3. **Ishurit — Event RSVP over SMS & WhatsApp** — https://rsvp-saas.vercel.app/
   RSVP SaaS for weddings/events: personalized invites by SMS/WhatsApp, confirmations, live
   dashboard, seating plans, multilingual (He/En/Ru), installable PWA.
   Tags: `React` `TypeScript` `SaaS` `PWA` `i18n`

4. **DevToolsHub — Developer Tools Directory** — https://devtoolshub-udah1.vercel.app/
   A directory platform Yehuda built for sharing developer tools, extensions, MCPs, rules & skills
   — browse by type, submit, and review. Auth, filtering, ratings.
   Tags: `React` `TypeScript` `SaaS`

5. **Harmony 2.0 — React/Redux Boilerplate & CLI** — https://github.com/Amdocs-Studio/harmony-2.0
   (docs: https://amdocs-studio.github.io/harmony-2.0/ · npm: https://www.npmjs.com/package/harmony2)
   **Co-created** at the Amdocs Experience & Digital Engineering Studio — `npx` CLI that scaffolds
   production-ready React/Redux apps (SPA/MPA) with zero config.
   Tags: `React` `Redux Toolkit` `Vite` `CLI` `Open source`

**Optional (Yehuda said keep out of the GitHub profile; decide for the portfolio):**
- **Receipts Maker** — https://receipts-maker-saas.vercel.app/ — legal receipts for עוסק פטור (small businesses); numbered, PDF, WhatsApp, PWA. Tags: `React` `TypeScript` `SaaS` `PWA`.

### Open-source dev tools (optional dedicated section, all public on GitHub)
| Tool | Link | One-liner |
| --- | --- | --- |
| cursor-chat-bridge | github.com/udah1/cursor-chat-bridge (npm: cursor-telegram-chat) | Drive the Cursor agent from your phone over Telegram/Discord/GitHub. |
| cursor-usage-mcp | github.com/udah1/cursor-usage-mcp (npm: cursor-usage-optimizer) | Local MCP that stops the Cursor agent burning your request quota. |
| cursor-usage-extension | github.com/udah1/cursor-usage-extension | Live Cursor usage in the VS Code/Cursor status bar & sidebar. |
| cursor-theater | github.com/udah1/cursor-theater | Watch your Cursor/Claude agent conversations work — a live "office". |
| rtl-for-vs-code-and-cursor-agents | github.com/udah1/rtl-for-vs-code-and-cursor-agents | Native-like RTL for AI chat agents (He/Ar/Fa); code blocks stay LTR. |
| resource-override-extension | github.com/udah1/resource-override-extension | MV3 Chrome extension: redirect/mock requests, modify headers, inject JS/CSS. |

---

## 3. Exhaustive scrub checklist (every place the friend's data lives)

Run `rg -i "moshe|hatab|parentfamilyassistant|MosheHatab|moshe.hatab.projects|Metro|T-Mobile|Vodafone"`
at the end and confirm **zero** matches (outside this brief).

### Content / config
- [ ] `frontend/index.html` — `<title>`, meta `description`, meta `author`, `theme-color`, and the
      **inline SVG favicon** (currently shows initials **"MH"** → change to **"YH"**; palette too).
- [ ] `frontend/src/config/marketing/siteMeta.ts` — `siteName`, `defaultTitle`, `defaultDescription`, `twitterHandle`.
- [ ] `frontend/src/config/constants/social.ts` — `linkedIn`, `github`, `x` (remove X if none).
- [ ] `frontend/src/config/marketing/portfolioProjects.ts` — replace all 5 projects (keys, images, links, tags).
- [ ] `frontend/src/config/marketing/contentKeys.ts` — `PortfolioProjectKey` union must match new keys.
- [ ] `frontend/src/config/locales/en.json` — **all** `marketing.*` text: siteName, footer.developerName,
      `experience.highlights` (rewrite to 15+ yrs, no fake clients), `home.*` (tagline/subtagline/heroStats),
      `about.bio1/2/3`, `services.*`, `skills.*Items` (fix to real stack), `portfolio.<project>.*`
      (name/problem/solution/outcome/images alt for the NEW projects), `legal.privacy/accessibility`
      (name + email), `auth.developedBy`.
- [ ] `frontend/src/config/locales/he.json` — same as en.json, in Hebrew (siteName "יהודה חורי", etc.).
- [ ] `frontend/src/services/contact/web3forms.ts` — `from_name: 'Moshe Hatab Site'` → Yehuda.
- [ ] `frontend/src/config/env.ts` — check the 1 Moshe reference.
- [ ] `frontend/src/theme/tokens/DemoThemeColors.ts` — check the 1 reference.

### Assets (in `frontend/public/`)
- [ ] Delete friend's screenshots: `portfolio/parent-assistant*.webp`, `candlestick-financial-chart.webp`,
      `multi-layer-radial-chart.webp`, `mechanical-keyboard*.webp`, `amdocs-studio-harmony2.webp`.
- [ ] Add Yehuda's screenshots (see §4) with matching filenames referenced in `portfolioProjects.ts`.
- [ ] `og-image.webp` (referenced by siteMeta but not present) — create one for Yehuda.
- [ ] `robots.txt`, `sitemap.xml` — update any domain/URLs.
- [ ] Favicon (see index.html above).

### Meta / docs / packaging (repo hygiene)
- [ ] `design-system/moshe-hatab/` — rename to `yehuda-huri/` and update `MASTER.md`,
      `THEME-IMPLEMENTATION.md`, `pages/home.md` (or regenerate).
- [ ] `design-system/theme-options-demo.html` — 19 refs; update or delete (standalone demo).
- [ ] `README.md`, `docs/LAUNCH_CHECKLIST.md`, `docs/LEGAL_PAGES_SPEC.md`, `itemsToHandle.md`
      (friend's TODO list — delete), `dev-setup.ps1`.
- [ ] `package.json` (root + frontend + backend) — `name`, `author`.
- [ ] `LICENSE` — copyright holder → Yehuda Huri, correct year.
- [ ] `backend/env.sample` — generic values only (S3 bucket name, Firebase placeholders). No friend data.

---

## 4. Screenshots to capture (replace friend's `.webp`s)

Match the aspect ratios the layout expects (`16:10` for web, `9:16` for mobile) — see
`portfolioProjects.ts`. Capture from the live sites:
- **Ateret Yosef** (ateretyosef.org): TV board display (16:10), mobile management (9:16), worshipper view.
- **LOOZ** (trip-landing): app home / itinerary (16:10 + 9:16), expense tracker, AI agent.
- **Ishurit** (rsvp-saas): live dashboard (16:10), invite/confirm screen (9:16).
- **DevToolsHub** (devtoolshub): directory grid (16:10).
- **Harmony 2.0**: docs site screenshot (16:10).
- Export as optimized `.webp`, place in `frontend/public/portfolio/`, update `src` paths.

---

## 5. Decisions to confirm with Yehuda before building

1. **Framing:** the friend's site is a **freelance/consulting pitch** (Services, "hire me",
   NDAs, fixed-price/hourly FAQ). Yehuda is employed at Amdocs. Choose:
   (a) personal **portfolio/showcase** only — remove Services/engagement/pricing framing, or
   (b) keep a freelance/services angle. **Default to (a) unless he says otherwise.**
2. **Backend scope:** the app ships a full backend (Firebase auth, admin dashboard, S3 assets,
   AWS Lambda). Does he want the **marketing site only** (drop `backend/`, auth pages, dashboard,
   admin, assets, protected routes), or the full app? **Default: marketing-only** unless he wants auth.
3. **Contact:** his email + a **Web3Forms** access key (from web3forms.com) for the form.
4. **X/Twitter:** keep (handle?) or remove.
5. **Tags accuracy:** confirm the real stack behind LOOZ / Ishurit / DevToolsHub / Receipts so
   tags aren't wrong (don't assume Firebase/AWS/Unity).
6. **Theme:** the site has 4 design presets (Blueprint/Atelier/Forge/Enterprise) with a warm
   brown/gold default. Pick Yehuda's preferred default (a blue-accent "Forge"-style fits his
   GitHub profile — `#2563EB` on near-black).

---

## 6. Suggested order of work
1. Confirm §5 decisions.
2. Global scrub (§3) + `rg` verification = zero leftovers.
3. Swap projects data (`portfolioProjects.ts` + `contentKeys.ts` + locale entries).
4. Replace screenshots (§4) + favicon + og-image.
5. Rewrite bio/experience/skills/services to Yehuda's true facts.
6. Update legal pages, README, docs, package.json, LICENSE.
7. `npm install` in `frontend/` (and `backend/` if kept), run dev, verify EN + HE, light + dark.
8. Re-run the `rg` check. Ship.

---

### Reference: what the previous owner's data was (so you can recognize & remove it)
Name "Moshe Hatab"; email `moshe.hatab.projects@gmail.com`; LinkedIn `moshe-hatab-b24774143`;
GitHub `MosheHatab`; X `@MosheHatab`; site `parentfamilyassistant.com`; claimed "20+ years" and
clients "Metro, T-Mobile, Vodafone"; projects Parent Assistant, Candlestick Financial Chart,
Multi-Layer Radial Chart, Mechanical Keyboard Simulator; skills incl. iOS/Unity/Firebase/AWS.
**None of the above is Yehuda's — remove all of it.**
