<template>
  <div>
    <div id="welcome" class="px-5 py-1">
      <img alt="" class="w-screen antialiased" src="img/header.jpg"/>

      <h3 class="text-purple-800 font-bold text-lg mb-3">
        {{ $t('text.welcome.title') }}
      </h3>

      <div class="font-light">
        <p class="pb-2" v-html="$t('text.welcome.text')"></p>
      </div>
    </div>

    <div id="pastor" class="px-5 py-4">
      <h3 class="text-purple-800 font-bold text-lg mb-3">
        <svg class="h-6 w-6 fill-current inline-block">
          <path
              id="Combined-Shape"
              d="M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M6.99999861,6.00166547 C6.99999861,4.34389141 8.3465151,3 9.99999722,3 C11.6568507,3 12.9999958,4.33902013 12.9999958,6.00166547 L12.9999958,7.99833453 C12.9999958,9.65610859 11.6534793,11 9.99999722,11 C8.34314374,11 6.99999861,9.66097987 6.99999861,7.99833453 L6.99999861,6.00166547 Z M3.34715433,14.4444439 C5.37306718,13.5169611 7.62616222,13 10,13 C12.3738388,13 14.6269347,13.5169615 16.6528458,14.4444437 C15.2177146,16.5884188 12.7737035,18 10,18 C7.22629656,18 4.78228556,16.5884189 3.34715433,14.4444439 L3.34715433,14.4444439 Z"></path>
        </svg>
        {{ $t('text.pastor.title') }}
      </h3>

      <div class="flex justify-between space-x-2">
        <div class="font-light">
          <p class="pb-2" v-html="$t('text.pastor.text')"></p>
        </div>
        <div class="flex-grow">
          <img :alt="$t('text.pastor.title')" class="rounded-lg" src="img/pastor.jpg"/>
        </div>
      </div>
    </div>

    <div id="ministries" class="px-5 py-1">
      <h3 class="text-purple-800 font-bold text-lg mb-3">
        <svg class="h-6 w-6 fill-current inline-block">
          <path id="Combined-Shape"
                d="M17,10 L20,10 L10,0 L0,10 L3,10 L3,20 L17,20 L17,10 Z M8,14 L12,14 L12,20 L8,20 L8,14 Z"></path>
        </svg>
        {{ $t('text.ministry.title') }}
      </h3>

      <p class="font-light pb-2">
        {{ $t('text.ministry.text') }}
      </p>

      <div class="grid gap-4 md:grid-flow-col md:grid-cols-3 md:grid-rows-3">
        <ministry :name="$t('text.ministries.man')" bg-image-url="img/man.jpg"/>
        <ministry :name="$t('text.ministries.pray')" bg-image-url="img/worship.jpg"/>
        <ministry :name="$t('text.ministries.woman')" bg-image-url="img/woman.jpg"/>
        <ministry :name="$t('text.ministries.consulting')" bg-image-url="img/consultations.jpg"/>
        <ministry :name="$t('text.ministries.main')" bg-image-url="img/main.jpg"/>
        <ministry :name="$t('text.ministries.children')" bg-image-url="img/children.jpg"/>
        <ministry :name="$t('text.ministries.sundaySchool')" bg-image-url="img/sundayschool.jpg"/>
        <ministry :name="$t('text.ministries.bibleSchool')" bg-image-url="img/leaderschool.jpg"/>
        <ministry :name="$t('text.ministries.internet')" bg-image-url="img/internet.jpg"/>
      </div>
    </div>

    <div id="sermons" class="px-4 py-4">
      <h3 class="text-purple-800 font-bold text-lg mb-3">
        <svg class="h-6 w-6 fill-current inline-block">
          <path
              id="Combined-Shape"
              d="M3,6 L3,5.99810135 C3,4.89458045 3.89706013,4 5.00585866,4 L13,4 L17,0 L19,0 L19,16 L17,16 L13,12 L5.00585866,12 C3.89805351,12 3,11.1132936 3,10.0018986 L3,10 L1,10 L1,6 L3,6 Z M11,15 L13,15 L13,13 L5,13 L5,15 L6.33333333,15 L8,20 L11,20 L11,15 Z"></path>
        </svg>
        {{ $t('text.sermons.title') }}
      </h3>

      <p class="font-light pb-2" v-html="$t('text.sermons.text')"></p>

      <div class="flex justify-between py-4 flex-wrap">
        <template v-for="(video, index) in youtubeVideos">
          <iframe :key="index" :src="video" allowfullscreen class="w-full pb-4 md:w-auto" height="200" />
        </template>
      </div>
    </div>

    <div id="contacts" class="py-4 px-4">
      <h3 class="text-purple-800 font-bold text-lg mb-3">
        <svg class="h-6 w-6 fill-current inline-block">
          <path
              id="Combined-Shape"
              d="M2,1.99079514 C2,0.891309342 2.89451376,0 3.99406028,0 L16.0059397,0 C17.1072288,0 18,0.898212381 18,1.99079514 L18,18.0092049 C18,19.1086907 17.1054862,20 16.0059397,20 L3.99406028,20 C2.8927712,20 2,19.1017876 2,18.0092049 L2,1.99079514 Z M4,2 L16,2 L16,16 L4,16 L4,2 Z M10,19 C10.5522847,19 11,18.5522847 11,18 C11,17.4477153 10.5522847,17 10,17 C9.44771525,17 9,17.4477153 9,18 C9,18.5522847 9.44771525,19 10,19 Z"></path>
        </svg>
        {{ $t('text.contacts.title') }}
      </h3>

      <iframe
          allowfullscreen
          class="w-full" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8888418942242!2d12.133819957783263!3d50.501095282215616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1268a354f79c3%3A0x2b667815f5e3d45d!2sKarlstra%C3%9Fe+7%2C+08523+Plauen!5e0!3m2!1sde!2sde!4v1492103663904"></iframe>

      <div class="font-light">
        <p class="py-4"><strong>{{ $t('text.ministries.address') }}:</strong></p>
        <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
        <p>{{ $t('text.ministries.sundayLong') }}</p>

        <p class="py-2"><strong>{{ $t('text.address') }}</strong></p>
        <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
        <p>{{ $t('text.phone') }} +49 (3741) 74-92-32, +49 (176) 61-54-85-30</p>
        <p>E-mail: info@g12.eu</p>
        <p><a class="underline" href="https://www.instagram.com/g12eu/" target="_blank">Instagram</a></p>
        <p><a class="underline" href="https://www.youtube.com/user/g12eu" target="_blank">YouTube</a></p>
      </div>
    </div>

    <div class="py-4 px-4">
      <h3 class="text-purple-800 font-bold text-lg mb-3">
        <svg class="h-6 w-6 fill-current inline-block">
          <path
              id="Combined-Shape"
              d="M0,3.99406028 C0,2.8927712 0.892622799,2 1.99508929,2 L17.0066023,2 C17.5552407,2 18,2.44386482 18,3 L18,4 L2,4 L2,5 L19.0066023,5 C19.5552407,5 20,5.44748943 20,5.99850233 L20,15.9972399 C20,17.1033337 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z"></path>
        </svg>
        {{ $t('text.donate.title') }}
      </h3>
      <p class="font-light">
        {{ $t('site.donation.receiver') }}<br>
        {{ $t('site.donation.iban') }}<br>
        {{ $t('site.donation.bic') }}<br>
        {{ $t('site.donation.bank') }}<br>
        {{ $t('site.donation.purpose') }}
      </p>
    </div>

    <div class="bg-purple-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 rounded-br-lg rounded-bl-lg">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
           href="https://www.youtube.com/user/g12eu" target="_blank">YouTube</a>
        <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
           href="https://www.instagram.com/g12eu/" target="_blank">Instagram</a>
        <a :href="bible" class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
           target="_blank">
          {{ $t('menu.bible') }}
        </a>
        <a class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2"
           href="http://www.ihopkc.org/prayerroom/" target="_blank">iHOP</a>
        <router-link class="mt-1 block px-2 py-1 text-white rounded hover:bg-purple-700 sm:mt-0 sm:ml-2" to="/imprint">
          {{ $t('menu.imprint') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Ministry from '@/components/Ministy.vue'

export default {
  name: 'Home',
  data () {
    return {
      youtubeVideos: [
        'https://www.youtube-nocookie.com/embed/w-eau4ocaTk',
        'https://www.youtube-nocookie.com/embed/KB_SgqBEGOk',
        'https://www.youtube-nocookie.com/embed/Akn_81rmGxk'
      ],
    }
  },
  components: {
    Ministry,
  },
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
