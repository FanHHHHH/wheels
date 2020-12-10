<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">settings</g-button>
    <g-button loading>loading</g-button>
    <g-button disabled>disabled</g-button>

    <pre>
      <code>
        {{code}}
      </code>
    </pre>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button,
  },
  data() {
    return {
      code: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">settings</g-button>
        <g-button loading>loading</g-button>
        <g-button disabled>disabled</g-button>
        `,
    };
  },
};
</script>

<style lang="scss" scoped></style>
