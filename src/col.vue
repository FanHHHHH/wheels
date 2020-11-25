<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
      span: {
        type: [Number, String]
      }
    }
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background: #aaa;
  width: 50%;
  border: 1px solid #000;
  
  $prefix: col-;
  @for $n from 1 through 24 {
    &.#{$prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>