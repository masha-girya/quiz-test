import { DownloadIcon } from 'components';
import { CSVLink } from 'react-csv';
import styles from './CvsDownload.module.scss';
import { ILocalStorage } from 'types';
import { useMemo } from 'react';

interface IProps {
  data: ILocalStorage[];
}

export const CvsDownload = (props: IProps) => {
  const { data } = props;
  const formattedData = useMemo(() => {
    return data.map((item: ILocalStorage, index: number) => ({
      order: index + 1,
      ...item,
    }));
  }, [data]);

  return (
    <button type="button" disabled={data.length === 0}>
      <CSVLink data={formattedData}>
        <div className={styles.cvsDownload}>
          <DownloadIcon />
          <p className={styles.cvsDownload__text}>Download my answers</p>
        </div>
      </CSVLink>
    </button>
  );
};
