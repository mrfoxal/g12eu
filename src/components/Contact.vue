<template>
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
        class="w-full" height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8888418942242!2d12.133819957783263!3d50.501095282215616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1268a354f79c3%3A0x2b667815f5e3d45d!2sKarlstra%C3%9Fe+7%2C+08523+Plauen!5e0!3m2!1sde!2sde!4v1492103663904"></iframe>

    <div class="font-light">
      <p class="py-4">
        <strong>{{ $t('text.ministries.address') }}:</strong>
      </p>
      <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
      <p>{{ $t('text.ministries.sundayLong') }}</p>

      <p class="py-2">
        <strong>{{ $t('text.address') }}</strong>
      </p>
      <p>Germany, 08523 Plauen, Karlstr. 5-7, Gemeinde Neues Leben e.V.</p>
      <p>{{ $t('text.phone') }} +49 (3741) 74-92-32, +49 (176) 61-54-85-30</p>
      <p>E-mail: info@g12.eu</p>
      <p><a class="underline" href="https://www.instagram.com/g12eu/" target="_blank">Instagram</a></p>
      <p><a class="underline" href="https://www.youtube.com/user/g12eu" target="_blank">YouTube</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>
