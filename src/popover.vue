<template>
  <div class="popover" @click.stop="onClick">
    <div v-if="visable" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
        console.log("document隐藏");
        this.visable = false;
        document.removeEventListener("click", eventHandler);
      };
      if (this.visable) {
        setTimeout(() => {
          document.addEventListener("click", eventHandler);
        });
      } else {
          console.log("vm隐藏");
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.popover {
  border: 1px solid salmon;
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid aquamarine;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>