<template>
  <div id="app" style="margin: 100px;">
    <b-nav :selected.sync="selected" :multiple="false">
      <b-nav-item name="home">首页 </b-nav-item>
      <b-nav-item name="about"> 关于 </b-nav-item>
      <b-nav-item name="hire"> 招聘</b-nav-item>
    </b-nav>
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
  },
  data() {
    return {
      selected: ['home'],
    }
  },
  created() {},
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
