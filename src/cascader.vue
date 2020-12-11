<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisable = !popoverVisable">
      <slot></slot>
      <!-- <div v-for="item in source" :key="item.name">
        <cascader-item :sourceItem="item"></cascader-item>
      </div> -->
    </div>
    <div class="popover" v-if="popoverVisable">
      <div class="level1">
        <div class="item" v-for="item1 in source" :key="item1.name" @click="level1Selected = item1.children">{{ item1.name }}</div>
      </div>
      <div class="level2">
        <div class="item" v-for="item2 in level2Item" :key="item2.name" @click="level2Selected = item2.children">{{ item2.name }}</div>
      </div>
      <div class="level3">
        <div class="item" v-for="item3 in level3Item" :key="item3.name">{{ item3.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascader-item.vue";
export default {
  name: "GuluCascader",
  components: {
    CascaderItem,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisable: false,
      level1Selected: null,
      level2Selected: null,
    };
  },
  computed: {
    level2Item() {
      if (this.level1Selected) {
        return this.level1Selected;
      }
      return null;
    },
    level3Item() {
      if (this.level2Selected) {
        return this.level2Selected;
      }
      return null;
    },
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
  > .popover {
    display: flex;
    flex-direction: row;
    border: 1px solid salmon;
    
    > .level1 {
      border: 1px solid forestgreen;
      width: 100px;
      height: 100px;
    }
    > .level2 {
      border: 1px solid salmon;
      width: 100px;
      height: 100px;
    }
    > .level3 {
      border: 1px solid slategrey;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
