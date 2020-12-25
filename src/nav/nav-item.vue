<template>
  <div class="b-nav-item" :class="{ selected }" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlueNavItem',
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
}
</script>

<style lang="scss" scoped>
.b-nav-item {
  padding: 10px 20px;
  &.selected {
    background: red;
  }
}
</style>
