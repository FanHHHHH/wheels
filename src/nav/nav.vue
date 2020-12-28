<template>
  <div class="b-nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlueNav',
  provide() {
    return {
      root: this,
    }
  },
  props: {
    selected: {
      type: String,
      default: '',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [],
      namePath: [],
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      this.items.forEach((vm) => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name)
        })
      })
    },
    addItem(vm) {
      this.items.push(vm)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';
.b-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  cursor: default;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid $grey;
  }
}
</style>
