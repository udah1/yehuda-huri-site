import {
  LANDING_SECTIONS,
  ROUTES,
  isLandingPath,
  landingSectionHref,
} from '../../config/routes';
import type { NavLink } from './navConfig.types';

export const MARKETING_NAV_LINKS: readonly NavLink[] = [
  { path: landingSectionHref(LANDING_SECTIONS.overview), sectionId: LANDING_SECTIONS.overview, labelKey: 'marketing.nav.overview' },
  { path: landingSectionHref(LANDING_SECTIONS.about), sectionId: LANDING_SECTIONS.about, labelKey: 'marketing.nav.about' },
  { path: landingSectionHref(LANDING_SECTIONS.experience), sectionId: LANDING_SECTIONS.experience, labelKey: 'marketing.nav.experience' },
  { path: landingSectionHref(LANDING_SECTIONS.skills), sectionId: LANDING_SECTIONS.skills, labelKey: 'marketing.nav.skills' },
  { path: landingSectionHref(LANDING_SECTIONS.portfolio), sectionId: LANDING_SECTIONS.portfolio, labelKey: 'marketing.nav.portfolio' },
];

export const DESKTOP_MARKETING_NAV_LINKS = MARKETING_NAV_LINKS.filter(
  (link) => link.sectionId !== LANDING_SECTIONS.overview,
);

/** Mobile bottom navigation: all marketing nav links. */
export const MOBILE_MARKETING_NAV_LINKS = MARKETING_NAV_LINKS;

export const isNavLinkActive = (pathname: string, path: string): boolean => {
  if (path === ROUTES.home || path.startsWith(`${ROUTES.home}#`)) return pathname === ROUTES.home;
  return pathname === path || pathname.startsWith(`${path}/`);
};

export const isMarketingNavLinkActive = (
  pathname: string,
  activeSectionId: string | null,
  link: NavLink,
): boolean => {
  if (isLandingPath(pathname) && link.sectionId && activeSectionId) {
    return link.sectionId === activeSectionId;
  }
  return isNavLinkActive(pathname, link.path);
};
