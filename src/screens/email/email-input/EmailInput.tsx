import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { INPUT_TYPE, ROUTES } from 'types';
import { Button, Input } from 'components';
import { useLocalStorage, useQuizNavigate } from 'utils/hooks';
import { emailValidation } from 'utils/helpers';
import styles from './EmailInput.module.scss';

interface IProps {
  placeholder: string;
  errorText: string;
}

export const EmailInput = (props: IProps) => {
  const { placeholder, errorText } = props;

  const { handleNavigateWrapper } = useQuizNavigate(ROUTES.email);
  const { t } = useTranslation();
  const { setLocalItem } = useLocalStorage();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const isEmailValid = emailValidation(email);

    if (isEmailValid) {
      setLocalItem({ title: 'Email', answer: [email], type: 'email' });
      handleNavigateWrapper();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setError(false);
  }, [email]);

  return (
    <>
      <Input
        type={INPUT_TYPE.email}
        value={email}
        setValue={setEmail}
        name={ROUTES.email}
        placeholder={placeholder}
        isError={error}
        errorText={errorText}
      />
      <div className={styles.button}>
        <Button
          type="submit"
          text={t('button.next')}
          handleClick={onSubmit}
          disabled={error || email.trim().length === 0}
        />
      </div>
    </>
  );
};
