<template>
  <div class="popover" @click="onClick" ref="popover">
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
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.screenX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper.contains(e.target) ||
          this.$refs.contentWrapper === e.target)
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visable = true;
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visable = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visable) {
          this.close();
        } else {
          this.open();
        }
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