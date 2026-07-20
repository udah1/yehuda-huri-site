import type { ThemePreset } from './types';
import { DemoThemeColors, EnterpriseTokens } from '../tokens/DemoThemeColors';
import { demoSpecToMarketingTokens, demoSpecToPalette, goldPalette } from './buildPresetPalette';

const demo = DemoThemeColors.fullstackForge;
const forgeGold = goldPalette(demo.light.accent, EnterpriseTokens.ctaContrast);

export const fullstackForgePreset: ThemePreset = {
  name: 'fullstackForge',
  label: 'Full-Stack Forge',
  num: '05',
  palettes: {
    light: demoSpecToPalette(demo.light, {
      primary: {
        main: demo.light.text,
        contrastText: '#FFFFFF',
      },
      gold: forgeGold,
    }),
    dark: demoSpecToPalette(demo.dark, {
      primary: {
        main: demo.dark.text,
        contrastText: demo.dark.bg,
      },
      gold: goldPalette(demo.dark.accent, EnterpriseTokens.ctaContrast),
    }),
  },
  marketing: {
    light: demoSpecToMarketingTokens(demo.light),
    dark: demoSpecToMarketingTokens(demo.dark),
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    headingFontFamily: '"Outfit", "Inter", sans-serif',
    monoFontFamily: '"JetBrains Mono", monospace',
  },
  shape: { borderRadius: 12 },
};
