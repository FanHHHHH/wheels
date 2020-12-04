<template>
  <div class="tabs-item" @click="xxx" :class="activeClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsItem",
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (val) => {
      this.active = val === this.name
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
  computed: {
    activeClass() {
      return {
        active: this.active
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding:0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    background: red;
  }
}
</style>