<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisable = !popoverVisable"></div>
    <div class="popover-wrapper" v-if="popoverVisable">
      <cascader-items :selected="selected" :sourceItem="source" 
      class="popover" :height="popoverHeight"
      @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
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
    selected: {
      type: Array,
      default: () => []
    },
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popoverVisable: false,
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  > .trigger {
    border: 1px solid black;
    width: 80px;
    height: 30px;
  }
  > .popover-wrapper {
    @extend %box-shadow;
    position: absolute;
    background-color: white;
  }
}
</style>
