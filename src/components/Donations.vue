<template>
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
</template>

<script>
export default {
  name: 'donations'
}
</script>
