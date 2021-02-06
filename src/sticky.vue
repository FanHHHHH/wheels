<template>
  <div class="b-sticky-wrapper" ref="sticky" :style="{ height }">
    <div class="b-sticky" :class="classes" :style="{ left, width }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueSticky',
  data() {
    return {
      sticky: false,
      height: undefined,
      left: undefined,
      width: undefined,
      timerId: null,
    }
  },
  mounted() {
    const top = this.top()
    this.windowScrollHandler = () => {
      const x = () => {
        if (top <= window.scrollY) {
          const { height, left, width } = this.$refs.sticky.getBoundingClientRect()
          this.height = height + 'px'
          this.left = left + 'px'
          this.width = width + 'px'

          this.sticky = true
        } else {
          this.sticky = false
        }
      }
      if (this.timerId) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = setTimeout(x, 10)
    }
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    top() {
      const { top } = this.$refs.sticky.getBoundingClientRect()
      const scrollY = window.scrollY
      return top + scrollY
    },
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler)
  },
}
</script>

<style lang="scss" scoped>
.b-sticky {
  &.sticky {
    position: fixed;
    top: 0;
  }
}
</style>
