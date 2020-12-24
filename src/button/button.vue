<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../Icon.vue'
export default {
  name: 'GuluButton',
  components: {
    'g-icon': Icon,
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        return !(val !== 'left' && val !== 'right')
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/var';

.g-button {
  font-size: $font-size;
  min-height: $button-height;
  max-width: 8em;
  padding: 0 0.9em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
    margin-right: 0.3em;
  }
}
</style>
