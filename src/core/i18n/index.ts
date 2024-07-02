import 'intl-pluralrules';
import type {Dictionary} from 'core/i18n/types';
import type {Language} from 'i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import languages from './languages';

const defaultLanguage: Language = 'en_US';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en_US';
    resources: typeof languages;
  }
}

i18n.use(initReactI18next).init({
  resources: languages,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
