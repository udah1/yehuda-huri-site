import type { MarketingThemeName } from '../../../theme/presets/types';
import type { ThemeModePreference } from '../../../config/constants/themeMode';

export type SettingsDrawerProps = {
  open: boolean;
  modePreference: ThemeModePreference;
  themeName: MarketingThemeName;
  onClose: () => void;
  onModePreferenceChange: (preference: ThemeModePreference) => void;
  onThemeSelect: (name: MarketingThemeName) => void;
  onResetDefaults: () => void;
};
