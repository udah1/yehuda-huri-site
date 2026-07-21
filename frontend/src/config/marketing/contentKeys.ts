/** i18n key suffixes under `marketing.*` — keeps pages data-driven without hardcoded copy. */

export const HOME_FEATURE_KEYS = ['expertise', 'products', 'openSource'] as const;
export type HomeFeatureKey = (typeof HOME_FEATURE_KEYS)[number];

export const SKILL_GROUPS = [
  { key: 'backend', itemsKey: 'backendItems' },
  { key: 'frontend', itemsKey: 'frontendItems' },
  { key: 'tooling', itemsKey: 'toolingItems' },
  { key: 'product', itemsKey: 'productItems' },
] as const;
export type SkillGroupKey = (typeof SKILL_GROUPS)[number]['key'];

export const PORTFOLIO_PROJECT_KEYS = [
  'ateretYosef',
  'movies',
  'cursorChatBridge',
  'devToolsHub',
  'harmony2',
] as const;
export type PortfolioProjectKey = (typeof PORTFOLIO_PROJECT_KEYS)[number];

export const EXPERIENCE_HIGHLIGHT_KEYS = ['amdocs', 'harmony', 'sideProducts'] as const;
export type ExperienceHighlightKey = (typeof EXPERIENCE_HIGHLIGHT_KEYS)[number];

export const ABOUT_BIO_KEYS = ['bio1', 'bio2', 'bio3'] as const;
