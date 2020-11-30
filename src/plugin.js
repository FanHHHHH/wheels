import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            const construcor = Vue.extend(Toast)
            const toast = new construcor({
                propsData: {
                    closeButton: {
                        text: '知道了',
                        callback() {
                            console.log('用户知道了');
                        }
                    }

                }
            })
            toast.$slots.default = [message]
            toast.$mount()  // 重要
            document.body.appendChild(toast.$el)
        }
    }
}