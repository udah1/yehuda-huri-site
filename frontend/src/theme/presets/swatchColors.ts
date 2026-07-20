import { DemoThemeColors } from '../tokens/DemoThemeColors';
import type { MarketingThemeName } from './types';

/** Accent swatch shown in the settings drawer for each marketing preset. */
export const getPresetSwatchColor = (name: MarketingThemeName): string =>
  DemoThemeColors[name].light.accent;
