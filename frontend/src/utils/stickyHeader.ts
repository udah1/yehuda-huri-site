import { LAYOUT } from '../config/constants/layout';

export const APP_SITE_HEADER_ID = 'app-site-header';

export const measureStickyHeaderOffset = (): number => {
  const header = document.getElementById(APP_SITE_HEADER_ID);
  if (header) {
    return Math.ceil(header.getBoundingClientRect().height);
  }
  return LAYOUT.stickyHeaderOffset;
};

export const syncStickyHeaderOffsetCssVar = (): number => {
  const offset = measureStickyHeaderOffset();
  document.documentElement.style.setProperty('--site-header-offset', `${offset}px`);
  return offset;
};

/** Wait for drawer close / layout shifts before scrolling on mobile. */
export const mobileNavScrollDelayMs = 320;
