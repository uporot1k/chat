/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import store from '@/store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue'),
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
    meta: {
      needAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.needAuth)) {
//     const test = store.getters.haveAuth;
//     console.log(test);
//     if (store.getters.haveAuth) {
//       next();
//     } else {
//       next('/auth');
//     }
//   }
//   next();
// });

export default router;
