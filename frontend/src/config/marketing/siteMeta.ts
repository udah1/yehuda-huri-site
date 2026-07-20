import { SOCIAL_LINKS } from '../constants/social';
import { env } from '../env';

export const SITE_META = {
  siteName: 'Yehuda Huri',
  defaultTitle: 'Yehuda Huri — Senior Full Stack Engineer & System Designer',
  defaultDescription:
    'Senior Full Stack Engineer & System Designer at Amdocs. Scalable backend and frontend systems, full products shipped end-to-end, and open-source developer tools.',
  ogImagePath: '/og-image.webp',
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
