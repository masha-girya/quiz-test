import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'components';
import { useLocalStorage, useQuizNavigate } from 'utils/hooks';
import { getError } from 'utils/helpers';
import { ROUTES } from 'types';
import { postAnswers } from 'api';
import styles from './Loading.module.scss';

export const Loading = () => {
  const { t } = useTranslation();
  const { handleNavigateWrapper } = useQuizNavigate(ROUTES.loading);
  const { getLocalItem } = useLocalStorage();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const sendAnswersToServer = async () => {
      const data = getLocalItem();

      try {
        const response = await postAnswers(data);

        if(response) {
          // timeout = setTimeout(() => handleNavigateWrapper(), 3100);
        }
      } catch(error: any) {
        getError(error);
      } finally {
        timeout = setTimeout(() => handleNavigateWrapper(), 3100);
      }
    }

    sendAnswersToServer();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.loading__container}>
        <Loader />
        <h2 className={styles.loading__text}>{t('loader')}</h2>
      </div>
    </div>
  );
};
