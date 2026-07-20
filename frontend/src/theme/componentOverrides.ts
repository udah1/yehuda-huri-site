import type { Components, Theme } from '@mui/material/styles';
import type { ThemePreset } from './presets/types';

export const buildComponentOverrides = (
  mode: 'light' | 'dark',
  preset: ThemePreset,
  monoFontFamily: string,
): Components<Omit<Theme, 'components'>> => ({
  MuiButton: {
    styleOverrides: {
      root: ({ theme: t }) => ({
        borderRadius: 8,
        padding: '10px 20px',
        fontSize: '0.875rem',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
        variants: [
          {
            props: { size: 'extraSmall', variant: 'text' },
            style: {
              padding: '2px 6px',
              fontSize: t.typography.pxToRem(12),
              minWidth: 'auto',
              lineHeight: 1.2,
            },
          },
          {
            props: { size: 'extraSmall', variant: 'outlined' },
            style: {
              padding: '2px 8px',
              fontSize: t.typography.pxToRem(12),
              minWidth: 'auto',
              lineHeight: 1.2,
            },
          },
          {
            props: { size: 'extraSmall', variant: 'contained' },
            style: {
              padding: '8px 10px',
              fontSize: t.typography.pxToRem(12),
              minWidth: 'auto',
              lineHeight: 1.2,
            },
          },
        ],
      }),
      contained: {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': { borderWidth: 2 },
      },
      sizeSmall: {
        padding: '6px 16px',
        fontSize: '0.8125rem',
      },
      sizeLarge: {
        padding: '10px 20px',
        fontSize: '0.875rem',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme: t }) => ({
        borderRadius: preset.shape.borderRadius ?? 12,
        backgroundImage: 'none',
        boxShadow: 'none',
        border: `1px solid ${t.palette.divider}`,
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
        borderRadius: 6,
        fontFamily: monoFontFamily,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      color: 'transparent',
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme: t }) => ({
        backgroundColor: t.marketing.navBackground,
        color: t.marketing.navTextColor,
        backgroundImage: 'none',
        boxShadow: 'none',
        backdropFilter: 'blur(12px)',
        ...(t.marketing.navAccentBorder
          ? { borderBottom: `3px solid ${t.marketing.navAccentBorder}` }
          : { borderBottom: `1px solid ${t.marketing.navBorderColor}` }),
      }),
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme: t }) => ({
        color: t.palette.divider,
        '&.Mui-active': { color: t.palette.accent.main },
        '&.Mui-completed': { color: t.palette.accent.main },
      }),
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: ({ theme: t }) => ({
        borderColor: t.palette.divider,
      }),
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          transition: 'all 0.2s ease',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: ({ theme }) => ({
        ...(theme.direction === 'rtl' && {
          textAlign: 'right',
          direction: 'rtl',
        }),
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { backgroundImage: 'none' },
      elevation1: {
        boxShadow:
          mode === 'light'
            ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
            : '0 1px 3px 0 rgb(0 0  0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5)',
      },
      elevation2: {
        boxShadow:
          mode === 'light'
            ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            : '0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)',
      },
      elevation3: {
        boxShadow:
          mode === 'light'
            ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            : '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: { transition: 'all 0.2s ease' },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
      },
    },
  },
});
