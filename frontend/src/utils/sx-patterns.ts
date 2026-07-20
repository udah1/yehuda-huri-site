import type { SxProps, Theme } from '@mui/material';

/** Shared sx helpers used by marketing pages and layout shell. */
export const sxPatterns = {
  flatCard: (): SxProps<Theme> => ({
    boxShadow: 'none',
    bgcolor: 'background.paper',
    overflow: 'hidden',
  }),

  sectionCard: (): SxProps<Theme> => ({
    p: { xs: 2.5, md: 3 },
    borderRadius: 3,
    border: 1,
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: 'none',
    transition: 'border-color 0.2s ease',
    '&:hover': {
      borderColor: 'accent.main',
    },
  }),

  heroSurface: (theme: Theme): SxProps<Theme> => ({
    position: 'relative',
    background: theme.marketing?.heroGradient ?? theme.palette.background.default,
    ...(theme.marketing?.heroPattern
      ? {
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: theme.marketing.heroPattern,
            opacity: 0.6,
            pointerEvents: 'none',
          },
          '& > *': {
            position: 'relative',
          },
        }
      : {}),
  }),
};
