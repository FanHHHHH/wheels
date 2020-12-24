import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Tabs from '@/tabs/tabs.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('TabsItem', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  xit('接受name属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      },
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  xit('接受disabled属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const callback = sinon.spy()
    const vm = new Constructor({
      propsData: {
        disabled: true,
      },
    }).$mount()
    // expect(vm.$el.classList.contains('disabled')).to.be.true
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.not.have.been.called
  })
})
