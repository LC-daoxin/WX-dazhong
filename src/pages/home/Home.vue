<template>
  <div class="home">
    <van-nav-bar
      class="home-nav"
      title="VWED APON"
    />
    <van-row class="home-box">
      <van-col span="24">
        <div class="home-box-title"><i class="iconfont"></i>Pending/待办</div>
      </van-col>
      <van-col span="24">
        <van-grid :column-num="4" :border="false">
          <van-grid-item to="/List" replace>
            <div class="iconbox">
              <i class="iconfont icon-img color1">&#xeb93;</i>
              <span>My Pending</span>
            </div>
          </van-grid-item>
          <van-grid-item>
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
          <van-grid-item>
            <div class="iconbox">
              <i class="iconfont icon-img color4">&#xeb95;</i>
              <span>My Created</span>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="iconbox">
              <i class="iconfont icon-img color5">&#xeb97;</i>
              <span>My Request</span>
            </div>
          </van-grid-item>
          <van-grid-item>
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
    <van-row class="home-box home-box-last">
      <van-col span="24">
        <div class="home-box-title"><i class="iconfont"></i>待处理事项</div>
      </van-col>
      <van-row>
        <van-col span="24" v-for="item of listdata" :key="item.id">
          <router-link to="/Flow-demo" replace>
            <div class="home-box-pending van-hairline--top">
              <div class="home-box-pending-icon"><i class="iconfont">&#xeb91;</i></div>
              <div class="home-box-pending-content">
                <div class="name col"><span class="title">流程名称：</span><span class="content">{{item.name}}</span></div>
                <div class="name col"><span class="title">单据号：</span><span class="content">{{item.no}}</span></div>
                <div class="text col"><i class="iconfont">&#xe790;</i>{{item.time}}</div>
                <div class="text col"><i class="iconfont">&#xe60c;</i>{{item.user}}</div>
              </div>
              <div :class="['status', item.status]">{{item.status| status}}</div>
            </div>
          </router-link>
        </van-col>
      </van-row>
      <van-col span="24">
        <div class="home-box-footer"></div>
      </van-col>
    </van-row>
    <div class="box-bottom"></div>
    <tab-bottom :CurrentPage="CurrentPage"></tab-bottom>
  </div>
</template>

<script>
import { Row, Col, NavBar, Toast, Grid, GridItem } from 'vant'
import TabBottom from '@/components/Tabbar/Tabbottom'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Row.name]: Row,
    [Col.name]: Col,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    TabBottom
  },
  name: 'Home',
  data () {
    return {
      CurrentPage: 0,
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
  filters: {
    status: function (value) {
      let Text
      switch (value) {
        case 'Active': Text = '进行中'; break
        case 'Completed': Text = '已完成'; break
        case 'Error': Text = '错误'; break
      }
      return Text
    }
  },
  methods: {
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
  $Active: #3bcb23;
  $Completed: #969696;
  $Error: #ff6162;
  .home {
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    position: relative;
    &-nav {
      background: $bgDeepColor;
      height: .92rem;
      line-height: .92rem;
      >>> .van-nav-bar__title{
        color: #fff;
        font-size: .36rem;
        font-weight: 900;
        // font-family: 'Cabin-Regular';
      }
    }
    &-box {
      margin: .24rem .2rem;
      box-shadow: .06rem .06rem .14rem rgba(0,0,0,.08);
      border-radius: 0 0 .1rem .1rem;
      &-title{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        // border-left: .14rem solid $bgColor;
        border-radius: .1rem .1rem 0 0;
        height: .74rem;
        padding: .16rem .3rem 0;
        background: #fff;
        // font-family: 'Cabin-Regular';
        font: {
          size: .34rem;
          weight: 700
        }
      }
      &-footer{
        height: .1rem;
        background: #fff;
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
      &-pending{
        display: flex;
        position: relative;
        background: #fff;
        &-icon{
          width: 1rem;
          text-align: center;
          padding-top: .3rem;
          color: $bgColor;
          font-weight: 600;
          i{
            font-size: .42rem;
          }
        }
        &-content{
          flex: 1;
          padding: .3rem 0 .1rem;
          font-size: .28rem;
          .col{
            padding-bottom: .2rem;
          }
          .name{
            display: flex;
            font-weight: 500;
            line-height: .34rem;
            margin-right: 1.26rem;
            color: #333;
            .title{
              font-weight: 700;
              display: inline-block;
              width: 1.4rem;
              text-align: right;
            }
            .content{
              flex: 1;
              display: -webkit-box;
              flex-direction: column;
              -webkit-line-clamp:1;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          > .text{
            font-size: .26rem;
            color: #9a9a9a;
            display: flex;
            align-items: center;
            i{
              padding-right: .1rem;
            }
          }
        }
        .status{
          &.Active{
            color: $Active;
            border: 2px solid $Active;
          }
          &.Completed{
            color: $Completed;
            border: 2px solid $Completed;
          }
          &.Error{
            color: $Error;
            border: 2px solid $Error;
          }
          position: absolute;
          right: .24rem;
          padding: .06rem;
          top: .3rem;
          font-size: .24rem;
        }
      }
    }
    &-box-last {
      margin-bottom: .68rem;
    }
    .box-bottom{
      height: 1rem;
      background: #fff;
    }
  }
</style>
