<template>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsContent",
  inject: ["eventBus"],
  created() {
  },
};
</script>

<style lang="scss" scoped>
</style>