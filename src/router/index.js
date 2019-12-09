import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import List from '@/pages/list/List'
import Mine from '@/pages/mine/Mine'
import Login from '@/pages/login/Login'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: 'Home', // 子路由默认加载第一个界面
      component: Main,
      children: [
        {
          path: '/Home',
          name: 'Home',
          meta: {
            title: 'Home',
            requireAuth: true
          },
          component: Home
        }, {
          path: '/Search',
          name: 'Search',
          meta: {
            title: 'Search',
            requireAuth: true
          },
          component: Search
        },
        {
          path: '/List/:ListItem/:tabactive',
          name: 'List',
          meta: {
            title: 'List',
            requireAuth: true
          },
          component: List
        },
        {
          path: '/Mine',
          name: 'Mine',
          meta: {
            title: 'Mine',
            requireAuth: true
          },
          component: Mine
        }
      ]
    }, {
      path: '/Flow-demo',
      name: 'Flow-demo',
      meta: {
        title: 'Process',
        scrollToTop: true,
        tabHide: true,
        requireAuth: true
      },
      component: () => import('@/pages/flow/Flow-demo')
    }, {
      path: '/Login',
      name: 'Login',
      meta: {
        title: 'Login',
        tabHide: true
      },
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    let H = parseInt(localStorage.getItem('Height'))
    // if (savedPosition) { // 返回之前的原位置
    //   // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    //   return savedPosition
    // } else {
    // }
    // return { x: 0, y: 0 }
    const position = {}
    // if (to.meta.scrollToTop) { // 如果路由元信息中存在参数，对参数做进一步判断（此示例代表滚动到顶部）
    //   position.x = 0
    //   position.y = 0
    // } else if ((to.path === '/Home' && from.path === '/Flow-demo') || (to.name === 'List' && from.path === '/Flow-demo')) {
    //   position.x = 0
    //   position.y = H
    // }
    // 如果返回一个 falsy (假的值)，或者是一个空对象，那么不会发生滚动。
    if ((to.path === '/Home' && from.path === '/Flow-demo') || (to.name === 'List' && from.path === '/Flow-demo')) {
      position.x = 0
      position.y = H
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.tokenID) { // 通过vuex state获取当前的tokenID是否存在。
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登陆成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
