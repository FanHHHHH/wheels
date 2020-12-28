import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Nav from '@/nav/nav.vue'
import BNavItem from '@/nav/nav-item.vue'
import BSubNav from '@/nav/sub-nav.vue'
import Vue from 'vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-sub-nav', BSubNav)
describe('Nav.vue', () => {
  it('Nav存在', () => {
    expect(Nav).to.exist
  })
  it('支持selected', () => {
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home',
      },
      slots: {
        default: `
        <b-nav-item name="home">首页 </b-nav-item>
        <b-sub-nav name="about">
          <template #title>关于</template>
          <b-nav-item name="culture"> 企业文化 </b-nav-item>
          <b-nav-item name="developers"> 开发团队 </b-nav-item>
          <b-sub-nav name="contact">
            <template #title>联系方式</template>
            <b-nav-item name="wechat"> 微信 </b-nav-item>
            <b-nav-item name="qq"> QQ </b-nav-item>
            <b-sub-nav name="phone">
              <template #title>手机</template>
              <b-nav-item name="cn"> 电信 </b-nav-item>
              <b-nav-item name="cu"> 联通 </b-nav-item>
              <b-nav-item name="cm"> 移动 </b-nav-item>
            </b-sub-nav>
          </b-sub-nav>
        </b-sub-nav>
        <b-nav-item name="hire"> 招聘</b-nav-item>
        `,
      },
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected')).to.be.exist
    })
  })
  it('会触发update:selected事件', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home',
      },
      slots: {
        default: `
        <b-nav-item name="home">首页 </b-nav-item>
        <b-sub-nav name="about">
          <template #title>关于</template>
          <b-nav-item name="culture"> 企业文化 </b-nav-item>
          <b-nav-item name="developers"> 开发团队 </b-nav-item>
          <b-sub-nav name="contact">
            <template #title>联系方式</template>
            <b-nav-item name="wechat"> 微信 </b-nav-item>
            <b-nav-item name="qq"> QQ </b-nav-item>
            <b-sub-nav name="phone">
              <template #title>手机</template>
              <b-nav-item name="cn"> 电信 </b-nav-item>
              <b-nav-item name="cu"> 联通 </b-nav-item>
              <b-nav-item name="cm"> 移动 </b-nav-item>
            </b-sub-nav>
          </b-sub-nav>
        </b-sub-nav>
        <b-nav-item name="hire"> 招聘</b-nav-item>
        `,
      },
      listeners: {
        'update:selected': callback,
      },
    })
    setTimeout(() => {
      wrapper.find('[data-name="developers"]').trigger('click')
      expect(callback).to.have.been.calledWith('developers')
      done()
    })
  })
})
