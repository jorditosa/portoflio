import i18next from 'i18next'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from "react-i18next"
import App from './App'
import './styles/index.css'

import { Provider } from 'react-redux'
import { store } from './app/store'
import translation_ca from "./locales/cat/translations.json"
import translation_es from "./locales/esp/translations.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "cat",
  resources: {
    cat: {
      global: translation_ca
    },
    esp: {
      global: translation_es
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>
)
