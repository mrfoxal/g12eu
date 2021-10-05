<template>
  <header id="header"
          class="bg-purple-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 rounded-br-lg rounded-bl-lg sticky top-0 z-10">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <div class="text-lg text-xl site_name">
          <router-link to="/">
            {{ $t('site.name') }}
          </router-link>
        </div>
        <div class="text-white font-light text-sm">
          {{ $t('site.description') }}
        </div>
      </div>
      <div class="sm:hidden">
        <button class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" type="button"
                @click="isOpen = !isOpen">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  fill-rule="evenodd"/>
            <path v-if="!isOpen"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </div>
    <nav>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <select
            v-model="selectedLanguage"
            class="mt-1 block px-2 py-1 text-white rounded bg-purple-700 sm:mt-0 sm:ml-2"
            @change="changeLang($event.target.value)"
        >
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
        <router-link
            v-scroll-to="'#welcome'"
            class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
            to="/#welcome"
        >
          {{ $t('menu.church') }}
        </router-link>
        <router-link
            v-scroll-to="'#pastor'"
            class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
            to="/#pastor"
        >
          {{ $t('menu.pastor') }}
        </router-link>
        <router-link
            v-scroll-to="'#ministries'"
            class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
            to="/#ministries"
        >
          {{ $t('menu.ministries') }}
        </router-link>
        <router-link
            v-scroll-to="'#sermons'"
            class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
            to="/#sermons"
        >
          {{ $t('menu.sermons') }}
        </router-link>
        <router-link
            v-scroll-to="'#contacts'"
            class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
            to="/#contacts"
        >
          {{ $t('menu.contacts') }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { loadLanguageAsync, localeParamName } from '@/lang/i18n-setup'

export default {
  data () {
    return {
      isOpen: false,
      selectedLanguage: 'ru',
      langs: ['ru', 'de', 'en'],
    }
  },
  methods: {
    changeLang (lang) {
      loadLanguageAsync(lang).then();
    },
  },
  created () {
    const selectedLocale = localStorage.getItem(localeParamName);

    if (selectedLocale) {
      this.selectedLanguage = selectedLocale;
    }
  },
}
</script>

<style lang="scss" scoped>
.site_name {
  color: rgb(246, 173, 85);
}
</style>
