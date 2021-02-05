<template>
  <div class="b-sticky-wrapper" ref="sticky">
    <div class="b-sticky" :class="classes">
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
    }
  },
  mounted() {
    const top = this.top()
    window.addEventListener('scroll', () => {
      if (top <= window.scrollY) {
        const height = this.height()
        this.$refs.sticky.style.height = height + 'px'
        this.sticky = true
      } else {
        this.sticky = false
      }
    })
  },
  methods: {
    top() {
      const { top } = this.$refs.sticky.getBoundingClientRect()
      const scrollY = window.scrollY
      return top + scrollY
    },
    height() {
      const { height } = this.$refs.sticky.getBoundingClientRect()
      return height
    },
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.b-sticky {
  &.sticky {
    position: fixed;
    top: 0;
    // left: 0;
    width: 100%;
  }
}
</style>
