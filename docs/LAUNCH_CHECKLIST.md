# Launch checklist — Yehuda Huri portfolio

Owner tasks to complete before / after going live.

---

## 1. Local environment

The site runs with **no env vars** required. Optionally copy the sample (never commit `.env`):

```bash
cp frontend/env.sample frontend/.env   # optional — only for VITE_FRONTEND_URL / analytics
npm --prefix frontend run dev
```

There is **no contact form** — visitors reach out via the social links (LinkedIn, GitHub, npm)
in the footer.

---

## 2. Deploy to Cloudflare Pages (recommended)

The domain is already on Cloudflare, so Pages is the simplest + free (unlimited bandwidth).

1. Push this repo to GitHub (see repo remote).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings — **this repo is an npm workspace, so you MUST point the root directory at the
   `frontend` app** (otherwise Cloudflare errors with "application detection logic has been run in
   the root of a workspace"):
   - **Root directory:** `frontend`
   - **Framework preset:** none / Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist` (relative to `frontend`)
4. Deploy. SPA routing is handled by `frontend/public/_redirects` (`/* /index.html 200`),
   which is copied into `frontend/dist/_redirects` at build time.
5. **Custom domain:** Pages project → **Custom domains → Set up a domain** → your Cloudflare
   domain (DNS + SSL are wired automatically since the zone is already on Cloudflare).

---

## 3. Set production domain

After the domain is attached, replace `YOUR_DOMAIN` in:

- `frontend/public/sitemap.xml`
- `frontend/public/robots.txt`
- (optional) `VITE_FRONTEND_URL` for absolute canonical/OG URLs

Commit + push; Cloudflare Pages redeploys automatically.

---

## 4. Portfolio screenshots

Capture real screenshots from the live sites and drop them into `frontend/public/portfolio/`,
then update the `images` paths in `frontend/src/config/marketing/portfolioProjects.ts`
(replace the shared `placeholder.svg`). Suggested files:

| File | Project | Source |
|------|---------|--------|
| `ateret-yosef.webp` | Ateret Yosef | https://ateretyosef.org/he/ |
| `devtoolshub.webp` | DevToolsHub | https://devtoolshub-udah1.vercel.app/ |
| `harmony2.webp` | Harmony 2.0 | https://amdocs-studio.github.io/harmony-2.0/ |

`cursor-chat-bridge` already ships real YouTube demo thumbnails
(`cursor-chat-bridge-1.jpg` / `cursor-chat-bridge-2.jpg`) and links to the demo video — no shot needed.

Aim for ~16:10 web shots (and optional 9:16 mobile), WebP, under ~150 KB. Until added, cards
show a "Screenshot coming soon" placeholder.

---

## 5. OG image (social share preview)

Create a **1200×630** PNG/WebP, save as `frontend/public/og-image.webp`. Include name, title,
and a short subtitle; match the site branding. Verify with https://www.opengraph.xyz/.

---

## 6. Smoke test on production

- [ ] Landing loads in EN and HE (RTL)
- [ ] Social links open (LinkedIn, GitHub, npm)
- [ ] Portfolio links work (Ateret Yosef, cursor-chat-bridge, DevToolsHub, Harmony)
- [ ] `/privacy` and `/accessibility` load in both languages
- [ ] Skip-to-main link works (Tab on page load)
- [ ] Shared link shows title + OG image
- [ ] Light and dark modes both look correct

---

## 7. Analytics (optional — defer until you care about traffic)

On Cloudflare, [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) is free and
cookieless:

```env
VITE_ANALYTICS_PROVIDER=cloudflare
VITE_CLOUDFLARE_ANALYTICS_TOKEN=your_token
```

Then add a short analytics paragraph to the privacy policy.

---

## 8. Open decisions / TODO(yehuda)

- Decide whether to add **Receipts Maker** and other **open-source dev tools** (cursor-usage-mcp,
  etc.) as extra portfolio entries or a dedicated section.
- Optional: replace `cursor-chat-bridge` YouTube thumbnails with custom screenshots if preferred.
- Optional: phone / WhatsApp, custom favicon / PWA icons.

---

## Quick reference

| Item | Value |
|------|-------|
| Contact email (privacy/accessibility only) | udah10@gmail.com |
| Hosting | Cloudflare Pages (build `npm run build`, output `frontend/dist`) |
| Production domain | TBD |
| Portfolio screenshots | Ateret Yosef / DevToolsHub / Harmony 2.0 / cursor-chat-bridge added |
| OG image | Pending |
| Analytics | Deferred |
