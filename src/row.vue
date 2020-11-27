<template>
  <div class="row" :style="rowStyle" :class="colAlign">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'center'].includes(val)
       }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px",
      };
    },
    colAlign() {
      let {align} = this
      return [align && 'align-' + align]
    }
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
