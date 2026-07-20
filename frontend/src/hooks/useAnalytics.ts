import { useEffect } from 'react';
import { env } from '../config/env';

/** Deferred analytics — enable via env when domain is ready (see docs/LAUNCH_CHECKLIST.md). */
export const useAnalytics = (): void => {
  useEffect(() => {
    if (env.analyticsProvider !== 'cloudflare' || !env.cloudflareAnalyticsToken) return;

    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', JSON.stringify({ token: env.cloudflareAnalyticsToken }));
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
};

export default useAnalytics;
