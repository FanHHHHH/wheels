<template>
  <div class="b-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="b-scroll" ref="children">
      <slot></slot>
    </div>
    <div class="b-scroll-track" ref="track" v-show="barVisible">
      <div class="b-scroll-slide" ref="slide" @mousedown="onMousedown" @selectstart="onSelectstart">
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
      onmousemove: false,
      prevY: 0,
      slideTranslateY: 0,
      scrollTranslateY: 0,
      slideHeight: 0,
    }
  },
  mounted() {
    this.childrenHeight = this.$refs.children.getBoundingClientRect().height
    this.parentHeight = this.$refs.parent.getBoundingClientRect().height
    const { paddingBottom, paddingTop } = window.getComputedStyle(this.$refs.children)
    const { borderBottomWidth, borderTopWidth } = window.getComputedStyle(this.$refs.parent)
    const height = this.childrenHeight - this.parentHeight + parseInt(borderBottomWidth) + parseInt(borderTopWidth) + parseInt(paddingBottom) + parseInt(paddingTop)
    this.$refs.parent.addEventListener('wheel', (e) => {
      e.preventDefault()
      this.scrollTranslateY -= e.deltaY
      if (this.scrollTranslateY > 0) {
        this.scrollTranslateY = 0
      }
      if (this.scrollTranslateY < -height) {
        this.scrollTranslateY = -height
      }
      const shiftDistance = this.getShiftDistance(this.scrollTranslateY, this.childrenHeight)
      this.$refs.slide.style.transform = `translateY(${-shiftDistance}px)`
      this.$refs.children.style.transform = `translateY(${this.scrollTranslateY}px)`
      this.slideTranslateY = -shiftDistance
    })
    document.addEventListener('mousemove', this.move)
    document.addEventListener('mouseup', this.onMouseup)
  },
  methods: {
    updateSlideHeight(childrenHeight, parentHeight) {
      this.$nextTick(() => {
        const { height: trackHeight } = this.$refs.track.getBoundingClientRect()
        this.slideHeight = (trackHeight * parentHeight) / childrenHeight
        this.$refs.slide.style.height = this.slideHeight + 'px'
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
    move(e) {
      if (this.onmousemove) {
        const slide = document.querySelector('.b-scroll-slide')
        const deltaY = e.clientY - this.prevY
        this.slideTranslateY = this.slideTranslateY + deltaY
        if (this.slideTranslateY < 0) {
          this.slideTranslateY = 0
        }
        if (this.slideTranslateY > this.parentHeight - this.slideHeight) {
          this.slideTranslateY = this.parentHeight - this.slideHeight
        }
        slide.style.transform = `translateY(${this.slideTranslateY}px)`
        this.prevY = e.clientY
        this.scrollTranslateY = -this.slideTranslateY
        this.scrollTranslateY = -(this.slideTranslateY * this.childrenHeight) / this.parentHeight
        this.$refs.children.style.transform = `translateY(${this.scrollTranslateY}px)`
      }
    },
    onMousedown(e) {
      this.prevY = e.clientY
      this.onmousemove = true
    },
    onMouseup() {
      this.onmousemove = false
    },
    onSelectstart(e) {
      e.preventDefault()
    },
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.move)
    document.removeEventListener('mouseup', this.onMouseup)
  },
}
</script>

<style lang="scss" scoped>
.b-scroll {
  //   transition: transform 0.05s ease;
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
    // transition: transform 0.05s ease;
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
