<template></template>

<script>
import Vue from "vue";

if (Vue.prototype.$toast === undefined) { // 侵入性太强
  Vue.prototype.$toast = function () {
    console.log("toast组件");
  };
}

export default {
  name: "GToast",
};
</script>

<style lang="less" socped>
</style>