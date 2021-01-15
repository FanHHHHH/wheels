<template>
  <div class="b-toast-wrapper" :class="getPosition">
    <div class="toast" ref="toastRef">
      <div class="message">
        <slot v-if="!enableHTML"></slot>
        <div v-else v-html="this.$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" @click="onclickClose" v-if="closeButton">{{ this.closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(val) {
        return val === false || typeof val === 'number'
      },
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined,
        }
      },
    },
    enableHTML: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1
      },
    },
  },
  mounted() {
    this.updateLineStyle()
    this.excuteAutoClose()
  },
  methods: {
    updateLineStyle() {
      this.$nextTick(() => {
        if (!this.$refs.line) return
        this.$refs.line.style.height = `${this.$refs.toastRef.getBoundingClientRect().height}px`
      }) // trickey
    },
    excuteAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    log() {
      console.log('测试给回调函数传组件的实例')
    },
    onclickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
  },
  computed: {
    getPosition() {
      return { [`position-${this.position}`]: true }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/var';
@keyframes slide-up {
  0% {
    opacity: 0%;
    transform: translateY(100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0%;
    transform: translateY(-100%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes center {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.b-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: center $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size;
  color: $font-color;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px;
  padding: 0 16px;
  border-radius: 4px;

  & > .message {
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
