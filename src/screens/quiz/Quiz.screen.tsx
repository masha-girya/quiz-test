import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button, QuizVariantsBox, TitleBox } from 'components';
import { INPUT_TYPE, ROUTES } from 'types';
import { useLocaleData, useQuizNavigate } from 'utils/hooks';
import { QUIZ_TYPE } from 'app-constants';
import styles from './Quiz.module.scss';

export const Quiz = () => {
  const { localeData: currentQuiz, slug } = useLocaleData(ROUTES.quiz);

  const { lang } = useParams();
  const { t } = useTranslation();
  const { handleNavigateWrapper } = useQuizNavigate();

  return (
    <>
      {currentQuiz && slug && (
        <div
          className={classNames(styles.question, styles[`question_${slug}`])}
        >
          <TitleBox title={currentQuiz.title} text={currentQuiz.desc} />

          <QuizVariantsBox
            title={currentQuiz.title}
            variants={currentQuiz.variants}
            slug={slug}
            lang={lang}
          />

          {QUIZ_TYPE[slug as keyof typeof QUIZ_TYPE] ===
            INPUT_TYPE.checkbox && (
            <div className={styles.question__button}>
              <Button
                type="button"
                text={t('button.next')}
                handleClick={handleNavigateWrapper}
                disabled={false}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
