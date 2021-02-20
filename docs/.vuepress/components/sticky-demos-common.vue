<template>
  <div class="wrapper">
    <b-sticky :distance="60">
      <div class="bg-purple-dark"></div>
    </b-sticky>
    <div class="div"></div>
  </div>
</template>

<script>
import BSticky from '../../../src/sticky.vue'
export default {
  components: {
    BSticky,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
    height: 60px;
    z-index: 10;
  }
  .div {
    height: 500px;
  }
}
</style>
