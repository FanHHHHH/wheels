<template>
  <div class="cascaderItem">
    <div>{{ sourceItem.name }}</div>
    <div class="itemWrapper" v-if="sourceItem.children">
      <cascader-item v-for="item in sourceItem.children" :key="item.name" :sourceItem="item"></cascader-item>
    </div>
  </div>
</template>

<script>
 const component = {
  name: "cascaderItem",
  components: {
    cascaderItem: component
  },
  props: {
    sourceItem: {
      type: Object,
    },
  },
};
export default component
</script>

<style lang="scss" scoped>
.cascaderItem {
  border: 1px solid salmon;
  margin: 10px;
}
</style>
