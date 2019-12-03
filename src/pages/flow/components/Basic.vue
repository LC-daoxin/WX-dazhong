<template>
  <div>
    <collapse
      :collapseName="collapseName"
      :show="show"
      type="Basic"
      @change="changeState"
    >
      <template #content>
        <div class="basic-body">
          <van-row class="basic-row" v-for="item of DataInfo" :key="item.ID">
            <van-col class="basic-col-left" span="13">{{item.Name}}</van-col>
            <van-col class="basic-col-right" span="11">{{item.val}}</van-col>
          </van-row>
        </div>
      </template>
    </collapse>
  </div>
</template>

<script>
import Collapse from './Collapse'
import { Row, Col } from 'vant'
export default {
  name: 'FlowBasic',
  components: {
    Collapse,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      collapseName: 'Basic Information / 基本信息',
      show: true,
      detailShow: false,
      basicInfo: [{
        ID: '0001',
        Name: 'Reference ID/单据号',
        val: 'CH-2019-000213'
      }, {
        ID: '0002""',
        Name: 'Created by/填单人',
        val: '葛春峰'
      }, {
        ID: '0003',
        Name: 'Urgent/加急',
        val: 'No/否'
      }, {
        ID: '0004',
        Name: 'Created on/填单日期',
        val: '2019/11/26'
      }, {
        ID: '0005',
        Name: 'Contact Number/联系电话',
        val: '15201367437'
      }, {
        ID: '0006',
        Name: 'Applicant Staff ID/申请人员工ID',
        val: '20190101'
      }, {
        ID: '0007',
        Name: 'Full Name/姓名',
        val: '/APONVWED'
      }, {
        ID: '0008',
        Name: 'Email/邮箱',
        val: 'haiyuliu@k2workflow.com.cn'
      }, {
        ID: '0009',
        Name: 'Plant/工厂',
        val: 'DL大连厂'
      }, {
        ID: '0010',
        Name: 'Department/部门',
        val: 'IT信息技术'
      }, {
        ID: '0011',
        Name: 'Position/岗位',
        val: 'Cost Center and SWF Controller'
      }]
    }
  },
  computed: {
    DataInfo: {
      get () {
        if (!this.detailShow) {
          let newArr = []
          this.basicInfo.forEach((item) => {
            if (item.Name === 'Reference ID/单据号' || item.Name === 'Created by/填单人') {
              newArr.push(item)
            }
          })
          return newArr
        } else {
          return this.basicInfo
        }
      },
      set (val) {
        console.log(val)
      }
    }
  },
  methods: {
    changeState () {
      this.detailShow = !this.detailShow
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .basic-body{
    padding: .3rem .1rem 0;
    .basic-row{
      .basic-col-left{
        font-family: "KohinoorBangla Light";
        color: #9c9990;
        padding: .16rem 0;
      }
      .basic-col-right{
        font-weight: normal;
        text-align: right;
        padding: .16rem .08rem;
      }
    }
  }
</style>
