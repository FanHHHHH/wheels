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
.b-sub-nav {
  position: relative;
  &-span {
    padding: 10px 20px;
    display: block;
  }
  &-popover {
    position: absolute;
    border: 1px solid seagreen;
    top: 100%;
    left: 0;
    white-space: nowrap;
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
