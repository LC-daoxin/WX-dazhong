<template>
  <div class="collapse">
    <div class="collapse-item open">
      <a href="#" class="collapse-header">
        <span><i class="iconfont">&#xe635;</i></span><strong>{{ collapseName }}</strong>
      </a>
      <div class="collapse-body">
        <div>123</div>
      </div>
      <a href="#" class="collapse-footer"><i class="iconfont">&#xe6e1;</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data () {
    return {
      collapseName: '正文',
      collapseType: 'abc'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .collapse{
    .collapse-item{
      &.open{
        .collapse-body{
          height: auto;
        }
        .collapse-footer{
          height: auto;
        }
      }
      &.closed{
        .collapse-body{
          display: none;
        }
        .collapse-footer{
          display: none;
        }
      }
      margin: .1rem 0;
      .collapse-header{
        display: block;
        background: $bgColor;
        span{
          background: $bgDeepColor;
          display: inline-block;
          vertical-align: middle;
          height: .8rem;
          line-height: .8rem;
          width: .8rem;
          text-align: center;
          i{
            color: #fff;
            line-height: 40px;
            font-size: .48rem;
          }
        }
        strong{
          color: #fff;
          display: inline-block;
          vertical-align: middle;
          font-size: .28rem;
          height: .8rem;
          line-height: .8rem;
          padding: 0 .3rem;
          white-space: nowrap;
        }
      }
      .collapse-body{
        padding: .3rem .3rem 0;
      }
      .collapse-footer{
        display: block;
        border-bottom: solid 1px $bgColor;
        padding: 0 .2rem .04rem;
        margin-bottom: .4rem;
        text-align: center;
        i{
          color: $bgColor;
        }
      }
    }
  }
</style>
