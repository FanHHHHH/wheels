<template>
  <div class="tabs-pane" :class="activeClass" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BlueTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (val) => {
      this.active = val === this.name
    })
  },
  computed: {
    activeClass() {
      return {
        active: this.active,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    padding: 10px;
  }
}
</style>
