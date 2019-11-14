<template>
  <div class="Comments">
    <div class="Comments-header"><i class="iconfont">&#xe61c;</i><strong>审批意见</strong></div>
    <div class="Comments-form">
      <textarea class="form-control" rows="5" placeholder="Here is approval comment / 这里是审批意见" maxlength="75"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowComment'
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .Comments{
    margin: .6rem 0;
    .Comments-header{
      margin-bottom: .2rem;
      color: #675937;
      i{
        font-size: .24rem;
        margin-right: .1rem;
      }
      strong{
        font-size: .28rem;
      }
    }
    .Comments-form{
      &:focus{
        background: #fff;
      }
      textarea{
        &.form-control{
          display: block;
          width: 100%;
          height: auto;
          padding: 6px 12px;
          line-height: 1.42857143;
        }
        box-sizing: border-box;
        border: solid .02rem $ApprovalColor;
        background: #f7f6f2;
        border-radius: 0;
        font-size: .28rem;
        color: $ApprovalColor;
        box-shadow: none;
      }
    }
  }
</style>
