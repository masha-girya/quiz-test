import { LANG } from 'app-constants';
import { ROUTES } from './routes.type';

export interface ILocaleData {
  button: Record<'next' | 'retakeQuiz', string>;
  hate: string;
  loader: string;
  [ROUTES.quizLang]: IQuestion;
  [ROUTES.quizAge]: IQuestion;
  [ROUTES.quizGender]: IQuestion;
  [ROUTES.quizPreferences]: IQuestion;
  [ROUTES.quizTopics]: IQuestion;
  [ROUTES.email]: IEmail;
  [ROUTES.thankYou]: IThankYou;
}

export interface ITitle {
  title: string;
  desc?: string;
}

export interface IEmail extends ITitle {
  placeholder: string;
  name: string;
  error: string;
  privacy: string[];
}

export interface IThankYou extends ITitle {
  download: string;
}

export interface IQuestion extends ITitle {
  variants: TVariant[];
}

export type TVariant = string | { text: string; route?: LANG; icon?: string };
