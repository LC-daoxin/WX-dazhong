<template>
  <div class="K-button">
    <button type="button" class="btn btn-default" @click="affirm"><i class="iconfont">&#xed1d;</i>同意</button>
    <button type="button" class="btn btn-warning" @click="refuse"><i class="iconfont">&#xe669;</i>拒绝</button>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
export default {
  name: 'FlowBackTop',
  components: {
    [Dialog.name]: Dialog,
    [Toast.name]: Toast
  },
  methods: {
    affirm () {
      Dialog.confirm({
        title: '提示',
        message: '是否确认审批同意？',
        confirmButtonText: '确认',
        confirmButtonColor: '#2196F3',
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            setTimeout(() => {
              done()
              Toast.success('提交成功')
              setTimeout(() => {
                let HistoryPath = this.$route.query.History
                this.$router.replace({path: HistoryPath})
              }, 800)
            }, 1000)
          } else {
            done()
          }
        }
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      })
    },
    refuse () {
      Dialog.confirm({
        title: '提示',
        message: '是否确认审批拒绝？',
        confirmButtonText: '确认',
        confirmButtonColor: '#2196F3',
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            setTimeout(() => {
              done()
              Toast.success('拒绝成功')
              setTimeout(() => {
                let HistoryPath = this.$route.query.History
                this.$router.replace({path: HistoryPath})
              }, 800)
            }, 1000)
          } else {
            done()
          }
        }
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .K-button{
    padding-bottom: .4rem;
    .btn{
      +.btn{
        margin-top: .1rem;
      }
      padding: .3rem;
      margin-bottom: 0;
      font-size: .28rem;
      font-weight: 400;
      line-height: 1.42857143;
      display: block;
      width: 100%;
      text-align: left;
      i{
        margin-right: .2rem;
      }
    }
    .btn-default{
      background: #2c84af;
      color: #fff;
    }
    .btn-warning{
      background: #d0202e;
      color: #fff;
    }
  }
</style>
