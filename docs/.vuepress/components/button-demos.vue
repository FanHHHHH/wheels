<template>
  <div class="wrapper">
    <div>
      <b-button>默认按钮</b-button>
      <b-button icon="settings">settings</b-button>
      <b-button icon="settings" icon-position="right">settings</b-button>
      <b-button loading>loading</b-button>
      <b-button disabled>disabled</b-button>
    </div>
    <b-button-group>
      <b-button>默认按钮</b-button>
      <b-button>默认按钮</b-button>
    </b-button-group>
  </div>
</template>

<script>
import Button from '../../../src/button/button'
import ButtonGroup from '../../../src/button/button-group'
export default {
  components: {
    'b-button': Button,
    'b-button-group': ButtonGroup,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>
