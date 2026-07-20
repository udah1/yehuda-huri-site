/** Central route paths — import here instead of hardcoding strings in pages and nav. */
export const ROUTES = {
  home: '/',
  about: '/about',
  skills: '/skills',
  portfolio: '/portfolio',
  privacy: '/privacy',
  accessibility: '/accessibility',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

/** Landing page section element ids (also used as URL hashes). */
export const LANDING_SECTIONS = {
  overview: 'overview',
  about: 'about',
  experience: 'experience',
  skills: 'skills',
  portfolio: 'portfolio',
} as const;

export type LandingSectionId = (typeof LANDING_SECTIONS)[keyof typeof LANDING_SECTIONS];

export const LANDING_SECTION_IDS: readonly LandingSectionId[] = [
  LANDING_SECTIONS.overview,
  LANDING_SECTIONS.about,
  LANDING_SECTIONS.experience,
  LANDING_SECTIONS.skills,
  LANDING_SECTIONS.portfolio,
];

/** Legacy hash aliases (e.g. `#hero` → overview). */
const LEGACY_LANDING_SECTION_HASHES: Record<string, LandingSectionId> = {
  hero: LANDING_SECTIONS.overview,
};

export const resolveLandingSectionHash = (hash: string): LandingSectionId | null => {
  if (!hash) return null;
  if ((LANDING_SECTION_IDS as readonly string[]).includes(hash)) {
    return hash as LandingSectionId;
  }
  return LEGACY_LANDING_SECTION_HASHES[hash] ?? null;
};

export const landingSectionHref = (sectionId: LandingSectionId): string =>
  `${ROUTES.home}#${sectionId}`;

export const isLandingPath = (pathname: string): boolean => pathname === ROUTES.home;
