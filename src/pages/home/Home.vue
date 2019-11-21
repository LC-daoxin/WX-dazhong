<template>
  <div class="home">
    <van-nav-bar
      class="home-nav"
      title="VWED APON"
    >
      <div class="logo" slot="left">
        <img src="@/assets/styles/img/bglog.png" height="53" width="104"/>
      </div>
    </van-nav-bar>
    <van-row class="home-box">
      <van-col span="24">
        <div class="home-box-title"><i class="iconfont"></i>Pending/待办</div>
      </van-col>
      <van-col span="24">
        <van-grid :column-num="4" :border="false">
          <van-grid-item to="/List/0" replace>
            <div class="iconbox">
              <i class="iconfont icon-img color1">&#xeb93;</i>
              <span>My Pending</span>
            </div>
          </van-grid-item>
          <van-grid-item to="/List/1" replace>
            <div class="iconbox">
              <i class="iconfont icon-img color2">&#xeb9a;</i>
              <span>BM Pending</span>
            </div>
          </van-grid-item>
          <van-grid-item />
          <van-grid-item />
        </van-grid>
      </van-col>
      <van-col span="24">
        <div class="home-box-footer"></div>
      </van-col>
    </van-row>
    <van-row class="home-box">
      <van-col span="24">
        <div class="home-box-title"><i class="iconfont"></i>Query/查询</div>
      </van-col>
      <van-col span="24">
        <van-grid :column-num="4" :border="false">
          <van-grid-item @click="handleClick">
            <div class="iconbox">
              <i class="iconfont icon-img color4">&#xeb95;</i>
              <span>My Created</span>
            </div>
          </van-grid-item>
          <van-grid-item @click="handleClick">
            <div class="iconbox">
              <i class="iconfont icon-img color5">&#xeb97;</i>
              <span>My Request</span>
            </div>
          </van-grid-item>
          <van-grid-item @click="handleClick">
            <div class="iconbox">
              <i class="iconfont icon-img color3">&#xeb99;</i>
              <span>My Approve</span>
            </div>
          </van-grid-item>
          <van-grid-item />
        </van-grid>
      </van-col>
      <van-col span="24">
        <div class="home-box-footer"></div>
      </van-col>
    </van-row>
    <van-row safe-area-inset-bottom class="home-box home-box-last">
      <van-col span="24">
        <div class="home-box-title"><i class="iconfont"></i>待处理事项</div>
      </van-col>
      <van-col span="24" v-for="item of listdata" :key="item.id">
        <list-item :item="item"></list-item>
      </van-col>
      <van-col span="24" @click="go">
        <div class="home-box-more van-hairline--top">显示更多</div>
      </van-col>
      <van-col span="24">
        <div class="home-box-footer"></div>
      </van-col>
    </van-row>
    <div class="box-bottom"></div>
  </div>
</template>

<script>
import { Row, Col, NavBar, Toast, Grid, GridItem } from 'vant'
import ListItem from '@/components/list/ListItem'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Row.name]: Row,
    [Col.name]: Col,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    ListItem
  },
  name: 'Home',
  data () {
    return {
      listdata: [{
        id: '0001',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0002',
        name: 'CF-12 Administrative Expenses - Employee Expense Claim/办公费相关-员工费用报销',
        no: 'CF-2019-001321',
        status: 'Completed',
        time: '2019-10-16 11:24:19',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0003',
        name: 'CF-17 Service and Materials Acceptance/服务物资验收',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0004',
        name: 'CF-04 Employee Travel Expense Claim -Overseas/员工国际出差费用报销',
        no: 'CF-2019-001321',
        status: 'Error',
        time: '2019-11-12 07:59:07',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0005',
        name: 'IT-01 Workplace/办公资产申请',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }]
    }
  },
  methods: {
    go () {
      let CurrentPath = this.$route.path
      this.$router.replace({path: '/List/0', query: { History: CurrentPath }})
    },
    handleClick () {
      Toast('暂未开发')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  $Color1: #75b6f8;
  $Color2: #85dbc1;
  $Color3: #d08df6;
  $Color4: #e3776b;
  $Color5: #fcce44;
  .home {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    &-nav {
      background: $bgDeepColor;
      height: .92rem;
      line-height: .92rem;
      >>> .van-nav-bar__title{
        color: #fff;
        font-size: .36rem;
        font-weight: 900;
      }
      .logo{
        width: 1.2rem;
        opacity: .9;
        img{
          margin-top: -.14rem;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    &-box {
      margin: .24rem .2rem;
      box-shadow: .06rem .06rem .14rem rgba(0,0,0,.08);
      border-radius: 0 0 .1rem .1rem;
      background: #fff;
      &-title{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-radius: .1rem .1rem 0 0;
        height: .74rem;
        padding: .16rem .3rem 0;
        font: {
          size: .34rem;
          weight: 700
        }
      }
      &-more{
        display: flex;
        align-items: center;
        justify-content: center;
        height: .6rem;
        font-size: .28rem;
        font-weight: 700;
        padding-top: .1rem;
      }
      &-footer{
        height: .1rem;
        border-radius: 0 0 .1rem .1rem;
      }
      .iconbox{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon-img{
          display: block;
          padding: .16rem;
          border-radius: .1rem;
          color: #fff;
          font-size: .68rem;
          margin-bottom: .2rem;
        }
        span{
          // font-family: 'Cabin-Regular';
          font-size: 14px;
        }
        @media screen and (max-device-width:400px) {
          span{
            font-size: 13px;
          }
        }
        .color1{background: $Color1}
        .color2{background: $Color2}
        .color3{background: $Color3}
        .color4{background: $Color4}
        .color5{background: $Color5}
      }
    }
    .box-bottom{
      height: 1rem;
    }
    &-box-last {
      margin-bottom: calc(constant(safe-area-inset-bottom) + .24rem);
      margin-bottom: calc(env(safe-area-inset-bottom) + .24rem);
    }
  }
</style>
