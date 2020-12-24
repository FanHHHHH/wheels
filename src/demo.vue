<template>
  <div id="app" style="margin: 100px;">
    <b-slides :selected.sync="selected">
      <b-slides-item name="1">
        <div class="box">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box">3</div>
      </b-slides-item>
    </b-slides>
  </div>
</template>

<script>
import Button from './button/button.vue'
import Cascader from './cascader/cascader'
import Popover from './popover'
import Input from './Input'
import BSlides from './slides/slides'
import BSlidesItem from './slides/slides-item'

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
  },
  data() {
    return {
      selected: '1',
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
.box {
  width: 100%;
  height: 300px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
