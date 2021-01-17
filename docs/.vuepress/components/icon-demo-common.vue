<template>
  <div class="wrapper">
    <b-button>
      <b-icon name="settings"></b-icon>
      按钮
    </b-button>
  </div>
</template>

<script>
import BButton from '../../../src/button/button'
import BIcon from '../../../src/Icon'
export default {
  components: {
    BButton,
    BIcon,
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
