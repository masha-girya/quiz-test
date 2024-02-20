import { QuizItem } from 'components';
import { ROUTES } from 'types';
import { useLocaleData } from 'hooks';
import styles from './Quiz.module.scss';

export const Quiz = () => {
  const { localeData: currentQuiz, slug } = useLocaleData(ROUTES.quiz);

  return (
    <div className={styles.main}>
      {currentQuiz && slug && (
        <QuizItem slug={slug} currentQuiz={currentQuiz} />
      )}
    </div>
  );
};
