import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import TabsContent from '@/tabs/tabs-content'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'

describe('TabsContent', () => {
  it('存在.', () => {
    expect(TabsContent).to.be.ok
  })
})
