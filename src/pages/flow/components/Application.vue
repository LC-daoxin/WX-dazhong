<template>
  <div v-if="FromData">
    <collapse
      :collapseName="collapseName"
      :show="show"
    >
      <template #content v-if="NoData">
        <div v-for="child of InfoChildData" :key="child.name">
          <collapse-item :CollapseItemName="child.name" v-if="child.type === 'list'">
            <template #collapseItem>
              <div class="basic-body">
                <van-row  class="basic-row" v-for="item of child.data" :key="item.ID">
                  <van-col class="basic-col-left" span="12">{{item.Name}}</van-col>
                  <van-col class="basic-col-right" span="12">{{item.val}}</van-col>
                </van-row>
              </div>
            </template>
          </collapse-item>
        </div>
      </template>
      <template #noInfo v-else>
        <div class="NoInfo">
          <div class="NoContent">No items to display.</div>
        </div>
      </template>
    </collapse>
  </div>
</template>

<script>
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'
import { Row, Col } from 'vant'
export default {
  name: 'FlowApplication',
  props: {
    ApplicationInfo: Object
  },
  components: {
    Collapse,
    CollapseItem,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data () {
    return {
      collapseName: '',
      show: true,
      InfoChildData: [],
      FromData: true,
      NoData: true
    }
  },
  mounted () {
    this.DataInit(this.ApplicationInfo)
  },
  methods: {
    DataInit (data) {
      if (data && data.name) {
        this.collapseName = data.name
        if (data.children.length !== 0 || data.data.length !== 0) {
          this.InfoChildData = data.children
        } else {
          this.NoData = false
        }
      } else {
        this.FromData = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .basic-body{
    padding: 0 .1rem 0;
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
  .NoInfo{
    padding: .2rem .1rem .1rem;
    .NoContent{
      padding: .2rem;
      background: #f3efed;
      text-align: center;
    }
  }
</style>
