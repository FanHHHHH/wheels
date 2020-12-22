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
    autoPlay: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.updateChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      const children = this.$children
      let selected = this.selected || children[0]
      this.$children.forEach((vm) => {
        vm.selected = selected
      })
    },
    playAutomatically() {},
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
