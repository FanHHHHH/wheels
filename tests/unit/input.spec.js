import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Input from '@/Input.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('props', () => {
    it('接收value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '测试value',
        },
      })
      expect(wrapper.props('value')).to.equal('测试value')
    })
    it('接收disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true,
        },
      })
      expect(wrapper.props('disabled')).to.equal(true)
    })
    it('接收readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true,
        },
      })
      expect(wrapper.props('disabled')).to.equal(true)
    })
    it('接收 error', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: '名字错误',
        },
      })
      expect(wrapper.props('disabled')).to.equal(false)
      const attributes = wrapper.find('use').attributes()
      expect(attributes['href']).to.eq('#icon-error')
      const errorMessage = wrapper.find('.error-message')
      expect(errorMessage.text()).to.equal('名字错误')
    })
  })
  describe('事件', () => {
    it('支持change/focus/input/blur 事件', () => {
      ;['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        const wrapper = mount(Input)
        const vm = wrapper.vm
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: { value: 'hi' },
          enumerate: true,
        })
        const inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.called.calledWith('hi')
      })
    })
  })
})
