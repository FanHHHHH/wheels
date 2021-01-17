<template>
  <svg class="b-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'BlueIcon',
  props: {
    name: {},
  },
}
</script>

<style>
.b-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
