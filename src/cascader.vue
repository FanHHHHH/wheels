<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisable = !popoverVisable">
      {{result}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisable">
      <cascader-items :selectkd="selected" :sourceItem="source" 
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
  },
  computed: {
    result() {
      console.log(this.selected);
      return this.selected.map( val => {
        return val.name
      }).join('/')
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
  }
}
</style>
