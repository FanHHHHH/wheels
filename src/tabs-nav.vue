<template>
    <div class="tabs-nav">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
export default {
  name: 'GuluTabsNav',
  inject: ['eventBus'],
  // created() {
  // }
}
</script>

<style lang="scss" scoped>

</style>