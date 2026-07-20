import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import heTranslation from './locales/he.json';
import { isHebrewLanguage } from './constants/languages';

const resources = {
  en: {
    translation: enTranslation
  },
  he: {
    translation: heTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'he'],
    load: 'languageOnly',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

// Update document direction based on language
i18n.on('languageChanged', (lng) => {
  document.dir = isHebrewLanguage(lng) ? 'rtl' : 'ltr';
  document.documentElement.lang = isHebrewLanguage(lng) ? 'he' : 'en';
});

// Set initial direction
document.dir = isHebrewLanguage(i18n.language) ? 'rtl' : 'ltr';

export default i18n;
