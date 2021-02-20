<template>
  <div class="b-sticky-wrapper" ref="sticky" :style="{ height }">
    <div class="b-sticky" :class="classes" :style="{ left, width, top }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueSticky',
  props: {
    distance: {
      type: Number,
      defult: 0,
    },
  },
  data() {
    return {
      sticky: false,
      height: null,
      left: null,
      width: null,
      top: null,
    }
  },
  mounted() {
    const top = this.offsetTop()
    let id = null
    this.windowScrollHandler = () => {
      const x = () => {
        if (top <= window.scrollY + this.distance) {
          const { height, left, width } = this.$refs.sticky.getBoundingClientRect()
          this.height = height + 'px'
          this.left = left + 'px'
          this.width = width + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        } else {
          this.height = null
          this.left = null
          this.width = null
          this.top = null
          this.sticky = false
        }
      }
      if (id) {
        window.clearTimeout(id)
      }
      id = setTimeout(x, 15)
    }
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  methods: {
    offsetTop() {
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
  }
}
</style>
