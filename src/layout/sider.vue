<template>
  <transition name="slide">
    <div class="b-sider" v-show="visable" ref="BSider">
      <slot></slot>
      <b-button class="closeButton" @click="hide">close</b-button>
    </div>
  </transition>
</template>

<script>
import BButton from '../button/button.vue'
export default {
  name: 'BlueSider',
  components: {
    BButton,
  },
  data() {
    return {
      visable: true,
      show: true,
    }
  },
  methods: {
    hide() {
      const { width } = this.$refs.BSider.getBoundingClientRect()
      this.$refs.BSider.style.marginLeft = `-${width}px`
      this.visable = false
    },
  },
}
</script>

<style lang="scss" scoped>
.b-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s;
}
</style>
