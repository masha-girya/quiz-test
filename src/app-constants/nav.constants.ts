import { ROUTES } from 'types';

export const NAV = [
  ROUTES.quizLang,
  ROUTES.quizGender,
  ROUTES.quizAge,
  ROUTES.quizPreferences,
  ROUTES.quizTopics,
  ROUTES.email,
  ROUTES.thankYou,
];

export const NEXT_ROUTES = {
  [ROUTES.quizLang]: `${ROUTES.quiz}/${ROUTES.quizGender}`,
  [ROUTES.quizGender]: `${ROUTES.quiz}/${ROUTES.quizAge}`,
  [ROUTES.quizAge]: `${ROUTES.quiz}/${ROUTES.quizPreferences}`,
  [ROUTES.quizPreferences]: `${ROUTES.quiz}/${ROUTES.quizTopics}`,
  [ROUTES.quizTopics]: ROUTES.email,
  [ROUTES.email]: ROUTES.loading,
  [ROUTES.loading]: ROUTES.thankYou,
  [ROUTES.thankYou]: `${ROUTES.quiz}/${ROUTES.quizLang}`,
};

export const LOCALE_ROUTES = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
}

export const FALLBACK_LANG = 'en';
