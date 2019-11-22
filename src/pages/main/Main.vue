<template>
  <div class="main">
    <router-view/>
    <tab-bottom></tab-bottom>
  </div>
</template>

<script>
import TabBottom from '@/components/Tabbar/Tabbottom'
export default {
  name: 'Main',
  components: {
    TabBottom
  },
  data () {
    return {
      lock: true,
      bodyLock: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .main{
    height: 100%;
    min-height: 100vh;
    background: $bg;
  }
</style>
