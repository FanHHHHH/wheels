<template>
  <div class="cascaderItems" :style="{ height: height }">
    <div class="left">
      <div class="label" v-for="item in this.sourceItem" :key="item.id" @click="onClickLabel(item)">
        <span class="name">
          {{ item.name }}
        </span>
        <icon class="icon" name="right" v-if="rightArrowVisable(item)"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <gulu-cascader-items :loadData="loadData" :selected="selected" @update:selected="onUpdateSelected" :level="level + 1" :sourceItem="rightItem" :height="height" :class="height"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "GuluCascaderItems",
  components: {
    Icon,
  },
  props: {
    level: {
      type: Number,
      default: 0,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    sourceItem: {
      type: Array,
    },
    height: {
      type: String,
    },
    loadData: {
      type: Function,
    },
  },
  methods: {
    onClickLabel(item) {
      const selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);
      this.$emit("update:selected", selectedCopy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    },
    rightArrowVisable(item) {
      return this.loadData ? !item.isLeaf : item.children;
    },
  },
  computed: {
    rightItem() {
      if (this.selected[this.level]) {
        let selected = this.sourceItem.filter((item) => item.name === this.selected[this.level].name);
        if (selected && selected[0].children) {
          return selected[0].children;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "var";
.cascaderItems {
  display: flex;
  .left {
    height: 100%;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background: $grey;
      cursor: pointer;
    }

    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icon {
      width: 10px;
      fill: darken($grey, 50%);
      margin-top: 3px;
      margin-left: auto;
    }
  }
}
</style>
