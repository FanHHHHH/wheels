<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line"></div>
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
  height: $tab-height;
  cursor: pointer;
  position: relative;
  & .actions-wrapper {
    margin-left: auto;
  };
  & .line {
    position: absolute;
    border-bottom:1px solid blue;
    width: 20px;
    top: $tab-height;
  }
}
</style>