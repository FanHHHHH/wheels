<template>
  <div class="b-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlueLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'BlueSider') {
        this.layoutClass.hasSider = true
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.b-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  // border: 1px solid seagreen;
  overflow: hidden;
  &.hasSider {
    display: flex;
    flex-direction: row;
  }
}
</style>
