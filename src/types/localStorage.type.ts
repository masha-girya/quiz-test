export interface ILocalStorage {
  title: string;
  answer: string[];
  type:
    | 'single-select'
    | 'single-select-image'
    | 'multiple-select'
    | 'bubble'
    | 'email';
}

export enum LOCAL_DATA_KEYS {
  quizData = 'quizData',
}
