import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { PrimeReactProvider } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <PrimeReactProvider>
        <App/>
    </PrimeReactProvider>
  </I18nextProvider>,
)
