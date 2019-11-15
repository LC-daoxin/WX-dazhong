// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@vant/touch-emulator' // 在桌面端上模拟移动端 touch 事件
import VueI18n from 'vue-i18n' // 国际化

import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  // this.$i18n.locale
  // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'), // 中文语言包
    'en-US': require('./common/lang/en') // 英文语言包
  }
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
