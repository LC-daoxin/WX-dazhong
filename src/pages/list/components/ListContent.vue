<template>
  <van-list
    class="listContent"
    v-model="loading"
    :finished="finished"
    :finished-text="$t('List.DataLoaded')"
    :loading-text="$t('List.Loading')"
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item.id"
      :border="false"
    >
      <list-item :item="item"></list-item>
    </van-cell>
  </van-list>
</template>

<script>
import { List, Cell } from 'vant'
import ListItem from '@/components/list/ListItem'
export default {
  name: 'ListContent',
  props: {
    ListType: String
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    ListItem
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    switch (this.ListType) {
      case 'MyPending': this.list = [{
        id: '0001',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0002',
        name: 'CF-12 Administrative Expenses - Employee Expense Claim/办公费相关-员工费用报销',
        no: 'CF-2019-001321',
        status: 'Completed',
        time: '2019-10-16 11:24:19',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0003',
        name: 'CF-17 Service and Materials Acceptance/服务物资验收',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0004',
        name: 'CF-04 Employee Travel Expense Claim -Overseas/员工国际出差费用报销',
        no: 'CF-2019-001321',
        status: 'Error',
        time: '2019-11-12 07:59:07',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0005',
        name: 'IT-01 Workplace/办公资产申请',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0006',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0007',
        name: 'CF-12 Administrative Expenses - Employee Expense Claim/办公费相关-员工费用报销',
        no: 'CF-2019-001321',
        status: 'Completed',
        time: '2019-10-16 11:24:19',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0008',
        name: 'CF-17 Service and Materials Acceptance/服务物资验收',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0009',
        name: 'CF-04 Employee Travel Expense Claim -Overseas/员工国际出差费用报销',
        no: 'CF-2019-001321',
        status: 'Error',
        time: '2019-11-12 07:59:07',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0010',
        name: 'IT-01 Workplace/办公资产申请',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }]; break
      case 'BMPending': this.list = [{
        id: '0001',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0002',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }]; break
      case 'MyCreated': this.list = [{
        id: '0001',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0002',
        name: 'CF-12 Administrative Expenses - Employee Expense Claim/办公费相关-员工费用报销',
        no: 'CF-2019-001321',
        status: 'Completed',
        time: '2019-10-16 11:24:19',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0003',
        name: 'CF-17 Service and Materials Acceptance/服务物资验收',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0004',
        name: 'CF-04 Employee Travel Expense Claim -Overseas/员工国际出差费用报销',
        no: 'CF-2019-001321',
        status: 'Error',
        time: '2019-11-12 07:59:07',
        user: 'Wu, Wenhui/吴文惠'
      }, {
        id: '0005',
        name: 'IT-01 Workplace/办公资产申请',
        no: 'IT-2019-000092',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }, {
        id: '0006',
        name: 'CH-12 Book Purchasing',
        no: 'CH-2019-002523',
        status: 'Active',
        time: '2019-11-12 07:59:07',
        user: 'Ge, Chunfeng/葛春峰'
      }]; break
      case 'MyRequest': break
      case 'MyApprove': break
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        /* for (let i = 0; i < 6; i++) {
          this.list.push(this.list)
        } */
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 0) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@styles/main.scss';
  .listContent{
    >>> .van-cell{
      padding: 0;
    }
  }
</style>
