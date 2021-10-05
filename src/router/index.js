import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { loadLanguageAsync, localeParamName } from '@/lang/i18n-setup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/Imprint.vue'),
  },
]

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Set i18n locale

vueRouter.beforeEach((to, from, next) => {
  let lang = localStorage.getItem(localeParamName);

  if (!['en', 'ru', 'de'].includes(lang)) {
    lang = 'ru';
  }

  loadLanguageAsync(lang).then(() => next());
})

export default vueRouter;
