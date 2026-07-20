import type { NavigateFunction } from 'react-router-dom';
import { ROUTES, type LandingSectionId } from '../config/routes';
import { measureStickyHeaderOffset } from './stickyHeader';

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const prefersInstantScroll = (): boolean =>
  prefersReducedMotion() || window.matchMedia('(max-width: 899px)').matches;

const readScrollMarginTop = (element: HTMLElement): number => {
  const margin = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop);
  return Number.isFinite(margin) && margin > 0 ? margin : measureStickyHeaderOffset();
};

const scrollElementIntoSectionView = (element: HTMLElement): void => {
  const headerOffset = measureStickyHeaderOffset();
  const scrollMarginTop = readScrollMarginTop(element);
  const offset = Math.max(headerOffset, scrollMarginTop);
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersInstantScroll() ? 'auto' : 'smooth',
  });
};

/**
 * Scroll the landing page to a section anchor.
 * Used by header/drawer nav, hero CTAs, and hash routing on LandingPage.
 */
export const scrollToLandingSection = (
  sectionId: LandingSectionId,
  options?: { updateHash?: boolean; retryMs?: number },
): void => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const run = () => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    scrollElementIntoSectionView(target);
  };

  run();

  const retryMs = options?.retryMs ?? 0;
  if (retryMs > 0) {
    window.setTimeout(run, retryMs);
  }

  if (options?.updateHash !== false) {
    window.history.replaceState(null, '', `${ROUTES.home}#${sectionId}`);
  }
};

export const navigateToLandingSection = (
  sectionId: LandingSectionId,
  navigate: NavigateFunction,
  options?: { scrollRetryMs?: number },
): void => {
  if (window.location.pathname === ROUTES.home) {
    scrollToLandingSection(sectionId, { retryMs: options?.scrollRetryMs });
    return;
  }

  navigate({ pathname: ROUTES.home, hash: sectionId });
};

export const landingSectionScrollMargin = (): string => 'var(--site-header-offset, 68px)';
