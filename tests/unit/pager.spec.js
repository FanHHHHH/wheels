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
  it('能接受totalPage 、 currentPage', () => {
    const vm = mount(Pager, {
      propsData: {
        totalPage: 10,
        currentPage: 1,
      },
    })
    const page1 = vm.find('[data-page="10"]')
    const page2 = vm.find('[data-page="11"]')
    expect(page1.element).to.exist
    expect(page2.element).to.not.exist
    const currentPage = vm.find('.active')
    expect(currentPage.attributes('data-page')).to.eq('1')
  })
})
