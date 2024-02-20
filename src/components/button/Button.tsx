import styles from './Button.module.scss';

interface IProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  handleClick: (e: any) => void;
}

export const Button = (props: IProps) => {
  const { text, disabled, type, handleClick } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={styles.button}
    >
      {text}
    </button>
  );
};
