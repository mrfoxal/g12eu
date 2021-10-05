<template>
  <div
      :style="{ backgroundImage: 'url(' + bgImageUrl + ')' }"
      class="bg-cover h-40 rouded antialiased"
  >
    <p class="bg-black opacity-50 text-white py-2 px-4">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Ministry',
  props: {
    bgImageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }
}
</script>
