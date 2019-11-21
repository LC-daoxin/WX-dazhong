<template>
  <div class="list">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
      >
        <div slot="action">搜索</div>
      </van-search>
    </form>
    <van-tabs
      v-model="tabactive"
      :ellipsis="false"
      color="#2196F3"
      title-active-color="#2196F3"
      swipeable
    >
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb93;</i> My Pending
        </div>
        <list-content></list-content>
      </van-tab>
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb9a;</i> BM Pending
        </div>
        <div></div>
      </van-tab>
    </van-tabs>
    <div class="box-bottom"></div>
  </div>
</template>

<script>
import ListContent from './components/ListContent'
import { Search, Tab, Tabs } from 'vant'
export default {
  name: 'list',
  components: {
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    ListContent
  },
  data () {
    return {
      value: '',
      tabactive: parseInt(this.$route.params.tabactive)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .list{
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 1rem);
    background-color: $bg;
    position: relative;
    .tab{
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        margin-right: 5px;
      }
    }
    .box-bottom{
      height: constant(safe-area-inset-bottom);
      height: env(safe-area-inset-bottom);
    }
  }
</style>
