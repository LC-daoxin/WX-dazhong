<template>
  <div class="collapse">
    <div :class="['collapse-item', itemShowType ? 'open' : 'closed']">
      <a href="javascript:void(0);" class="collapse-header" @click="handleOpenClick">
        <span>
          <i class="iconfont" v-if="itemShowType">&#xe634;</i>
          <i class="iconfont" v-else>&#xe635;</i>
        </span><strong>{{ collapseName }}</strong>
      </a>
      <div class="collapse-body" ref="collapsebody">
        <div>
          <slot name="content"></slot>
          <slot name="noInfo"></slot>
        </div>
      </div>
      <a href="javascript:void(0);" class="collapse-footer" v-if="type === 'Detail'"  @click="handleOpenClick"><i class="iconfont">&#xe6e1;</i></a>
      <a href="javascript:void(0);" class="collapse-footer" v-if="type === 'Basic'" @click="handleBasicClick">
        <i class="iconfont bold" v-if="showType">&#xe671;</i>
        <i class="iconfont" v-else>&#xe6e1;</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    collapseName: String,
    show: Boolean,
    type: {
      type: String,
      default: 'Detail'
    }
  },
  data () {
    return {
      itemShowType: this.show,
      showType: true,
      timer: null
    }
  },
  mounted () {
    if (!this.show) {
      this.$refs.collapsebody.style.height = '0px'
    }
  },
  methods: {
    handleOpenClick () {
      let body = this.$refs.collapsebody
      let height = body.childNodes[0].offsetHeight
      if (this.itemShowType) {
        body.style.height = height + 'px'
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          body.style.height = '0px'
        }, 1)
      } else {
        body.style.height = height + 'px'
        let SpeedTime = height / 800 * 1000
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          body.style.height = 'auto'
        }, SpeedTime)
      }
      this.itemShowType = !this.itemShowType
    },
    handleBasicClick () {
      let body = this.$refs.collapsebody
      let height = body.childNodes[0].offsetHeight
      if (!this.showType) {
        body.style.height = height + 'px'
        setTimeout(() => {
          body.style.height = '71px'
        }, 1)
      } else {
        body.style.height = height + 'px'
        setTimeout(() => {
          body.style.height = body.scrollHeight + 'px'
        }, 50)
      }
      this.showType = !this.showType
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .collapse{
    .collapse-item{
      &.open{
        .collapse-footer{
          display: block;
        }
      }
      &.closed{
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
        height: auto;
        overflow: hidden;
        transition: height .3s;
        box-sizing: border-box;
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
        .bold{
          font-weight: bolder;
        }
      }
    }
  }
</style>
