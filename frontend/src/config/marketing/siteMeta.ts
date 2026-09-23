import { SOCIAL_LINKS } from '../constants/social';
import { env } from '../env';

export const SITE_META = {
  siteName: 'Yehuda Huri',
  siteNameHe: 'יהודה חורי',
  jobTitle: 'Senior Full Stack Engineer & System Designer',
  employer: 'Amdocs',
  /** Fallback when i18n is not yet ready; prefer `marketing.seo.*` keys at runtime. */
  defaultTitle: 'Yehuda Huri - Senior Full Stack Engineer & System Designer',
  defaultDescription:
    'Yehuda Huri (יהודה חורי) - Senior Full Stack Engineer & System Designer at Amdocs. Scalable backend and frontend systems, full products shipped end-to-end, and open-source developer tools.',
  ogImagePath: '/og-image.png',
  faviconPath: '/favicon.svg',
} as const;

export const getSiteOrigin = (): string => {
  if (env.frontendUrl) return env.frontendUrl.replace(/\/$/, '');
  if (typeof window !== 'undefined') return window.location.origin;
  return '';
};

export const getAbsoluteUrl = (path: string): string => {
  const origin = getSiteOrigin();
  if (!origin) return path;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
};

export const personSchemaSameAs = [
  SOCIAL_LINKS.linkedIn,
  SOCIAL_LINKS.github,
  SOCIAL_LINKS.npm,
] as const;

/** Person JSON-LD — include both Latin and Hebrew names for entity disambiguation. */
export const buildPersonSchema = (pageUrl?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_META.siteName,
  alternateName: SITE_META.siteNameHe,
  jobTitle: SITE_META.jobTitle,
  worksFor: {
    '@type': 'Organization',
    name: SITE_META.employer,
  },
  url: pageUrl || undefined,
  sameAs: [...personSchemaSameAs],
});
