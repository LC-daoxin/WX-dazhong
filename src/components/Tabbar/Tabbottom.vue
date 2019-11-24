<template>
  <div>
    <van-tabbar
      class="tabbar"
      v-model="active"
      active-color="#2196F3"
      safe-area-inset-bottom
      @change="handleClickPage"
    >
      <van-tabbar-item icon="home-o" to="/Home" replace>{{$t('Home.Home')}}</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" :info="info" to="/List/Pending/0" replace>{{$t('Home.Pending')}}</van-tabbar-item>
      <van-tabbar-item @click="showPopup">
        <div class="icon-middle" slot="icon">
          <i class="iconfont iconAdd">&#xe61d;</i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/Search" replace>{{$t('Home.Search')}}</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/Mine" replace>{{$t('Home.Mine')}}</van-tabbar-item>
    </van-tabbar>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      :cancel-text="$t('Home.Cancel')"
      @select="onSelect"
      @cancel="onCancel"
      :round="false"
      safe-area-inset-bottom
    />
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Toast, ActionSheet } from 'vant'
export default {
  name: 'TabBottom',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Toast.name]: Toast,
    [ActionSheet.name]: ActionSheet
  },
  data () {
    return {
      active: this.$store.state.CurrentPage,
      show: false,
      actions: [
        {name: this.$t('Home.NewProcess'), subname: this.$t('Home.NoPage')},
        {name: this.$t('Home.OtherOptions'), subname: this.$t('Home.NoPage')}
      ],
      info: 10
    }
  },
  computed: {
    CurrentPage () {
      return this.$store.state.CurrentPage // 返回一个结果让 watch 来监听
    }
  },
  watch: {
    CurrentPage (val, oldVal) { // 监听 Vuex 状态管理中的CurrentPage变化 使得当前底部标签栏切换标签
      this.active = val
    },
    // 侦听语言变化，从而改变数组
    '$i18n.locale' () {
      // this.$set(this.actions, 0, {name: this.$t('Home.NewProcess'), subname: this.$t('Home.NoPage')})
      // this.$set(this.actions, 1, {name: this.$t('Home.OtherOptions'), subname: this.$t('Home.NoPage')})
      this.actions = [
        {name: this.$t('Home.NewProcess'), subname: this.$t('Home.NoPage')},
        {name: this.$t('Home.OtherOptions'), subname: this.$t('Home.NoPage')}
      ]
    }
  },
  mounted () {
    this.checkCurrentPage(this.$route.path) // 刷新页面时 根据当前URL 切换标签
    this.$router.beforeEach((to, from, next) => { // 跳转时 根据跳转后URL 切换标签
      this.checkCurrentPage(to.path)
      next()
    })
  },
  methods: {
    showPopup () {
      this.show = true
    },
    onSelect (item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false
      Toast(this.$t('Home.Undeveloped'))
    },
    onCancel () {
      this.show = false
    },
    handleClickPage (active) {
      let lastPage = this.$store.state.CurrentPage
      if (active === 2 && lastPage !== 2) {
        this.active = lastPage
      } else {
        this.$store.commit('changePage', active)
      }
    },
    checkCurrentPage (path) { // 判断URL 对应的页面 更新Vuex 状态管理中的CurrentPage
      let refreshURL = path.substring(1).split('/')[0]
      switch (refreshURL) {
        case 'Home': this.$store.commit('changePage', 0); break
        case 'List': this.$store.commit('changePage', 1); break
        case 'Search': this.$store.commit('changePage', 3); break
        case 'Mine': this.$store.commit('changePage', 4); break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .tabbar{
    font-weight: 400;
    background: #fff;
    >>> .van-tabbar-item{
      color: #555;
      .van-icon{
        font-weight: 500;
      }
    }
    .icon-middle{
      padding-top: .08rem;
      .iconAdd{
        font-size: .8rem;
        color: $bgColor;
      }
    }
  }
</style>
