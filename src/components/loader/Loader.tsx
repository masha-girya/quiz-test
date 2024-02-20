import { useEffect, useMemo, useState } from 'react';
import styles from './Loader.module.scss';

export const Loader = () => {
  const circumference = useMemo(() => 728.48, []);
  const [loaderValue, setLoaderValue] = useState(0);
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setOffset(circumference * ((100 - loaderValue) / 100));

    const interval = setInterval(() => {
      if (loaderValue < 100) {
        setLoaderValue((prev) => prev + 1);
      }
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, [loaderValue, circumference]);

  return (
    <div className={styles.loader}>
      <svg
        width="252"
        height="252"
        viewBox="-31.5 -31.5 315 315"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          r="116"
          cx="126"
          cy="126"
          fill="transparent"
          strokeWidth="12"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset="0"
        ></circle>
        <circle
          r="116"
          cx="126"
          cy="126"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDashoffset={`${offset}px`}
          fill="transparent"
          strokeDasharray={`${circumference}px`}
        ></circle>
      </svg>

      <p>{`${loaderValue}%`}</p>
    </div>
  );
};
