<template>
  <div class="wrapper">
    <b-tabs selected="finance">
      <b-tabs-nav>
        <b-tabs-item name="news">新闻</b-tabs-item>
        <b-tabs-item name="finance">财经</b-tabs-item>
        <b-tabs-item name="sports" disabled>体育</b-tabs-item>
        <template #actions>
          <b-button>actions</b-button>
        </template>
      </b-tabs-nav>
      <b-tabs-content>
        <b-tabs-pane name="news">新闻内容</b-tabs-pane>
        <b-tabs-pane name="finance">财经内容</b-tabs-pane>
        <b-tabs-pane name="sports">体育内容</b-tabs-pane>
      </b-tabs-content>
    </b-tabs>
  </div>
</template>

<script>
import BTabs from '../../../src/tabs/tabs'
import BTabsNav from '../../../src/tabs/tabs-nav'
import BTabsPane from '../../../src/tabs/tabs-pane'
import BTabsContent from '../../../src/tabs/tabs-content'
import BTabsItem from '../../../src/tabs/tabs-item'
import BButton from '../../../src/button/button'

export default {
  components: {
    BTabs,
    BTabsNav,
    BTabsPane,
    BTabsContent,
    BTabsItem,
    BButton,
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
