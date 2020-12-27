<template>
  <div class="b-sub-nav">
    <span class="b-sub-nav-span" @click="onClick" :class="{ active }">
      <slot name="title"></slot>
    </span>
    <div v-show="open" class="b-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueSubNav',
  inject: ['root'],
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
    activePartent() {
      if (!this.$parent.active) {
        this.$parent.updateNamePath && this.$parent.updateNamePath()
      }
    },
    onClick() {
      this.open = !this.open
      this.activePartent()
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
  &-span.active {
    &::after {
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
    display: block;
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
  }
}
.b-sub-nav .b-sub-nav {
  & .b-sub-nav-popover {
    left: 100%;
    top: 0;
    margin-left: 4px;
  }
}
</style>
