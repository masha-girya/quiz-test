import { BackButton, ProgressBar } from 'components';
import styles from './Header.module.scss';
import i18n from 'localization/i18n';
import { FALLBACK_LANG } from 'app-constants';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ROUTES } from 'types';

export const Header = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [currentSlug, setCurrentSlug] = useState(1);

  const process = Object.keys(
    i18n.options.resources?.[FALLBACK_LANG].translation || {},
  ).filter((item) => !isNaN(Number(item)));

  useEffect(() => {
    if (slug) {
      setCurrentSlug(Number(slug));
    }
  }, [slug]);

  return (
    <header className={styles.header}>
      {pathname.includes(ROUTES.quiz) && (
        <>
          <div className={styles.header__backBtn}>
            {`${currentSlug}` !== ROUTES.quizLang && <BackButton />}
          </div>
          <ProgressBar maxValue={process.length} value={currentSlug - 1} />
        </>
      )}
    </header>
  );
};
