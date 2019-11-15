<template>
  <van-tabbar
    class="tabbar"
    v-model="active"
    active-color="#2196F3"
    safe-area-inset-bottom
  >
    <van-tabbar-item icon="home-o" to="/Home" replace>主页</van-tabbar-item>
    <van-tabbar-item icon="todo-list-o" info="5" to="/List" replace>待办</van-tabbar-item>
    <van-tabbar-item>
      <div class="icon-middle" slot="icon">
        <i class="iconfont iconAdd">&#xe61d;</i>
      </div>
    </van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'TabBottom',
  props: {
    CurrentPage: Number
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: this.CurrentPage
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
