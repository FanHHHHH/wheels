<template>
  <div></div>
</template>

<script>
export default {
  name: 'BlueTableColumn',
  props: {
    text: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped></style>
