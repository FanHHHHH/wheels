<template>
  <div class="wrapper">
    <b-cascader :source.sync="source" :selected.sync="selected" popover-height="200px" :loadData="loadData"></b-cascader>
  </div>
</template>

<script>
import BCascader from '../../../src/cascader/cascader'
import BCascaderItem from '../../../src/cascader/cascader-items'
import db from '../../../tests/fixtures/db.js'
import { removeListener } from '../../../src/click-outside.js'

function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId)
      result.forEach((node) => {
        if (db.filter((item) => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}

export default {
  components: {
    BCascader,
    BCascaderItem,
  },
  data() {
    return {
      source: [],
      selected: [],
    }
  },
  methods: {
    loadData(node, updateSource) {
      let { id } = node
      ajax(id).then((result) => {
        updateSource(result)
      })
    },
  },
  created() {
    ajax(0).then((result) => {
      this.source = result
    })
  },
  beforeDestroy() {
    // removeListener()
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  position: relative;
  // margin-bottom: 200px;
  z-index: 100;
  > div {
    margin-top: 10px;
  }
}
</style>
