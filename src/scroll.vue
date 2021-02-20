<template>
  <div class="b-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="b-scroll" ref="children">
      <slot></slot>
    </div>
    <div class="b-scroll-track" ref="track" v-show="barVisible">
      <div class="b-scroll-slide" ref="slide">
        <div class="b-scroll-slide-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueScroll',
  data() {
    return {
      barVisible: false,
      childrenHeight: 0,
      parentHeight: 0,
    }
  },
  mounted() {
    let y = 0
    this.childrenHeight = this.$refs.children.getBoundingClientRect().height
    this.parentHeight = this.$refs.parent.getBoundingClientRect().height
    const { paddingBottom, paddingTop } = window.getComputedStyle(this.$refs.children)
    const { borderBottomWidth, borderTopWidth } = window.getComputedStyle(this.$refs.parent)
    const height = this.childrenHeight - this.parentHeight + parseInt(borderBottomWidth) + parseInt(borderTopWidth) + parseInt(paddingBottom) + parseInt(paddingTop)
    this.$refs.parent.addEventListener('wheel', (e) => {
      e.preventDefault()
      y -= e.deltaY
      if (y > 0) {
        y = 0
      }
      if (y < -height) {
        y = -height
      }
      const shiftDistance = this.getShiftDistance(y, this.childrenHeight)
      this.$refs.slide.style.transform = `translateY(${-shiftDistance}px)`
      this.$refs.children.style.transform = `translateY(${y}px)`
    })
  },
  methods: {
    updateSlideHeight(childrenHeight, parentHeight) {
      this.$nextTick(() => {
        const { height: trackHeight } = this.$refs.track.getBoundingClientRect()
        const slideHeight = (trackHeight * parentHeight) / childrenHeight
        this.$refs.slide.style.height = slideHeight + 'px'
      })
    },
    getShiftDistance(y, childrenHeight) {
      const { height: trackHeight } = this.$refs.track.getBoundingClientRect()
      return (y * trackHeight) / childrenHeight
    },
    onMouseEnter() {
      this.barVisible = true
      this.updateSlideHeight(this.childrenHeight, this.parentHeight)
    },
    onMouseLeave() {
      this.barVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.b-scroll {
  transition: transform 0.15s ease;
  &-wrapper {
    position: relative;
    width: 200px;
    height: 400px;
    border: 1px solid red;
    overflow: hidden;
  }
  &-track {
    opacity: 80%;
    position: absolute;
    top: 0;
    right: 0;
    width: 14px;
    height: 100%;
    border: 1px solid #e8e7e8;
    border-top: none;
    border-bottom: none;
    background: #fafafa;
  }
  &-slide {
    position: absolute;
    left: 50%;
    margin-left: -4px;
    transition: transform 0.15s ease;
    width: 8px;
    padding: 4px 0;
    &-inner {
      border-radius: 4px;
      background: #c2c2c2;
      height: 100%;
      &:hover {
        background: #7d7d7d;
      }
    }
  }
}
</style>
