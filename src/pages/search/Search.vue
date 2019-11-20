<template>
  <div>
    <form action="/">
      <van-search
        v-model="search"
        placeholder="请输入搜索关键词"
        show-action
      >
        <div slot="action">搜索</div>
      </van-search>
    </form>
    <van-dropdown-menu>
      <van-dropdown-item title="" v-model="value" :options="option" />
      <van-dropdown-item :title="SelectTimeStart" v-model="value" ref="time1">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="onConfirmTime1"
          @cancel="onCancelTime1"
        />
      </van-dropdown-item>
      <van-dropdown-item :title="SelectTimeEnd" ref="time2">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="onConfirmTime2"
          @cancel="onCancelTime2"
        />
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { Search, DropdownMenu, DropdownItem, DatetimePicker } from 'vant'
export default {
  name: 'search',
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [DatetimePicker.name]: DatetimePicker
  },
  data () {
    return {
      currentDate: new Date(),
      SelectTimeStart: '起始时间',
      SelectTimeEnd: '结束时间',
      search: '',
      value: '',
      option: [
        { text: '流程名称', value: '' },
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
  methods: {
    onConfirmTime1 (value) {
      this.$refs.time1.toggle()
      this.SelectTimeStart = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`
    },
    onCancelTime1 (value) {
      this.$refs.time1.toggle()
      this.SelectTimeStart = '起始时间'
    },
    onConfirmTime2 (value) {
      this.$refs.time2.toggle()
      this.SelectTimeEnd = `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`
    },
    onCancelTime2 (value) {
      this.$refs.time2.toggle()
      this.SelectTimeEnd = '结束时间'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
