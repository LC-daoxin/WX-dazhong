import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Search',
      name: 'Search',
      meta: {
        title: 'Search'
      },
      component: () => import('@/pages/search/Search')
    }, {
      path: '/Flow-demo',
      name: 'Flow-demo',
      meta: {
        title: 'Process'
      },
      component: () => import('@/pages/flow/Flow-demo')
    }, {
      path: '/Home',
      name: 'Home',
      meta: {
        title: 'Home'
      },
      component: () => import('@/pages/home/Home')
    }, {
      path: '/',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: () => import('@/pages/login/Login')
    }, {
      path: '/List/:tabactive',
      name: 'List',
      meta: {
        title: 'My Pending'
      },
      component: () => import('@/pages/list/List')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
