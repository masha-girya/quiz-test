import classNames from 'classnames';
import styles from './InputText.module.scss';

interface IProps {
  text: string;
  isBubble?: boolean;
  icon?: string;
}

export const InputText = (props: IProps) => {
  const { isBubble, icon, text } = props;

  return (
    <p
      className={classNames(styles.labelText, {
        [styles.labelText_bubble]: isBubble,
        [styles.labelText_icon]: icon && !isBubble,
      })}
    >
      {icon && (
        <span
          className={classNames(styles.labelText__icon, {
            [styles.labelText__icon_bubble]: isBubble,
          })}
        >
          {icon}
        </span>
      )}
      {text}
    </p>
  );
};
