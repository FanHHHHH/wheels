<template>
  <div class="wrapper">
    <b-popover trigger="hover">
      <b-button>上方弹出</b-button>
      <template #content>弹出内容</template>
    </b-popover>
    <b-popover position="right" trigger="hover">
      <b-button>右方弹出</b-button>
      <template #content>弹出内容</template>
    </b-popover>
    <b-popover position="bottom" trigger="hover">
      <b-button>下方弹出</b-button>
      <template #content>弹出内容</template>
    </b-popover>
    <b-popover position="left" trigger="hover">
      <b-button>左方弹出</b-button>
      <template #content>弹出内容</template>
    </b-popover>
  </div>
</template>

<script>
import BPopover from '../../../src/popover'
import BButton from '../../../src/button/button'

export default {
  components: {
    BPopover,
    BButton,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>
