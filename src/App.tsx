import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'localization/i18n';
import { Header, LangRouter } from 'components';
import { Email, Quiz, ThankYou, Loading } from 'screens';
import { ROUTES, ROUTES_ANIMATION } from 'types';
import styles from './App.module.scss';
import classNames from 'classnames';

function App() {
  const location = useLocation();
  const displayLocation = useRef(location);

  const [transitionStage, setTransitionStage] = useState(
    ROUTES_ANIMATION.fadeIn,
  );

  const handleAnimationEnd = useCallback(() => {
    if (transitionStage === ROUTES_ANIMATION.fadeOut) {
      setTransitionStage(ROUTES_ANIMATION.fadeIn);
      displayLocation.current = location;
    }
  }, [transitionStage]);

  useEffect(() => {
    if (location !== displayLocation.current)
      setTransitionStage(ROUTES_ANIMATION.fadeOut);
  }, [location, displayLocation]);

  return (
    <div
      className={classNames(styles.app, styles[`app_${transitionStage}`])}
      onAnimationEnd={handleAnimationEnd}
    >
      <Header />

      <I18nextProvider i18n={i18n}>
        <main className={styles.app__main}>
          <form method="post" className={styles.app__form}>
            <Routes location={displayLocation.current}>
              <Route path="/" element={<LangRouter />}>
                <Route path={ROUTES.quiz} element={<Quiz />}>
                  <Route path=":slug" element={<Quiz />} />
                </Route>
                <Route path={ROUTES.email} element={<Email />} />
                <Route path={ROUTES.loading} element={<Loading />} />
                <Route path={ROUTES.thankYou} element={<ThankYou />} />
              </Route>

              <Route path="/:lang" element={<LangRouter />}>
                <Route path={ROUTES.quiz} element={<Quiz />}>
                  <Route path=":slug" element={<Quiz />} />
                </Route>
                <Route path={ROUTES.email} element={<Email />} />
                <Route path={ROUTES.loading} element={<Loading />} />
                <Route path={ROUTES.thankYou} element={<ThankYou />} />
              </Route>
            </Routes>
          </form>
        </main>
      </I18nextProvider>
    </div>
  );
}

export default App;
