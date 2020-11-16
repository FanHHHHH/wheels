import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false
        }
    }
})

import chai from 'chai'
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount('')
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    // console.log(useElement);
    expect(href).to.eq('#icon-settings')
    vm.$el.remove()
    vm.$destroy()
}
// positon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount('')
    const svg = vm.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svg)
    // expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount('')
    const svg = vm.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svg)
    // expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
//click
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount('#test')
    vm.$on('click', () => {
        console.log(1);
    })
    const button = vm.$el
    button.click()
    // expect(order).to.eq('2')
    // vm.$el.remove()
    // vm.$destroy()
}