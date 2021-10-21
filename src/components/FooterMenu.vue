<template>
  <div class="bg-purple-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 rounded-br-lg rounded-bl-lg">
    <div class="flex flex-col md:flex-row sm:flex-col sm:p-0 items-center justify-between px-4 py-3 ">
      <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
         href="https://t.me/NeuesLebenPL" target="_blank">
        Telegram
      </a>
      <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
         href="https://www.youtube.com/user/g12eu" target="_blank">
        YouTube
      </a>
      <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
         href="https://www.instagram.com/g12eu/" target="_blank">
        Instagram
      </a>
      <a :href="bible" class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
         target="_blank">
        {{ $t('menu.bible') }}
      </a>
      <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
         href="http://www.ihopkc.org/prayerroom/" target="_blank">
        iHOP
      </a>
      <router-link class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2" to="/imprint">
        {{ $t('menu.imprint') }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerMenu',
  computed: {
    bible () {
      if (this.$i18n.locale === 'ru') {
        return 'http://imbf.mobi'
      }
      return 'https://www.bibleserver.com'
    }
  },
}
</script>
