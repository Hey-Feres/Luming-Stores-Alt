import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Cookies from 'js-cookie'

import { TRANSLATIONS_PT_BR } from './pt-BR/translations'
import { TRANSLATIONS_EN } from './en/translations'

const lang = Cookies.get('lang')

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: TRANSLATIONS_PT_BR },
    'en':    { translation: TRANSLATIONS_EN }
  }
})

i18n.changeLanguage(lang)