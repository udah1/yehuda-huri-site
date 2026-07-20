import React from 'react';
import { PaletteMode } from '@mui/material';
import { Theme, ThemeOptions } from '@mui/material/styles';
import type { MarketingThemeName } from '../../theme/presets/types';
import type { ThemeMode, ThemeModePreference } from '../constants/themeMode';

export interface BestPracticesConfig {
  isDevelopmentWarnings: boolean;
  isDevelopmentErrors: boolean;
}

export interface ThemeConfig {
  bestPractices: BestPracticesConfig;
  mode?: PaletteMode;
  cssBaseline?: boolean;
  lightTheme?: ThemeOptions;
  darkTheme?: ThemeOptions;
  changeModeCallback?: (newMode: PaletteMode) => void;
  changeThemeNameCallback?: (themeName: MarketingThemeName) => void;
}

export interface ThemeModeProviderProps {
  children: React.ReactNode;
  config?: Partial<ThemeConfig>;
}

export interface ThemeContextType {
  mode: ThemeMode;
  modePreference: ThemeModePreference;
  themeName: MarketingThemeName;
  toggleColorMode: () => void;
  setModePreference: (preference: ThemeModePreference) => void;
  setThemeName: (themeName: MarketingThemeName) => void;
  resetThemeDefaults: () => void;
  theme: Theme;
  bestPractices: BestPracticesConfig;
  /** Resolved MUI color prop for marketing primary CTAs */
  ctaColor: 'primary' | 'secondary' | 'gold' | 'accent';
}
