<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" @click="onclickClose" v-if="closeButton">{{ this.closeButton.text }}</span>
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
      default: 5,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: () => {
            this.close();
          },
        };
      },
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onclickClose() {
        this.close()
        this.closeButton.callback()
    }
  },
};
</script>

<style lang="scss" socped>
$font-size: 14px;
$font-color: #fff;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
.toast {
  font-size: $font-size;
  color: $font-color;
  height: $toast-height;
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
  >.close {
    padding-left: 16px;
  }
  >.line {
      border: 1px solid #666;
      margin-left:16px ;
      height: 100%;
  };
}


</style>