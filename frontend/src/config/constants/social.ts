/** Public social and professional profile URLs. */
export const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/yehuda-huri/',
  github: 'https://github.com/udah1',
  npm: 'https://www.npmjs.com/~udah1',
} as const;

export type SocialLinkKey = keyof typeof SOCIAL_LINKS;
