// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ar', // Set default language to Arabic
        fallbackLng: 'ar', // Fallback language to Arabic
        interpolation: {
            escapeValue: false
        }
    });
document.documentElement.dir = 'rtl';
document.body.classList.add('rtl');
i18n.on('languageChanged', (lng) => {
    const dir = lng === 'ar' || lng === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    if (dir === 'rtl') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
});

export default i18n;
