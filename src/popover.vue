<template>
  <div class="popover" @click.stop="onClick">
    <div v-if="visable" ref="contentWrapper" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visable: false,
    };
  },
  methods: {
    onClick() {
      this.visable = !this.visable;

      let eventHandler = () => {
        this.visable = false;
        document.removeEventListener("click", eventHandler);
      };
      if (this.visable) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let { width, height, top, left, } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.screenX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
          document.addEventListener("click", eventHandler);
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang='scss' scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid aquamarine;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>