const expect = chai.expect;
import Vue from 'vue'
import TabsNav from '../src/tabs-nav.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsNav', () => {
    it('存在.', () => {
        expect(TabsNav).to.be.ok
    })
})