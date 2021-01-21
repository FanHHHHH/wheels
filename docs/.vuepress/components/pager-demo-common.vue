<template>
  <div class="wrapper">
    <b-pager :total-page="20" :hideIfOnePage="false" :current-page.sync="currentPage"></b-pager>
  </div>
</template>

<script>
import BPager from '../../../src/pager'
export default {
  components: {
    BPager,
  },
  data() {
    return {
      currentPage: 1,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
  .w1 {
    background-color: #48ddc9;
  }
  .w2 {
    background-color: #ffcdb2;
  }
}
</style>
#fdb4e9
