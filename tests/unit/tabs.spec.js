import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Tabs from '@/tabs/tabs.vue'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

// import TabsContent from '@/tabs-content'
// import TabsItem from '@/tabs-item'
// import TabsNav from '@/tabs-nav.vue'
// import TabsPane from '@/tabs-pane'

// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-nav', TabsNav)
// Vue.component('g-tabs-content', TabsContent)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  xit('接受selected', (done) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <g-tabs selected="finance" >
        <g-tabs-nav>
            <template slot="actions">
                <button>按钮</button>
            </template>
            <g-tabs-item name="women">
                <g-icon name="settings"></g-icon>
                美女
            </g-tabs-item>
            <g-tabs-item name="finance" disabled>
                财经
            </g-tabs-item>
            <g-tabs-item name="sports">
                体育
            </g-tabs-item>
        </g-tabs-nav>
        <g-tabs-content>
            <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
            <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
            <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
        </g-tabs-content>
    </g-tabs>
        `
    const vm = new Vue({
      el: div,
    })
    vm.$nextTick(() => {
      const node = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(node.classList.contains('active')).to.eq(true)
      done()
    })
  })
})
