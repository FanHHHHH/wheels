<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{ result }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisable">
      <cascader-items :loading-item="loadingItem" :loadData="loadData" :selected="selected" :sourceItem="source" class="popover" :height="popoverHeight" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items.vue";
import clickOutside from "../click-outside.js";
export default {
  name: "BlueCascader",
  directives: {
    clickOutside,
  },
  components: {
    CascaderItems,
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popoverVisable: false,
      loadingItem: {},
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      function dfs(source, id) {
        if (!source) {
          return [];
        }
        let res = [];
        for (let i = 0; i < source.length; i++) {
          const item = source[i];
          if (item.id === id) {
            res = res.concat(item);
          } else {
            res = res.concat(dfs(item.children, id));
          }
        }
        return res;
      }
      this.$emit("update:selected", newSelected);
      const lastItem = newSelected[newSelected.length - 1];
      const updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.source));
        const toUpdate = dfs(copy, lastItem.id)[0];
        toUpdate.children = result;
        this.loadingItem = {};
        this.$emit("update:source", copy);
      };
      if (this.loadData && !lastItem.isLeaf) {
        this.loadData(lastItem, updateSource); //回调
        this.loadingItem = lastItem;
      }
    },
    open() {
      this.popoverVisable = true;
    },
    close() {
      console.log("关闭");
      this.popoverVisable = false;
    },
    toggle() {
      if (this.popoverVisable) {
        this.close();
      } else {
        this.open();
      }
    },
  },
  computed: {
    result() {
      return this.selected
        .map((val) => {
          return (val = val.name);
        })
        .join("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/var";
.cascader {
  position: relative;
  display: inline-block;
  > .trigger {
    background: #fff;
    display: inline-flex;
    align-items: center;
    min-width: 10em;
    height: $height;
    padding: 0 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    vertical-align: top;
  }
  > .popover-wrapper {
    @extend %box-shadow;
    position: absolute;
    background-color: white;
    margin-top: 8px;
    white-space: nowrap;
    z-index: 1;
  }
}
</style>
