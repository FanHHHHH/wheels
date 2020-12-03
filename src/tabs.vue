<template>
    <div class="tabs">

        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'GuluTabs',
  props: {
      selected: {
          type: String,
          required: true
      },
      direction: {
          type: String,
          defaut: 'horizontal',
          validator(val) {
              return ['horizontal', 'vertical'].indexOf(val) >= 0
          }
      }
  },
  created() {
    //   this.$emit('update:selected', 'xxx')
  }
}
</script>

<style lang="scss" scoped>

</style>