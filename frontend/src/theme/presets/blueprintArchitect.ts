import type { ThemePreset } from './types';
import { DemoThemeColors } from '../tokens/DemoThemeColors';
import { demoSpecToMarketingTokens, demoSpecToPalette } from './buildPresetPalette';

const demo = DemoThemeColors.blueprintArchitect;

export const blueprintArchitectPreset: ThemePreset = {
  name: 'blueprintArchitect',
  label: 'Blueprint Architect',
  num: '02',
  palettes: {
    light: demoSpecToPalette(demo.light, {
      primary: {
        main: demo.light.accent,
        contrastText: '#FFFFFF',
      },
    }),
    dark: demoSpecToPalette(demo.dark, {
      primary: {
        main: demo.dark.accent,
        contrastText: demo.dark.bg,
      },
    }),
  },
  marketing: {
    light: demoSpecToMarketingTokens(demo.light),
    dark: demoSpecToMarketingTokens(demo.dark),
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    headingFontFamily: '"Sora", "Inter", sans-serif',
    monoFontFamily: '"IBM Plex Mono", "JetBrains Mono", monospace',
  },
  shape: { borderRadius: 8 },
};
