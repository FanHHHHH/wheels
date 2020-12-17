<template>
  <div id="app">
    <b-button>aaa</b-button>
    <b-cascader :source.sync="source" :load-data="loadData" popover-height="200px" :selected.sync="selected"></b-cascader>
    <p>2222</p>
  </div>
</template>

<script>
import Button from "./button.vue";
import Cascader from "./cascader";
import db from "./db";

function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId);
      resolve(result);
    }, 300);
  });
}

export default {
  name: "demo",
  components: {
    "b-button": Button,
    "b-cascader": Cascader,
  },
  data() {
    return {
      selected: [],
      source: [],
    };
  },
  methods: {
    loadData(node, updateSource) {
      let { id } = node;
      ajax(id).then((result) => {
        updateSource(result);
      });
    },
  },
  created() {
    ajax(0).then((result) => {
      this.source = result;
    });
  },
};
</script>

<style lang="scss" scoped></style>
