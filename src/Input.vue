<template>
  <div class="wrapper">
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{'error': error}" 
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      >
      <template v-if="error">
          <g-icon name="error" class="icon-error"></g-icon>   
          <span class="error-message">{{error}}</span>
      </template>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name: 'GuluInput',
    components: {
        'g-icon': Icon
    },
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            defaule: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'var';
    .wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: $font-size;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        > input{
            height: $input-height; width: $width; border: 1px solid $border-color;
            border-radius: $border-radius; padding: 0 8px; font-size: inherit;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $border-shadow-color;
                outline: none; }
            &[disabled], &[readonly]{
                border-color: $disabled-color;
                color: $disabled-color;
                cursor: not-allowed;
            }
            &.error{
                border-color: $red;
            }
        }
        > .icon-error{
            fill: $red;
        }
        > .error-message{
            color: $red;
        }
    }
</style>