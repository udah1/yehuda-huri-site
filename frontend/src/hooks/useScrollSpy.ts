import { useCallback, useEffect, useState } from 'react';
import { resolveLandingSectionHash } from '../config/routes';
import { measureStickyHeaderOffset } from '../utils/stickyHeader';

const resolveActiveSection = (
  sectionIds: readonly string[],
  offset: number,
): string => {
  if (sectionIds.length === 0) return '';

  const marker = window.scrollY + offset + 4;
  let active = sectionIds[0];

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    const top = element.getBoundingClientRect().top + window.scrollY;
    if (top <= marker) {
      active = id;
    }
  }

  return active;
};

export const useScrollSpy = (
  sectionIds: readonly string[],
  offset?: number,
) => {
  const resolvedOffset = offset ?? measureStickyHeaderOffset();
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.slice(1);
    const resolved = resolveLandingSectionHash(hash);
    if (resolved && sectionIds.includes(resolved)) return resolved;
    return sectionIds[0] ?? '';
  });

  const syncFromScroll = useCallback(() => {
    if (sectionIds.length === 0) return;
    const next = resolveActiveSection(sectionIds, resolvedOffset);
    setActiveSection((current) => (current === next ? current : next));
  }, [sectionIds, resolvedOffset]);

  useEffect(() => {
    if (sectionIds.length === 0) return undefined;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFromScroll);
    };

    syncFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds, resolvedOffset, syncFromScroll]);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const resolved = resolveLandingSectionHash(window.location.hash.slice(1));
    if (resolved && sectionIds.includes(resolved)) {
      setActiveSection(resolved);
      return;
    }

    setActiveSection(sectionIds[0] ?? '');
  }, [sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) return undefined;

    const syncFromHash = () => {
      const resolved = resolveLandingSectionHash(window.location.hash.slice(1));
      if (resolved && sectionIds.includes(resolved)) {
        setActiveSection(resolved);
      }
    };

    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [sectionIds]);

  return { activeSection, setActiveSection };
};

export default useScrollSpy;
