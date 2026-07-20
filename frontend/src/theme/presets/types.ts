import { PaletteOptions, ThemeOptions } from '@mui/material/styles';

export const MARKETING_THEME_NAMES = [
  'blueprintArchitect',
  'precisionAtelier',
  'fullstackForge',
  'enterpriseGold',
] as const;

export type MarketingThemeName = (typeof MARKETING_THEME_NAMES)[number];

export const DEFAULT_MARKETING_THEME: MarketingThemeName = 'fullstackForge';

/** sessionStorage key for the selected marketing theme preset */
export const MARKETING_THEME_NAME_SESSION_KEY = 'marketingThemeName';

export type MarketingCtaColor = 'primary' | 'secondary' | 'gold' | 'accent';

export type MarketingNavStyle = 'light' | 'dark';

export interface MarketingThemeTokens {
  heroGradient: string;
  heroPattern?: string;
  gradientText: string;
  ctaColor: MarketingCtaColor;
  /** Demo-aligned sticky nav: frosted light paper or dark zinc bar */
  navStyle?: MarketingNavStyle;
  navBackground: string;
  navBorderColor: string;
  navTextColor: string;
  navAccentBorder?: string;
  /** Portfolio screenshot letterbox — theme text (light) or page bg (dark), not pure black. */
  mediaStageBackground: string;
}

export interface ThemePresetTypography {
  fontFamily: string;
  headingFontFamily: string;
  monoFontFamily: string;
}

export interface ThemePreset {
  name: MarketingThemeName;
  label: string;
  num: string;
  palettes: {
    light: PaletteOptions;
    dark: PaletteOptions;
  };
  marketing: {
    light: MarketingThemeTokens;
    dark: MarketingThemeTokens;
  };
  typography: ThemePresetTypography;
  shape: Pick<NonNullable<ThemeOptions['shape']>, 'borderRadius'>;
}

export function isMarketingThemeName(value: string): value is MarketingThemeName {
  return (MARKETING_THEME_NAMES as readonly string[]).includes(value);
}

export const MARKETING_THEME_LABELS: Record<MarketingThemeName, string> = {
  blueprintArchitect: 'Blueprint Architect (02)',
  precisionAtelier: 'Precision Atelier (03)',
  fullstackForge: 'Full-Stack Forge (05)',
  enterpriseGold: 'Enterprise Gold (06)',
};
