import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import List from '@/pages/list/List'
import Mine from '@/pages/mine/Mine'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      redirect: 'Home', // 子路由默认加载第一个界面
      component: Main,
      children: [
        {
          path: '/Home',
          name: 'Home',
          meta: {
            title: 'Home'
          },
          component: Home
        }, {
          path: '/Search',
          name: 'Search',
          meta: {
            title: 'Search'
          },
          component: Search
        },
        {
          path: '/List/:ListItem/:tabactive',
          name: 'List',
          meta: {
            title: 'List'
          },
          component: List
        },
        {
          path: '/Mine',
          name: 'Mine',
          meta: {
            title: 'Mine'
          },
          component: Mine
        }
      ]
    }, {
      path: '/Flow-demo',
      name: 'Flow-demo',
      meta: {
        title: 'Process',
        scrollToTop: true
      },
      component: () => import('@/pages/flow/Flow-demo')
    }, {
      path: '/',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // let H = parseInt(localStorage.getItem('Height'))
    // if (savedPosition) { // 返回之前的原位置
    //   // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    //   return savedPosition
    // } else {
    //   const position = {}
    //   if (to.meta.scrollToTop) { // 如果路由元信息中存在参数，对参数做进一步判断（此示例代表滚动到顶部）
    //     position.x = 0
    //     position.y = 0
    //   } else {
    //     position.x = 0
    //     position.y = H
    //   }
    //   // 如果返回一个 falsy (假的值)，或者是一个空对象，那么不会发生滚动。
    //   return position
    // }
    return { x: 0, y: 0 }
  }
})
