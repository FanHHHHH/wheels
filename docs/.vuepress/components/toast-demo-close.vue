<template>
  <div class="wrapper">
    <b-button @click="onClickButton">上方弹出</b-button>
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
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          },
        },
      })
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
