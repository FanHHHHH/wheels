<template>
  <div class="b-nav">
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
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [],
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
      console.log(this.items);
      this.items.forEach((vm) => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on('add:selected', (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              const copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            }
          } else {
            this.$emit('update:selected', [name])
          }
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
@import "../styles/var";
.b-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  cursor: default;
}
</style>
