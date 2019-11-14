import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flow-demo',
      component: () => import('@/pages/flow/Flow-demo')
    }, {
      path: '/Home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }, {
      path: '/Login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
