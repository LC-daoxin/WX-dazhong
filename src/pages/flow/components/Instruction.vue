<template>
  <div>
    <collapse
      :collapseName="collapseName"
      :show="show"
    >
      <template v-slot:content>
        <div class="basic-body">
          <van-row class="basic-row">
            <van-col class="basic-col" span="24">{{Instruction}}</van-col>
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
  name: 'FlowInstruction',
  components: {
    Collapse,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      collapseName: 'Instruction / 填单内容',
      show: false,
      Instruction: '请填写内容'
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
    }
  }
</style>
