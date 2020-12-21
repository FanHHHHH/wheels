<template>
  <div id="app" style="margin: 100px;">
    <!-- <b-cascader :source.sync="source" :loadData="loadData" popover-height="200px" :selected.sync="selected"></b-cascader>
    <div>
      <b-cascader :source.sync="source" :loadData="loadData" popover-height="200px" :selected.sync="selected"></b-cascader>
    </div>
    <b-button>按钮测试</b-button> -->

    <b-popover>
      <template slot="content">这是内容</template>
      <template><button>关闭</button></template>
    </b-popover>
  </div>
</template>

<script>
import Button from './button.vue'
import Cascader from './cascader'
import Popover from './popover'
import db from './db'
import { removeListener } from './click-outside.js'

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
  name: 'demo',
  components: {
    'b-button': Button,
    'b-cascader': Cascader,
    'b-popover': Popover,
  },
  data() {
    return {
      selected: [],
      source: [],
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
    // this.source = db
    // removeListener()
  },
}
</script>

<style lang="scss" scoped></style>
