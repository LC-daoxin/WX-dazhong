<template>
  <div class="side-nav">
    <flow-header></flow-header>
    <flow-title></flow-title>
    <flow-instruction></flow-instruction>
    <flow-basic></flow-basic>
    <flow-application :ApplicationInfo="ApplicationInfo"></flow-application>
    <flow-application :ApplicationInfo="NoInfo"></flow-application>
  </div>
</template>

<script>
import FlowHeader from './components/Header'
import FlowTitle from './components/Title'
import FlowInstruction from './components/Instruction'
import FlowBasic from './components/Basic'
import FlowApplication from './components/Application'
export default {
  components: {
    FlowHeader,
    FlowTitle,
    FlowInstruction,
    FlowBasic,
    FlowApplication
  },
  name: 'flow-demo',
  data () {
    return {
      ApplicationInfo: {
        name: 'Application Details / 申请内容',
        data: [],
        children: [{
          name: 'Application Details/申请内容',
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
