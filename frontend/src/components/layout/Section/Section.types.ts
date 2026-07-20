import type { SxProps, Theme } from '@mui/material';

export type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: number | string;
  align?: 'left' | 'center' | 'right';
  sx?: SxProps<Theme>;
};
