<template>
  <div class="Mine">
    <div class="Mine-header">
      <div class="Mine-header-img">
        <div class="Mine-header-img-icon">
          <van-icon class="defaultImg" name="user-o" />
        </div>
      </div>
      <div class="Mine-header-content">
        <div class="Mine-header-content-name">{{ userName }}</div>
        <div class="Mine-header-content-position">职位：{{ userPosition }}</div>
      </div>
    </div>
    <div class="Mine-box boxStyle">
      <van-cell-group :border="false">
        <van-cell icon="setting-o" title="个人信息" @click="handleClick" is-link/>
        <van-cell icon="desktop-o" title="语言设置" @click="showPopupLang" is-link />
        <van-cell icon="comment-o" title="消息通知" @click="handleClick" is-link />
        <van-cell icon="service-o" title="帮助中心" @click="handleClick" is-link />
      </van-cell-group>
    </div>
    <div class="Mine-box">
      <van-cell-group :border="false">
        <van-cell @click="showPopupExit">
          <template slot="title">
            <div class="exit-title">退出登录</div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <van-action-sheet
      v-model="showLang"
      :actions="Lang"
      cancel-text="取消"
      @select="onLangSelect"
      @cancel="onLangCancel"
      :round="false"
      safe-area-inset-bottom
    />
    <van-action-sheet
      v-model="showExit"
      :actions="Exit"
      cancel-text="取消"
      @select="onExitSelect"
      @cancel="onExitCancel"
      :round="false"
      safe-area-inset-bottom
    />
  </div>
</template>

<script>
import { Icon, Cell, CellGroup, ActionSheet, Toast } from 'vant'
export default {
  name: 'Mine',
  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [ActionSheet.name]: ActionSheet,
    [Toast.name]: Toast
  },
  data () {
    return {
      userName: 'Ge.Chunfeng(VWEDII IT)',
      userPosition: 'IT Supervisor',
      showLang: false,
      Lang: [
        { name: '中文' },
        { name: '英文' }
      ],
      showExit: false,
      Exit: [
        { name: '退出登录', color: '#ee0a23', className: 'exit-text' }
      ]
    }
  },
  methods: {
    showPopupLang () {
      this.showLang = true
    },
    onLangSelect () {
      this.showLang = false
      Toast('暂未开发')
    },
    onLangCancel () {
      this.showLang = false
    },
    showPopupExit () {
      this.showExit = true
    },
    onExitSelect (item, index) {
      switch (index) {
        case 0: this.$router.replace({path: '/'})
      }
      this.showExit = false
    },
    onExitCancel () {
      this.showExit = false
    },
    handleClick () {
      Toast('暂未开发')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .Mine{
    padding: .2rem;
    &-header{
      display: flex;
      height: 2.2rem;
      border-radius: .2rem;
      background: #fff;
      box-shadow: 0.1rem 0.1rem 0.15rem rgba(0,0,0,0.1);
      &-img{
        box-sizing: border-box;
        width: 2.2rem;
        height: 100%;
        padding: .4rem;
        &-icon{
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          background: $bg;
          width: 100%;
          height: 100%;
          .defaultImg{
            font-size: .8rem;
            color: #bfbfbf;
          }
        }
      }
      &-content{
        flex: 1;
        overflow: hidden;
        box-sizing: border-box;
        padding: .4rem .4rem .4rem 0;
        &-name{
          font-size: .36rem;
          font-weight: 600;
          margin: .24rem 0;
          height: .4rem;
          line-height: .4rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        &-position{
          font-size: .3rem;
          font-weight: 400;
        }
      }
    }
    &-box{
      &.boxStyle{
        padding: .2rem 0;
        border-radius: .2rem;
        >>> .van-cell{
          padding: .2rem .32rem;
        }
      }
      margin: .2rem 0;
      padding: .1rem 0;
      border-radius: .1rem;
      background: #fff;
      box-shadow: 0.1rem 0.1rem 0.15rem rgba(0,0,0,0.1);
      >>> .van-cell__left-icon{
        font-size: .4rem;
        margin-right: .16rem;
      }
      >>> .van-cell__title{
        font-size: .3rem;
      }
      >>> .van-cell{
        padding: .12rem .32rem;
      }
      .exit-title{
        text-align: center;
        font-size: 16px;
        color: $Error;
      }
    }
    .exit-text{
      font-size: .34rem;
    }
  }
</style>
