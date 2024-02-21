import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NEXT_ROUTES } from 'app-constants';

export const useQuizNavigate = (route?: keyof typeof NEXT_ROUTES) => {
  const navigate = useNavigate();
  const { lang, slug } = useParams();

  const handleNavigate = useCallback(
    (locale?: string) => {
      const localeRoute = locale ? locale : lang;
      const quizRoute =
        NEXT_ROUTES[route ? route : (slug as keyof typeof NEXT_ROUTES)];

      navigate(`/${localeRoute}/${quizRoute}`);
    },
    [lang, slug, route],
  );

  const handleNavigateWrapper = useCallback(
    () => handleNavigate(),
    [handleNavigate],
  );

  return { handleNavigate, handleNavigateWrapper };
};
