/** Bento tile spans on the 6-column mobile grid (md− breakpoint). */
export const PORTFOLIO_BENTO_SPANS = [
  { xs: '1 / -1', sm: 'span 2' },
  { xs: '1 / -1', sm: 'span 1' },
  { xs: '1 / -1', sm: 'span 1' },
  { xs: '1 / -1', sm: 'span 1' },
  { xs: '1 / -1', sm: 'span 1' },
] as const;

export const PORTFOLIO_IMAGE_ASPECT = {
  web: '16 / 10',
  mobile: '9 / 16',
} as const;

export const PORTFOLIO_PLACEHOLDER = '/portfolio/placeholder.svg';

/** Fallback preview sizing when a project omits `preview` fields. */
export const PORTFOLIO_PREVIEW_DEFAULTS = {
  maxWidth: 560,
  /** Used to estimate flush gallery height (full card width on desktop). */
  flushReferenceWidth: 720,
  /** Legacy compact cap — prefer `maxHeight: false` on project/image for full screenshots. */
  maxHeight: 240,
  portraitMaxHeight: 320,
} as const;

/** Desktop explorer layout. Image size comes from each project's `preview` config. */
export const PORTFOLIO_EXPLORER = {
  railWidth: 168,
} as const;

export const PORTFOLIO_GALLERY_TRANSITION_MS = 280;
export const PORTFOLIO_VIEWPORT_HEIGHT_TRANSITION_MS = 300;
export const PORTFOLIO_GALLERY_AUTOPLAY_MS = 4500;
