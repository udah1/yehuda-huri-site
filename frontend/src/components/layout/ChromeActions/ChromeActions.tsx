import { IconButton } from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { isHebrewLanguage } from '../../../config/constants/languages';
import { THEME_MODES } from '../../../config/constants/themeMode';
import type { ChromeActionsProps } from './ChromeActions.types';

export const ChromeActions = ({
  mode,
  language,
  onOpenSettings,
  onToggleLanguage,
  onToggleColorMode,
}: ChromeActionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <IconButton
        color="inherit"
        onClick={onToggleLanguage}
        aria-label={t('marketing.toggleLanguage')}
        sx={{ fontSize: '0.875rem', fontWeight: 600 }}
      >
        {isHebrewLanguage(language) ? t('marketing.langShort.en') : t('marketing.langShort.he')}
      </IconButton>
      <IconButton color="inherit" onClick={onToggleColorMode} aria-label={t('marketing.toggleTheme')}>
        {mode === THEME_MODES.dark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <IconButton
        color="inherit"
        edge="end"
        onClick={onOpenSettings}
        aria-label={t('marketing.customize')}
        sx={{ fontSize: '0.875rem' }}
      >
        <TuneIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default ChromeActions;
