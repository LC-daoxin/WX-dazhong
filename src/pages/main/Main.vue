<template>
  <div class="main">
    <router-view/>
    <tab-bottom :CurrentPage="CurrentPage"></tab-bottom>
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
      CurrentPage: 0,
      lock: true,
      bodyLock: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
  }
</style>
