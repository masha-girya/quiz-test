import { FALLBACK_LANG, LOCALE_ROUTES } from 'app-constants';
import { DE_LOCALE, EN_LOCALE, ES_LOCALE, FR_LOCALE } from '.';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { ILocaleData } from 'types';

type TranslationResources = Record<keyof typeof LOCALE_ROUTES,  Record<'translation', ILocaleData>>;

const translations: TranslationResources = {
  en: {
    translation: EN_LOCALE,
  },
  fr: {
    translation: FR_LOCALE,
  },
  de: {
    translation: DE_LOCALE,
  },
  es: {
    translation: ES_LOCALE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    fallbackLng: FALLBACK_LANG,
    supportedLngs: Object.keys(LOCALE_ROUTES),
    debug: true,
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
