import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ITitle, ROUTES } from 'types';
import styles from './TitleBox.module.scss';

interface IProps extends ITitle {}

export const TitleBox = (props: IProps) => {
  const { title, desc } = props;
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const getTitle = useCallback((title: string) => {
    return title.split(' ').map((word, index) => (
      <span
        key={index}
        className={
          word.toLowerCase() === t('hate')
            ? styles.titleBox__title_highlight
            : ''
        }
      >
        {word}{' '}
      </span>
    ));
  }, []);

  return (
    <div className={styles.titleBox}>
      <h1
        className={classNames(styles.titleBox__title, {
          [styles.titleBox__title_main]: !desc,
          [styles.titleBox__title_thankYou]: pathname.includes(ROUTES.thankYou),
        })}
      >
        {getTitle(title)}
      </h1>
      {desc && (
        <p
          className={classNames(styles.titleBox__text, {
            [styles.titleBox__text_thankYou]: pathname.includes(
              ROUTES.thankYou,
            ),
          })}
        >
          {desc}
        </p>
      )}
    </div>
  );
};
