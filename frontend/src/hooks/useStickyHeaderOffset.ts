import { useEffect } from 'react';
import { APP_SITE_HEADER_ID, syncStickyHeaderOffsetCssVar } from '../utils/stickyHeader';

/** Keeps `--site-header-offset` in sync with the measured AppBar height (mobile + desktop). */
export const useStickyHeaderOffset = (): void => {
  useEffect(() => {
    const sync = () => {
      syncStickyHeaderOffsetCssVar();
    };

    sync();
    window.addEventListener('resize', sync);

    const header = document.getElementById(APP_SITE_HEADER_ID);
    const resizeObserver =
      header && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(sync)
        : null;
    resizeObserver?.observe(header as Element);

    return () => {
      window.removeEventListener('resize', sync);
      resizeObserver?.disconnect();
    };
  }, []);
};

export default useStickyHeaderOffset;
