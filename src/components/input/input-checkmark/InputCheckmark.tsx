import classNames from 'classnames';
import { CheckMarkIcon } from 'components';
import styles from './InputCheckmark.module.scss';

interface IProps {
  checked?: boolean;
  isBubble?: boolean;
}

export const InputCheckmark = (props: IProps) => {
  const { checked, isBubble } = props;

  return (
    <span
      className={classNames(styles.checkmark, {
        [styles.checkmark_checked]: checked,
        [styles.checkmark_bubble]: isBubble,
      })}
    >
      <CheckMarkIcon />
    </span>
  );
};
