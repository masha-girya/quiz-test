import { Link } from 'react-router-dom';
import { EmailInput } from './email-input';
import { TitleBox } from 'components';
import { useLocaleData } from 'hooks';
import { ROUTES } from 'types';
import styles from './Email.module.scss';

export const Email = () => {
  const { localeData } = useLocaleData(ROUTES.email);

  return (
    <>
      {localeData && (
        <div className={styles.emailScreen}>
          <TitleBox title={localeData.title} text={localeData.desc} />

          <EmailInput
            placeholder={localeData.placeholder}
            errorText={localeData.error}
          />

          <p className={styles.privacyPolicy}>
            {localeData.privacy[0]}
            <Link to="/" className={styles.privacyPolicy__link}>
              {localeData.privacy[1]}
            </Link>
            {localeData.privacy[2]}
            <Link to="/" className={styles.privacyPolicy__link}>
              {localeData.privacy[3]}
            </Link>
          </p>
        </div>
      )}
    </>
  );
};
