<template>
  <div class="wrapper">
    <span class="b-icon1">
      <b-icon name="settings"></b-icon>
      seetings
    </span>
    <span class="b-icon1">
      <b-icon name="left"></b-icon>
      left
    </span>
    <span class="b-icon1">
      <b-icon name="right"></b-icon>
      right
    </span>
    <span class="b-icon1">
      <b-icon name="up"></b-icon>
      up
    </span>
    <span class="b-icon1">
      <b-icon name="down"></b-icon>
      down
    </span>
    <span class="b-icon1">
      <b-icon name="asc"></b-icon>
      asc
    </span>
    <span class="b-icon1">
      <b-icon name="desc"></b-icon>
      desc
    </span>
    <span class="b-icon1">
      <b-icon name="dots"></b-icon>
      dots
    </span>
    <span class="b-icon1">
      <b-icon name="info"></b-icon>
      info
    </span>
    <span class="b-icon1">
      <b-icon name="error"></b-icon>
      error
    </span>
    <span class="b-icon1">
      <b-icon name="loading"></b-icon>
      loading
    </span>
    <span class="b-icon1">
      <b-icon name="download"></b-icon>
      download
    </span>
    <span class="b-icon1">
      <b-icon name="thumbs-up"></b-icon>
      thumbs-up
    </span>
  </div>
</template>

<script>
import BButton from '../../../src/button/button'
import BIcon from '../../../src/Icon'
export default {
  components: {
    BButton,
    BIcon,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
  .b-icon1 {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // padding: 1em 0.5em;
    background-color: darken(#f9fafc, 5%);
    border-radius: 4px;
    min-width: 75px;
    min-height: 75px;
    margin-top: 10px;
  }
}
</style>
