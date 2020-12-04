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
    this.eventBus.$on("update:selected", (val, vm) => {
      this.active = val === this.name
      console.log(vm.$el);
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name, this);
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
$blue: blue;
.tabs-item {
  flex-shrink: 0;
  padding:0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>