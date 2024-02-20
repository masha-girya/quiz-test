import { INPUT_TYPE, ROUTES } from 'types';

export const QUIZ_TYPE = {
  [ROUTES.quizLang]: INPUT_TYPE.radio,
  [ROUTES.quizGender]: INPUT_TYPE.radio,
  [ROUTES.quizAge]: INPUT_TYPE.radio,
  [ROUTES.quizPreferences]: INPUT_TYPE.checkbox,
  [ROUTES.quizTopics]: INPUT_TYPE.checkbox,
  [ROUTES.email]: INPUT_TYPE.text,
};
