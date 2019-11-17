<template>
  <div class="backTop">
    <router-link to="/List/0" replace>
      <img class="backTop-img imgback" src="@styles/img/back.png">
    </router-link>
    <img class="backTop-img imgtop" src="@styles/img/top.png">
  </div>
</template>

<script>
export default {
  name: 'FlowButton'
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .backTop {
    opacity: .7;
    position: fixed;
    bottom: 3rem;
    right: .5rem;
    width: .8rem;
    height: .8rem;
    z-index: 20;
    .backTop-img {
      width: 100%;
      background-color: #d5f3ff;
      border-radius: 50%;
      margin-top: .14rem;
    }
  }
</style>
