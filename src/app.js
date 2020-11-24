import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './button-group'
import Input from './Input.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: false
        }
    }
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect
// //单元测试
// try{
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount()
//         const useElement = vm.$el.querySelector('use')
//         const href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#icon-settings')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     // positon
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount(div)
//         const svg = vm.$el.querySelector('svg')
//         const {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('1')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)

//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         const svg = vm.$el.querySelector('svg')
//         const {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     //click
//     {
//         // mock
//         const div = document.createElement('div')
//         document.body.appendChild(div)

//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         const spy = chai.spy(function () { })

//         vm.$on('click', spy)

//         const button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()
//         vm.$el.remove()
//         vm.$destroy()
//     }
// }catch (err) {
//     window.errors = [err]
// }finally {
//     window.errors && window.errors.forEach( err => {
//         console.log(err.message);
//     })
// }