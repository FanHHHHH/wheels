import Toast from './toast'


let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({ Vue, message, propsData: toastOptions })
        }
    }
}

/*helpers */
function createToast({ Vue, message, propsData }) {
    const construcor = Vue.extend(Toast)
    const toast = new construcor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()  // 重要
    document.body.appendChild(toast.$el)
    return toast
}