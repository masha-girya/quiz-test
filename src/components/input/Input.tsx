import classNames from 'classnames';
import { INPUT_TYPE } from 'types';
import { InputText } from './input-text';
import { InputCheckmark } from './input-checkmark';
import styles from './Input.module.scss';

interface IProps {
  name: string;
  type: INPUT_TYPE;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  isError?: boolean;
  errorText?: string;
  checked?: boolean;
  isBubble?: boolean;
  icon?: string;
}

export const Input = (props: IProps) => {
  const {
    name,
    type,
    value,
    setValue,
    placeholder,
    checked,
    isBubble,
    icon,
    isError,
    errorText,
  } = props;

  return (
    <div
      className={classNames(styles.inputBox, {
        [styles.inputBox_bubble]: isBubble,
        [styles.inputBox_icon]: icon && !isBubble,
      })}
    >
      <label
        className={classNames(
          styles.inputBox__label,
          styles[`inputBox__label_${type}`],
          {
            [styles.inputBox__label_bubble]: isBubble,
            [styles.inputBox__label_checked]: checked,
            [styles.inputBox__label_onError]: isError,
            [styles.inputBox__label_icon]: icon && !isBubble,
          },
        )}
      >
        {(type === INPUT_TYPE.checkbox || type === INPUT_TYPE.radio) && (
          <InputText text={value} isBubble={isBubble} icon={icon} />
        )}

        {type === INPUT_TYPE.checkbox && !isBubble && (
          <InputCheckmark checked={checked} isBubble={isBubble} />
        )}

        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          checked={checked}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            styles.inputBox__input,
            styles[`inputBox__input_${type}`],
            {
              [styles.inputBox__input_bubble]: isBubble,
            },
          )}
        />
      </label>

      {isError && errorText && (
        <p className={styles.inputBox__errorText}>{errorText}</p>
      )}
    </div>
  );
};
