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
    this.playAutomatically()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.selected = selected
      })
    },
    getSelected() {
      const children = this.$children
      return this.selected || children[0].name
    },
    playAutomatically() {
      const names = this.$children.map((item) => item.name)
      let index = names.indexOf(this.getSelected())
      setInterval(() => {
        if (index === names.length) {
          index = 0
        }
        this.$emit('update:selected', names[index + 1])
        index++
      }, 2000)
    },
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
