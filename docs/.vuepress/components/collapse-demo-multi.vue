<template>
  <div class="wrapper">
    <b-collapse :selected.sync="selectedTab">
      <b-collapse-item title="标题1" name="1">hello，你好呢。</b-collapse-item>
      <b-collapse-item title="标题2" name="2">你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?你知道我在想你吗?</b-collapse-item>
      <b-collapse-item title="标题3" name="3">我在等你呀!</b-collapse-item>
    </b-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapse-item'
export default {
  components: {
    'b-collapse': Collapse,
    'b-collapse-item': CollapseItem,
  },
  data() {
    return {
      selectedTab: ['1'],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  position: relative;
  
  > div {
    margin-top: 10px;
  }
}
</style>
