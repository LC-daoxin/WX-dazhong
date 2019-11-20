<template>
  <div>
    <van-tabbar
      class="tabbar"
      v-model="active"
      active-color="#2196F3"
      safe-area-inset-bottom
    >
      <van-tabbar-item icon="home-o" to="/Home" replace>主页</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" info="5" to="/List/0" replace>待办</van-tabbar-item>
      <van-tabbar-item @click="showPopup">
        <div class="icon-middle" slot="icon">
          <i class="iconfont iconAdd">&#xe61d;</i>
        </div>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/Search" replace>搜索</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="handleClick">我的</van-tabbar-item>
    </van-tabbar>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      :round="false"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Toast, ActionSheet } from 'vant'
export default {
  name: 'TabBottom',
  props: {
    CurrentPage: Number
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Toast.name]: Toast,
    [ActionSheet.name]: ActionSheet
  },
  data () {
    return {
      active: this.CurrentPage,
      show: false,
      actions: [
        {name: '发起流程', subname: '暂无页面'},
        {name: '其他选项', subname: '暂无页面'}
      ]
    }
  },
  methods: {
    handleClick () {
      Toast('暂无页面')
    },
    showPopup () {
      this.show = true
    },
    onSelect (item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false
      Toast('暂未开发')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .tabbar{
    font-weight: 400;
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
