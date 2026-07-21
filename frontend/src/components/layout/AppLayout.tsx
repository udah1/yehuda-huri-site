import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeMode, type MarketingThemeName } from '../../config/ThemeProvider';
import { useErudaDebug, useScrollSpy, useStickyHeaderOffset } from '../../hooks';
import { sxPatterns } from '../../utils/sx-patterns';
import { toAppLanguage, toggleAppLanguage } from '../../config/constants/languages';
import { LANDING_SECTION_IDS, LANDING_SECTIONS, isLandingPath } from '../../config/routes';
import { navigateToLandingSection } from '../../utils/landingNavigation';
import { mobileNavScrollDelayMs } from '../../utils/stickyHeader';
import { DESKTOP_MARKETING_NAV_LINKS, MOBILE_MARKETING_NAV_LINKS } from './navConfig';
import type { NavLink } from './navConfig.types';
import { AppHeader } from './AppHeader';
import { ChromeActions } from './ChromeActions';
import { BottomNavBar } from './BottomNavBar';
import { SettingsDrawer } from './SettingsDrawer';
import { SkipToMain } from '../common/SkipToMain';
import { SiteFooter } from './SiteFooter';

const AppLayout = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const { mode, modePreference, toggleColorMode, themeName, setThemeName, setModePreference, resetThemeDefaults } =
    useThemeMode();

  const { handleDebugTap, isDebugActive } = useErudaDebug();
  const currentYear = new Date().getFullYear();

  const onLanding = isLandingPath(location.pathname);
  const { activeSection: activeSectionId, setActiveSection } = useScrollSpy(
    onLanding ? LANDING_SECTION_IDS : [],
  );
  useStickyHeaderOffset();

  const scrollToSection = (sectionId: typeof LANDING_SECTIONS[keyof typeof LANDING_SECTIONS]) => {
    const retryMs = isMobile ? mobileNavScrollDelayMs : 0;
    navigateToLandingSection(sectionId, navigate, { scrollRetryMs: retryMs });
  };

  const closeMenus = () => {
    setSettingsOpen(false);
  };

  const handleMarketingNav = (link: NavLink) => {
    closeMenus();

    if (link.sectionId) {
      if (onLanding) {
        setActiveSection(link.sectionId);
      }
      scrollToSection(link.sectionId);
      return;
    }

    navigate(link.path);
  };

  const handleThemeSelect = (name: MarketingThemeName) => {
    setThemeName(name);
  };

  const handleLogoClick = () => {
    scrollToSection(LANDING_SECTIONS.overview);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        pb: { xs: 'calc(56px + env(safe-area-inset-bottom))', md: 0 },
      }}
    >
      <SkipToMain />
      <AppHeader
        pathname={location.pathname}
        activeSectionId={onLanding ? activeSectionId : null}
        desktopMarketingLinks={DESKTOP_MARKETING_NAV_LINKS}
        onMarketingNavigate={handleMarketingNav}
        onLogoClick={handleLogoClick}
        chromeActions={
          <ChromeActions
            mode={mode}
            language={toAppLanguage(i18n.resolvedLanguage ?? i18n.language)}
            onOpenSettings={() => setSettingsOpen(true)}
            onToggleLanguage={() =>
              i18n.changeLanguage(toggleAppLanguage(i18n.resolvedLanguage ?? i18n.language))
            }
            onToggleColorMode={toggleColorMode}
          />
        }
      />

      <SettingsDrawer
        open={settingsOpen}
        modePreference={modePreference}
        themeName={themeName}
        onClose={() => setSettingsOpen(false)}
        onModePreferenceChange={setModePreference}
        onThemeSelect={handleThemeSelect}
        onResetDefaults={resetThemeDefaults}
      />

      <Box
        id="main-content"
        component="main"
        tabIndex={-1}
        sx={{
          flex: 1,
          ...sxPatterns.heroSurface(theme),
        }}
      >
        <Outlet />
      </Box>

      <SiteFooter
        currentYear={currentYear}
        isDebugActive={isDebugActive}
        onDebugTap={handleDebugTap}
      />

      <BottomNavBar
        links={MOBILE_MARKETING_NAV_LINKS}
        activeSectionId={onLanding ? activeSectionId : null}
        onNavigate={handleMarketingNav}
      />
    </Box>
  );
};

export default AppLayout;
