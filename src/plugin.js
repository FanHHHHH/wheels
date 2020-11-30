import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            const construcor =  Vue.extend(Toast)
            const toast = new construcor()
            toast.$slots.default = [message]
            toast.$mount()  // 重要
            document.body.appendChild(toast.$el)
        }
    }
}