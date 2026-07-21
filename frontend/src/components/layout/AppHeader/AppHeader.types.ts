import type { ReactNode } from 'react';
import type { NavLink } from '../navConfig.types';

export type AppHeaderProps = {
  pathname: string;
  activeSectionId: string | null;
  desktopMarketingLinks: readonly NavLink[];
  chromeActions: ReactNode;
  onMarketingNavigate: (link: NavLink) => void;
  onLogoClick: () => void;
};
