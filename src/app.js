import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './button-group'
import Input from './Input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Content from './content.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: false,
            message: ''
        }
    },
    // created() {
    //     setTimeout(() => {
    //         let event = new Event('change');
    //         const inputElement = this.$el.querySelector('input')

    //         inputElement.dispatchEvent(event)
    //         console.log('hi')
    //     }, 3000)

    // },
    created() {
        this.$toast(`这是<strong>加粗的文字</strong>`, {enableHTML: true})
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        changeInput() {
            this.message += '!'
        },
        showToast() {
            this.$toast('当前功能不稳定，如果遇到bug，请关闭该功能', {
                text: '知道了',
                callback(toast) {
                    toast.log()
                    console.log('用户知道了');
                }
            })
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