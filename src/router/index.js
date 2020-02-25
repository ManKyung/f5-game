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
