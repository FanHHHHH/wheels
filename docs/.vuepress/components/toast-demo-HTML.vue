<template>
  <div class="wrapper">
    <b-button @click="onClickButton">测试HTML</b-button>
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
  methods: {
    onClickButton() {
      this.$toast('<strong id="test">加粗</strong>', { enableHTML: true })
    },
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
