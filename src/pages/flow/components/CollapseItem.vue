<template>
  <div class="CollapseRow">
    <a href="javascript:void(0);" class="CollapseRow-header" @click="handleOpenClick">
      <strong>{{CollapseItemName}}</strong><i class="iconfont" v-if="itemShowType">&#xe610;</i><i class="iconfont" v-else>&#xe611;</i>
    </a>
    <div class="CollapseRow-body" ref="CollapseRowbody">
      <slot name="collapseItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  props: {
    CollapseItemName: String
  },
  data () {
    return {
      itemShowType: true
    }
  },
  methods: {
    handleOpenClick () {
      let body = this.$refs.CollapseRowbody
      let height = body.childNodes[0].offsetHeight
      if (this.itemShowType) {
        body.style.height = height + 'px'
        setTimeout(() => {
          body.style.height = '0px'
        }, 1)
      } else {
        body.style.height = height + 'px'
      }
      this.itemShowType = !this.itemShowType
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .CollapseRow{
    padding: .3rem .1rem 0;
    .CollapseRow-header{
      display: block;
      border-top: solid .02rem $bgColor;
      padding: .2rem .04rem;
      color: $CollapseRow;
      font-size: .28rem;
      i{
        float: right;
        font-size: .2rem;
      }
    }
    .CollapseRow-body{
      height: auto;
      overflow: hidden;
      transition: height .5s;
      box-sizing: border-box;
    }
  }
</style>
