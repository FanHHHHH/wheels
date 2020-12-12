<template>
  <div class="cascaderItems" :style="{ height: height }">
    <div class="left">
      <div class="label" v-for="item in this.sourceItem" :key="item.name" @click="leftSelected = item">
        {{ item.name }}
        <icon class="icon" name="right" v-if="item.children">></icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <gulu-cascader-items :sourceItem="rightItem" :height="height" :class="height"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  name: "GuluCascaderItems",
  components: {
    Icon
  },
  props: {
    sourceItem: {
      type: Array,
    },
    height: {
      type: String,
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
@import 'var';
.cascaderItems {
  display: flex;
  .left {
    height: 100%;
    padding: 0.3em 0;
    
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      width: 10px;
      fill: darken($grey, 50%);
      margin-top: 3px;
      transform: translateX(15px);
    }
  }
}
</style>
