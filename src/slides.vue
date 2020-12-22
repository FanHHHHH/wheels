<template>
  <div class="b-slides">
    <div class="b-slides-window" ref="window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
    },
  },
  mounted() {
    const children = this.$children
    if (!this.selected) {
      this.selected = children[0].name
    }
    this.$children.forEach((vm) => {
      vm.selected = this.selected
    })
  },
  updated() {
    console.log(this.selected)
    this.$children.forEach((vm) => {
      vm.selected = this.selected
    })
  },
}
</script>

<style lang="scss" scoped>
.b-slides {
  display: inline-block;
  &-window {
    border: 1px solid salmon;
    // overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
}
</style>
