import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import uzTranslation from './locales/uz/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation }
    },
    lng: 'ru',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });
  
  export default i18n;