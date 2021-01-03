<template>
  <div id="app" style="margin: 100px;">
    <b-pager :total-page="20" :current-page="6" @change="goToPage" hide-if-one-page></b-pager>
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
  },
  data() {
    return {
      selected: 'culture',
    }
  },
  methods: {
    // onChange(selected) {
    //   console.log(selected);
    //   if (selected.indexOf('home') >= 0) {
    //     window.alert('hi')
    //   }
    // }
    goToPage() {},
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
