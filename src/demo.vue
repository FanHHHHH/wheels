<template>
  <div id="app" style="margin: 100px;">
    <b-slides :selected="selected">
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
import Button from './button.vue'
import Cascader from './cascader'
import Popover from './popover'
import Input from './Input'
import BSlides from './slides'
import BSlidesItem from './slides-item'

import db from './db'
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
  created() {
    let i = '1'
    setInterval(() => {
      if (i === 4) {
        i = 1
      }
      this.selected = i.toString()
      i++
    }, 2000)
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 200px;
  height: 150px;
  background: #eee;
  border: 1px solid slateblue;
}
</style>
