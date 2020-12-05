const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsContent from '../src/tabs-content'
import TabsItem from '../src/tabs-item'
import TabsNav from '../src/tabs-nav.vue'
import TabsPane from '../src/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-content', TabsContent)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

describe('TabsItem', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('接受name属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('接受disabled属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const callback = sinon.spy()
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        // expect(vm.$el.classList.contains('disabled')).to.be.true
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.not.have.been.called
    })
})
