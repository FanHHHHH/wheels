<template>
  <div class="cascaderItems" :style="{ height: height }">
    <div class="left">
      <div class="label" v-for="item in this.sourceItem" :key="item.id" @click="onClickLabel(item)">
        <span class="name">
          {{ item.name }}
        </span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="icon loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="icon" name="right" v-if="rightArrowVisable(item)"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <gulu-cascader-items :loading-item="loadingItem" :loadData="loadData" :selected="selected" @update:selected="onUpdateSelected" :level="level + 1" :sourceItem="rightItem" :height="height" :class="height"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  name: "BlueCascaderItems",
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
    loadingItem: {
      type: Object,
      defult: () => ({})
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
@import "../styles/var";
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
    .icons {
      margin-top: 3px;
      margin-left: auto;
      .loading {
        animation: spin 2s infinite linear;
      }
    }
    .icon {
      width: 10px;
      fill: darken($grey, 50%);
    }
  }
}
</style>
