<template>
  <div class="wrapper">
    <b-cascader :source="source" :selected.sync="selected"></b-cascader>
  </div>
</template>

<script>
import BCascader from '../../../src/cascader/cascader'
import BCascaderItem from '../../../src/cascader/cascader-items'

export default {
  components: {
    BCascader,
    BCascaderItem,
  },
  data() {
    return {
      source: [
        {
          name: '江苏',
          children: [{ name: '苏州', children: [{ name: '吴江' }, { name: '姑苏' }, { name: '工业园区' }] }, { name: '盐城', children: [{ name: '大丰' }, { name: '建湖' }] }, { name: '宿迁' }],
        },
        { name: '浙江', children: [{ name: '杭州', children: [{ name: '余杭' }] }, { name: '湖州' }, { name: '绍兴' }] },
      ],
      selected: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  position: relative;
  z-index: 100;
  > div {
    margin-top: 10px;
  }
}
</style>
