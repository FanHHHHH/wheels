<template>
  <div class="wrapper">
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{'error': error}">
      <template v-if="error">
          <g-icon name="error" class="icon-error"></g-icon>   
          <div class="error-message">{{error}}</div>
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
            tyep: String
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
    $height: 32px;
    $width: 128px;
    $border-color: #666; 
    $border-color-hover: #999;
    $border-radius: 4px;
    $font-size: 14px;
    $border-shadow-color: rgba(0, 0, 0, 0.5);
    $disabled-color: #aaa;
    $readonly-color: #aaa;
    $red: #F1435D;
    .wrapper {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: $font-size;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        > input{
            height: $height; width: $width; border: 1px solid $border-color;
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