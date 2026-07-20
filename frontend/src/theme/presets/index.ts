import { blueprintArchitectPreset } from './blueprintArchitect';
import { enterpriseGoldPreset } from './enterpriseGold';
import { fullstackForgePreset } from './fullstackForge';
import { precisionAtelierPreset } from './precisionAtelier';
import type { MarketingThemeName, ThemePreset } from './types';

export * from './types';
export { blueprintArchitectPreset } from './blueprintArchitect';
export { precisionAtelierPreset } from './precisionAtelier';
export { fullstackForgePreset } from './fullstackForge';
export { enterpriseGoldPreset } from './enterpriseGold';

export const marketingThemePresets: Record<MarketingThemeName, ThemePreset> = {
  blueprintArchitect: blueprintArchitectPreset,
  precisionAtelier: precisionAtelierPreset,
  fullstackForge: fullstackForgePreset,
  enterpriseGold: enterpriseGoldPreset,
};

export function getMarketingThemePreset(name: MarketingThemeName): ThemePreset {
  return marketingThemePresets[name];
}
