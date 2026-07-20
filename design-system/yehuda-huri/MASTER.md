# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Yehuda Huri — personal portfolio
**Category:** Personal portfolio / engineer showcase
**Default MUI preset:** `fullstackForge` (Forge 05) — blue accent on near-black

> Blueprint, Atelier, and Enterprise remain optional presets in the Tune drawer. **Forge (blue)**
> is the shipped default, echoing Yehuda's GitHub profile: a `#2563EB` accent on a dark, technical shell.

---

## Global Rules

### Color Palette (default preset: Forge — light mode)

| Role | Hex | MUI token | Usage |
|------|-----|-----------|-------|
| Primary | `#18181B` | `palette.primary.main` | Headings, outlined buttons |
| Text muted | `#52525B` | `palette.text.secondary` | Subtitles, descriptions |
| CTA / Accent | `#2563EB` | `palette.gold.main`, `palette.accent.main` | Primary CTAs, section underlines |
| Background | `#FAFAFA` | `palette.background.default` | Page shell, hero gradient base |
| Surface | `#FFFFFF` | `palette.background.paper` | Cards, form, nav frosted layer |
| Text | `#18181B` | `palette.text.primary` | Headings, body |
| Border | `#E4E4E7` | `palette.divider` | Cards, inputs |

### Color Palette (default preset: Forge — dark mode)

| Role | Hex |
|------|-----|
| Background | `#0B0B0F` |
| Surface | `#18181B` |
| Text | `#FAFAFA` |
| Text muted | `#A1A1AA` |
| Accent / CTA | `#3B82F6` |
| Border | `#27272A` |

**Color Notes:** Blue accent on a neutral/near-black technical shell. Source of truth:
`frontend/src/theme/tokens/DemoThemeColors.ts` → `fullstackForge`. Do not duplicate hex in components.

### Shell meta (initial paint)

| Meta | Value | Notes |
|------|-------|-------|
| `theme-color` | `#2563EB` | `index.html`; updated at runtime via `updateSiteFavicon` |
| Favicon | `#2563EB` fill, white **YH** monogram | `index.html` inline SVG |

### Typography

- **Heading Font:** Outfit
- **Body Font:** Inter
- **Mono Font:** JetBrains Mono
- **Mood:** technical, clean, confident, readable
- Source of truth: `frontend/src/theme/presets/fullstackForge.ts`.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps, inline spacing |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `32px` | Large gaps |
| `--space-2xl` | `48px` | Section margins |
| `--space-3xl` | `64px` | Hero padding |

---

## Style Guidelines

**Style:** Technical & credible — a working engineer's portfolio.

**Section order (single-page landing):** Hero → About → Experience → Skills → Portfolio → Contact.

**CTA:** "Get in touch" (primary) + "View my work" (secondary). No sales / pricing / freelance framing.

---

## Anti-Patterns (Do NOT Use)

- ❌ Freelance/agency framing (Services, pricing, "hire me", NDAs)
- ❌ AI purple/pink gradients
- ❌ **Emojis as icons** — use SVG icons (MUI / Simple Icons)
- ❌ **Missing cursor:pointer** on clickable elements
- ❌ **Layout-shifting hovers** (border-color change only)
- ❌ **Low contrast text** — maintain 4.5:1 minimum
- ❌ **Instant state changes** — use 150–300ms transitions
- ❌ **Invisible focus states**

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG instead)
- [ ] `cursor: pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Text contrast 4.5:1 minimum in both light and dark
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind the sticky navbar
- [ ] No horizontal scroll on mobile
- [ ] Both light and dark modes verified
