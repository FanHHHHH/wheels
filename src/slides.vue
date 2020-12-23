<template>
  <div class="b-slides">
    <div class="b-slides-window" ref="window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span v-for="n in childrenLength" :key="n" :class="{ active: selectedIndex === n - 1 }" @click="select(n - 1)">
        {{ n - 1 }}
      </span>
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
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
    }
  },
  mounted() {
    this.updateChildren()
    // this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected())
    },
    names() {
      return this.$children.map((vm) => vm.name)
    },
  },
  methods: {
    select(id) {
      this.lastSelectedIndex = this.names.indexOf(this.selected)
      this.$emit('update:selected', this.names[id])
    },
    updateChildren() {
      let selected = this.getSelected()
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    },
    getSelected() {
      const children = this.$children
      return this.selected || children[0].name
    },
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected())
      const run = () => {
        if (index === this.names.length) {
          index = 0
        }
        this.select(index + 1)
        index++
        setTimeout(run, 5000)
      }
      setTimeout(run)
    },
  },
}
</script>

<style lang="scss" scoped>
.b-slides {
  &-window {
    border: 1px solid salmon;
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
