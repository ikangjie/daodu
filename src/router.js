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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (_to, _from, _savedPosition) {
    return { x: 0, y: 0 }
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }else{
    //   return { x: 0, y: 0 }
    // }
  }
})
