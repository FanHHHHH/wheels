<template>
  <div class="b-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div class="b-slides-window" ref="window">
      <div class="b-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="b-slides-dots">
      <span @click="select(selectedIndex - 1)"><b-icon name="left"></b-icon></span>
      <span :data-index="n - 1" v-for="n in childrenLength" :key="n" :class="{ active: selectedIndex === n - 1 }" @click="select(n - 1)">
        {{ n }}
      </span>
      <span @click="select(selectedIndex + 1)"><b-icon name="right"></b-icon></span>
    </div>
  </div>
</template>

<script>
import BIcon from '../Icon.vue'
export default {
  components: { BIcon },
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    autoPlayDelay: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined,
    }
  },
  mounted() {
    this.updateChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.items.length
  },
  updated() {
    this.updateChildren()
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected())
    },
    names() {
      return this.items.map((vm) => vm.name)
    },
    items() {
      return this.$children.filter((vm) => vm.$options.name === 'BlueSlidesItem')
    },
  },
  methods: {
    select(newIndex) {
      if (newIndex === -1) {
        newIndex = this.names.length - 1
      }
      if (newIndex === this.names.length) {
        newIndex = 0
      }
      this.lastSelectedIndex = this.names.indexOf(this.selected)
      this.$emit('update:selected', this.names[newIndex])
    },
    updateChildren() {
      let selected = this.getSelected()
      this.items.forEach((vm) => {
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
      const children = this.items
      return this.selected || children[0].name
    },
    playAutomatically() {
      if (this.timerId) return
      const run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, this.autoPlayDelay)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay)
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
    onTouchStart(e) {
      this.pause(this.timerId)
      this.isTouching = true

      //只有一根手指滑动的时候才能滑动
      if (e.touches.length > 1) return
      this.startTouch = e.touches[0]
    },
    onTouchMove() {},
    onTouchEnd(e) {
      const { clientX: x1, clientY: y1 } = this.startTouch
      const { clientX: x2, clientY: y2 } = e.changedTouches[0]
      const rate = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / Math.abs(y2 - y1)
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      this.playAutomatically()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
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
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: inline-flex;
      flex-shrink: 0;
      flex-wrap: nowrap;
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
