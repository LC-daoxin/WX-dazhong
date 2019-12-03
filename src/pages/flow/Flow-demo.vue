<template>
  <div class="side-nav">
    <flow-header></flow-header>
    <flow-title></flow-title>
    <flow-instruction></flow-instruction>
    <flow-basic></flow-basic>
    <flow-application :ApplicationInfo="ApplicationInfo"></flow-application>
    <flow-application :ApplicationInfo="NoInfo"></flow-application>
    <flow-file></flow-file>
    <flow-approval></flow-approval>
    <flow-comment></flow-comment>
    <flow-button></flow-button>
    <flow-back-top></flow-back-top>
  </div>
</template>

<script>
import FlowHeader from './components/Header'
import FlowTitle from './components/Title'
import FlowInstruction from './components/Instruction'
import FlowBasic from './components/Basic'
import FlowApplication from './components/Application'
import FlowFile from './components/File'
import FlowApproval from './components/Approval'
import FlowComment from './components/Comment'
import FlowButton from './components/Button'
import FlowBackTop from './components/BackTop'
export default {
  components: {
    FlowHeader,
    FlowTitle,
    FlowInstruction,
    FlowBasic,
    FlowApplication,
    FlowFile,
    FlowApproval,
    FlowComment,
    FlowButton,
    FlowBackTop
  },
  name: 'flow-demo',
  data () {
    return {
      ApplicationInfo: {
        name: 'Application Details / 申请内容',
        data: [],
        children: [{
          name: 'Application Details/申请内容',
          type: 'list',
          data: [{
            ID: '0001',
            Name: 'Cost center/成本中心',
            val: '6212002-TPCCMontag 装配'
          }, {
            ID: '0002',
            Name: 'Number/人数',
            val: '32'
          }, {
            ID: '0003',
            Name: 'Budget/招待标准',
            val: '3000'
          }, {
            ID: '0004',
            Name: 'Estimated amount/预估金额',
            val: '3,321,000'
          }, {
            ID: '0005',
            Name: 'Department/部门',
            val: 'CC长春_ITCC长春信息技术'
          }, {
            ID: '0006',
            Name: 'Employee type/人员类别',
            val: 'Manager/经理'
          }]
        }, {
          name: '产品类别列表',
          type: 'list',
          data: [{
            ID: '0001',
            Name: 'Cost center/成本中心',
            val: '6212002-TPCCMontag 装配'
          }, {
            ID: '0002',
            Name: 'Number/人数',
            val: '32'
          }, {
            ID: '0003',
            Name: 'Budget/招待标准',
            val: '3000'
          }, {
            ID: '0004',
            Name: 'Estimated amount/预估金额',
            val: '3,321,000'
          }, {
            ID: '0005',
            Name: 'Department/部门',
            val: 'CC长春_ITCC长春信息技术'
          }, {
            ID: '0006',
            Name: 'Employee type/人员类别',
            val: 'Manager/经理'
          }]
        }, {
          name: '产品地址列表',
          type: 'table',
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }]
      },
      NoInfo: {
        name: 'Education Background / 教育背景',
        data: [],
        children: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-nav{
    padding: 15px;
  }
</style>
