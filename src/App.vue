<template>
  <div id="app" class="container mx-auto max-w-screen-lg">
    <navbar/>
    <div class="bg-white">
      <router-view/>
    </div>
    <footer>
      <div class="py-4 px-4">
        <p class="font-light text-center text-sm">
          {{ $t('site.copyright') }}<br>
          {{ $t('site.powered') }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
