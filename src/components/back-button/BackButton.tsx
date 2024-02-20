import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from 'components';
import styles from './BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Go back"
      className={styles.backBtn}
    >
      <ArrowIcon />
    </button>
  );
};
