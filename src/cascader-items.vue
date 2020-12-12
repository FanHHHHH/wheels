<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in this.sourceItem" :key="item.name" @click="leftSelected = item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <gulu-cascader-items :sourceItem="rightItem"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCascaderItems",
  props: {
    sourceItem: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  computed: {
    rightItem() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cascaderItems {
  display: flex;
  .left {
    border: 1px solid salmon;
  }
}
</style>
