import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Toast from '@/toast'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
Vue.use(Toast)

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })
  describe('props', function() {
    // this.timeout(15000)
    it('可以设置autoClose', () => {
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: 1,
        },
      })
      wrapper.trigger('beforeClose').then(expect(document.body.contains(wrapper.vm.$el)).to.eq(false))
    })
    it('可以设置closeButton', () => {
      const callback = sinon.spy()
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: '测试关闭按钮',
            callback,
          },
        },
      })
      const closeButton = wrapper.find('.close')
      expect(closeButton.text().trim()).to.eq('测试关闭按钮')
      //bug 修复 ： 如果mount之后直接click，速度太快，不能再$nexttick()，之后close() toast组件，所以会造成undefined错误
      closeButton.trigger('click').then(expect(callback).to.have.been.called)
    })
    it('可以设置enableHTML', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHTML: true,
        },
      })
      vm.$slots.default = ['<strong id="test">测试</strong>']
      vm.$mount()
      const strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('可以设置position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'middle',
        },
      }).$mount()
      expect(vm.$el.classList.contains('position-middle')).to.be.true
    })
  })
})
