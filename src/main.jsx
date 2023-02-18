import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next'

import translation_ca from "./locales/ca/translations.json"
import translation_es from "./locales/es/translations.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ca",
  resources: {
    ca: {
      global: translation_ca
    },
    es: {
      global: translation_es
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
