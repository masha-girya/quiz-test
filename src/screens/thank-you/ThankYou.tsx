import { Button, CvsDownload, TitleBox } from 'components';
import { useTranslation } from 'react-i18next';
import { useLocaleData, useQuizNavigate } from 'hooks';
import { LOCAL_DATA_KEYS, ROUTES } from 'types';
import CheckmarkImg from './assets/checkmark.png';
import styles from './ThankYou.module.scss';

export const ThankYou = () => {
  const { localeData } = useLocaleData(ROUTES.thankYou);
  const { t } = useTranslation();
  const { handleNavigateWrapper } = useQuizNavigate(ROUTES.thankYou);

  const data = JSON.parse(
    localStorage.getItem(LOCAL_DATA_KEYS.quizData) || '[]',
  );

  const handleClick = () => {
    localStorage.removeItem(LOCAL_DATA_KEYS.quizData);
    handleNavigateWrapper();
  };

  return (
    <>
      {localeData && (
        <div className={styles.thankYou}>
          <TitleBox title={localeData.title} text={localeData.desc} />

          <img src={CheckmarkImg} className={styles.thankYou__checkmark} />
          <div className={styles.thankYou__download}>
            {data && <CvsDownload data={data} />}
          </div>
          <div className={styles.thankYou__button}>
            <Button
              type="button"
              text={t('button.retakeQuiz')}
              handleClick={handleClick}
              disabled={false}
            />
          </div>
        </div>
      )}
    </>
  );
};
