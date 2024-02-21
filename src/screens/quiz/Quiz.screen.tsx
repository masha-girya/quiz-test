import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { QuizVariantsBox, TitleBox } from 'components';
import { ROUTES } from 'types';
import { useLocaleData } from 'utils/hooks';
import styles from './Quiz.module.scss';

export const Quiz = () => {
  const { localeData: currentQuiz, slug } = useLocaleData(ROUTES.quiz);

  const { lang } = useParams();

  return (
    <>
      {currentQuiz && slug && (
        <div
          className={classNames(styles.question, styles[`question_${slug}`])}
        >
          <TitleBox title={currentQuiz.title} desc={currentQuiz.desc} />

          <QuizVariantsBox
            title={currentQuiz.title}
            variants={currentQuiz.variants}
            slug={slug}
            lang={lang}
          />
        </div>
      )}
    </>
  );
};
