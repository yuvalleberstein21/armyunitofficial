import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import he from '../locales/he.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        he: { translation: he },
    },
    lng: 'he', // default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export const getLanguage = () => {
    return i18n.language;
}


export default i18n;