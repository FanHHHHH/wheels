<template>
  <div class="wrapper">
    <b-table expandField="description" bordered striped checkable indexIsVisable :loading="loading" @update:orderBy="x" :selected-items.sync="selected" :order-by.sync="orderBy" :data-source="dataSource">
      <b-table-column text="姓名" field="name" :width="300">
        <template slot-scope="scope">
          {{ scope.value }}
        </template>
      </b-table-column>
      <b-table-column text="分数" field="score" :width="80">
        <template slot-scope="scope">
          {{ scope.value }}
        </template>
      </b-table-column>
      <template v-slot="row">
        <button @click="edit(row.item)">编辑</button>
        <button @click="view(row.item)">查看</button>
      </template>
    </b-table>
  </div>
</template>

<script>
import BTable from '../../../src/table'
import BTableColumn from '../../../src/table-column'
export default {
  components: {
    BTable,
    BTableColumn,
  },
  data() {
    return {
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hf', score: 100, description: 'aaa bbb' },
        { id: 2, name: 'wzx', score: 99, description: 'ccc ddd' },
        { id: 3, name: 'aa', score: 99 },
        { id: 4, name: 'bb', score: 99 },
        { id: 5, name: 'cc', score: 99 },
        { id: 6, name: 'dd', score: 99 },
        { id: 7, name: 'ee', score: 99 },
        { id: 8, name: 'ff', score: 99 },
        { id: 9, name: 'gg', score: 99 },
        { id: 10, name: 'hh', score: 99 },
      ],
      selected: [],
      loading: false,
    }
  },
  methods: {
    x() {
      console.log('sort callback')
    },
    edit(row) {
      console.log(row)
    },
    view(row) {
      console.log(row)
    },
  },
}
</script>

<style>
.b-table {
  margin: 0 !important;
}
* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  height: 500px;
  margin-bottom: -100px;
  // overflow: auto;
}
</style>
