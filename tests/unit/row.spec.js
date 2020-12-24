import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Row from '@/grid/row'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'

// import Col from '../src/col'

// Vue.component('g-row', Row)
// Vue.component('g-col', Col)
describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    xit('可以设置gutter', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20"> 
                <g-col span="10"></g-col> 
                <g-col span="14"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')

            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
        }, 0)
    })
    xit('接受 align 属性', () => {
        const div = document.createElement('div')
        window.document.body.appendChild(div)
        const Construtor = Vue.extend(Row)
        const vm = new Construtor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)

        const row = vm.$el
        expect(getComputedStyle(row).justifyContent).to.eq('flex-end')
        div.remove()
        vm.$destroy()
    })

})
