<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      defaut: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  created() {
    this.$emit("update:selected", "xxx");
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "GuluTabsNav") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "GuluTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
            console.log(item.$el);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
// .tabs {
// }
</style>