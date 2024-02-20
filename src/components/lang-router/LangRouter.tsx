import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import i18n from 'localization/i18n';
// import { ScreenWrapper } from '@components/screen-wrapper';

export const LangRouter = () => {
  const { lang } = useParams();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <Outlet />
  );
};
