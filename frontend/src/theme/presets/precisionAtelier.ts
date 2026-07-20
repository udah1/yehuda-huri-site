import type { ThemePreset } from './types';
import { DemoThemeColors } from '../tokens/DemoThemeColors';
import { demoSpecToMarketingTokens, demoSpecToPalette, goldPalette } from './buildPresetPalette';

const demo = DemoThemeColors.precisionAtelier;

export const precisionAtelierPreset: ThemePreset = {
  name: 'precisionAtelier',
  label: 'Precision Atelier',
  num: '03',
  palettes: {
    light: demoSpecToPalette(demo.light, {
      primary: {
        main: demo.light.text,
        contrastText: demo.light.bg,
      },
      gold: goldPalette(demo.light.accent, '#FFFFFF'),
    }),
    dark: demoSpecToPalette(demo.dark, {
      primary: {
        main: demo.dark.text,
        contrastText: demo.dark.bg,
      },
      gold: goldPalette(demo.dark.accent, '#1C1410'),
    }),
  },
  marketing: {
    light: demoSpecToMarketingTokens(demo.light),
    dark: demoSpecToMarketingTokens(demo.dark),
  },
  typography: {
    fontFamily: '"DM Sans", "Inter", system-ui, sans-serif',
    headingFontFamily: '"Fraunces", "Georgia", serif',
    monoFontFamily: '"JetBrains Mono", monospace',
  },
  shape: { borderRadius: 16 },
};
