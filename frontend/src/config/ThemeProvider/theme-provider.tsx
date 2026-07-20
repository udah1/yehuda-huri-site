import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeContextType, ThemeConfig, ThemeModeProviderProps } from './ThemeProvider.types';
import { isHebrewLanguage } from '../constants/languages';
import {
  THEME_MODE_PREFERENCE_STORAGE_KEY,
  THEME_MODE_STORAGE_KEY,
  type ThemeModePreference,
} from '../constants/themeMode';
import {
  createAppTheme,
  DEFAULT_MARKETING_THEME,
  isMarketingThemeName,
  MARKETING_THEME_NAME_SESSION_KEY,
} from '../../theme';
import { updateSiteFavicon } from '../../utils/siteFavicon';
import type { MarketingCtaColor } from '../../theme/presets/types';

const resolveFaviconColors = (
  palette: Theme['palette'],
  ctaColor: MarketingCtaColor,
): { background: string; foreground: string } => {
  if (ctaColor === 'gold' && palette.gold) {
    return { background: palette.gold.main, foreground: palette.gold.contrastText };
  }
  if (ctaColor === 'accent' && palette.accent) {
    return { background: palette.accent.main, foreground: palette.accent.contrastText };
  }
  if (ctaColor === 'secondary') {
    return { background: palette.secondary.main, foreground: palette.secondary.contrastText };
  }
  return { background: palette.primary.main, foreground: palette.primary.contrastText };
};

const cacheLtr = createCache({ key: 'mui', prepend: true });
const cacheRtl = createCache({
  key: 'muirtl',
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
});

const LEGACY_THEME_NAME_STORAGE_KEY = 'marketingThemeName';

const resolveEffectiveMode = (preference: ThemeModePreference): PaletteMode => {
  if (preference === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return preference;
};

function readModePreference(): ThemeModePreference {
  if (typeof window === 'undefined') {
    return 'system';
  }

  try {
    const stored = localStorage.getItem(THEME_MODE_PREFERENCE_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }

    const legacy = localStorage.getItem(THEME_MODE_STORAGE_KEY);
    if (legacy === 'light' || legacy === 'dark') {
      return legacy;
    }
  } catch {
    return 'system';
  }

  return 'system';
}

function readSavedThemeName(): typeof DEFAULT_MARKETING_THEME {
  if (typeof window === 'undefined') {
    return DEFAULT_MARKETING_THEME;
  }

  try {
    const fromSession = sessionStorage.getItem(MARKETING_THEME_NAME_SESSION_KEY);
    if (fromSession && isMarketingThemeName(fromSession)) {
      return fromSession;
    }

    const fromLocal = localStorage.getItem(LEGACY_THEME_NAME_STORAGE_KEY);
    if (fromLocal && isMarketingThemeName(fromLocal)) {
      sessionStorage.setItem(MARKETING_THEME_NAME_SESSION_KEY, fromLocal);
      localStorage.removeItem(LEGACY_THEME_NAME_STORAGE_KEY);
      return fromLocal;
    }
  } catch {
    return DEFAULT_MARKETING_THEME;
  }

  return DEFAULT_MARKETING_THEME;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeModeProvider');
  }
  return context.theme;
};

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({ children, config }) => {
  const [modePreference, setModePreferenceState] = useState<ThemeModePreference>(readModePreference);
  const [mode, setMode] = useState<PaletteMode>(() => resolveEffectiveMode(readModePreference()));
  const [themeName, setThemeNameState] = useState(readSavedThemeName);
  const { i18n } = useTranslation();

  const defaultConfig: ThemeConfig = useMemo(
    () => ({
      bestPractices: {
        isDevelopmentWarnings: import.meta.env.DEV,
        isDevelopmentErrors: import.meta.env.DEV,
      },
      cssBaseline: true,
      ...config,
    }),
    [config],
  );

  useEffect(() => {
    const applyMode = () => setMode(resolveEffectiveMode(modePreference));

    applyMode();

    if (modePreference !== 'system') {
      return undefined;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', applyMode);
    return () => media.removeEventListener('change', applyMode);
  }, [modePreference]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_MODE_PREFERENCE_STORAGE_KEY, modePreference);
      localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
    } catch {
      // ignore quota / private mode
    }
  }, [modePreference, mode]);

  useEffect(() => {
    try {
      sessionStorage.setItem(MARKETING_THEME_NAME_SESSION_KEY, themeName);
    } catch {
      // ignore quota / private mode
    }
  }, [themeName]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    document.body.setAttribute('data-theme', mode);
    document.body.setAttribute('data-marketing-theme', themeName);
  }, [mode, themeName]);

  const setModePreference = useCallback(
    (preference: ThemeModePreference) => {
      setModePreferenceState(preference);
      defaultConfig.changeModeCallback?.(resolveEffectiveMode(preference));
    },
    [defaultConfig],
  );

  const toggleColorMode = useCallback(() => {
    const nextPreference: ThemeModePreference = mode === 'light' ? 'dark' : 'light';
    setModePreference(nextPreference);
  }, [mode, setModePreference]);

  const setThemeName = useCallback(
    (nextThemeName: typeof themeName) => {
      setThemeNameState(nextThemeName);
      try {
        sessionStorage.setItem(MARKETING_THEME_NAME_SESSION_KEY, nextThemeName);
      } catch {
        // ignore
      }
      defaultConfig.changeThemeNameCallback?.(nextThemeName);
    },
    [defaultConfig],
  );

  const resetThemeDefaults = useCallback(() => {
    setModePreference('system');
    setThemeName(DEFAULT_MARKETING_THEME);
  }, [setModePreference, setThemeName]);

  const direction = isHebrewLanguage(i18n.resolvedLanguage ?? i18n.language) ? 'rtl' : 'ltr';
  const theme = useMemo(
    () => createAppTheme(mode as 'light' | 'dark', direction, themeName),
    [mode, direction, themeName],
  );
  const ctaColor = theme.marketing.ctaColor;
  const emotionCache = direction === 'rtl' ? cacheRtl : cacheLtr;

  useEffect(() => {
    const { background, foreground } = resolveFaviconColors(theme.palette, ctaColor);
    updateSiteFavicon(background, foreground);
  }, [theme, ctaColor]);

  const contextValue = useMemo(
    () => ({
      mode,
      modePreference,
      themeName,
      toggleColorMode,
      setModePreference,
      setThemeName,
      resetThemeDefaults,
      theme,
      bestPractices: defaultConfig.bestPractices,
      ctaColor,
    }),
    [
      mode,
      modePreference,
      themeName,
      toggleColorMode,
      setModePreference,
      setThemeName,
      resetThemeDefaults,
      theme,
      defaultConfig.bestPractices,
      ctaColor,
    ],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <CacheProvider value={emotionCache} key={direction}>
        <ThemeProvider theme={theme}>
          {defaultConfig.cssBaseline && <CssBaseline />}
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeModeProvider;
