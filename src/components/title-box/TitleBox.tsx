import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'types';
import styles from './TitleBox.module.scss';

interface IProps {
  title: string;
  text?: string;
}

export const TitleBox = (props: IProps) => {
  const { title, text } = props;
  const { pathname } = useLocation();

  return (
    <div className={styles.titleBox}>
      <h1
        className={classNames(styles.titleBox__title, {
          [styles.titleBox__title_main]: !text,
          [styles.titleBox__title_thankYou]: pathname.includes(ROUTES.thankYou),
        })}
      >
        {title}
      </h1>
      {text && (
        <p
          className={classNames(styles.titleBox__text, {
            [styles.titleBox__text_thankYou]: pathname.includes(
              ROUTES.thankYou,
            ),
          })}
        >
          {text}
        </p>
      )}
    </div>
  );
};
