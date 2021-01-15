<template>
  <div class="wrapper">
    <b-button @click="$toast('这是上方的内容'), { position: 'top' }">上方弹出</b-button>
    <b-button @click="$toast('这是中间的内容', { position: 'middle' })">中间弹出</b-button>
    <b-button @click="$toast('这是下方的内容', { position: 'bottom' })">下方弹出</b-button>
  </div>
</template>

<script>
import Button from '../../../src/button/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'

Vue.use(plugin)
export default {
  components: {
    'b-button': Button,
  },
}
</script>
<style>
.b-toast-wrapper {
  z-index: 30 !important;
}
</style>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>
