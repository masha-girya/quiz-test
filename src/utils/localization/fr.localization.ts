import { LOCALE_ROUTES } from 'app-constants';
import { ILocaleData, ROUTES } from 'types';

export const FR_LOCALE: ILocaleData = {
  button: {
    next: 'Suivant',
    retakeQuiz: 'Reprendre le quiz',
  },
  hate: 'détestes',
  [ROUTES.quizLang]: {
    title: 'Quelle est votre langue préférée?',
    desc: 'Hoisissez la langue',
    // variants: ['Anglais', 'Français', 'Allemand', 'Espagnol'],
    variants: [
      { text: 'Anglais', route: LOCALE_ROUTES.en },
      { text: 'Français', route: LOCALE_ROUTES.fr },
      { text: 'Allemand', route: LOCALE_ROUTES.de },
      { text: 'Espagnol', route: LOCALE_ROUTES.es },
    ],
  },
  [ROUTES.quizGender]: {
    title: 'À quel genre vous identifiez-vous?',
    desc: 'Veuillez partager comment vous identifiez-vous',
    variants: [
      { text: 'Femelle', icon: '👩' },
      { text: 'Mâle', icon: '👨' },
      { text: 'Autre', icon: '😉' },
    ],
  },
  [ROUTES.quizAge]: {
    title: 'Quel âge avez-vous?',
    variants: ['18-29 ans', '30-39 ans', '40-49 ans', '50+'],
  },
  [ROUTES.quizPreferences]: {
    title: 'Qu’est-ce que tu détestes le plus dans un livre?',
    variants: [
      'Manque de logique',
      'Une vitesse lente',
      'Manque d`humour',
      'Une fin bien trop générique',
    ],
  },
  [ROUTES.quizTopics]: {
    title: 'Quels sont vos sujets favoris?',
    desc: 'Choisissez jusqu`à 3 sujets que vous aimez',
    variants: [
      {
        icon: '🐺',
        text: 'Loup-garou',
      },
      {
        icon: '💃',
        text: 'Action',
      },
      {
        icon: '👑',
        text: 'Obsession royale',
      },
      {
        icon: '🤑',
        text: 'Milliardaire',
      },
      {
        icon: '🥰',
        text: 'Romance',
      },
      {
        icon: '💁‍♀️',
        text: 'Jeune adulte',
      },
      {
        icon: '🤠',
        text: 'Mauvais garçon',
      },
    ],
  },
  loader: 'Trouver des collections pour vous...',
  [ROUTES.email]: {
    title: 'Email',
    desc: 'Entrez votre email pour obtenir un accès complet',
    placeholder: 'Votre email',
    name: 'email',
    error: 'Email invalide',
    privacy: [
      'En continuant, j`accepte la ',
      'Politique de Confidentialité',
      ' et les ',
      'Conditions D`utilisation.',
    ],
  },
  [ROUTES.thankYou]: {
    title: 'Merci',
    desc: 'pour nous avoir soutenu et avoir réussi le quiz',
    download: 'Téléchargez mes réponses',
  },
};
