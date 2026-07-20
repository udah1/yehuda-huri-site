/** Supported app locales — match i18n resource keys. */
export const APP_LANGUAGES = {
  en: 'en',
  he: 'he',
} as const;

export type AppLanguage = (typeof APP_LANGUAGES)[keyof typeof APP_LANGUAGES];

/** True for `he`, `he-IL`, etc. — i18next may return regional codes. */
export const isHebrewLanguage = (language: string | undefined): boolean =>
  Boolean(language?.startsWith(APP_LANGUAGES.he));

export const toAppLanguage = (language: string | undefined): AppLanguage =>
  isHebrewLanguage(language) ? APP_LANGUAGES.he : APP_LANGUAGES.en;

export const toggleAppLanguage = (language: string | undefined): AppLanguage =>
  isHebrewLanguage(language) ? APP_LANGUAGES.en : APP_LANGUAGES.he;
