import { useState, useRef, useCallback, useEffect } from 'react';

interface UseTapActionOptions {
  /** Number of taps required to trigger the action */
  tapCount: number;
  /** Timeout in ms before the tap counter resets (default: 3000) */
  timeout?: number;
  /** Callback invoked when the required tap count is reached */
  onAction: () => void;
}

/**
 * Generic hook for triggering an action after N rapid taps.
 * Useful for hidden Easter eggs, secret navigation, debug tools, etc.
 *
 * @returns {{ handleTap: () => void, isTriggered: boolean }}
 */
const useTapAction = ({ tapCount, timeout = 3000, onAction }: UseTapActionOptions) => {
  const [count, setCount] = useState(0);
  const [isTriggered, setIsTriggered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = useCallback(() => {
    if (isTriggered) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= tapCount) {
      setIsTriggered(true);
      setCount(0);
      onAction();
    } else {
      timeoutRef.current = setTimeout(() => {
        setCount(0);
      }, timeout);
    }
  }, [count, isTriggered, tapCount, timeout, onAction]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { handleTap, isTriggered };
};

export default useTapAction;
