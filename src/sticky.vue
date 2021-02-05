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
    const { top, height } = this.topAndHeight()
    this.$refs.sticky.style.height = height + 'px'
    window.addEventListener('scroll', () => {
      if (top <= window.scrollY) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    })
  },
  methods: {
    topAndHeight() {
      const { top, height } = this.$refs.sticky.getBoundingClientRect()
      const scrollY = window.scrollY
      return { top: top + scrollY, height }
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
