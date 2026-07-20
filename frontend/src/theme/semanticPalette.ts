import type { PaletteOptions } from '@mui/material/styles';

export const getSemanticPalette = (mode: 'light' | 'dark'): Pick<
  PaletteOptions,
  'success' | 'error' | 'warning'
> => ({
  success: {
    main: mode === 'light' ? '#10B981' : '#34D399',
    light: '#34D399',
    dark: '#059669',
  },
  error: {
    main: mode === 'light' ? '#EF4444' : '#F87171',
    light: '#F87171',
    dark: '#DC2626',
  },
  warning: {
    main: mode === 'light' ? '#F59E0B' : '#FBBF24',
    light: '#FBBF24',
    dark: '#D97706',
  },
});
