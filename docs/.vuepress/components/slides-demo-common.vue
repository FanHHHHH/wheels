<template>
  <div class="wrapper">
    <b-slides :selected.sync="selected">
      <b-slides-item name="1">
        <div class="box1 slide-content-purple">1</div>
      </b-slides-item>
      <b-slides-item name="2">
        <div class="box2 slide-content-purple">2</div>
      </b-slides-item>
      <b-slides-item name="3">
        <div class="box3 slide-content-purple">3</div>
      </b-slides-item>
    </b-slides>
  </div>
</template>

<script>
import BSlides from '../../../src/slides/slides'
import BSlidesItem from '../../../src/slides/slides-item'
export default {
  components: {
    BSlides,
    BSlidesItem,
  },
  data() {
    return {
      selected: '2',
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
  .slide-content-purple {
    display: flex;
    background: #d3dce6;
    height: 200px;
    justify-content: center;
    align-items: center;
  }
}
</style>
