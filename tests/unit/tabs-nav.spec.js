import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import TabsNav from '@/tabs/tabs-nav.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('TabsNav', () => {
  it('存在.', () => {
    expect(TabsNav).to.be.ok
  })
})
