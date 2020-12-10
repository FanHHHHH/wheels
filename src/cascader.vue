<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
      <div v-for="item in source" :key="item.name">
        <cascader-item :sourceItem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascader-item.vue";
export default {
  name: "GuluCascader",
  components: {
    CascaderItem
  },
  props: {
    source: {
      type: Array,
    },
  },
  methods: {
    // getDatas(arr) {
    //   if (typeof arr !== "array") {
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "var";
.cascader {
}
</style>
