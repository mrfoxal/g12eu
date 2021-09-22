import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import { i18n } from './lang/i18n-setup';
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueI18n)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
