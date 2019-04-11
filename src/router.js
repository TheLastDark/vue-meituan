import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home'
import login from './views/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/login/login')
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/login/register')
    }
  ]
})
