import { useCallback } from 'react';
import { ILocalStorage, LOCAL_DATA_KEYS } from 'types';

export const useLocalStorage = (key = LOCAL_DATA_KEYS.quizData) => {
  const getLocalItem = useCallback(() => {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }, [localStorage, key]);

  const setLocalItem = (data: ILocalStorage) => {
    const localItem = getLocalItem();

    const isDataInKey = localItem.find(
      (item: ILocalStorage) => item.title === data.title,
    );

    const newData = isDataInKey
      ? localItem.map((item: ILocalStorage) =>
          item.title === data.title
            ? {
                ...item,
                answer: data.answer,
              }
            : item,
        )
      : [...localItem, data];

    localStorage.setItem(key, JSON.stringify(newData));
  };

  return { setLocalItem, getLocalItem };
};
