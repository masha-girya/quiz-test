import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Header } from 'components';
import i18n from 'utils/localization/i18n';
import styles from './LangRouter.module.scss';

export const LangRouter = () => {
  const { lang } = useParams();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};
