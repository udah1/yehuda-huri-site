import type { PaletteOptions } from '@mui/material/styles';
import type { DemoModeSpec } from '../tokens/DemoThemeColors';
import type { MarketingThemeTokens } from './types';

type ColorStop = {
  main: string;
  contrastText?: string;
  light?: string;
  dark?: string;
};

const accentPalette = (accent: string, contrastText: string) => ({
  main: accent,
  light: accent,
  dark: accent,
  contrastText,
});

const goldPalette = (main: string, contrastText: string) => ({
  main,
  light: main,
  dark: main,
  contrastText,
});

export function demoSpecToMarketingTokens(spec: DemoModeSpec): MarketingThemeTokens {
  return {
    heroGradient: spec.heroGradient,
    heroPattern: spec.heroPattern,
    gradientText: spec.gradientText,
    ctaColor: spec.ctaColor,
    navStyle: spec.navStyle,
    navBackground: spec.navBackground,
    navBorderColor: spec.navBorderColor,
    navTextColor: spec.navTextColor,
    navAccentBorder: spec.navAccentBorder,
    mediaStageBackground:
      spec.mediaStageBackground ?? (spec.navStyle === 'dark' ? spec.bg : spec.text),
  };
}

export function demoSpecToPalette(
  spec: DemoModeSpec,
  options: {
    primary: ColorStop;
    gold?: ColorStop;
  },
): PaletteOptions {
  const primaryContrast = options.primary.contrastText ?? spec.text;

  return {
    primary: options.primary,
    secondary: {
      main: spec.textMuted,
      contrastText: spec.text,
    },
    accent: accentPalette(spec.accent, options.gold?.contrastText ?? primaryContrast),
    ...(options.gold ? { gold: options.gold } : {}),
    background: {
      default: spec.bg,
      paper: spec.surface,
    },
    text: {
      primary: spec.text,
      secondary: spec.textMuted,
    },
    divider: spec.border,
  };
}

export { accentPalette, goldPalette };
