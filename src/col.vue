<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: `${this.gutter / 2}px`,
      };
    },
    colClass() {
      let { span, offset } = this;
      return [`col-${span}`, offset && `offset-${offset}`];
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;

  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>