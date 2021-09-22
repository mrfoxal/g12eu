import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import messages from './en';

Vue.use(VueI18n);

export const localeParamName = 'selectedLocale';

let selectedLocale = localStorage.getItem(localeParamName);

if (!selectedLocale) {
  selectedLocale = 'en';
}

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: messages },
});

const loadedLanguages = ['en'];

function setI18nLanguage(lang) {
  localStorage.setItem(localeParamName, lang);
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);

  return lang;
}

export function loadLanguageAsync(lang) {
  // if the same localization
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // if the localization was loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // if the localization was not loaded
  return import(`./${lang}.js`)
    .then((messages) => {
      i18n.setLocaleMessage(lang, messages.default);
      loadedLanguages.push(lang);
      return setI18nLanguage(lang);
    });
}
