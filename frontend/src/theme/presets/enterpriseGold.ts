import type { ThemePreset } from './types';
import { DemoThemeColors, EnterpriseTokens } from '../tokens/DemoThemeColors';
import { demoSpecToMarketingTokens, demoSpecToPalette, goldPalette } from './buildPresetPalette';

const demo = DemoThemeColors.enterpriseGold;
const enterpriseGold = goldPalette(EnterpriseTokens.ctaGold, EnterpriseTokens.ctaContrast);

export const enterpriseGoldPreset: ThemePreset = {
  name: 'enterpriseGold',
  label: 'Enterprise Gold',
  num: '06',
  palettes: {
    light: demoSpecToPalette(demo.light, {
      primary: {
        main: EnterpriseTokens.blue,
        contrastText: '#FFFFFF',
      },
      gold: enterpriseGold,
    }),
    dark: demoSpecToPalette(demo.dark, {
      primary: {
        main: EnterpriseTokens.blueLight,
        contrastText: demo.dark.bg,
      },
      gold: goldPalette(EnterpriseTokens.ctaGoldDark, EnterpriseTokens.ctaContrast),
    }),
  },
  marketing: {
    light: demoSpecToMarketingTokens(demo.light),
    dark: demoSpecToMarketingTokens(demo.dark),
  },
  typography: {
    fontFamily: '"Source Sans 3", "Segoe UI", system-ui, sans-serif',
    headingFontFamily: '"Lexend", "Source Sans 3", sans-serif',
    monoFontFamily: '"JetBrains Mono", monospace',
  },
  shape: { borderRadius: 12 },
};
