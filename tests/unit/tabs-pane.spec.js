import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import TabsPane from '@/tabs/tabs-pane'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('tabs-pane', () => {
  it('存在.', () => {
    expect(TabsPane).to.be.ok
  })
})
