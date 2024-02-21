import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import i18n from 'utils/localization/i18n';
import { ROUTES } from 'types';
import { FALLBACK_LANG } from 'app-constants';

export const useLocaleData = (type: ROUTES) => {
  const { lang, slug } = useParams();

  const [localeData, setLocaleData] = useState<null | any>(null);

  useEffect(() => {
    const dataKey = type.includes('quiz') ? (slug as string) : type;
    const isValidLanguage = i18n.hasResourceBundle(lang || '', 'translation');

    setLocaleData(
      i18n.getDataByLanguage(
        isValidLanguage
          ? (lang as string)
          : (i18n.options.fallbackLng as typeof FALLBACK_LANG)[0],
      )?.translation[dataKey],
    );
  }, [lang, slug, type]);

  return { localeData, lang, slug };
};
