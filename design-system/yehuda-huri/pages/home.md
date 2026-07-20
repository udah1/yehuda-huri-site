# Home (Marketing Landing) — Page Overrides

> Overrides `design-system/yehuda-huri/MASTER.md` for the single-page landing.

## Section order (locked)

1. **Overview** — Hero + value pillars (3 cards)
2. **About** — Who I am (personal voice)
3. **Experience** — Selected highlights (not résumé dump)
4. **Skills** — Tech stack by domain
5. **Portfolio** — Proof with visuals + outbound links
6. **Contact** — Form + mailto + social

## Overview layout

- Hero: centered H1, subtagline, dual CTA (Get in touch primary, View my work secondary), stat strip (`15+ years at Amdocs · Full products shipped solo`), micro-copy below.
- Value pillars: **3-card grid** on `sm+` — What I do, What I build, Open source (equal weight).

## Trust & Authority signals

- Experience bullets: keep short; Harmony 2.0 link inline with external icon.
- Portfolio: real screenshots required — placeholder only as fallback.

## Typography & color (from Master)

- Headings: Outfit. Body: Inter.
- Accent blue `#2563EB` (Forge default). No raw hex in components — use `accent.main`.
- Section titles: **center-aligned**; body content may stay `textAlign: start`.
- Section title accent: short bar under title (`accent.main`), centered under heading.

## Anti-patterns on this page

- No freelance/services/pricing framing.
- No layout-shifting card hovers (border-color only).
- No emoji icons — MUI icons or Simple Icons for social.
- Outcome lines in portfolio use `accent.main`, not raw hex.
