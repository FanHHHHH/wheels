<template>
  <div class="wrapper"></div>
</template>

<script>
import BNav from '../../../src/nav/nav'
import BNavItem from '../../../src/nav/nav-item'
import BSubNav from '../../../src/nav/sub-nav'

export default {
  components: {
    'b-button': Button,
    'b-button-group': ButtonGroup,
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
