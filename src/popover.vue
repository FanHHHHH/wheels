<template>
  <div class="popover" ref="popover">
    <div v-if="visable" ref="contentWrapper" class="content-wrapper" :class="{ [`position-${this.position}`]: position }">
      <slot name="content" :close="close"> </slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      visable: false,
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  destroyed() {
    this.$refs.popover.removeEventListener("mouseenter", this.open);
    this.$refs.popover.removeEventListener("mouseleave", this.close);
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const { contentWrapper, triggerWrapper } = this.$refs;
      const { height: height1 } = contentWrapper.getBoundingClientRect();
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();

      const positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + (height - height1) / 2 + window.scrollY,
        },
        right: {
          left: left + width + window.scrollX,
          top: top + (height - height1) / 2 + window.scrollY,
        },
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover.contains(e.target) || this.$refs.popover === e.target)) {
        return;
      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper.contains(e.target) || this.$refs.contentWrapper === e.target)) {
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
};
</script>

<style lang="scss" scoped>
$border-color: #999;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
  background: white;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
      border-bottom: none;
    }
    &::before {
      border-top-color: $border-color;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    left: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      left: 100%;
      transform: translateY(-50%);
      top: 50%;
      border-right: none;
    }
    &::before {
      border-left-color: $border-color;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      right: 100%;
      transform: translateY(-50%);
      top: 50%;
      border-left: none;
    }
    &::before {
      border-right-color: $border-color;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
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
}
</style>
