import type { NavLink } from '../navConfig.types';

export type MobileNavDrawerProps = {
  open: boolean;
  marketingLinks: readonly NavLink[];
  pathname: string;
  activeSectionId: string | null;
  onClose: () => void;
  onSiteNameClick: () => void;
  onMarketingNavigate: (link: NavLink) => void;
};
