import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AppLayout from './components/layout/AppLayout';

import LandingPage from './pages/marketing/LandingPage';
import PrivacyPolicyPage from './pages/marketing/PrivacyPolicyPage';
import AccessibilityPage from './pages/marketing/AccessibilityPage';
import { isHebrewLanguage, toAppLanguage } from './config/constants/languages';
import { LANDING_SECTIONS, ROUTES } from './config/routes';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const { i18n } = useTranslation();
  useAnalytics();

  useEffect(() => {
    const lang = toAppLanguage(i18n.resolvedLanguage ?? i18n.language);
    document.documentElement.lang = lang;
    document.dir = isHebrewLanguage(lang) ? 'rtl' : 'ltr';
  }, [i18n.language, i18n.resolvedLanguage]);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="about"
          element={<Navigate to={{ pathname: ROUTES.home, hash: LANDING_SECTIONS.about }} replace />}
        />
        <Route
          path="skills"
          element={<Navigate to={{ pathname: ROUTES.home, hash: LANDING_SECTIONS.skills }} replace />}
        />
        <Route
          path="portfolio"
          element={<Navigate to={{ pathname: ROUTES.home, hash: LANDING_SECTIONS.portfolio }} replace />}
        />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}

export default App;
