<template>
  <div class="list">
    <form action="/">
      <van-search
        v-model="value"
        :placeholder="$t('Search.InputText')"
        show-action
      >
        <div slot="action">{{$t('Home.Search')}}</div>
      </van-search>
    </form>
    <van-tabs
      v-model="tabactive"
      :ellipsis="false"
      color="#2196F3"
      title-active-color="#2196F3"
      swipeable
      v-if="ListItem === 'Pending'"
    >
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb93;</i> {{$t('Home.MyPending')}}
        </div>
        <list-content ListType="MyPending"></list-content>
      </van-tab>
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb9a;</i> {{$t('Home.BMPending')}}
        </div>
        <list-content ListType="BMPending"></list-content>
      </van-tab>
    </van-tabs>
    <van-tabs
      v-model="tabactive"
      :ellipsis="false"
      color="#2196F3"
      title-active-color="#2196F3"
      swipeable
      v-else-if="ListItem === 'Query'"
    >
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb95;</i> {{$t('Home.MyCreated')}}
        </div>
        <list-content ListType="MyCreated"></list-content>
      </van-tab>
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb97;</i> {{$t('Home.MyRequest')}}
        </div>
        <list-content ListType="MyRequest"></list-content>
      </van-tab>
      <van-tab>
        <div slot="title" class="tab">
          <i class="iconfont">&#xeb99;</i> {{$t('Home.MyApprove')}}
        </div>
        <list-content ListType="MyApprove"></list-content>
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
      tabactive: parseInt(this.$route.params.tabactive),
      ListItem: this.$route.params.ListItem
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
