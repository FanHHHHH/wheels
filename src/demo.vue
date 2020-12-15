<template>
  <div id="app">
    <b-button>aaa</b-button>
    <b-cascader :source="source" popover-height="200px" :selected.sync="selected"></b-cascader>
    <p>2222</p>
  </div>
</template>

<script>
import Button from "./button.vue";
import Cascader from "./cascader";
import db from './db'

const ajax = (parentId = 0) => {
  return db.filter(item => item.parent_id === parentId)
};
console.log(ajax());

export default {
  name: "demo",
  components: {
    "b-button": Button,
    "b-cascader": Cascader,
  },
  data() {
    return {
      selected: [],
      source: ajax()
    };
  },
};
</script>

<style lang="scss" scoped></style>
