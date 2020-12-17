<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisable = !popoverVisable">
      {{ result || "&nbsp;" }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisable">
      <cascader-items :selected="selected" :sourceItem="source" class="popover" :height="popoverHeight" @update:selected="onUpdateSelected"></cascader-items>
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
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      function dfs(source, id) {
        if (!source) {
          return [];
        }
        let res = []
        for (let i = 0; i < source.length; i++) {
          const item = source[i]
          if (item.id === id) {
            res = res.concat(item)
          } else {
            res = res.concat(dfs(item.children, id))
          }
        }
        return res;
      }
      this.$emit("update:selected", newSelected);
      const lastItem = newSelected[newSelected.length - 1];
      const updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        console.log(dfs(copy, lastItem.id)[0]);
        const toUpdate = dfs(copy, lastItem.id)[0]
        toUpdate.children = result
        this.$emit('update:source', copy)
      };
      this.loadData(lastItem, updateSource); //回调
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
  updated() {
    console.log('跟新了');
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  > .trigger {
    display: inline-flex;
    align-items: center;
    min-width: 10em;
    height: $height;
    padding: 0 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  > .popover-wrapper {
    @extend %box-shadow;
    position: absolute;
    background-color: white;
    margin-top: 8px;
  }
}
</style>
