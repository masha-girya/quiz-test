import { LOCALE_ROUTES } from 'app-constants';
import { ILocaleData, ROUTES } from 'types';

export const DE_LOCALE: ILocaleData = {
  button: {
    next: 'Nächste',
    retakeQuiz: 'Wiederholen Sie das Quiz',
  },
  hate: 'hasst',
  [ROUTES.quizLang]: {
    title: 'Was ist Ihre bevorzugte Sprache?',
    desc: 'Sprache wählen',
    variants: [
      { text: 'Englisch', route: LOCALE_ROUTES.en },
      { text: 'Französisch', route: LOCALE_ROUTES.fr },
      { text: 'Deutsch', route: LOCALE_ROUTES.de },
      { text: 'Spanisch', route: LOCALE_ROUTES.es },
    ],
  },
  [ROUTES.quizGender]: {
    title: 'Mit welchem Geschlecht identifizierst du dich?',
    desc: 'Bitte teilen Sie uns mit, wie Sie sich identifizieren',
    variants: [
      { text: 'Weiblich', icon: '👩' },
      { text: 'Männlich', icon: '👨' },
      { text: 'Andere', icon: '😉' },
    ],
  },
  [ROUTES.quizAge]: {
    title: 'Wie alt bist du?',
    variants: ['18-29 Jahre', '30-39 Jahre', '40-49 Jahre', '50+'],
  },
  [ROUTES.quizPreferences]: {
    title: 'Was hasst du an einem Buch am meisten?',
    variants: [
      'Mangel an Logik',
      'Eine langsame Geschwindigkeit',
      'Mangel an Humor',
      'Viel zu allgemeines Ende',
    ],
  },
  [ROUTES.quizTopics]: {
    title: 'Was sind deine Lieblingsthemen?',
    desc: 'Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen',
    variants: [
      {
        icon: '🐺',
        text: 'Werwolf',
      },
      {
        icon: '💃',
        text: 'Aktion',
      },
      {
        icon: '👑',
        text: 'Königliche Obsession',
      },
      {
        icon: '🤑',
        text: 'Milliardär',
      },
      {
        icon: '🥰',
        text: 'Romantik',
      },
      {
        icon: '💁‍♀️',
        text: 'Junger Erwachsener',
      },
      {
        icon: '🤠',
        text: 'Böser Bub',
      },
    ],
  },
  loader: 'Kollektionen für Sie finden...',
  [ROUTES.email]: {
    title: 'Email',
    desc: 'Geben Sie Ihre E-Mail-Adresse ein, um vollen Zugriff zu erhalten',
    placeholder: 'Deine E-Mail',
    name: 'email',
    error: 'Ungültige E-Mail',
    privacy: [
      'Indem ich fortfahre, stimme ich den ',
      'Datenschutzbestimmungen',
      ' und ',
      'Nutzungsbedingungen zu',
    ],
  },
  [ROUTES.thankYou]: {
    title: 'Danke',
    desc: 'für deine Unterstützung und das bestandene Quiz',
    download: 'Laden Sie meine Antworten herunter',
  },
};
