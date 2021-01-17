<template>
  <div class="wrapper">
    <b-layout>
      <b-header>Header</b-header>
      <b-content>Content</b-content>
      <b-footer>Footer</b-footer>
    </b-layout>
    <b-layout>
      <b-Sider>Sider</b-Sider>
      <b-content>Content</b-content>
    </b-layout>
    <b-layout>
      <b-header>Header</b-header>
      <b-layout>
        <b-Sider>Sider</b-Sider>
        <b-content>Content</b-content>
      </b-layout>
      <b-footer>Footer</b-footer>
    </b-layout>
    <b-layout>
      <b-Sider>Sider</b-Sider>
      <b-layout>
        <b-header>Header</b-header>
        <b-content>Content</b-content>
      </b-layout>
    </b-layout>
    <b-layout>
      <b-Sider>Sider</b-Sider>
      <b-layout>
        <b-header>Header</b-header>
        <b-content>Content</b-content>
        <b-footer>Footer</b-footer>
      </b-layout>
    </b-layout>
  </div>
</template>

<script>
import BLayout from '../../../src/layout/layout'
import BContent from '../../../src/layout/content'
import BHeader from '../../../src/layout/header'
import BFooter from '../../../src/layout/footer'
import BSider from '../../../src/layout/sider'

export default {
  components: {
    BLayout,
    BContent,
    BHeader,
    BFooter,
    BSider,
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
  .b-header,
  .b-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .b-sider {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 150px;
  }

  .b-content {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>
