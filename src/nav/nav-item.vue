<template>
  <div class="b-nav-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlueNavItem',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    },
  },
  created() {
    this.root.addItem(this)
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
.b-nav-item {
  padding: 10px 20px;
  &.selected {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      border-bottom: 2px solid blue;
    }
  }
}
.b-sub-nav .b-nav-item {
  &.selected {
    &::after {
      display: none;
    }
    background: $grey;
    color: $color;
  }
}
</style>
