const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('可以设置span.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '1'
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('col-1')
        vm.$destroy()
    })
    it('可以设置offset.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '1'
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('offset-1')
        vm.$destroy()
    })
    it('可以设置pc.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span: '1', offset: '2'}
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('col-pc-1')
        expect(element.getAttribute('class')).to.include('offset-pc-2')
        vm.$destroy()
    })
    it('可以设置ipad.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span: '2', offset: '3'}
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('col-ipad-2')
        expect(element.getAttribute('class')).to.include('offset-ipad-3')
        vm.$destroy()
    })
    it('可以设置narrowPc.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span: '2', offset: '3'}
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('col-narrow-pc-2')
        expect(element.getAttribute('class')).to.include('offset-narrow-pc-3')
        vm.$destroy()
    })
    it('可以设置widePc.', () => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span: '3', offset: '3'}
            }
        }).$mount()
        const element = vm.$el
        expect(element.getAttribute('class')).to.include('col-wide-pc-3')
        expect(element.getAttribute('class')).to.include('offset-wide-pc-3')
        vm.$destroy()
    })
})
