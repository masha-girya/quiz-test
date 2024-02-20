import styles from './ProgressBar.module.scss';

interface IProps {
  maxValue: number;
  value: number;
}

export const ProgressBar = (props: IProps) => {
  const { maxValue, value } = props;

  return (
    <div className={styles.progressWrapper}>
      <label htmlFor="quiz-number" className={styles.progressWrapper__label}>
        <span
          className={styles.progressWrapper__label_value}
        >{`${value + 1}`}</span>
        <span
          className={styles.progressWrapper__label_slash}
        >/</span>
        <span
          className={styles.progressWrapper__label_maxValue}
        >{`${maxValue}`}</span>
      </label>
      <progress id="quiz-number" max={maxValue} value={value}></progress>

      <div className={styles.progressContainer}>
        <div
          className={styles.progressContainer__progress}
          style={{
            width: `${(value * 100) / maxValue}%`,
            minWidth: `${100 / maxValue}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
