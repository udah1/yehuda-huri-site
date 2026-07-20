import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Close as CloseIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  RestartAlt as RestartAltIcon,
  SettingsBrightness as SettingsBrightnessIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { LAYOUT } from '../../../config/constants/layout';
import { THEME_MODE_PREFERENCES, type ThemeModePreference } from '../../../config/constants/themeMode';
import { MARKETING_THEME_NAMES } from '../../../theme/presets';
import { getPresetSwatchColor } from '../../../theme/presets/swatchColors';
import type { SettingsDrawerProps } from './SettingsDrawer.types';

export const SettingsDrawer = ({
  open,
  modePreference,
  themeName,
  onClose,
  onModePreferenceChange,
  onThemeSelect,
  onResetDefaults,
}: SettingsDrawerProps) => {
  const { t } = useTranslation();

  const handleModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    value: ThemeModePreference | null,
  ) => {
    if (value) {
      onModePreferenceChange(value);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: LAYOUT.settingsDrawerWidth,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
          {t('marketing.customize')}
        </Typography>
        <IconButton onClick={onClose} aria-label={t('common.close')} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 2 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1, letterSpacing: '0.08em' }}
        >
          {t('marketing.settingsSections.mode')}
        </Typography>
        <ToggleButtonGroup
          exclusive
          fullWidth
          size="small"
          value={modePreference}
          onChange={handleModeChange}
          aria-label={t('marketing.settingsSections.mode')}
        >
          <ToggleButton value={THEME_MODE_PREFERENCES.light}>
            <LightModeIcon fontSize="small" sx={{ mr: 0.75 }} />
            {t('marketing.modeOptions.light')}
          </ToggleButton>
          <ToggleButton value={THEME_MODE_PREFERENCES.system}>
            <SettingsBrightnessIcon fontSize="small" sx={{ mr: 0.75 }} />
            {t('marketing.modeOptions.system')}
          </ToggleButton>
          <ToggleButton value={THEME_MODE_PREFERENCES.dark}>
            <DarkModeIcon fontSize="small" sx={{ mr: 0.75 }} />
            {t('marketing.modeOptions.dark')}
          </ToggleButton>
        </ToggleButtonGroup>

        <Divider sx={{ my: 2.5 }} />

        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 1.5, letterSpacing: '0.08em' }}
        >
          {t('marketing.settingsSections.designStyle')}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {MARKETING_THEME_NAMES.map((name) => {
            const selected = name === themeName;
            const swatchColor = getPresetSwatchColor(name);

            return (
              <Tooltip key={name} title={t(`marketing.themeStyles.${name}`)} arrow>
                <Box
                  component="button"
                  type="button"
                  onClick={() => onThemeSelect(name)}
                  aria-label={t(`marketing.themeStyles.${name}`)}
                  aria-pressed={selected}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0.75,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    p: 0.5,
                    borderRadius: 1,
                    minWidth: 72,
                    color: 'text.primary',
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.main',
                      outlineOffset: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      bgcolor: swatchColor,
                      boxShadow: selected
                        ? `0 0 0 2px ${swatchColor}, 0 0 0 4px currentColor`
                        : 'inset 0 0 0 1px rgba(0,0,0,0.08)',
                    }}
                  />
                  <Typography variant="caption" sx={{ fontWeight: selected ? 700 : 500 }}>
                    {t(`marketing.themeStyles.${name}`)}
                  </Typography>
                </Box>
              </Tooltip>
            );
          })}
        </Box>
      </Box>

      <Divider />

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          startIcon={<RestartAltIcon />}
          onClick={onResetDefaults}
          sx={{ color: 'text.primary', borderColor: 'divider', '&:hover': { borderColor: 'text.secondary' } }}
        >
          {t('marketing.resetThemeDefaults')}
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
