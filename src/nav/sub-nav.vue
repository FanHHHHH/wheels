<template>
  <div class="b-sub-nav">
    <span class="b-sub-nav-span" @click="onClick">
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
  data() {
    return {
      open: false,
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
.b-sub-nav {
  & .b-sub-nav-span {
    color: $light-color;
    cursor: pointer;
  }
  position: relative;
  &-span {
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
