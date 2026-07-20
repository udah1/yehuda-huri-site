import type { ThemeOptions } from '@mui/material/styles';

export const headingSizes = {
  h1: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width:900px)': { fontSize: '2.75rem' },
    '@media (max-width:600px)': { fontSize: '2.25rem' },
  },
  h2: {
    fontSize: '2.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    '@media (max-width:900px)': { fontSize: '2.25rem' },
    '@media (max-width:600px)': { fontSize: '2rem' },
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    '@media (max-width:900px)': { fontSize: '1.875rem' },
    '@media (max-width:600px)': { fontSize: '1.75rem' },
  },
  h4: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.3 },
  h5: { fontSize: '1.375rem', fontWeight: 600, lineHeight: 1.3 },
  h6: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4 },
} as const;

export const buildTypography = (
  fontFamily: string,
  headingFontFamily: string,
): NonNullable<ThemeOptions['typography']> => ({
  fontFamily,
  ...Object.fromEntries(
    Object.entries(headingSizes).map(([key, value]) => [
      key,
      { ...value, fontFamily: headingFontFamily },
    ]),
  ),
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
});
