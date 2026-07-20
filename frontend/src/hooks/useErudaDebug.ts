import { useCallback } from 'react';
import useTapAction from './useTapAction';

const ERUDA_TAP_COUNT = 8;
const ERUDA_TAP_TIMEOUT = 3000;

/**
 * Hook that provides Eruda debug console activation via repeated taps.
 * Wraps the generic useTapAction hook with Eruda-specific loading logic.
 * User taps 8 times within 3 seconds to dynamically load and initialize Eruda.
 *
 * @returns {{ handleDebugTap: () => void, isDebugActive: boolean }}
 */
const useErudaDebug = () => {
  const loadEruda = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/eruda';
    script.onload = () => {
      // @ts-expect-error - eruda is loaded dynamically from CDN
      window.eruda?.init();
      console.log('Debug mode activated! Eruda console is now available.');
    };
    document.body.appendChild(script);
  }, []);

  const { handleTap, isTriggered } = useTapAction({
    tapCount: ERUDA_TAP_COUNT,
    timeout: ERUDA_TAP_TIMEOUT,
    onAction: loadEruda,
  });

  return { handleDebugTap: handleTap, isDebugActive: isTriggered };
};

export default useErudaDebug;
