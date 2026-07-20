import type { AppLanguage } from '../../../config/constants/languages';
import type { ThemeMode } from '../../../config/constants/themeMode';

export type ChromeActionsProps = {
  mode: ThemeMode;
  language: AppLanguage;
  onOpenSettings: () => void;
  onToggleLanguage: () => void;
  onToggleColorMode: () => void;
};
