<template>
  <div class="Search">
    <form action="/">
      <van-search
        v-model.trim="search"
        :placeholder="$t('Search.InputText')"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="handleSearch">{{$t('Home.Search')}}</div>
      </van-search>
    </form>
    <van-dropdown-menu>
      <van-dropdown-item title="" v-model="value" :options="option" />
      <van-dropdown-item :title="SelectTimeStart" ref="time1">
        <van-datetime-picker
          v-model="currentStartDate"
          type="date"
          @confirm="onConfirmTime1"
          @cancel="onCancelTime1"
          :confirm-button-text="$t('Search.Confirm')"
          :cancel-button-text="$t('Search.Cancel')"
        />
      </van-dropdown-item>
      <van-dropdown-item :title="SelectTimeEnd" ref="time2">
        <van-datetime-picker
          v-model="currentEndDate"
          type="date"
          @confirm="onConfirmTime2"
          @cancel="onCancelTime2"
          :confirm-button-text="$t('Search.Confirm')"
          :cancel-button-text="$t('Search.Cancel')"
        />
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="history">
      <div class="history-container">
        <div class="history-head">
          <div class="history-head-title">
            <i class="iconfont">&#xe6c7;</i>{{$t('Search.HistoryTitle')}}
          </div>
          <div class="history-head-Clean" @click="cleanHistory">
            {{$t('Search.Clean')}} <i class="iconfont">&#xe667;</i>
          </div>
        </div>
        <ul class="history-items">
          <li v-for="(item, index) of HistoryList" :key="item">
              <van-tag
                class="tag"
                v-if="Tagshow[index]"
                closeable
                size="large"
                plain
                @click="handleHistory"
                @close="close(index)"
              >
                <span class="tagSpan">{{ item }}</span>
              </van-tag>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, DropdownMenu, DropdownItem, DatetimePicker, Tag, Toast } from 'vant'
export default {
  name: 'search',
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [DatetimePicker.name]: DatetimePicker,
    [Tag.name]: Tag,
    [Toast.name]: Toast
  },
  data () {
    return {
      currentStartDate: new Date(),
      currentEndDate: new Date(),
      SelectTimeStart: this.$t('Search.StartTime'),
      SelectTimeEnd: this.$t('Search.EndTime'),
      search: '',
      value: '',
      Tagshow: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
      },
      InitialHistory: ['Ge.chunfeng CF-01', 'CF-3214E3223', 'IT-03', 'CF-15', 'IT-2350', 'PMAO-01', 'IT-21250', '大众一汽大连厂', 'CC长春_ITCC长春信息技术'],
      HistoryList: [],
      option: [
        { text: this.$t('Home.ProcessName'), value: '' },
        { text: 'CF-02 Travel Expenses - Borrowing Request/差旅费相关-员工借款申请', value: 0 },
        { text: 'CF-03 Travel Expenses - Domestic Travel Expense Claim/差旅费相关-员工国内出差费报销', value: 1 },
        { text: 'CF-04 Employee Travel Expense Claim -Overseas/员工国际出差费用报销', value: 3 },
        { text: 'CF-05 Training Expenses - Borrowing Request/培训费相关-员工借款申请', value: 4 },
        { text: 'CF-06 Training Expenses - Domestic Travel Expense Claim/培训费相关-员工国内出差费用报销', value: 5 },
        { text: 'CF-07 Employee Trainning Expense Claim -Overseas/培训费相关-员工国际出差费用报销', value: 6 },
        { text: 'CF-08 Business Entertainment - Employee Expense Claim/招待费相关-员工费用报销', value: 7 },
        { text: 'CF-09 SuWF Prepayment Request/奖福基金预支申请', value: 8 },
        { text: 'CF-10 SuWF Reimbursement/奖福基金报账申请', value: 9 },
        { text: 'CF-11 Administrative Expenses - Borrowing Request/办公费相关-员工借款申请', value: 10 },
        { text: 'CF-12 Administrative Expenses - Employee Expense Claim/办公费相关-员工费用报销', value: 11 },
        { text: 'CF-13 Administrative Expenses - Supplier Prepayment/办公费相关 - 供应商预付款申请（无PO）', value: 12 },
        { text: 'CF-14 Administrative Expenses - Supplier Payment Request/办公费相关 - 供应商付款申请单（无PO）', value: 13 },
        { text: 'CF-15 A Meterials - Supplier Prepayment Request/A材料 - 供应商预付款申请（有PO）', value: 14 },
        { text: 'CF-16 A Materials - Supplier Payment Request/A材料 - 供应商付款申请单（有PO）', value: 15 },
        { text: 'CF-17 Service and Materials Acceptance/服务物资验收', value: 16 },
        { text: 'CH-01 Personnel Request (Staff /Teaching Staff)/人员需求申请（正式员工/教学实习生）', value: 17 },
        { text: 'CH-02 Personnel Request (Intern)/人员需求申请（临时实习生）', value: 18 },
        { text: 'CH-03 Exceptional Recruitment/破格招聘申请', value: 19 },
        { text: 'CH-04 Staff Entry/员工入职申请', value: 20 },
        { text: 'CH-05 Entry(Teaching Intern)/入职申请（教学实习生）', value: 21 },
        { text: 'CH-06 Entry(Temporary Intern)/入职申请（临时实习生）', value: 22 }
      ]
    }
  },
  mounted () {
    if (localStorage.getItem('First') == null) {
      localStorage.setItem('First', 'Landed') // 如果第一次登录模拟添加搜索历史s
      this.SaveSearch(this.InitialHistory)
      this.HistoryList = this.InitialHistory
    } else {
      this.HistoryList = this.GetSearch()
    }
  },
  methods: {
    onConfirmTime1 (value) { // 起始时间 确认
      this.$refs.time1.toggle()
      this.SelectTimeStart = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`
    },
    onCancelTime1 (value) { // 起始时间 取消
      this.$refs.time1.toggle()
      this.SelectTimeStart = this.$t('Search.StartTime')
    },
    onConfirmTime2 (value) { // 结束时间 确认
      this.$refs.time2.toggle()
      this.SelectTimeEnd = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`
    },
    onCancelTime2 (value) { // 结束时间 取消
      this.$refs.time2.toggle()
      this.SelectTimeEnd = this.$t('Search.EndTime')
    },
    close (type) { // 删除某个搜索历史
      // this.Tagshow[type] = false 全部显示 通过localStorage 控制
      this.HistoryList.splice(type, 1)
      this.SaveSearch(this.HistoryList)
    },
    cleanHistory () {
      this.HistoryList = []
      localStorage.removeItem('SearchWord')
    },
    handleHistory (Event) { // 点击历史搜索显示到输入框里
      let Text = Event.currentTarget.getElementsByTagName('span')[0].innerText
      if (this.HistoryList.indexOf(Text) > -1) { // 点击Close关闭时会触发 handleHistory
        this.search = Text
      }
    },
    onSearch () { // 键盘搜索
      this.recordHistory()
    },
    handleSearch () { // 手动点击搜索
      this.recordHistory()
    },
    recordHistory () {
      if (this.search !== '') { // 先判断输入的是不是空格
        if (localStorage.getItem('SearchWord') == null) {
          this.SaveSearch(this.search)
          this.HistoryList = this.GetSearch()
        } else {
          let HistoryArr = this.GetSearch()
          HistoryArr.unshift(this.search) // 最新的搜索记录添加到头部
          // let NewHistoryArr = this.deDuplication(HistoryArr)
          let NewHistoryArr = [...new Set(HistoryArr)] // 使用Set 去重数组
          let Num = NewHistoryArr.length
          if (Num < 11) {
            this.SaveSearch(NewHistoryArr)
          } else {
            this.ten(NewHistoryArr)
          }
          this.HistoryList = this.GetSearch()
        }
      }
    },
    // deDuplication (Arr) { // 去重 搜索记录
    //   let res = []
    //   let json = {}
    //   for (let i = 0; i < Arr.length; i++) {
    //     if (!json[Arr[i]]) {
    //       res.push(Arr[i])
    //       json[Arr[i]] = 1
    //     }
    //   }
    //   return res
    // },
    ten (arr) { // 优化历史记录保存不超过10个
      let num = arr.length - 1
      let tenArr = []
      for (let i = 0; i < num; i++) {
        tenArr[i] = arr[i]
      }
      localStorage.removeItem('SearchWord')
      this.SaveSearch(tenArr)
    },
    SaveSearch (Arr) { // 保存搜索历史记录
      localStorage.setItem('SearchWord', Arr)
    },
    GetSearch () { // 获取localStorage中搜索历史记录 并转换为数组
      return localStorage.getItem('SearchWord').split(',')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .Search{
    .history{
      padding: .2rem;
      .history-container{
        .history-head{
          display: flex;
          color: #333;
          font-size: .26rem;
          &-title{
            flex: 1;
            display: flex;
            align-items: center;
            padding-left: .2rem;
            i{
              margin-right: .1rem;
            }
          }
          &-Clean{
            flex: 1;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            padding-left: .2rem;
            padding-right: .2rem;
            i{
              margin-right: .1rem;
            }
          }
        }
        .history-items {
          margin-top: .14rem;
          li {
            position: relative;
            display: inline-block;
            max-width: 99%;
            margin-top: .12rem;
            .tag{
              margin-right: .2rem;
              padding: .1rem .12rem;
              font-size: .26rem;
              height: .36rem;
              line-height: .36rem;
              .tagSpan{
                padding-right: .02rem;
              }
            }
          }
        }
      }
    }
  }
</style>
