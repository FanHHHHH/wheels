<template>
  <div class="wrapper">
    <b-row class="row-bg" :gutter="10" align="left">
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    </b-row>
    <b-row class="row-bg" :gutter="10" align="center">
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    </b-row>
    <b-row class="row-bg" :gutter="10" align="right">
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple"></div> </b-col>
      <b-col span="6"> <div class="grid-content bg-purple-light"></div> </b-col>
    </b-row>
  </div>
</template>

<script>
import Col from '../../../src/grid/col'
import Row from '../../../src/grid/row'
export default {
  components: {
    'b-col': Col,
    'b-row': Row,
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
