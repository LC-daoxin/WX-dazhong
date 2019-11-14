<template>
  <div class="K-button">
    <button type="button" class="btn btn-default"><i class="iconfont">&#xed1d;</i>同意</button>
    <button type="button" class="btn btn-warning"><i class="iconfont">&#xe669;</i>拒绝</button>
  </div>
</template>

<script>
export default {
  name: 'FlowBackTop'
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
