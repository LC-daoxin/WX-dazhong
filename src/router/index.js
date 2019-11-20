import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      redirect: 'Home', // 子路由默认加载第一个界面
      component: () => import('@/pages/main/Main'),
      children: [
        {
          path: '/Home',
          name: 'Home',
          meta: {
            title: 'Home'
          },
          component: () => import('@/pages/home/Home')
        }, {
          path: '/Search',
          name: 'Search',
          meta: {
            title: 'Search'
          },
          component: () => import('@/pages/search/Search')
        },
        {
          path: '/List/:tabactive',
          name: 'List',
          meta: {
            title: 'My Pending'
          },
          component: () => import('@/pages/list/List')
        }
      ]
    }, {
      path: '/Flow-demo',
      name: 'Flow-demo',
      meta: {
        title: 'Process'
      },
      component: () => import('@/pages/flow/Flow-demo')
    }, {
      path: '/',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: () => import('@/pages/login/Login')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
