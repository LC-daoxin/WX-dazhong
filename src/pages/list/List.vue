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
    <tab-bottom :CurrentPage="CurrentPage"></tab-bottom>
  </div>
</template>

<script>
import TabBottom from '@/components/Tabbar/Tabbottom'
import ListContent from './components/ListContent'
import { Search, Tab, Tabs } from 'vant'
export default {
  name: 'list',
  components: {
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    TabBottom,
    ListContent
  },
  data () {
    return {
      value: '',
      CurrentPage: 1,
      tabactive: parseInt(this.$route.params.tabactive)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    position: relative;
    .tab{
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        margin-right: 5px;
      }
    }
  }
</style>
