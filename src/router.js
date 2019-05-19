import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/wiki/:id',
      name: 'Wiki',
      component: () => import('./views/wiki/Wiki.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
