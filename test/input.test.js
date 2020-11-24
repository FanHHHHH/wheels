const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('接收value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '测试value'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.getAttribute('value')).to.equal('测试value')
        vm.$destroy()
    })
    it('接收disabled', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.getAttribute('disabled')).to.equal(false)
        vm.$destroy()
    })
})
