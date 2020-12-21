import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Col from '@/col.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('可以设置span.', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: '1'
            }
        })
        expect(wrapper.classes()).to.include('col-1')
    })
    it('可以设置offset.', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: '1'
            }
        })
        expect(wrapper.classes()).to.include('offset-1')
    })
    it('可以设置pc.', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: {span: '1', offset: '2'}
            }
        })
        expect(wrapper.classes()).to.include('col-pc-1')
        expect(wrapper.classes()).to.include('offset-pc-2')
    })
    it('可以设置ipad.', () => {
        const wrapper = mount(Col, {
            propsData: {
                ipad: {span: '2', offset: '3'}
            }
        })
        expect(wrapper.classes()).to.include('col-ipad-2')
        expect(wrapper.classes()).to.include('offset-ipad-3')
    })
    it('可以设置narrowPc.', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: {span: '2', offset: '3'}
            }
        })
        expect(wrapper.classes()).to.include('col-narrow-pc-2')
        expect(wrapper.classes()).to.include('offset-narrow-pc-3')
    })
    it('可以设置widePc.', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: {span: '3', offset: '3'}
            }
        })
        expect(wrapper.classes()).to.include('col-wide-pc-3')
        expect(wrapper.classes()).to.include('offset-wide-pc-3')
    })
})
