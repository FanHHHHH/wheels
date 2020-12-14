<template>
  <div class="cascaderItems" :style="{ height: height }">
    <div></div>
    <div class="left">
      <div class="label" v-for="item in this.sourceItem" :key="item.name" @click="onClickLabel(item)">
        {{ item.name }}
        <icon class="icon" name="right" v-if="item.children">></icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <gulu-cascader-items :selected="selected" @update:selected="onUpdateSelected" :level="level + 1" :sourceItem="rightItem" :height="height" :class="height"></gulu-cascader-items>
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
    level: { 
      type: Number,
      default: 0
    },
    selected: {
      type: Array,
      default: () => []
    },
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
  methods: {
    onClickLabel(item) {
      const selectedCopy = JSON.parse(JSON.stringify(this.selected))
      selectedCopy[this.level] = item
      this.$emit('update:selected', selectedCopy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    rightItem() {
      const curSelected = this.selected[this.level]
      if (curSelected && curSelected.children) {
        return curSelected.children;
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
      margin-right: 1em;
      transform: translateX(15px);
    }
  }
}
</style>
