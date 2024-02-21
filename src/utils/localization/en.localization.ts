import { LANG } from 'app-constants';
import { ILocaleData, ROUTES } from 'types';

export const EN_LOCALE: ILocaleData = {
  button: {
    next: 'Next',
    retakeQuiz: 'Retake quiz',
  },
  hate: 'hate',
  [ROUTES.quizLang]: {
    title: 'What is your preferred language?',
    desc: 'Choose language',
    variants: [
      { text: 'English', route: LANG.en },
      { text: 'French', route: LANG.fr },
      { text: 'German', route: LANG.de },
      { text: 'Spanish', route: LANG.es },
    ],
  },
  [ROUTES.quizGender]: {
    title: 'What gender do you identify with?',
    desc: 'Please share how do you identify yourself',
    variants: [
      { text: 'Female', icon: '👩' },
      { text: 'Male', icon: '👨' },
      { text: 'Other', icon: '😉' },
    ],
  },
  [ROUTES.quizAge]: {
    title: 'What is your age?',
    variants: ['18-29 years', '30-39 years', '40-49 years', '50+'],
  },
  [ROUTES.quizPreferences]: {
    title: 'What do you hate the most in a book?',
    variants: [
      'Lack of logic',
      'A slow speed',
      'Lack of humor',
      'Way too generic ending',
    ],
  },
  [ROUTES.quizTopics]: {
    title: 'What are your favorite topics?',
    desc: 'Choose up to 3 topics you like',
    variants: [
      {
        icon: '🐺',
        text: 'Werewolf',
      },
      {
        icon: '💃',
        text: 'Action',
      },
      {
        icon: '👑',
        text: 'Royal Obsession',
      },
      {
        icon: '🤑',
        text: 'Billionaire',
      },
      {
        icon: '🥰',
        text: 'Romance',
      },
      {
        icon: '💁‍♀️',
        text: 'Young Adult',
      },
      {
        icon: '🤠',
        text: 'Bad Boy',
      },
    ],
  },
  loader: 'Finding collections for you...',
  [ROUTES.email]: {
    title: 'Email',
    desc: 'Enter your email to get full access',
    placeholder: 'Your email',
    name: 'email',
    error: 'Invalid Email',
    privacy: [
      'By continuing I agree with ',
      'Privacy policy',
      ' and ',
      'Terms of use.',
    ],
  },
  [ROUTES.thankYou]: {
    title: 'Thank you',
    desc: 'for supporting us and passing quiz',
    download: 'Download my answers',
  },
};
