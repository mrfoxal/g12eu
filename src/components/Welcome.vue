<template>
  <div id="welcome" class="px-5 py-1">
    <img alt="" class="w-screen antialiased" src="img/header.jpg"/>

    <h3 class="text-purple-800 font-bold text-lg mb-3">
      {{ $t('text.welcome.title') }}
    </h3>

    <div class="font-light">
      <p class="pb-2" v-html="$t('text.welcome.text')"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>
