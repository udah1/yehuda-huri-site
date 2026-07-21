import type { NavLink } from '../navConfig.types';

export type BottomNavBarProps = {
  links: readonly NavLink[];
  activeSectionId: string | null;
  onNavigate: (link: NavLink) => void;
};
