<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        {{ $t('menu.home') }}
      </router-link> |
      <router-link to="/about">
        {{ $t('menu.about') }}
      </router-link>
      <select
          v-model="selectedLanguage"
          @change="changeLang($event.target.value)">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { loadLanguageAsync, localeParamName } from '@/lang/i18n-setup';

export default {
  data() {
    return {
      selectedLanguage: 'en',
      langs: ['en', 'ru'],
    };
  },
  methods: {
    changeLang(lang) {
      loadLanguageAsync(lang).then();
    },
  },
  created() {
    const selectedLocale = localStorage.getItem(localeParamName);

    if (selectedLocale) {
      this.selectedLanguage = selectedLocale;
    }
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
