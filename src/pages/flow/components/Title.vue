<template>
  <div class="title">
    <h2 class="title-en">Personal Cost(RMB) of FSE Request</h2>
    <h2 class="title-zh">外籍员工本地工资付款申请</h2>
  </div>
</template>

<script>
export default {
  name: 'FlowTitle'
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .title{
    font-family: "KohinoorBangla Regular";
    color: $titleColor;
    display: block;
    // margin-bottom: .5rem;
    padding: .3rem .1rem .2rem;
    .title-en{
      font-size: .42rem;
    }
    .title-zh{
      margin-top: .08rem;
      font-size: .48rem;
    }
  }
</style>
