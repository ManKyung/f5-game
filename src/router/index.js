import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Privacy from '@/components/Privacy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Main,
    },
    {
      path: '/best',
      component: Main,
    },
    {
      path: '/privacy',
      component: Privacy
    },
    {
      path: '/*',
      redirect: '/',
    },
  ]
})
