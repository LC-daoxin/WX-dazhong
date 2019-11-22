<template>
  <div class="K-button">
    <button type="button" class="btn btn-default" @click="affirm"><i class="iconfont">&#xed1d;</i>{{$t('Process.Agree')}}</button>
    <button type="button" class="btn btn-warning" @click="refuse"><i class="iconfont">&#xe669;</i>{{$t('Process.Refuse')}}</button>
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
        title: this.$t('Process.Title'),
        message: this.$t('Process.AgreeText'),
        confirmButtonText: this.$t('Process.Confirm'),
        confirmButtonColor: '#2196F3',
        cancelButtonText: this.$t('Process.Cancel'),
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            setTimeout(() => {
              done()
              Toast.success(this.$t('Process.SubmitOKText'))
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
        title: this.$t('Process.Title'),
        message: this.$t('Process.RefuseText'),
        confirmButtonText: this.$t('Process.Confirm'),
        confirmButtonColor: '#2196F3',
        cancelButtonText: this.$t('Process.Cancel'),
        beforeClose: (action, done) => {
          if (action === 'confirm') {
            setTimeout(() => {
              done()
              Toast.success(this.$t('Process.RefuseOKText'))
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
