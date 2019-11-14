<template>
  <div>
    <collapse
      :collapseName="collapseName"
      :show="show"
    >
      <template v-slot:content>
        <div class="basic-body">
          <van-row class="basic-row" v-for="item of basicInfo" :key="item.ID">
            <van-col class="basic-col-left" span="12">{{item.Name}}</van-col>
            <van-col class="basic-col-right" span="12">{{item.val}}</van-col>
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
      basicInfo: [{
        ID: '0001',
        Name: 'Reference ID/单据号',
        val: 'CH-2019-000213'
      }, {
        ID: '0002',
        Name: 'Created by/填单人',
        val: '葛春峰'
      }]
    }
  },
  methods: {
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
