<template>
  <div>
    <collapse
      :collapseName="collapseName"
      :show="show"
    >
      <template v-slot:content>
        <div class="Approval-body">
          <div class="Approval-history">
            <ul>
              <li
                v-for="(item, index) of ApprovalInfo"
                :class="[index === 0 ? 'Approval-active':'']"
                :key="item.ID"
              >
                <i class="Approval-spot"></i>
                <span class="Approval-date">{{item.Time}}</span>
                <span class="Approval-state">POSITION/岗位： {{item.Position}}</span>
                <span class="Approval-state">ACTION TAKEN/操作结果： {{item.Action}}</span>
                <strong class="Approval-name">FULL NAME/姓名：{{item.Name}}</strong>
                <strong class="Approval-name">COMMENT/操作意见：</strong>
                <p class="Approval-content">{{item.Comment}}</p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </collapse>
  </div>
</template>

<script>
import Collapse from './Collapse'
export default {
  name: 'FlowApproval',
  components: {
    Collapse
  },
  data () {
    return {
      collapseName: 'Approval History / 审批历史',
      show: true,
      ApprovalInfo: [{
        ID: '0001',
        Time: '2019/9/24',
        Position: '审批',
        Action: '同意',
        Name: 'Ge,Chunfeng 葛春峰',
        Comment: '同意！'
      }, {
        ID: '0002',
        Time: '2019/9/24',
        Position: '审批',
        Action: '同意',
        Name: 'Ge,Chunfeng 葛春峰',
        Comment: '同意！'
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .Approval-body{
    padding: .3rem 0 .3rem;
    .Approval-history{
      ul{
        border-left: solid .02rem $ApprovalColor;
        padding: 0 .2rem 0 .4rem;
        margin-left: .2rem;
        li{
          &.Approval-active{
            i{
              background: $bgColor;
            }
            span.Approval-date, span.Approval-state{
              color: $bgColor;
            }
          }
          position: relative;
          padding: .2rem 0 .5rem;
          border-bottom: solid .02rem #ddd;
          margin-bottom: .2rem;
          i{
            position: absolute;
            left: -25px;
            top: 15px;
            display: block;
            width: 9px;
            height: 9px;
            border-radius: 9px;
            background: $ApprovalColor;
          }
          span{
            &.Approval-date{
              float: left;
              width: 30%;
              font-family: "KohinoorBangla Light";
              word-wrap: break-word;
            }
            &.Approval-state{
              float: right;
              width: 70%;
              font-family: "KohinoorBangla Light";
              text-align: right;
            }
          }
          strong{
            &.Approval-name{
              display: block;
              clear: both;
              padding: .2rem 0 .16rem;
            }
          }
          p{
            &.Approval-content{
              padding: .16rem .2rem;
              background: #efeeea;
            }
          }
        }
      }
    }
  }
</style>
