import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeModeProvider } from './config/ThemeProvider';
import App from './App';
import './config/i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
