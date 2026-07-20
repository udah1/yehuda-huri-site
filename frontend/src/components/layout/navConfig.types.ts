import type { LandingSectionId } from '../../config/routes';

export type NavLink = {
  path: string;
  labelKey: string;
  /** Landing section id for anchor nav + scroll spy on `/`. */
  sectionId?: LandingSectionId;
};
