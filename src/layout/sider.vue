<template>
  <transition name="slide">
    <div class="sider" v-show="visable">
      <slot></slot>
      <button class="closeButton" @click="hide">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BlueSider",
  data() {
    return {
      visable: true,
      show: true,
    };
  },
  methods: {
    hide() {
      this.visable = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to { 
  margin-left: -200px;
}
</style>