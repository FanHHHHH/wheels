import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Pager from '@/pager.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('pager.vue', () => {
  it('Pager', () => {
    expect(Pager).to.exist
  })
  it('')
})
