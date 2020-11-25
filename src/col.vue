<template>
  <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft: `${gutter/2}px`, paddingRight: `${gutter/2}px` }"
  >
    <div style="border: 1px solid #555; height: 100px;">
        <slot></slot>
    </div>
    
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
    gutter: {
      type: [Number, String],
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;
//   background: #000;

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