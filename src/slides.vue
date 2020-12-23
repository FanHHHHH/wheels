<template>
  <div class="b-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
      timerId: undefined,
    }
  },
  mounted() {
    this.updateChildren()
    this.playAutomatically()
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
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
          if (this.lastSelectedIndex === this.names.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length - 1) {
            reverse = true
          }
        }
        vm.reverse = reverse
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
      if (this.timerId) return
      const run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        this.timerId = setTimeout(run, 2000)
      }
      this.timerId = setTimeout(run, 2000)
    },
    pause(id) {
      window.clearTimeout(id)
      this.timerId = undefined
    },
    onMouseEnter() {
      this.pause(this.timerId)
    },
    onMouseLeave() {
      this.playAutomatically()
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'var';
.b-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;

    > span {
      background: $grey;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      margin: 0 8px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: #fff;
        cursor: default;
      }
    }
  }
}
</style>
