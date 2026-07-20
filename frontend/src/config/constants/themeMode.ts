/** MUI palette mode values used across theme provider and chrome. */
export const THEME_MODES = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES];

/** User preference including OS-driven system mode (Harmony-style customizer). */
export const THEME_MODE_PREFERENCES = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const;

export type ThemeModePreference = (typeof THEME_MODE_PREFERENCES)[keyof typeof THEME_MODE_PREFERENCES];

export const THEME_MODE_PREFERENCE_STORAGE_KEY = 'themeModePreference';

/** @deprecated Legacy key — resolved mode is still mirrored here for older code paths. */
export const THEME_MODE_STORAGE_KEY = 'themeMode';
