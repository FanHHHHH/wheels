<template>
  <div id="app" style="margin: 100px;">
    <b-table :index-is-visable="false" bordered :data-source="dataSource" :columns="columns" @changeItem="x"></b-table>
    <b-table :index-is-visable="false" :striped="false" bordered tight :data-source="dataSource" :columns="columns"></b-table>
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
        { text: '姓名', field: 'name' },
        { text: '分数', field: 'score' },
      ],
      dataSource: [
        { id: 1, name: 'hefan', score: 100 },
        { id: 2, name: 'wzx', score: 99 },
      ],
    }
  },
  methods: {
    // onChange(selected) {
    //   console.log(selected);
    //   if (selected.indexOf('home') >= 0) {
    //     window.alert('hi')
    //   }
    // }
    x(obj) {
      console.log(obj)
    },
  },
  created() {},
  watch: {
    selected(newVal) {
      if (newVal === 'home') {
        window.alert('hi')
      }
    },
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
