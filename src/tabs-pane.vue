<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsPane",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.eventBus.$on('update:selected', (val) => {
      console.log('pane组件变为'+ val);
    })
  },
};
</script>

<style lang="scss" scoped>
</style>