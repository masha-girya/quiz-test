import { LOCALE_ROUTES } from 'app-constants';
import { ILocaleData, ROUTES } from 'types';

export const ES_LOCALE: ILocaleData = {
  button: {
    next: 'Próximo',
    retakeQuiz: 'Volver a hacer el cuestionario',
  },
  hate: 'odias',
  [ROUTES.quizLang]: {
    title: '¿Cuál es tu idioma preferido?',
    desc: 'Elige lengua',
    variants: [
      { text: 'Inglés', route: LOCALE_ROUTES.en },
      { text: 'Francés', route: LOCALE_ROUTES.fr },
      { text: 'Alemán', route: LOCALE_ROUTES.de },
      { text: 'Español', route: LOCALE_ROUTES.es },
    ],
  },
  [ROUTES.quizGender]: {
    title: '¿Con qué género te identificas?',
    desc: 'Por favor comparte como te identificas',
    variants: [
      { text: 'Femenino', icon: '👩' },
      { text: 'Masculino', icon: '👨' },
      { text: 'Otro', icon: '😉' },
    ],
  },
  [ROUTES.quizAge]: {
    title: '¿Cuál es tu edad?',
    variants: ['18-29 años', '30-39 años', '40-49 años', '50+'],
  },
  [ROUTES.quizPreferences]: {
    title: '¿Qué es lo que más odias en un libro?',
    variants: [
      'Falta de logica',
      'Una velocidad lenta',
      'Falta de humor',
      'Final demasiado genérico',
    ],
  },
  [ROUTES.quizTopics]: {
    title: '¿Cuales son tus temas favoritos?',
    desc: 'Elige hasta 3 temas que te gusten',
    variants: [
      {
        icon: '🐺',
        text: 'Hombre-lobo',
      },
      {
        icon: '💃',
        text: 'Acción',
      },
      {
        icon: '👑',
        text: 'Obsesión real',
      },
      {
        icon: '🤑',
        text: 'Multimillonario',
      },
      {
        icon: '🥰',
        text: 'Romance',
      },
      {
        icon: '💁‍♀️',
        text: 'Adulto joven',
      },
      {
        icon: '🤠',
        text: 'Chico malo',
      },
    ],
  },
  loader: 'Buscando colecciones para ti...',
  [ROUTES.email]: {
    title: 'Correo electrónico',
    desc: 'Ingrese su correo electrónico para obtener acceso completo',
    placeholder: 'Tu correo electrónico',
    name: 'correo electrónico',
    error: 'Email inválido',
    privacy: [
      'Al continuar, acepto la ',
      'Política de privacidad',
      ' y los ',
      'Condiciones de uso.',
    ],
  },
  [ROUTES.thankYou]: {
    title: 'Gracias',
    desc: 'por apoyarnos y aprobar el cuestionario',
    download: 'Descarga mis respuestas',
  },
};
