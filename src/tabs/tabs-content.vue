<template>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BlueTabsContent",
  inject: ["eventBus"],
  created() {
  },
};
</script>

<style lang="scss" scoped>
</style>