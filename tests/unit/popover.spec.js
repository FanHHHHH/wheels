import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Popover from '@/popover.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置position', async () => {
    const wrapper = mount(Popover, {
      slots: {
        default: '<button>点我</button>',
        content: `弹出内容`,
      },
      propsData: {
        position: 'bottom',
      },
    })
    await wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom')
  })
  it('可以设置trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: '<button>点我</button>',
        content: `弹出内容`,
      },
      propsData: {
        trigger: 'hover',
      },
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper
      .find('.popover')
      .trigger('mouseenter')
      .then(() => {
        expect(wrapper.find('.content-wrapper').element).to.exist
      })
  })
})
