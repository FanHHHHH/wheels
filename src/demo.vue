<template>
  <div>
    <b-button>aaa</b-button>
    <p>1111</p>
    <b-cascader :source="source" popover-height="200px"></b-cascader>
    <p>2222</p>
  </div>
</template>

<script>
import Button from "./button.vue";
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "b-button": Button,
    "b-cascader": Cascader,
  },
  data() {
    return {
      source: [
        {
          name: "江苏",
          children: [
              { name: "苏州", children: [{ name: "吴江" }, { name: "姑苏" }, { name: "工业园区" }] }, 
              { name: "盐城", children: [{ name: "大丰" }, { name: "建湖" }] }, { name: "宿迁" }],
        },
        { name: "浙江", 
          children: [
              { name: "杭州" , children: [{name: '余杭'}]}, 
              { name: "湖州" }, 
              { name: "绍兴" }] },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
