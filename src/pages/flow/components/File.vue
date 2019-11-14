<template>
  <div>
    <collapse
      :collapseName="collapseName"
      :show="show"
    >
      <template v-slot:content>
        <div class="attachment">
          <div class="attachment-body">
            <ul>
              <li v-for="item of FileInfo" :key="item.ID">
                <span class="text-danger">文件名</span>
                <strong class="attachment-title">{{item.Name}}</strong>
                <p class="attachment-line"></p>
                <p class="attachment-row">上传人：{{item.Uploader}}</p>
                <p class="attachment-row">上传时间：{{item.Time}}</p>
                <p class="attachment-row">文件类型：{{item.Type}} | 文件大小：{{item.Size}}</p>
                <button class="attachment-button">
                  <a href="http://www.lcdaoxin.com/Storage/download/通用流程.pdf" role="button"><i class="iconfont">&#xe639;</i>Download</a>
                </button>
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
  name: 'FlowFile',
  components: {
    Collapse
  },
  data () {
    return {
      collapseName: 'Attachments Upload / 附件上传',
      show: true,
      FileInfo: [{
        ID: '0001',
        Name: '价格折扣申请表.xlsx',
        Uploader: '张长贵',
        Time: '2019-9-30 10:24:31',
        Type: 'xlsx',
        Size: '20.46Kb'
      }, {
        ID: '0002',
        Name: '价格折扣申请表2.xlsx',
        Uploader: '张长贵',
        Time: '2019-9-30 10:24:31',
        Type: 'xlsx',
        Size: '20.46Kb'
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .attachment{
    margin: .4rem 0 .3rem;
    .attachment-body{
      padding: .1rem .3rem 0;
      .text-danger{
        color: $textRed;
      }
      ul{
        border-top: solid .02rem #ddd;
        li{
          position: relative;
          border-bottom: solid .02rem #ddd;
          padding: .3rem .1rem;
          font-family: "KohinoorBangla Light";
          .attachment-title{
            display: block;
            font-size: .36rem;
            margin: .1rem 0;
            padding-right: 1.6rem;
          }
          .attachment-line{
            height: .05rem;
            background: $bgColor;
            margin: .1rem 0;
            width: 20%;
          }
          .attachment-row{
            font-size: .24rem;
            margin-bottom: .2rem;
          }
          .attachment-button{
            &:hover, &:active, &:focus{
              background: $bgColor;
              color: #fff;
            }
            position: absolute;
            top: .2rem;
            right: 0;
            border: solid 1px $bgColor;
            color: $bgColor;
            padding: .1rem .2rem .1rem .16rem;
            background: #fff;
            font-family: "KohinoorBangla Regular";
            a{
              color: #2196F3;
              &:hover, &:active, &:focus{
                background: $bgColor;
                color: #fff;
                i{
                  color: #fff;
                }
              }
              i{
                font-size: .24rem;
                vertical-align: middle;
                margin-right: 5px;
                color: $bgColor;
              }
            }
          }
        }
      }
    }
  }
</style>
