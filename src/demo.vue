<template>
  <div id="app" style="margin: 100px;">
    <b-table indexIsVisable checkable expandField="description" :index-is-visable="false" :height="300" bordered :selected-items.sync="selected" :data-source="dataSource" :columns="columns" :order-by.sync="orderBy" @update:orderBy="x" :loading="loading">
      <template v-slot="row">
        <button @click="edit(row.item)">编辑</button>
        <button @click="view(row.item)">查看</button>
      </template>
    </b-table>
    <!-- <b-table :index-is-visable="false" :striped="false" bordered tight :data-source="dataSource" :columns="columns"></b-table> -->
    <b-pager :total-page="10" :current-page.sync="currentPage" hide-if-one-page></b-pager>
  </div>
</template>

<script>
import Button from './button/button.vue'
import Cascader from './cascader/cascader'
import Popover from './popover'
import Input from './Input'
import BSlides from './slides/slides'
import BSlidesItem from './slides/slides-item'
import BNav from './nav/nav.vue'
import BNavItem from './nav/nav-item.vue'
import BSubNav from './nav/sub-nav.vue'
import BPager from './pager.vue'
import db from '../tests/fixtures/db.js'
import BTable from './table.vue'

import { removeListener } from './click-outside.js'

export default {
  name: 'demo',
  components: {
    'b-button': Button,
    'b-cascader': Cascader,
    'b-popover': Popover,
    'b-input': Input,
    BSlides,
    BSlidesItem,
    BNav,
    BNavItem,
    BSubNav,
    BPager,
    BTable,
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        { text: '姓名', field: 'name', width: '500' },
        { text: '分数', field: 'score' },
      ],
      orderBy: {
        name: true,
        score: 'desc',
      },
      dataSource: [
        { id: 1, name: 'hefan', score: 100, description: 'aaa bbb' },
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
    x(e) {
      this.loading = true
      setTimeout(() => {
        this.dataSource.sort((a, b) => a.score - b.score)
        this.loading = false
      }, 2000)
    },
    edit(a) {
      window.alert(a.name)
    },
    view(a) {
      window.alert(a.name)
    }
  },
  created() {},
  watch: {
    selected(newVla) {},
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
