import type { PortfolioProjectKey } from './contentKeys';

export type PortfolioProjectLinkKey = 'live' | 'github' | 'npm' | 'docs' | 'store' | 'video';

export type PortfolioImageAspect = '16:10' | '9:16';

export type PortfolioPreviewFit = 'cover' | 'contain';

/** Gallery frame sizing — set on project and/or individual images (image wins). */
export type PortfolioPreviewConfig = {
  /** Cap frame height (px). Use `false` for natural 16:10 height from maxWidth. */
  maxHeight?: number | false;
  maxWidth?: number;
  objectFit?: PortfolioPreviewFit;
};

export type PortfolioProjectImage = {
  src: string;
  /** i18n suffix: marketing.portfolio.{key}.images.{altKey} */
  altKey: string;
  aspect?: PortfolioImageAspect;
  preview?: PortfolioPreviewConfig;
};

export type PortfolioProjectConfig = {
  key: PortfolioProjectKey;
  images: readonly PortfolioProjectImage[];
  links: Partial<Record<PortfolioProjectLinkKey, string>>;
  tags: readonly string[];
  /** Default preview for slides that omit their own `preview`. */
  preview?: PortfolioPreviewConfig;
};

export const PORTFOLIO_PROJECTS: readonly PortfolioProjectConfig[] = [
  {
    key: 'ateretYosef',
    images: [{ src: '/portfolio/ateret-yosef.png', altKey: 'preview', aspect: '16:10' }],
    links: { live: 'https://ateretyosef.org/he/' },
    tags: ['Android TV', 'PWA', 'TypeScript', 'Offline-first', 'System Design'],
  },
  {
    key: 'cursorChatBridge',
    images: [
      { src: '/portfolio/cursor-chat-bridge-1.jpg', altKey: 'demo1', aspect: '16:10' },
      { src: '/portfolio/cursor-chat-bridge-2.jpg', altKey: 'demo2', aspect: '16:10' },
    ],
    links: {
      github: 'https://github.com/udah1/cursor-chat-bridge',
      npm: 'https://www.npmjs.com/package/cursor-telegram-chat',
      video: 'https://www.youtube.com/watch?v=n7nADeJZtEs',
    },
    tags: ['TypeScript', 'Node.js', 'MCP', 'CLI', 'Open source'],
  },
  {
    key: 'devToolsHub',
    images: [{ src: '/portfolio/devtoolshub.png', altKey: 'preview', aspect: '16:10' }],
    links: { live: 'https://toolshub.udah.dev/' },
    tags: ['React', 'TypeScript', 'SaaS'],
  },
  {
    key: 'harmony2',
    images: [{ src: '/portfolio/harmony2.png', altKey: 'preview', aspect: '16:10' }],
    links: {
      github: 'https://github.com/Amdocs-Studio/harmony-2.0',
      docs: 'https://amdocs-studio.github.io/harmony-2.0/',
      npm: 'https://www.npmjs.com/package/harmony2',
    },
    tags: ['React', 'Redux Toolkit', 'Vite', 'CLI', 'Open source'],
  },
] as const;

export const PORTFOLIO_LINK_ORDER: readonly PortfolioProjectLinkKey[] = [
  'live',
  'video',
  'github',
  'npm',
  'docs',
  'store',
];
