<template>
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
</template>

<script>
import Ministry from '@/components/Ministy.vue'

export default {
  name: 'ministries',
  components: {
    Ministry,
  }
}
</script>
