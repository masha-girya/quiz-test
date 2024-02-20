import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, TitleBox } from 'components';
import { InputsBox } from './inputs-box';
import { useQuizNavigate } from 'hooks';
import { INPUT_TYPE } from 'types';
import { QUIZ_TYPE } from 'app-constants';
import styles from './QuizItem.module.scss';

interface IProps {
  currentQuiz: any;
  slug: string;
}

export const QuizItem = ({ currentQuiz, slug }: IProps) => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const { handleNavigateWrapper } = useQuizNavigate();

  return (
    <div className={classNames(styles.question, styles[`question_${slug}`])}>
      <TitleBox title={currentQuiz.title} text={currentQuiz.desc} />

      <InputsBox
        title={currentQuiz.title}
        variants={currentQuiz.variants}
        slug={slug}
        lang={lang}
      />

      {QUIZ_TYPE[slug as keyof typeof QUIZ_TYPE] === INPUT_TYPE.checkbox && (
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
  );
};
