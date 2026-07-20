# Marketing theme implementation

How the live site maps to the theme demo and what was decided in the design pass (July 2026).

---

## Background

The personal site is a React 19 + Vite + MUI v6 marketing (portfolio) site. Four theme presets are wired into production and selectable from the Tune drawer.

**Stack:** React, MUI theme, `react-i18next` (EN/HE, RTL), light/dark mode, user-selectable marketing preset.

**Design authority:**

| Source | Role |
|--------|------|
| `frontend/src/theme/tokens/DemoThemeColors.ts` | Canonical hex values — presets must not duplicate colors elsewhere |
| `.cursor/skills/ui-ux-pro-max` | UX/layout guidance for marketing pages |
| `design-system/yehuda-huri/MASTER.md` | Broader design system (prefer `DemoThemeColors.ts` for theme hex) |

---

## Themes selected

Four presets are available in the app header (palette menu):

| Demo # | App ID | Label | Character |
|--------|--------|-------|-----------|
| 02 | `blueprintArchitect` | Blueprint Architect | Dark navy + cyan grid; systems / architecture |
| 03 | `precisionAtelier` | Precision Atelier | Warm cream & espresso + copper/amber; boutique craft |
| 05 | `fullstackForge` | Full-Stack Forge | Neutral/near-black + blue accent; builder / full-stack |
| 06 | `enterpriseGold` | Enterprise Gold | Blue structure + gold CTAs; enterprise calm |

- **Default preset:** `fullstackForge` (Forge, blue accent)

---

## Use of the demo design

The demo is a **static preview** per theme (light + dark). The live site implements:

- **Colors** — bg, surface, text, accent, borders from demo specs
- **Hero** — gradient + optional pattern (Blueprint grid, Forge radial glow) via `heroSurface`
- **Nav** — frosted bar with **per-theme** background/border/text (not MUI `primary` AppBar)
- **Buttons** — ~`10px × 20px`, `0.875rem`; no hover shadow or lift
- **Cards** — flat, `1px` border, no drop shadow

**Not fully ported from demo:** theme-specific hero copy, stats rows, chip strips, and alternate layout variants (CLI, timeline, etc.) unless built on individual pages.

---

## Architecture

```
frontend/src/theme/
├── tokens/DemoThemeColors.ts       # Canonical demo colors + nav + hero per theme/mode
├── presets/
│   ├── buildPresetPalette.ts       # Demo spec → MUI palette + marketing tokens
│   ├── blueprintArchitect.ts
│   ├── precisionAtelier.ts
│   ├── fullstackForge.ts
│   ├── enterpriseGold.ts
│   └── types.ts                    # Theme names, tokens, sessionStorage key
├── createAppTheme.ts               # Theme factory
├── theme.ts / componentOverrides.ts
└── typography.ts, semanticPalette.ts, …

frontend/src/config/ThemeProvider/  # mode + themeName state
frontend/src/utils/sx-patterns.ts   # heroSurface, flatCard, sectionCard, badge
frontend/src/components/layout/     # AppLayout, AppHeader, ChromeActions, Section, SiteFooter
frontend/src/components/marketing/  # PortfolioProjectCard, SkillGroupList, FeatureCardGrid, …
```

### Palette roles

| Token | Purpose |
|-------|---------|
| `primary` | Structure / emphasis — **not** the accent bar or CTA fill |
| `accent` | Underlines, skills borders, stepper icons, highlights |
| `gold` | CTA buttons where `ctaColor: 'gold'` (Forge, Atelier, Enterprise) |
| `theme.marketing.*` | Hero gradient/pattern, nav colors, `ctaColor`, optional `navAccentBorder` |

**Forge rule:** The blue accent is `accent` + `gold`, not `primary` (avoids a colored AppBar).

### `MarketingThemeTokens` (on `theme.marketing`)

- `heroGradient`, `heroPattern?`
- `gradientText` (optional decorative use; page titles use solid text)
- `ctaColor`: `'primary' | 'gold' | …`
- `navBackground`, `navBorderColor`, `navTextColor`, `navStyle`, `navAccentBorder?`

---

## UI decisions (locked in code)

### Backgrounds

- Marketing routes: main area uses **`heroSurface`** (gradient + pattern when defined).
- Dashboard routes: plain layout padding, no hero gradient.
- MUI `background.default` / `background.paper` match demo `bg` / `surface`.

### Typography & titles

| Element | Treatment |
|---------|-----------|
| Home hero H1 | Solid `text.primary` |
| Section H2 (Services, Portfolio, …) | Solid `text.primary` + short `accent` underline |
| Portfolio card titles | Solid text |

### Nav bar (AppBar)

Frosted bar (`backdrop-filter: blur(12px)`), colors from `theme.marketing`:

| Dark theme | Nav background (approx.) |
|------------|---------------------------|
| Blueprint | Near-black zinc over navy |
| Atelier | Warm brown |
| Forge | Charcoal zinc |
| Enterprise | Slate + 3px blue bottom border |

Light themes: frosted white + theme border color.

### Buttons & cards

- Default button: `10px 20px`, `0.875rem`, `textTransform: none`
- Hero CTAs: medium (not `large`)
- Contained/outlined: no hover shadow or lift
- Cards: global flat + border; portfolio/services use `flatCard()`; home feature boxes use `sectionCard()` (hover = accent border only)

### Enterprise Gold

- Blue (`#1E40AF`) — structure, nav accent border
- Gold (`#EAB308`) — Contact and primary CTAs only (`ctaColor: 'gold'`)

---

## Persistence & chrome

| Setting | Storage |
|---------|---------|
| Marketing preset | `sessionStorage` → `marketingThemeName` |
| Light/dark mode | `localStorage` → `themeMode` |

Header chrome: logo, nav links, Contact CTA, palette (theme picker), EN/עב, light/dark toggle. Theme labels: `marketing.themeStyles.*` in `en.json` / `he.json`.

---

## Status

**Done:** Four demo themes are implemented with shared tokens, per-theme nav, demo-aligned colors/backgrounds, flat buttons/cards, session theme persistence, and marketing layout components (Section, portfolio/skills/process cards, split header chrome).

**Reference:** Switch presets in the Tune drawer to compare in light/dark mode. Color changes go in `DemoThemeColors.ts` first.
