import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'components';
import { useQuizNavigate } from 'utils/hooks';
import { ROUTES } from 'types';
import styles from './Loading.module.scss';

export const Loading = () => {
  const { t } = useTranslation();
  const { handleNavigateWrapper } = useQuizNavigate(ROUTES.loading);

  useEffect(() => {
    const timeout = setTimeout(() => handleNavigateWrapper(), 3100);

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
