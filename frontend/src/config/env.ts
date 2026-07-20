/** Runtime env with safe defaults for local development. */
export const env = {
  frontendUrl: import.meta.env.VITE_FRONTEND_URL ?? '',
  analyticsProvider: (import.meta.env.VITE_ANALYTICS_PROVIDER ?? 'none') as 'none' | 'cloudflare',
  cloudflareAnalyticsToken: import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN ?? '',
} as const;
