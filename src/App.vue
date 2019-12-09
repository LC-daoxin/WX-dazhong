<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </keep-alive>
    <tab-bottom></tab-bottom>
  </div>
</template>

<script>
import TabBottom from '@/components/Tabbar/Tabbottom'
export default {
  name: 'App',
  components: {
    TabBottom
  },
  data () {
    return {
      transitionName: '' // 默认动态路由变化为空
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/Flow-demo') {
        this.transitionName = 'slide-left'
      } else if ((to.path === '/Home' && from.path === '/Flow-demo') || (to.name === 'List' && from.path === '/Flow-demo')) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 400ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
