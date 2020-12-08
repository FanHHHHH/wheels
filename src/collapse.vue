<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "GuluCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus,
      };
    }
  },
  mounted() {
    if (this.selected) {
      this.eventBus.$emit("update:selected", this.selected);
      this.eventBus.$on("update:selected", (name) => {
        this.$emit("update:selected", name);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$grey: #ddd;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
