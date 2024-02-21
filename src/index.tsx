import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/localization/i18n.ts';
import './index.module.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
