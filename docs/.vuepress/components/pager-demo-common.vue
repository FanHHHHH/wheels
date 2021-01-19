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

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>
