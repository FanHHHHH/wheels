<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="this.$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" @click="onclickClose" v-if="closeButton">{{
      this.closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "GToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHTML: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.updateLineStyle();
    this.excuteAutoClose();
  },
  methods: {
    updateLineStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      }); // trickey
    },
    excuteAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    log() {
      console.log("测试给回调函数传组件的实例");
    },
    onclickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },
};
</script>

<style lang="scss" socped>
$font-size: 14px;
$font-color: #fff;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
.toast {
  font-size: $font-size;
  color: $font-color;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 3px 0px;
  padding: 0 16px;
  border-radius: 4px;
  &> .message {
      padding: 4px 0;
  }
  > .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  > .line {
    border: 1px solid #666;
    margin-left: 16px;
  }
}
</style>