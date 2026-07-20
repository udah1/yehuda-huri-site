/** Layout dimensions used across shell and marketing pages. */
export const LAYOUT = {
  stickyHeaderOffset: 68,
  mobileDrawerWidth: 280,
  settingsDrawerWidth: 340,
  footerMaxWidth: 1200,
  /** Vertical rhythm between landing sections — bottom padding only (avoids doubled gaps). */
  sectionBlockEnd: { xs: 4, md: 8 },
  /** Hero block only — tighter gap before About on desktop (32px). */
  sectionBlockEndFirst: { xs: 4, md: 4 },
  sectionSubtitleEnd: { xs: 3, md: 4 },
  sectionMaxWidth: {
    default: 1120,
    narrow: 720,
    wide: 900,
    contact: 560,
    hero: 720,
    featureGrid: 900,
  },
  pageFadeTimeoutMs: 400,
} as const;
