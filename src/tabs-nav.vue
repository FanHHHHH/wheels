<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
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
  mounted() {
    this.eventBus.$on("update:selected", (val, vm) => {
      const { width, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-nav {
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  cursor: pointer;
  position: relative;
  & .actions-wrapper {
    margin-left: auto;
  }
  & .line {
    position: absolute;
    border-bottom: 1px solid $blue;
    bottom: 0;
    transition: all 350ms;
  }
}
</style>