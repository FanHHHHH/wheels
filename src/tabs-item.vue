<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (val) => {
      console.log('item选中组件变为：' + val);
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>