<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisable = !popoverVisable"></div>
    <cascader-items v-if="popoverVisable" :sourceItem="source"></cascader-items>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items.vue";
export default {
  name: "GuluCascader",
  components: {
    CascaderItems,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "var";
.cascader {
  > .trigger {
    border: 1px solid salmon;
    width: 80px;
    height: 30px;
  }
}
</style>
