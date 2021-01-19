<template>
  <div class="wrapper">
    <b-nav :selected.sync="selected" vertical>
      <b-nav-item name="home">首页 </b-nav-item>
      <b-sub-nav name="about">
        <template #title>关于</template>
        <b-nav-item name="culture"> 企业文化 </b-nav-item>
        <b-nav-item name="developers"> 开发团队 </b-nav-item>
        <b-sub-nav name="contact">
          <template #title>联系方式</template>
          <b-nav-item name="wechat"> 微信 </b-nav-item>
          <b-nav-item name="qq"> QQ </b-nav-item>
          <b-sub-nav name="phone">
            <template #title>手机</template>
            <b-nav-item name="cn"> 电信 </b-nav-item>
            <b-nav-item name="cu"> 联通 </b-nav-item>
            <b-nav-item name="cm"> 移动 </b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
      </b-sub-nav>
      <b-nav-item name="hire"> 招聘</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import BNav from '../../../src/nav/nav'
import BNavItem from '../../../src/nav/nav-item'
import BSubNav from '../../../src/nav/sub-nav'

export default {
  components: {
    BNav,
    BNavItem,
    BSubNav,
  },
  data() {
    return {
      selected: 'home',
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  z-index: 100;
  margin-bottom: 20px;
  position: relative;
  width: 150px;
}
</style>
