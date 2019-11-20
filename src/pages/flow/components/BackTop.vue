<template>
  <div class="backTop">
    <img class="backTop-img imgback" src="@styles/img/back.png" @click="back">
    <img class="backTop-img imgtop" src="@styles/img/top.png" v-if="btnFlag" @click="backTop">
  </div>
</template>

<script>
export default {
  name: 'FlowButton',
  data () {
    return {
      btnFlag: false
    }
  },
  methods: {
    back () {
      let HistoryPath = this.$route.query.History
      this.$router.replace({path: HistoryPath})
      // this.$router.go(-1)
    },
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 8)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 24)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .backTop {
    opacity: .7;
    position: fixed;
    bottom: 3rem;
    right: .5rem;
    width: .8rem;
    height: .8rem;
    z-index: 20;
    .backTop-img {
      width: 100%;
      background-color: #d5f3ff;
      border-radius: 50%;
      margin-top: .14rem;
    }
  }
</style>
