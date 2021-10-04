<template>
    <div class="bg-cover h-40 rouded antialiased"
         v-bind:style="{ backgroundImage: 'url(' + bgImageUrl + ')' }">
        <p class="bg-black opacity-50 text-white py-2 px-4">
            {{ name }}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: [
            'bgImageUrl',
            'name'
        ]
    }
</script>
