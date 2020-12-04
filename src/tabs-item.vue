<template>
  <div class="tabs-item" @click="onClick" :class="activeClass">
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
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      this.eventBus.$emit("update:selected", this.name, this);
    },
    
  },
  computed: {
    activeClass() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding:0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    cursor: not-allowed;
    color: $disabled-color;
  }
}
</style>