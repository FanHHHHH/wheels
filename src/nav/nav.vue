<template>
  <div class="b-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlueNav',
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
              console.log(copy)
              this.$emit('update:selected', copy)
            }
          } else {
            this.$emit('update:selected', [name])
          }
        })
      })
    },
  },
  computed: {
    items() {
      return this.$children.filter((vm) => vm.$options.name === 'BlueNavItem')
    },
  },
}
</script>

<style lang="scss" scoped>
.b-nav {
  display: flex;
  border: 1px solid salmon;
}
</style>
