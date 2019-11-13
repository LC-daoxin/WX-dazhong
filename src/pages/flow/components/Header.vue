<template>
  <header>
    <div class="header-logo">
      <img src="@/assets/logo.png">
    </div>
    <div class="header-name">
      <div class="header-name-en">Volkswagen FAW Engine(Dalian)Co., Ltd</div>
      <div class="header-name-zh">大众一汽发动机(大连)有限公司</div>
    </div>
    <div class="header-oddnumbers">
      <div class="header-list">
        <ul class="header-list-item">
          <li class="row">
            <span class="col-xs-4">单号</span><strong class="col-xs-8">Seal18040001</strong>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'FlowHeader'
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  header{
    border-bottom: solid .04rem $bgColor;
    padding: .2rem .2rem 0;
    position: relative;
    height: .8rem;
    .header-logo{
      float: left;
      width: 1.26rem;
      font-size: 0;
      line-height: 0;
      margin: 0;
      img{
        width: 100%;
      }
    }
    .header-name{
      position: absolute;
      top: .08rem;
      width: 100%;
      text-align: center;
      font-size: .1rem;
      transform:scale(0.85);
    }
    .header-oddnumbers{
      position: absolute;
      right: 0;
      bottom: .1rem;
      margin-top: .2rem;
      font-size: .24rem;
      font-family: "KohinoorBangla Light";
      max-width:2.2rem;
      overflow: hidden;
      height: .34rem;
      line-height: .34rem;
      .header-list{
         .header-list-item{
           > li{
             > span{
               color: #9c9990;
               padding: .08rem 0;
             }
             > strong{
               font-weight: normal;
               text-align: right;
               padding: .16rem .08rem;
             }
           }
         }
       }
    }
  }
</style>
