import type { ReactNode } from 'react';

export type MarketingPageShellProps = {
  title: string;
  subtitle?: string;
  maxWidth?: number | string;
  children: ReactNode;
};
