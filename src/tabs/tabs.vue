<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'BlueTabs',
  props: {
    selected: {
      type: String,
    },
    // direction: {
    //   type: String,
    //   defaut: 'horizontal',
    //   validator(val) {
    //     return ['horizontal', 'vertical'].indexOf(val) >= 0
    //   },
    // },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  created() {
    this.$emit('update:selected', 'xxx')
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn('tabs里面的子组件应该是tabs-nav和tabs-content,但你没有传入子组件')
      }
    },
    setSelected() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'BlueTabsNav') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'BlueTabsItem' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
  },
  mounted() {
    this.checkChildren()
    this.setSelected()
  },
}
</script>

<style lang="scss" scoped></style>
