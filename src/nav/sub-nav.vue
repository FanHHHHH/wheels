<template>
  <div class="b-sub-nav" v-click-outside="close">
    <span class="b-sub-nav-span" @click="onClick" :class="{ active }">
      <slot name="title"></slot>
      <span class="b-sub-nav-icon" :class="{ open, vertical: root.vertical }">
        <b-icon name="right"></b-icon>
      </span>
    </span>
    <template v-if="root.vertical">
      <transition name="x" @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
        <div v-show="open" class="b-sub-nav-popover" :class="{ vertical: root.vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div v-show="open" class="b-sub-nav-popover">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import clickOutside from '../click-outside.js'
import BIcon from '../Icon.vue'
export default {
  name: 'BlueSubNav',
  directives: { clickOutside },
  inject: ['root'],
  components: {
    BIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    enter(el, done) {
      const { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      setTimeout(() => {
        done()
      }, 501)
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      setTimeout(() => {
        done()
      }, 501)
    },
    afterLeave(el) {
      el.style.height = 'auto'
    },
    close() {
      if (!this.root.vertical) {
        this.open = false
      }
    },
    activePartent() {
      if (!this.$parent.active) {
        this.$parent.updateNamePath && this.$parent.updateNamePath()
      }
    },
    onClick() {
      this.open = !this.open
    },
    updateNamePath() {
      this.root.namePath.push(this.name)
      this.activePartent()
    },
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
.b-sub-nav {
  position: relative;
  &-icon {
    display: none;
  }
  &-span.active {
    &::after {
      z-index: 1;
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      border-bottom: 2px solid $blue;
    }
  }
  &-span {
    color: $light-color;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  }
  &-popover {
    min-width: 8em;
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    margin-top: 4px;
    font-size: $small-font-size;
    border-radius: $border-radius;
    box-shadow: 0 0 3px fade_out(#000000, 0.8);
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
      transition: all 500ms;
      overflow: hidden;
    }
  }
}
.b-sub-nav .b-sub-nav {
  & .b-sub-nav-popover {
    left: 100%;
    top: 0;
    margin-left: 4px;
  }
  .b-sub-nav-span {
    padding: 10px 10px 10px 20px;
    justify-content: space-between;
    svg {
      fill: $light-color;
    }
    &::after {
      display: none;
    }
  }
  .b-sub-nav-icon {
    display: inline-flex;
    margin-left: 1em;
    transition: 250ms;
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
