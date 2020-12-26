<template>
  <div id="app" style="margin: 100px;">
    <b-nav :selected.sync="selected" :multiple="false">
      <b-nav-item name="home">首页 </b-nav-item>
      <b-sub-nav>
        <template #title>关于</template>
        <b-nav-item name="culture"> 企业文化 </b-nav-item>
        <b-nav-item name="developers"> 开发团队 </b-nav-item>
        <b-sub-nav>
          <template #title>联系方式</template>
          <b-nav-item name="wechat"> 微信 </b-nav-item>
          <b-nav-item name="qq"> QQ </b-nav-item>
          <b-sub-nav>
            <template #title>手机</template>
            <b-nav-item name="cn"> 电信 </b-nav-item>
            <b-nav-item name="cu"> 联通 </b-nav-item>
            <b-nav-item name="cm"> 移动 </b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
      </b-sub-nav>
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
      selected: ['culture'],
    }
  },
  created() {},
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
