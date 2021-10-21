<template>
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
        <iframe :key="index" :src="video" allowfullscreen class="w-full pb-4 md:w-auto" height="200"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sermons',
  data () {
    return {
      youtubeVideos: [
        'https://www.youtube-nocookie.com/embed/w-eau4ocaTk',
        'https://www.youtube-nocookie.com/embed/KB_SgqBEGOk',
        'https://www.youtube-nocookie.com/embed/Akn_81rmGxk'
      ],
    }
  },
}
</script>
