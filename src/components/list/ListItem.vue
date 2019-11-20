<template>
  <div class="pending van-hairline--top" @click="go">
    <div class="pending-icon"><i class="iconfont">&#xeb91;</i></div>
    <div class="pending-content">
      <div class="name col"><span class="title">流程名称：</span><span class="content">{{item.name}}</span></div>
      <div class="name col"><span class="title">单据号：</span><span class="content">{{item.no}}</span></div>
      <div class="text col"><i class="iconfont">&#xe790;</i>{{item.time}}</div>
      <div class="text col"><i class="iconfont">&#xe60c;</i>{{item.user}}</div>
    </div>
    <div :class="['status', item.status]">{{item.status| status}}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object
  },
  filters: {
    status: function (value) {
      let Text
      switch (value) {
        case 'Active': Text = '进行中'; break
        case 'Completed': Text = '已完成'; break
        case 'Error': Text = '错误'; break
      }
      return Text
    }
  },
  methods: {
    go () {
      let CurrentPath = this.$route.path
      this.$router.replace({path: '/Flow-demo', query: { History: CurrentPath }})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .pending{
    display: flex;
    position: relative;
    background: #fff;
    &-icon{
      width: 1rem;
      text-align: center;
      padding-top: .3rem;
      color: $bgColor;
      font-weight: 600;
      i{
        font-size: .42rem;
      }
    }
    &-content{
      flex: 1;
      padding: .3rem 0 .1rem;
      font-size: .28rem;
      .col{
        padding-bottom: .2rem;
      }
      .name{
        display: flex;
        font-weight: 500;
        line-height: .34rem;
        margin-right: 1.26rem;
        color: #333;
        .title{
          font-weight: 700;
          display: inline-block;
          width: 1.4rem;
          text-align: right;
        }
        .content{
          flex: 1;
          display: -webkit-box;
          flex-direction: column;
          -webkit-line-clamp:1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      > .text{
        font-size: .26rem;
        color: #9a9a9a;
        display: flex;
        align-items: center;
        i{
          padding-right: .1rem;
        }
      }
    }
    .status{
      position: absolute;
      right: .24rem;
      padding: .06rem;
      top: .3rem;
      font-size: .24rem;
      height: .24rem;
      line-height: .24rem;
      &.Active{
        color: $Active;
        border: 2px solid $Active;
      }
      &.Completed{
        color: $Completed;
        border: 2px solid $Completed;
      }
      &.Error{
        color: $Error;
        border: 2px solid $Error;
      }
    }
  }
</style>
