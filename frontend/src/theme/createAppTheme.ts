import { createTheme, type ThemeOptions } from '@mui/material/styles';
import {
  DEFAULT_MARKETING_THEME,
  getMarketingThemePreset,
  type MarketingThemeName,
} from './presets';
import { buildComponentOverrides } from './componentOverrides';
import { getSemanticPalette } from './semanticPalette';
import { buildTypography } from './typography';

export const createAppTheme = (
  mode: 'light' | 'dark',
  direction: 'ltr' | 'rtl' = 'ltr',
  themeName: MarketingThemeName = DEFAULT_MARKETING_THEME,
) => {
  const preset = getMarketingThemePreset(themeName);
  const palette = preset.palettes[mode];
  const marketing = preset.marketing[mode];
  const { headingFontFamily, fontFamily, monoFontFamily } = preset.typography;

  const themeOptions: ThemeOptions = {
    direction,
    palette: {
      mode,
      ...getSemanticPalette(mode),
      ...palette,
    },
    marketing: {
      ...marketing,
      themeName,
      label: preset.label,
      num: preset.num,
      monoFontFamily,
      headingFontFamily,
    },
    typography: buildTypography(fontFamily, headingFontFamily),
    shape: {
      borderRadius: preset.shape.borderRadius,
    },
    spacing: 8,
    components: buildComponentOverrides(mode, preset, monoFontFamily),
  };

  return createTheme(themeOptions);
};
