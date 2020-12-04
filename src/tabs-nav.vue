<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsNav",
  inject: ["eventBus"],
  // created() {
  // }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav {
  display: flex;
  justify-content: flex-start;
  border: 1px solid sandybrown;
  height: $tab-height;
  cursor: pointer;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>