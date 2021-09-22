import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { loadLanguageAsync, localeParamName } from '@/lang/i18n-setup';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Set i18n locale

vueRouter.beforeEach((to, from, next) => {
  let lang = localStorage.getItem(localeParamName);

  if (!['en', 'ru'].includes(lang)) {
    lang = 'en';
  }

  loadLanguageAsync(lang).then(() => next());
});

export default vueRouter;
