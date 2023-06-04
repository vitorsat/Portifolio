/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en-us.json'
import pt from './pt-br.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...en
    },
    pt: {
      ...pt
    }
  },
  lng: 'pt'
})

export default i18n
